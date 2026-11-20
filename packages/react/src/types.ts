import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react'

export type StrokeWeight = 1.25 | 1.5 | 2
export type IconVariant = 'outline' | 'filled'

export interface NeonIconProps extends Omit<SVGProps<SVGSVGElement>, 'stroke' | 'strokeWidth'> {
  /** Icon visual style (default: "outline", or inherited from NeonIconProvider) */
  variant?: IconVariant
  /** Optical stroke weight in 24px grid units: 1.25, 1.5, or 2 (default: 1.5) */
  stroke?: StrokeWeight
  /** Rendered width & height in px or CSS length (default: 24) */
  size?: number | string
  /** Accessible name. Unlabelled icons are decorative by default. */
  title?: string
  /** Icon color override (defaults to currentColor) */
  color?: string
}

export type NeonIconComponent = ForwardRefExoticComponent<NeonIconProps & RefAttributes<SVGSVGElement>>

export type StaticIconProps = Omit<NeonIconProps, 'variant' | 'stroke'>
export type StaticIconComponent = ForwardRefExoticComponent<StaticIconProps & RefAttributes<SVGSVGElement>>

/** Compact wire format for generated icon geometry */
export type CompactOutlineNode =
  | ['p', string]
  | ['pf', string]
  | ['c', number, number, number]

export type CompactFilledEntry = [d: string, evenOdd: 0 | 1]

export interface IconGeometryData {
  o: Record<'1.25' | '1.5' | '2', CompactOutlineNode[]>
  f: Record<'1.25' | '1.5' | '2', CompactFilledEntry>
}

export interface IconMeta {
  name: string
  pascalName: string
  category: string
  tags: readonly string[]
}

export interface CategoryMeta {
  id: string
  label: string
  count: number
}
