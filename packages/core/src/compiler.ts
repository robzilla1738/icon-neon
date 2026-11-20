import fs from 'node:fs'
import { createRequire } from 'node:module'
import { optimize } from 'svgo'
import { circle, n, toPascalIconName } from './primitives.ts'
import type {
  CompiledIcon,
  CompiledIconVariant,
  CompiledNode,
  Dot,
  FilledSpec,
  IconDef,
  IconVariant,
  OutlineSpec,
  SolidPart,
  StrokePart,
  StrokeWeight,
} from './types.ts'
import { STROKE_WEIGHTS } from './types.ts'

// Minimal structural typing for pathkit-wasm (no bundled @types)
type SkCommand =
  | [0 | 1, number, number] // move, line
  | [2, number, number, number, number] // quadratic
  | [3, number, number, number, number, number] // rational quadratic
  | [4, number, number, number, number, number, number] // cubic
  | [5] // close

interface SkPath {
  transform(matrix: number[]): SkPath
  toCmds(): SkCommand[]
  copy(): SkPath
  stroke(opts: { width: number; miter_limit?: number; cap?: number; join?: number }): SkPath
  op(other: SkPath, op: number): boolean
  simplify(): boolean
  getFillType(): unknown
  getFillTypeString(): string
  toSVGString(): string
  computeTightBounds(): { fLeft: number; fTop: number; fRight: number; fBottom: number }
  delete(): void
}

interface PathKit {
  NewPath(): SkPath
  FromSVGString(d: string): SkPath
  StrokeCap: { BUTT: number; ROUND: number; SQUARE: number }
  StrokeJoin: { MITER: number; ROUND: number; BEVEL: number }
  FillType: { WINDING: unknown; EVENODD: unknown }
  PathOp: { DIFFERENCE: number; INTERSECT: number; UNION: number; XOR: number; REVERSE_DIFFERENCE: number }
}

let cachedPathKit: PathKit | null = null

export async function getPathKit(): Promise<PathKit> {
  if (cachedPathKit) return cachedPathKit
  const require = createRequire(import.meta.url)
  const PathKitInit = require('pathkit-wasm/bin/pathkit.js') as (opts: { wasmBinary: Buffer }) => Promise<PathKit>
  const wasmPath = require.resolve('pathkit-wasm/bin/pathkit.wasm')
  cachedPathKit = await PathKitInit({ wasmBinary: fs.readFileSync(wasmPath) })
  return cachedPathKit
}

/** Stroke-matched dot radius so dots read cleanly at 16px-24px across all three stroke weights */
export function dotRadius(weight: StrokeWeight, scale = 1): number {
  const base = weight === 1.25 ? 0.85 : weight === 1.5 ? 1.0 : 1.25
  return Math.round(base * scale * 100) / 100
}

/** Cutout stroke width tuned slightly per weight so negative space stays crisp at small sizes */
export function cutoutStrokeWidth(weight: StrokeWeight, scale = 1): number {
  const base = weight === 1.25 ? 1.35 : weight === 1.5 ? 1.55 : 1.9
  return base * scale
}

function normalizeSolid(part: string | SolidPart): { d: string; expand: boolean } {
  return typeof part === 'string' ? { d: part, expand: true } : { d: part.d, expand: part.expand ?? true }
}

function normalizeStroke(part: string | StrokePart): { d: string; widthScale: number } {
  return typeof part === 'string' ? { d: part, widthScale: 1 } : { d: part.d, widthScale: part.widthScale ?? 1 }
}

function optimizeSvgString(svg: string): string {
  const res = optimize(svg, {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            convertPathData: { floatPrecision: 3, transformPrecision: 2 },
            cleanupNumericValues: { floatPrecision: 3 },
            mergePaths: false,
          },
        },
      },
    ],
  })
  return res.data
}

function unionInto(pk: PathKit, target: SkPath, addition: SkPath): void {
  addition.simplify()
  if (!target.op(addition, pk.PathOp.UNION)) {
    throw new Error('PathKit UNION failed')
  }
  target.simplify()
}

function subtractFrom(pk: PathKit, target: SkPath, subtrahend: SkPath): void {
  subtrahend.simplify()
  if (!target.op(subtrahend, pk.PathOp.DIFFERENCE)) {
    throw new Error('PathKit DIFFERENCE failed')
  }
  target.simplify()
}

// Skia's stroker flattens curves in its input coordinate system. Work at a
// larger scale so round strokes stay uniform on the 24-unit grid.
function strokePath(pk: PathKit, path: SkPath, width: number): SkPath {
  const scale = 16
  return path
    .transform([scale, 0, 0, 0, scale, 0, 0, 0, 1])
    .stroke({ width: width * scale, cap: pk.StrokeCap.ROUND, join: pk.StrokeJoin.ROUND })
    .transform([1 / scale, 0, 0, 0, 1 / scale, 0, 0, 0, 1])
}

