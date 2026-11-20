import fs from 'node:fs/promises'
import path from 'node:path'
import { Resvg } from '@resvg/resvg-js'
import type { CompiledIcon, IconVariant, StrokeWeight } from './types.ts'
import { STROKE_WEIGHTS } from './types.ts'

/**
 * Renders a crisp high-DPI visual contact sheet comparing icons across variants/weights.
 * Used for rigorous visual QA of every icon in the pack.
 */
export async function renderVariantMatrixSheet(
  icons: readonly CompiledIcon[],
  outPath: string,
  options: { dark?: boolean; title?: string } = {},
): Promise<void> {
  const dark = options.dark ?? false
  const bg = dark ? '#0D0E11' : '#FFFFFF'
  const cardBg = dark ? '#15171C' : '#F8F9FA'
  const border = dark ? '#242730' : '#E5E7EB'
  const fg = dark ? '#F4F5F7' : '#111318'
  const muted = dark ? '#8B909E' : '#6B7280'

  const colW = 64
  const rowH = 54
  const labelW = 148
  const pad = 20
  const headerH = 44
  const totalW = pad * 2 + labelW + colW * 6
  const totalH = pad * 2 + headerH + icons.length * rowH

  const columns: Array<{ variant: IconVariant; weight: StrokeWeight; label: string }> = [
    ...STROKE_WEIGHTS.map((w) => ({ variant: 'outline' as const, weight: w, label: `Out ${w}` })),
    ...STROKE_WEIGHTS.map((w) => ({ variant: 'filled' as const, weight: w, label: `Fill ${w}` })),
  ]

  const parts: string[] = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}">`,
    `<rect width="${totalW}" height="${totalH}" fill="${bg}"/>`,
  ]

  if (options.title) {
    parts.push(
      `<text x="${pad}" y="${pad + 18}" fill="${fg}" font-family="Inter, -apple-system, sans-serif" font-size="14" font-weight="600">${escapeXml(options.title)}</text>`,
    )
  }

  for (let c = 0; c < columns.length; c++) {
    const x = pad + labelW + c * colW + colW / 2
    parts.push(
      `<text x="${x}" y="${pad + 34}" fill="${muted}" font-family="Inter, -apple-system, sans-serif" font-size="11" font-weight="500" text-anchor="middle">${columns[c]!.label}</text>`,
    )
  }

  for (let r = 0; r < icons.length; r++) {
    const icon = icons[r]!
    const y = pad + headerH + r * rowH

    parts.push(
      `<rect x="${pad}" y="${y + 3}" width="${totalW - pad * 2}" height="${rowH - 6}" rx="8" fill="${cardBg}" stroke="${border}" stroke-width="1"/>`,
    )
    parts.push(
      `<text x="${pad + 12}" y="${y + rowH / 2 + 4}" fill="${fg}" font-family="ui-monospace, SFMono-Regular, monospace" font-size="11">${escapeXml(icon.name)}</text>`,
    )

    for (let c = 0; c < columns.length; c++) {
      const col = columns[c]!
      const variant = icon.variants[col.variant][col.weight]
      const ix = pad + labelW + c * colW + (colW - 28) / 2
      const iy = y + (rowH - 28) / 2
      const innerSvg = variant.svg
        .replace(/<svg[^>]*>/, '')
        .replace(/<\/svg>/, '')
        .replaceAll('currentColor', fg)

      if (col.variant === 'outline') {
        parts.push(
          `<g transform="translate(${ix}, ${iy}) scale(1.1667)" fill="none" stroke="${fg}" stroke-width="${col.weight}" stroke-linecap="round" stroke-linejoin="round">${innerSvg}</g>`,
        )
      } else {
        parts.push(`<g transform="translate(${ix}, ${iy}) scale(1.1667)" fill="${fg}">${innerSvg}</g>`)
      }
    }
  }

  parts.push('</svg>')

  const resvg = new Resvg(parts.join(''), { fitTo: { mode: 'zoom', value: 2 } })
  const png = resvg.render().asPng()
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, png)
}

/**
 * Renders a compact multi-column grid contact sheet for visually reviewing 60-80 icons at once.
 */
export async function renderGridSheet(
  icons: readonly CompiledIcon[],
  variant: IconVariant,
  weight: StrokeWeight,
  outPath: string,
  options: { dark?: boolean; cols?: number; title?: string } = {},
): Promise<void> {
  const dark = options.dark ?? false
  const cols = options.cols ?? 10
  const cellW = 104
  const cellH = 82
  const pad = 20
  const headerH = 38
  const rows = Math.ceil(icons.length / cols)

  const bg = dark ? '#0D0E11' : '#FFFFFF'
  const cardBg = dark ? '#15171C' : '#F8F9FA'
  const border = dark ? '#242730' : '#E5E7EB'
  const fg = dark ? '#F4F5F7' : '#111318'
  const muted = dark ? '#8B909E' : '#6B7280'

  const totalW = pad * 2 + cols * cellW
  const totalH = pad * 2 + headerH + rows * cellH

  const parts: string[] = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${totalW}" height="${totalH}" viewBox="0 0 ${totalW} ${totalH}">`,
    `<rect width="${totalW}" height="${totalH}" fill="${bg}"/>`,
    `<text x="${pad}" y="${pad + 18}" fill="${fg}" font-family="Inter, -apple-system, sans-serif" font-size="14" font-weight="600">${escapeXml(options.title ?? `${variant} · ${weight}px (${icons.length} icons)`)}</text>`,
  ]

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i]!
    const c = i % cols
    const r = Math.floor(i / cols)
    const x = pad + c * cellW
    const y = pad + headerH + r * cellH

    parts.push(
      `<rect x="${x + 4}" y="${y + 4}" width="${cellW - 8}" height="${cellH - 8}" rx="8" fill="${cardBg}" stroke="${border}" stroke-width="1"/>`,
    )

    const compiled = icon.variants[variant][weight]
    const innerSvg = compiled.svg
      .replace(/<svg[^>]*>/, '')
      .replace(/<\/svg>/, '')
      .replaceAll('currentColor', fg)

    const ix = x + (cellW - 28) / 2
    const iy = y + 16

    if (variant === 'outline') {
      parts.push(
        `<g transform="translate(${ix}, ${iy}) scale(1.1667)" fill="none" stroke="${fg}" stroke-width="${weight}" stroke-linecap="round" stroke-linejoin="round">${innerSvg}</g>`,
      )
    } else {
      parts.push(`<g transform="translate(${ix}, ${iy}) scale(1.1667)" fill="${fg}">${innerSvg}</g>`)
    }

    const shortName = icon.name.length > 15 ? `${icon.name.slice(0, 14)}…` : icon.name
    parts.push(
      `<text x="${x + cellW / 2}" y="${y + cellH - 12}" fill="${muted}" font-family="ui-monospace, SFMono-Regular, monospace" font-size="9" text-anchor="middle">${escapeXml(shortName)}</text>`,
    )
  }

  parts.push('</svg>')

  const resvg = new Resvg(parts.join(''), { fitTo: { mode: 'zoom', value: 2 } })
  const png = resvg.render().asPng()
  await fs.mkdir(path.dirname(outPath), { recursive: true })
  await fs.writeFile(outPath, png)
}

function escapeXml(s: string): string {
  return s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}
