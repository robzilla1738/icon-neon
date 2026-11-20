export type StrokeWeight = 1.25 | 1.5 | 2
export const STROKE_WEIGHTS: readonly StrokeWeight[] = [1.25, 1.5, 2] as const

export type IconVariant = 'outline' | 'filled'
export const ICON_VARIANTS: readonly IconVariant[] = ['outline', 'filled'] as const

export const CATEGORIES = [
  { id: 'arrows', label: 'Arrows & Navigation' },
  { id: 'interface', label: 'Interface & Actions' },
  { id: 'layout', label: 'Layout & Windows' },
  { id: 'files', label: 'Files & Folders' },
  { id: 'communication', label: 'Communication' },
  { id: 'users', label: 'Users & People' },
  { id: 'security', label: 'Security & Privacy' },
  { id: 'ai', label: 'AI & Intelligence' },
  { id: 'development', label: 'Development & Code' },
  { id: 'editor', label: 'Text & Editor' },
  { id: 'media', label: 'Media & Camera' },
  { id: 'charts', label: 'Charts & Data' },
  { id: 'commerce', label: 'Commerce & Finance' },
  { id: 'time', label: 'Time & Calendar' },
  { id: 'status', label: 'Status & Feedback' },
  { id: 'devices', label: 'Devices & Hardware' },
  { id: 'maps', label: 'Maps & Travel' },
  { id: 'weather', label: 'Weather & Nature' },
  { id: 'design', label: 'Design & Tools' },
  { id: 'education', label: 'Knowledge & Life' },
  { id: 'shapes', label: 'Shapes & Math' },
] as const

export type CategoryId = (typeof CATEGORIES)[number]['id']

export interface Dot {
  cx: number
  cy: number
  /** Multiplier on stroke-matched dot radius (default 1) */
  scale?: number
}

export interface SolidPart {
  d: string
  /** Expand outer silhouette by active strokeWidth/2 to match outline footprint (default true) */
  expand?: boolean
}

export interface StrokePart {
  d: string
  /** Multiplier on active strokeWidth (default 1) */
  widthScale?: number
}

export interface OutlineSpec {
  strokes: string[]
  dots?: Dot[]
  /** Rare solid micro-fills inside outline icons */
  fills?: string[]
}

export interface FilledSpec {
  /** Solid filled silhouettes */
  solids?: Array<string | SolidPart>
  /** Stroked paths subtracted as negative-space cutouts from `solids` */
  cutoutStrokes?: Array<string | StrokePart>
  /** Closed shapes subtracted as negative-space cutouts from `solids` */
  cutoutFills?: string[]
  /** Circular dots subtracted as negative-space cutouts from `solids` */
  cutoutDots?: Dot[]
  /** Solid shapes unioned back on top after cutouts (e.g. eye pupil, target center) */
  topSolids?: Array<string | SolidPart>
  /** External stroked appendages converted to exact weight and unioned */
  strokes?: Array<string | StrokePart>
  /** External solid dots */
  dots?: Dot[]
  /** Diagonal slash line punched cleanly through underlying geometry, then unioned on top */
  slash?: string
  /**
   * For pure linear icons without a closed volume (arrows, chevrons, plus, check, menu, code).
   * Expands outline strokes at an optically balanced filled weight (+0.35).
   */
  boostedOutline?: boolean
  /** Override width boost for boostedOutline (default +0.35) */
  boostDelta?: number
}

export interface IconDef {
  name: string
  category: CategoryId
  tags: string[]
  outline: OutlineSpec
  filled: FilledSpec
}

export interface CompiledIconVariant {
  svg: string
  /** Minimal inner SVG markup for React component generation */
  nodes: CompiledNode[]
  fillRule?: 'evenodd' | 'nonzero'
}

export type CompiledNode =
  | { tag: 'path'; d: string; fill?: 'currentColor' | 'none'; stroke?: 'currentColor' | 'none'; strokeWidth?: number }
  | { tag: 'circle'; cx: number; cy: number; r: number; fill: 'currentColor'; stroke: 'none' }

export interface CompiledIcon {
  name: string
  pascalName: string
  category: CategoryId
  tags: string[]
  variants: Record<IconVariant, Record<StrokeWeight, CompiledIconVariant>>
}
