import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { compileAllIcons } from './compiler.ts'
import { ALL_ICONS } from './icons/index.ts'
import type { CompiledIcon, CompiledNode } from './types.ts'
import { CATEGORIES, ICON_VARIANTS, STROKE_WEIGHTS } from './types.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../../..')
const SVG_PKG_DIR = path.join(ROOT, 'packages/svg')
const REACT_GEN_DIR = path.join(ROOT, 'packages/react/src/generated')

function serializeNodesCompact(nodes: readonly CompiledNode[]): string {
  return JSON.stringify(
    nodes.map((node) => {
      if (node.tag === 'circle') {
        return ['c', node.cx, node.cy, node.r]
      }
      if (node.fill === 'currentColor' && node.stroke === 'none') {
        return ['pf', node.d]
      }
      return ['p', node.d]
    }),
  )
}

async function writeSvgPackage(icons: readonly CompiledIcon[]): Promise<void> {
  const svgRoot = path.join(SVG_PKG_DIR, 'svg')
  await fs.rm(svgRoot, { recursive: true, force: true })

  for (const variant of ICON_VARIANTS) {
    for (const weight of STROKE_WEIGHTS) {
      await fs.mkdir(path.join(svgRoot, variant, String(weight)), { recursive: true })
    }
  }

  const writeTasks: Array<Promise<void>> = []
  for (const icon of icons) {
    for (const variant of ICON_VARIANTS) {
      for (const weight of STROKE_WEIGHTS) {
        const outFile = path.join(svgRoot, variant, String(weight), `${icon.name}.svg`)
        writeTasks.push(fs.writeFile(outFile, icon.variants[variant][weight].svg, 'utf8'))
      }
    }
  }
  await Promise.all(writeTasks)

  const manifest = {
    name: '@neon-icons/svg',
    version: '1.0.0',
    count: icons.length,
    totalVariants: icons.length * ICON_VARIANTS.length * STROKE_WEIGHTS.length,
    grid: 24,
    padding: 2,
    variants: [...ICON_VARIANTS],
    strokes: [...STROKE_WEIGHTS],
    categories: CATEGORIES.map((c) => ({
      ...c,
      count: icons.filter((i) => i.category === c.id).length,
    })),
    icons: icons.map((i) => ({
      name: i.name,
      pascalName: i.pascalName,
      category: i.category,
      tags: i.tags,
    })),
  }

  await fs.writeFile(path.join(SVG_PKG_DIR, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
}

async function writeReactGenerated(icons: readonly CompiledIcon[]): Promise<void> {
  await fs.rm(REACT_GEN_DIR, { recursive: true, force: true })
  await fs.mkdir(path.join(REACT_GEN_DIR, 'icons'), { recursive: true })

  // 1. Individual tree-shakeable icon modules (all 6 variants per icon)
  const iconWriteTasks: Array<Promise<void>> = []
  for (const icon of icons) {
    const data = {
      o: {
        '1.25': icon.variants.outline[1.25].nodes.map((n) => (n.tag === 'circle' ? ['c', n.cx, n.cy, n.r] : n.fill === 'currentColor' ? ['pf', n.d] : ['p', n.d])),
        '1.5': icon.variants.outline[1.5].nodes.map((n) => (n.tag === 'circle' ? ['c', n.cx, n.cy, n.r] : n.fill === 'currentColor' ? ['pf', n.d] : ['p', n.d])),
        '2': icon.variants.outline[2].nodes.map((n) => (n.tag === 'circle' ? ['c', n.cx, n.cy, n.r] : n.fill === 'currentColor' ? ['pf', n.d] : ['p', n.d])),
      },
      f: {
        '1.25': [icon.variants.filled[1.25].nodes[0]!.tag === 'path' ? icon.variants.filled[1.25].nodes[0]!.d : '', icon.variants.filled[1.25].fillRule === 'evenodd' ? 1 : 0],
        '1.5': [icon.variants.filled[1.5].nodes[0]!.tag === 'path' ? icon.variants.filled[1.5].nodes[0]!.d : '', icon.variants.filled[1.5].fillRule === 'evenodd' ? 1 : 0],
        '2': [icon.variants.filled[2].nodes[0]!.tag === 'path' ? icon.variants.filled[2].nodes[0]!.d : '', icon.variants.filled[2].fillRule === 'evenodd' ? 1 : 0],
      },
    }

    const code = [
      `import { createNeonIcon } from '../../create-icon.js'`,
      `import type { IconGeometryData } from '../../types.js'`,
      ``,
      `const data: IconGeometryData = ${JSON.stringify(data)}`,
      ``,
      `export const ${icon.pascalName} = createNeonIcon(${JSON.stringify(icon.pascalName)}, data)`,
      `export default ${icon.pascalName}`,
      ``,
    ].join('\n')

    iconWriteTasks.push(fs.writeFile(path.join(REACT_GEN_DIR, 'icons', `${icon.name}.ts`), code, 'utf8'))
  }

  // 2. Variant-specific subpath barrels (ultra-small single-variant bundles!)
  for (const variant of ICON_VARIANTS) {
    for (const weight of STROKE_WEIGHTS) {
      const subDir = path.join(REACT_GEN_DIR, variant, String(weight))
      await fs.mkdir(subDir, { recursive: true })
      const lines: string[] = [
        `import { createStaticOutlineIcon, createStaticFilledIcon } from '../../../create-icon.js'`,
        ``,
      ]
      for (const icon of icons) {
        const v = icon.variants[variant][weight]
        if (variant === 'outline') {
          lines.push(
            `export const ${icon.pascalName} = /*#__PURE__*/ createStaticOutlineIcon(${JSON.stringify(icon.pascalName)}, ${weight}, ${serializeNodesCompact(v.nodes)})`,
          )
        } else {
          const d = v.nodes[0]!.tag === 'path' ? v.nodes[0]!.d : ''
          const evenOdd = v.fillRule === 'evenodd'
          lines.push(
            `export const ${icon.pascalName} = /*#__PURE__*/ createStaticFilledIcon(${JSON.stringify(icon.pascalName)}, ${JSON.stringify(d)}, ${evenOdd})`,
          )
        }
      }
      lines.push('')
      iconWriteTasks.push(fs.writeFile(path.join(subDir, 'index.ts'), lines.join('\n'), 'utf8'))
    }
  }

  await Promise.all(iconWriteTasks)

  // 3. Barrel exports & icon map & metadata
  const exportsFile = [
    ...icons.map((i) => `export { ${i.pascalName} } from './icons/${i.name}.js'`),
    '',
  ].join('\n')

  const iconMapFile = [
    ...icons.map((i) => `import { ${i.pascalName} } from './icons/${i.name}.js'`),
    `import type { NeonIconComponent } from '../types.js'`,
    ``,
    `export const ICON_MAP: Record<NeonIconName, NeonIconComponent> = {`,
    ...icons.map((i) => `  ${JSON.stringify(i.name)}: ${i.pascalName},`),
    `}`,
    ``,
    `export type NeonIconName =`,
    ...icons.map((i) => `  | ${JSON.stringify(i.name)}`),
    ``,
  ].join('\n')

  const metaFile = [
    `import type { IconMeta, CategoryMeta } from '../types.js'`,
    ``,
    `export const CATEGORIES: readonly CategoryMeta[] = ${JSON.stringify(
      CATEGORIES.map((c) => ({ ...c, count: icons.filter((i) => i.category === c.id).length })),
      null,
      2,
    )}`,
    ``,
    `export const ICON_MANIFEST: readonly IconMeta[] = ${JSON.stringify(
      icons.map((i) => ({
        name: i.name,
        pascalName: i.pascalName,
        category: i.category,
        tags: i.tags,
      })),
      null,
      2,
    )}`,
    ``,
  ].join('\n')

  await Promise.all([
    fs.writeFile(path.join(REACT_GEN_DIR, 'exports.ts'), exportsFile, 'utf8'),
    fs.writeFile(path.join(REACT_GEN_DIR, 'icon-map.ts'), iconMapFile, 'utf8'),
    fs.writeFile(path.join(REACT_GEN_DIR, 'manifest.ts'), metaFile, 'utf8'),
  ])
}

async function main(): Promise<void> {
  const start = performance.now()
  const compiled = await compileAllIcons(ALL_ICONS)
  await writeSvgPackage(compiled)
  await writeReactGenerated(compiled)
  const elapsed = ((performance.now() - start) / 1000).toFixed(2)
  console.log(
    `Built ${compiled.length} Neon Icons (${compiled.length * 6} SVG variants + React modules) in ${elapsed}s`,
  )
}

main()
