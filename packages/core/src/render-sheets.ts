import path from 'node:path'
import { compileAllIcons } from './compiler.ts'
import { ALL_ICONS } from './icons/index.ts'
import { renderGridSheet, renderVariantMatrixSheet } from './sheet.ts'
import { CATEGORIES } from './types.ts'

const OUT_DIR = '/private/var/folders/98/j36zgdnd0h507whjl16gxl780000gp/T/opencode/sheets'

async function main(): Promise<void> {
  const compiled = await compileAllIcons(ALL_ICONS)

  // 1. Render grid sheets of ALL icons in batches of 90 (outline 1.5 and filled 1.5)
  const batchSize = 90
  for (let i = 0; i < compiled.length; i += batchSize) {
    const idx = Math.floor(i / batchSize) + 1
    const slice = compiled.slice(i, i + batchSize)
    await renderGridSheet(
      slice,
      'outline',
      1.5,
      path.join(OUT_DIR, `all-outline-1.5-part${idx}.png`),
      { cols: 10, title: `Neon Icons — Outline 1.5px · Part ${idx} (${i + 1}–${i + slice.length} / ${compiled.length})` },
    )
    await renderGridSheet(
      slice,
      'filled',
      1.5,
      path.join(OUT_DIR, `all-filled-1.5-part${idx}.png`),
      { cols: 10, title: `Neon Icons — Filled 1.5px · Part ${idx} (${i + 1}–${i + slice.length} / ${compiled.length})` },
    )
  }

  // 2. Render dark-mode cohesion sheet comparing 1.25 / 1.5 / 2 across representative icons from every category
  const flagship = CATEGORIES.map((cat) => compiled.find((ic) => ic.category === cat.id)!).filter(Boolean)
  await renderVariantMatrixSheet(flagship, path.join(OUT_DIR, 'cohesion-matrix-light.png'), {
    dark: false,
    title: 'Neon Icons — Cross-Category Cohesion Matrix (21 Categories · 6 Variants)',
  })
  await renderVariantMatrixSheet(flagship, path.join(OUT_DIR, 'cohesion-matrix-dark.png'), {
    dark: true,
    title: 'Neon Icons — Cross-Category Cohesion Matrix Dark (21 Categories · 6 Variants)',
  })

  console.log(`Rendered contact sheets for all ${compiled.length} icons to ${OUT_DIR}`)
}

main()
