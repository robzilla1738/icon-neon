import { cutoutStrokeWidth, dotRadius } from './compiler.ts'
import type { Dot, IconDef, IconVariant, SolidPart, StrokePart, StrokeWeight } from './types.ts'

/** Independent raster reference. The SVG renderer paints native strokes and
 * masks directly, bypassing PathKit and the production SVG optimizer. */
export function referenceSvg(def: IconDef, variant: IconVariant, weight: StrokeWeight): string {
  const paint: string[] = []
  function stroke(part: string | StrokePart, width: number, color = 'white') {
    const { d, widthScale = 1 } = typeof part === 'string' ? { d: part } : part
    paint.push(`<path d="${d}" fill="none" stroke="${color}" stroke-width="${width * widthScale}"/>`)
  }
  function solid(part: string | SolidPart, expand: boolean, color = 'white') {
    const shape = typeof part === 'string' ? { d: part } : part
    const edge = (shape.expand ?? expand) ? ` stroke="${color}" stroke-width="${weight}"` : ''
    paint.push(`<path d="${shape.d}" fill="${color}"${edge}/>`)
  }
  function dot(point: Dot, scale = 1, color = 'white') {
    paint.push(`<circle cx="${point.cx}" cy="${point.cy}" r="${dotRadius(weight, (point.scale ?? 1) * scale)}" fill="${color}"/>`)
  }

  const { outline, filled } = def
  if (variant === 'outline' || filled.boostedOutline) {
    const boosted = variant === 'filled'
    const width = boosted ? weight + (filled.boostDelta ?? 0.35) : weight
    outline.strokes.forEach(part => stroke(part, width))
    outline.fills?.forEach(part => solid(part, false))
    outline.dots?.forEach(point => dot(point, boosted ? 1.12 : 1))
  } else {
    filled.solids?.forEach(part => solid(part, true))
    filled.cutoutStrokes?.forEach(part => stroke(part, cutoutStrokeWidth(weight), 'black'))
    filled.cutoutFills?.forEach(part => solid(part, false, 'black'))
    filled.cutoutDots?.forEach(point => dot(point, 1.08, 'black'))
    filled.topSolids?.forEach(part => solid(part, true))
    filled.strokes?.forEach(part => stroke(part, weight))
    filled.dots?.forEach(point => dot(point))
  }
  if (filled.slash) {
    stroke(filled.slash, weight + 2.15, 'black')
    stroke(filled.slash, weight)
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <mask id="ink" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24" stroke-linecap="round" stroke-linejoin="round">${paint.join('')}</mask>
    <rect width="24" height="24" mask="url(#ink)"/>
  </svg>`
}
