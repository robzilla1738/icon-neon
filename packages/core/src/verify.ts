import { Resvg } from '@resvg/resvg-js'
import { compileAllIcons, getPathKit } from './compiler.ts'
import { writeAuditReport } from './audit-report.ts'
import { tinyContours } from './verify-contours.ts'
import { referenceSvg } from './reference-svg.ts'
import { coverageDifference, hasSlashClearance, verifySymmetry } from './verify-symmetry.ts'
import { SLASH_LINE } from './motifs.ts'
import { ALL_ICONS } from './icons/index.ts'
import { ICON_VARIANTS, STROKE_WEIGHTS } from './types.ts'

async function main(): Promise<void> {
  const start = performance.now()
  console.log(`Verifying ${ALL_ICONS.length} icons (${ALL_ICONS.length * 6} total variants)...`)

  // 1. Unique name check
  const seen = new Set<string>()
  const duplicates: string[] = []
  for (const def of ALL_ICONS) {
    if (seen.has(def.name)) duplicates.push(def.name)
    seen.add(def.name)
  }
  if (duplicates.length > 0) {
    throw new Error(`Duplicate icon names found: ${duplicates.join(', ')}`)
  }

  // 2. Compile every icon across all 6 variants
  const compiled = await compileAllIcons(ALL_ICONS)
  const pk = await getPathKit()

  const errors = verifySymmetry(compiled)
  const warnings: string[] = []

  const differences = new Map<string, number[]>()
  for (const [index, icon] of compiled.entries()) {
    const def = ALL_ICONS[index]!
    const metrics: number[] = []
    differences.set(icon.name, metrics)
    for (const variant of ICON_VARIANTS) {
      let previousPixels: Buffer | undefined
      for (const weight of STROKE_WEIGHTS) {
        const v = icon.variants[variant][weight]
        const label = `${icon.name} [${variant}/${weight}]`

        if (!v.svg.startsWith('<svg') || !v.svg.endsWith('</svg>')) {
          errors.push(`${label}: malformed SVG wrapper`)
          continue
        }
        if (v.svg.includes('<mask') || v.svg.includes(' id=')) {
          errors.push(`${label}: contains forbidden mask or id attribute`)
        }
        if (/NaN|Infinity|undefined/.test(v.svg)) {
          errors.push(`${label}: contains invalid numeric token`)
        }
        if (v.nodes.length === 0) {
          errors.push(`${label}: empty node list`)
          continue
        }

        // Compute tight geometric bounds via Skia PathKit
        let left = Infinity
        let top = Infinity
        let right = -Infinity
        let bottom = -Infinity

        for (const node of v.nodes) {
          if (node.tag === 'circle') {
            left = Math.min(left, node.cx - node.r)
            top = Math.min(top, node.cy - node.r)
            right = Math.max(right, node.cx + node.r)
            bottom = Math.max(bottom, node.cy + node.r)
          } else {
            if (!node.d.trim()) {
              errors.push(`${label}: empty path d`)
              continue
            }
            const p = pk.FromSVGString(node.d)
            const b = p.computeTightBounds()
            const pad = variant === 'outline' && node.stroke !== 'none' ? weight / 2 : 0
            left = Math.min(left, b.fLeft - pad)
            top = Math.min(top, b.fTop - pad)
            right = Math.max(right, b.fRight + pad)
            bottom = Math.max(bottom, b.fBottom + pad)
            p.delete()
          }
        }

        if (!Number.isFinite(left) || !Number.isFinite(right)) {
          errors.push(`${label}: non-finite bounds`)
          continue
        }

        const width = right - left
        const height = bottom - top
        const cx = (left + right) / 2
        const cy = (top + bottom) / 2

        // Allow half a sample of rounding at the 192px audit resolution.
        const minInset = 1.25 - 0.0625
        if (Math.min(left, top, 24 - right, 24 - bottom) < minInset) {
          errors.push(
            `${label}: too close to the canvas edge (${left.toFixed(2)}, ${top.toFixed(2)})..(${right.toFixed(2)}, ${bottom.toFixed(2)})`,
          )
        }

        // Degenerate emptiness guard
        if (width < 4 && height < 4) {
          errors.push(`${label}: suspiciously tiny (${width.toFixed(1)}x${height.toFixed(1)})`)
        }

        // Optical centering check (allow minor intentional offsets like play/caret/star-half)
        if ((Math.abs(cx - 12) > 2.6 || Math.abs(cy - 12) > 2.6) && icon.name !== 'star-half') {
          warnings.push(`${label}: off-center (${cx.toFixed(1)}, ${cy.toFixed(1)})`)
        }

        if (def.filled.slash === SLASH_LINE && !hasSlashClearance(v.svg, weight)) {
          errors.push(`${label}: artwork crowds the diagonal slash`)
        }
        const { specks, pinholes } = tinyContours(v.svg)
        if (specks || pinholes) errors.push(`${label}: ${specks} stray specks and ${pinholes} pinholes`)
        const difference = coverageDifference(v.svg, referenceSvg(def, variant, weight))
        metrics.push(difference)
        if (!Number.isFinite(difference) || difference > 0.02) {
          errors.push(`${label}: ${(100 * difference).toFixed(2)}% ink difference from native SVG reference`)
        }
        for (const size of [16, 24, 48]) {
          const rendered = new Resvg(v.svg, {
            fitTo: { mode: 'width', value: size },
            font: { loadSystemFonts: false },
          }).render()
          const pixels = rendered.pixels
          if (rendered.width !== size || rendered.height !== size || !pixels.some(Boolean)) {
            errors.push(`${label}: empty or incorrectly sized raster at ${size}px`)
          }
          if (size === 24) {
            if (previousPixels?.equals(pixels)) errors.push(`${label}: identical to preceding weight at 24px`)
            previousPixels = pixels
          }
        }
      }
    }
  }

  const elapsed = ((performance.now() - start) / 1000).toFixed(2)
  console.log(`Compiled and audited ${compiled.length} icons (${compiled.length * 6} variants) in ${elapsed}s`)

  if (warnings.length > 0) {
    console.log(`\nWarnings (${warnings.length}):`)
    for (const w of warnings.slice(0, 40)) console.log(`  - ${w}`)
    if (warnings.length > 40) console.log(`  ... and ${warnings.length - 40} more`)
  }

  if (errors.length > 0) {
    console.error(`\nERRORS (${errors.length}):`)
    for (const e of errors) console.error(`  ✗ ${e}`)
    process.exit(1)
  }

  if (process.argv.includes('--report')) writeAuditReport(compiled, differences)
  console.log('✓ All icons passed geometry, bounds, zero-mask, and raster verification!')
}

main()
