import fs from 'node:fs'
import review from './geometry-intent.json' with { type: 'json' }
import { ICON_VARIANTS, STROKE_WEIGHTS, type CompiledIcon } from './types.ts'

const axes: Record<string, string> = {
  x: 'left/right', y: 'top/bottom', half: '180°', quarter: '90°',
  diag: 'top-left diagonal', anti: 'top-right diagonal',
}

export function writeAuditReport(icons: readonly CompiledIcon[], differences: Map<string, number[]>): void {
  const pkg = new URL('../../svg/', import.meta.url)
  const manifest = JSON.parse(fs.readFileSync(new URL('manifest.json', pkg), 'utf8'))
  const names = icons.map(icon => icon.name).sort()
  const variantCount = ICON_VARIANTS.length * STROKE_WEIGHTS.length
  const manifestNames = manifest.icons.map((icon: { name: string }) => icon.name).sort()
  if (JSON.stringify(names) !== JSON.stringify(manifestNames) || manifest.count !== names.length ||
      manifest.totalVariants !== names.length * variantCount) throw new Error('Package manifest differs from the reviewed catalog')

  const columns = ['Icon', 'Category', 'Result', 'Whole-icon symmetries tested', 'Geometry reviewed']
  for (const variant of ICON_VARIANTS) {
    for (const weight of STROKE_WEIGHTS) {
      const dir = new URL(`svg/${variant}/${weight}/`, pkg)
      const files = fs.readdirSync(dir).filter(file => file.endsWith('.svg')).sort()
      if (JSON.stringify(files) !== JSON.stringify(names.map(name => name + '.svg').sort())) {
        throw new Error(`Unexpected package inventory in ${dir.pathname}`)
      }
      for (const icon of icons) {
        const file = new URL(icon.name + '.svg', dir)
        if (fs.readFileSync(file, 'utf8') !== icon.variants[variant][weight].svg) {
          throw new Error(`Export differs from verified source: ${file.pathname}`)
        }
      }
      columns.push(`${variant} ${weight} ink difference (%)`)
    }
  }

  const intent = new Map(review.map(entry => [entry.name, entry]))
  const rows = [columns]
  for (const { name, category } of icons) {
    const { symmetry, detail } = intent.get(name)!
    const metrics = differences.get(name)!
    if (metrics.length !== variantCount) throw new Error(`Incomplete measurements for ${name}`)
    rows.push([name, category, 'Pass', symmetry.map(axis => axes[axis]).join(' / '), detail,
      ...metrics.map(difference => (100 * difference).toFixed(3))])
  }
  const csv = rows.map(row => row.map(field => '"' + field.replaceAll('"', '""') + '"').join(',')).join('\n')
  fs.writeFileSync(new URL('../../../review/catalog-audit.csv', import.meta.url), csv + '\n')
}