function buildSolidPath(pk: PathKit, part: string | SolidPart, weight: StrokeWeight): SkPath {
  const { d, expand } = normalizeSolid(part)
  const base = pk.FromSVGString(d)
  base.simplify()
  if (!expand) return base
  const rim = strokePath(pk, base.copy(), weight)
  rim.simplify()
  unionInto(pk, base, rim)
  rim.delete()
  return base
}

function buildStrokedPath(pk: PathKit, d: string, width: number): SkPath {
  const p = pk.FromSVGString(d)
  strokePath(pk, p, width)
  p.simplify()
  return p
}

function compileOutline(pk: PathKit, spec: OutlineSpec, weight: StrokeWeight, slash?: string): CompiledIconVariant {
  if (slash) {
    // The knockout is resolved at the selected weight so the gap stays clear
    // without runtime masks, IDs, or artwork duplicated per weight.
    const result = compileFilled(pk, spec, {
      strokes: spec.strokes,
      topSolids: spec.fills?.map(d => ({ d, expand: false })),
      dots: spec.dots,
      slash,
    }, weight)
    return {
      svg: result.svg,
      nodes: result.nodes.map(node => ({ ...node, fill: 'currentColor', stroke: 'none' })),
    }
  }

  const nodes: CompiledNode[] = []

  for (const d of spec.strokes) {
    nodes.push({ tag: 'path', d })
  }

  if (spec.fills) {
    for (const d of spec.fills) {
      nodes.push({ tag: 'path', d, fill: 'currentColor', stroke: 'none' })
    }
  }

  if (spec.dots) {
    for (const dot of spec.dots) {
      nodes.push({
        tag: 'circle',
        cx: dot.cx,
        cy: dot.cy,
        r: dotRadius(weight, dot.scale),
        fill: 'currentColor',
        stroke: 'none',
      })
    }
  }

  const inner = nodes
    .map((node) => {
      if (node.tag === 'circle') {
        return `<circle cx="${n(node.cx)}" cy="${n(node.cy)}" r="${n(node.r)}" fill="currentColor" stroke="none"/>`
      }
      const attrs = [`d="${node.d}"`]
      if (node.fill) attrs.push(`fill="${node.fill}"`)
      if (node.stroke) attrs.push(`stroke="${node.stroke}"`)
      return `<path ${attrs.join(' ')}/>`
    })
    .join('')

  const rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${weight}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`
  const svg = optimizeSvgString(rawSvg)

  // Re-extract optimized path `d` values for ultra-compact React output
  const optimizedNodes = extractNodesFromOutlineSvg(svg)

  return { svg, nodes: optimizedNodes }
}

// Skia stores round caps and elliptical arcs as rational quadratics. A cubic
// with the same endpoint tangents and midpoint represents a quarter circle
// to within 0.03% of its radius, without quantizing dozens of short segments.
function serializeContours(path: SkPath): string {
  const commands = path.toCmds()
  // Leave conics spanning more than a quadrant to Skia's subdivision routine.
  if (commands.some(c => c[0] === 3 && (c[5] < Math.SQRT1_2 - 1e-6 || c[5] > 1))) {
    return path.toSVGString()
  }

  let x = 0
  let y = 0
  return commands.map(command => {
    if (command[0] === 5) return 'Z'
    if (command[0] === 3) {
      const [, cx, cy, endX, endY, weight] = command
      const k = (4 * weight) / (3 * (1 + weight))
      const points = [x + k * (cx - x), y + k * (cy - y), endX + k * (cx - endX), endY + k * (cy - endY), endX, endY]
      x = endX
      y = endY
      return 'C' + points.join(' ')
    }
    x = command.at(-2)!
    y = command.at(-1)!
    const verb = ['M', 'L', 'Q', '', 'C'][command[0]]
    return verb + command.slice(1).join(' ')
  }).join('')
}

function compileFilled(
  pk: PathKit,
  outline: OutlineSpec,
  spec: FilledSpec,
  weight: StrokeWeight,
): CompiledIconVariant {
  const acc = pk.NewPath()

  // Mode A: Pure-stroke icon with optically boosted stroke weight
  if (spec.boostedOutline) {
    const boosted = weight + (spec.boostDelta ?? 0.35)
    for (const d of outline.strokes) {
      const p = buildStrokedPath(pk, d, boosted)
      unionInto(pk, acc, p)
      p.delete()
    }
    if (outline.fills) {
      for (const d of outline.fills) {
        const p = pk.FromSVGString(d)
        unionInto(pk, acc, p)
        p.delete()
      }
    }
    if (outline.dots) {
      for (const dot of outline.dots) {
        const p = pk.FromSVGString(circle(dot.cx, dot.cy, dotRadius(weight, (dot.scale ?? 1) * 1.12)))
        unionInto(pk, acc, p)
        p.delete()
      }
    }
  } else {
    // Mode B: Bespoke solid silhouette + cutouts + top solids + external strokes + dots
    if (spec.solids) {
      for (const s of spec.solids) {
        const p = buildSolidPath(pk, s, weight)
        unionInto(pk, acc, p)
        p.delete()
      }
    }

    if (spec.cutoutStrokes) {
      for (const cs of spec.cutoutStrokes) {
        const { d, widthScale } = normalizeStroke(cs)
        const p = buildStrokedPath(pk, d, cutoutStrokeWidth(weight, widthScale))
        subtractFrom(pk, acc, p)
        p.delete()
      }
    }

    if (spec.cutoutFills) {
      for (const cf of spec.cutoutFills) {
        const p = pk.FromSVGString(cf)
        subtractFrom(pk, acc, p)
        p.delete()
      }
    }

    if (spec.cutoutDots) {
      for (const dot of spec.cutoutDots) {
        const p = pk.FromSVGString(circle(dot.cx, dot.cy, dotRadius(weight, (dot.scale ?? 1) * 1.08)))
        subtractFrom(pk, acc, p)
        p.delete()
      }
    }

    if (spec.topSolids) {
      for (const ts of spec.topSolids) {
        const p = buildSolidPath(pk, ts, weight)
        unionInto(pk, acc, p)
        p.delete()
      }
    }

    if (spec.strokes) {
      for (const st of spec.strokes) {
        const { d, widthScale } = normalizeStroke(st)
        const p = buildStrokedPath(pk, d, weight * widthScale)
        unionInto(pk, acc, p)
        p.delete()
      }
    }

    if (spec.dots) {
      for (const dot of spec.dots) {
        const p = pk.FromSVGString(circle(dot.cx, dot.cy, dotRadius(weight, dot.scale)))
        unionInto(pk, acc, p)
        p.delete()
      }
    }
  }

  // Optional diagonal slash with clean negative-space knockout halo
  if (spec.slash) {
    const gap = buildStrokedPath(pk, spec.slash, weight + 2.15)
    subtractFrom(pk, acc, gap)
    gap.delete()

    const slashStroke = buildStrokedPath(pk, spec.slash, weight)
    unionInto(pk, acc, slashStroke)
    slashStroke.delete()
  }

  acc.simplify()
  const fillRule: 'evenodd' | 'nonzero' = acc.getFillType() === pk.FillType.EVENODD ? 'evenodd' : 'nonzero'
  const rawD = serializeContours(acc)
  acc.delete()

  const fillRuleAttr = fillRule === 'evenodd' ? ' fill-rule="evenodd" clip-rule="evenodd"' : ''
  const rawSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path${fillRuleAttr} d="${rawD}"/></svg>`
  const svg = optimizeSvgString(rawSvg)

  const match = svg.match(/<path[^>]*d="([^"]+)"/)
  const finalD = match ? match[1]! : rawD

  return {
    svg,
    fillRule,
    nodes: [{ tag: 'path', d: finalD }],
  }
}

