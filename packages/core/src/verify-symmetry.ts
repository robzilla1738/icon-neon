import { Resvg } from '@resvg/resvg-js'
import review from './geometry-intent.json' with { type: 'json' }
import type { CompiledIcon, StrokeWeight } from './types.ts'
import { ICON_VARIANTS, STROKE_WEIGHTS } from './types.ts'

type Transform = (x: number, y: number) => number
const size = 192
const vertical: Transform = (x, y) => y * size + size - 1 - x
const horizontal: Transform = (x, y) => (size - 1 - y) * size + x
const halfTurn: Transform = (x, y) => (size - 1 - y) * size + size - 1 - x
const quarterTurn: Transform = (x, y) => x * size + size - 1 - y
const antiDiagonal: Transform = (x, y) => (size - 1 - x) * size + size - 1 - y
const identity: Transform = (x, y) => y * size + x

const transforms: Record<string, Transform> = {
  x: vertical, y: horizontal, half: halfTurn, quarter: quarterTurn,
  diag: (x, y) => x * size + y, anti: antiDiagonal,
}

const pairChecks: [Transform, string, string][] = [
  [vertical, 'arrow-left', 'arrow-right'], [horizontal, 'arrow-up', 'arrow-down'],
  [vertical, 'chevron-left', 'chevron-right'], [horizontal, 'chevron-up', 'chevron-down'],
  [vertical, 'chevrons-left', 'chevrons-right'], [horizontal, 'chevrons-up', 'chevrons-down'],
  [vertical, 'caret-left', 'caret-right'], [horizontal, 'caret-up', 'caret-down'],
  [vertical, 'arrow-up-left', 'arrow-up-right'], [vertical, 'arrow-down-left', 'arrow-down-right'],
  [vertical, 'arrow-left-circle', 'arrow-right-circle'], [horizontal, 'arrow-up-circle', 'arrow-down-circle'],
  [vertical, 'corner-down-left', 'corner-down-right'], [vertical, 'corner-up-left', 'corner-up-right'],
  [vertical, 'rotate-cw', 'rotate-ccw'], [vertical, 'refresh-cw', 'refresh-ccw'],
  [vertical, 'undo', 'redo'], [vertical, 'reply', 'forward'],
  [vertical, 'skip-back', 'skip-forward'], [vertical, 'step-back', 'step-forward'],
  [vertical, 'rewind', 'fast-forward'], [vertical, 'toggle-left', 'toggle-right'],
  [vertical, 'sidebar-left', 'sidebar-right'], [horizontal, 'panel-top', 'panel-bottom'],
  [horizontal, 'trending-up', 'trending-down'],
]

function raster(svg: string): Buffer {
  return new Resvg(svg, { fitTo: { mode: 'width', value: size }, font: { loadSystemFonts: false } }).render().pixels
}

// Normalize the absolute alpha difference by ink coverage. At 8× this detects
// subpixel displacement without requiring identical antialiasing at an edge.
export function coverageDifference(svg: string, reference: string, transform: Transform = identity): number {
  const a = raster(svg)
  const b = svg === reference ? a : raster(reference)
  let delta = 0
  let ink = 0
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const alpha = a[4 * (y * size + x) + 3]!
      const other = b[4 * transform(x, y) + 3]!
      delta += Math.abs(alpha - other)
      ink += Math.max(alpha, other)
    }
  }
  return delta / ink
}

// Check both edges of the clear band beside the canonical diagonal slash.
export function hasSlashClearance(svg: string, weight: StrokeWeight): boolean {
  const pixels = raster(svg)
  const scale = size / 24
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const along = (x + y + 1) / (2 * scale)
      const gap = Math.abs(x - y) / (scale * Math.SQRT2) - weight / 2
      if (along >= 3.25 && along <= 20.75 && gap >= 0.2 && gap <= 0.85 &&
          pixels[4 * (y * size + x) + 3]! >= 128) return false
    }
  }
  return true
}

export function verifySymmetry(icons: readonly CompiledIcon[]): string[] {
  const byName = new Map(icons.map(icon => [icon.name, icon]))
  const checks: [Transform, string, string][] = [...pairChecks]
  const reviewed = new Set<string>()
  for (const { name, symmetry, detail } of review) {
    if (!byName.has(name) || reviewed.has(name) || !detail.trim()) {
      throw new Error(`Invalid or duplicate geometry review for ${name}`)
    }
    reviewed.add(name)
    for (const axis of symmetry) {
      const transform = transforms[axis]
      if (!transform) throw new Error(`Unknown symmetry ${axis} for ${name}`)
      checks.push([transform, name, name])
    }
  }
  const errors = icons.filter(icon => !reviewed.has(icon.name)).map(icon => `Missing geometry review for ${icon.name}`)
  for (const [transform, name, other] of checks) {
    const left = byName.get(name)
    const right = byName.get(other)
    if (!left || !right) throw new Error(`Missing icon in symmetry check for ${name} / ${other}`)
    for (const variant of ICON_VARIANTS) {
      for (const weight of STROKE_WEIGHTS) {
        const error = coverageDifference(left.variants[variant][weight].svg, right.variants[variant][weight].svg, transform)
        if (!Number.isFinite(error) || error > 0.012) errors.push(`${name} / ${other} [${variant}/${weight}]: ${(100 * error).toFixed(2)}% difference under ${transform.name}`)
      }
    }
  }
  // Cross sections through straight segments measure both the selected stroke
  // and the clear gaps. Mirror symmetry alone cannot detect a wider middle tab.
  const sections: [string, 'row' | 'column', number, number[]][] = [
    ['tabs', 'row', 7.5, [3, 9, 15, 21]],
    ['columns-3', 'row', 12, [3, 9, 15, 21]],
    ['signal', 'row', 18, [4.5, 9.5, 14.5, 19.5]],
    ['pause', 'row', 12, [5.5, 9.75, 14.25, 18.5]],
    ['menu', 'column', 12, [6.5, 12, 17.5]],
    ['align-justify', 'column', 12, [6, 10, 14, 18]],
  ]
  const scale = size / 24
  for (const [name, direction, at, centers] of sections) {
    const icon = byName.get(name)!
    for (const weight of STROKE_WEIGHTS) {
      const pixels = raster(icon.variants.outline[weight].svg)
      for (let i = 0; i < size; i++) {
        const index = direction === 'row' ? at * scale * size + i : i * size + at * scale
        const painted = pixels[4 * index + 3]! >= 128
        const expected = centers.some(center => Math.abs((i + 0.5) / scale - center) < weight / 2)
        if (painted !== expected) {
          errors.push(`${name} [outline/${weight}]: irregular stroke or spacing at ${direction} ${at}`)
          break
        }
      }
    }
  }
  return errors
}