function extractNodesFromOutlineSvg(svg: string): CompiledNode[] {
  const nodes: CompiledNode[] = []
  const tagRegex = /<(path|circle)\s+([^>]+?)\/>/g
  let m: RegExpExecArray | null
  while ((m = tagRegex.exec(svg)) !== null) {
    const tag = m[1]!
    const attrs = m[2]!
    if (tag === 'circle') {
      const cx = Number(attrs.match(/cx="([^"]+)"/)?.[1] ?? 0)
      const cy = Number(attrs.match(/cy="([^"]+)"/)?.[1] ?? 0)
      const r = Number(attrs.match(/r="([^"]+)"/)?.[1] ?? 1)
      nodes.push({ tag: 'circle', cx, cy, r, fill: 'currentColor', stroke: 'none' })
    } else {
      const d = attrs.match(/d="([^"]+)"/)?.[1] ?? ''
      const fill = attrs.match(/fill="([^"]+)"/)?.[1] as 'currentColor' | 'none' | undefined
      const stroke = attrs.match(/stroke="([^"]+)"/)?.[1] as 'currentColor' | 'none' | undefined
      const node: CompiledNode = { tag: 'path', d }
      if (fill) node.fill = fill
      if (stroke) node.stroke = stroke
      nodes.push(node)
    }
  }
  return nodes
}

export async function compileIcon(def: IconDef): Promise<CompiledIcon> {
  const pk = await getPathKit()
  const outlineVariants = {} as Record<StrokeWeight, CompiledIconVariant>
  const filledVariants = {} as Record<StrokeWeight, CompiledIconVariant>

  for (const w of STROKE_WEIGHTS) {
    outlineVariants[w] = compileOutline(pk, def.outline, w, def.filled.slash)
    filledVariants[w] = compileFilled(pk, def.outline, def.filled, w)
  }

  return {
    name: def.name,
    pascalName: toPascalIconName(def.name),
    category: def.category,
    tags: def.tags,
    variants: {
      outline: outlineVariants,
      filled: filledVariants,
    },
  }
}

export async function compileAllIcons(defs: readonly IconDef[]): Promise<CompiledIcon[]> {
  await getPathKit()
  const results: CompiledIcon[] = []
  for (const def of defs) {
    results.push(await compileIcon(def))
  }
  return results
}

export type { Dot, IconVariant }
