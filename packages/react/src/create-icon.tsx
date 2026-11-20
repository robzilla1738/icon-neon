import { forwardRef, useContext } from 'react'
import { IconArtwork } from './icon-artwork.js'
import { useNeonIconDefaults } from './context.js'
import type {
  CompactOutlineNode,
  IconGeometryData,
  NeonIconComponent,
  NeonIconProps,
  StaticIconComponent,
  StaticIconProps,
  StrokeWeight,
} from './types.js'

function renderOutlineNodes(nodes: readonly CompactOutlineNode[], color: string) {
  return nodes.map((node, index) => {
    if (node[0] === 'c') {
      return <circle key={index} cx={node[1]} cy={node[2]} r={node[3]} fill={color} stroke="none" />
    }
    if (node[0] === 'pf') {
      return <path key={index} d={node[1]} fill={color} stroke="none" />
    }
    return <path key={index} d={node[1]} />
  })
}

export function createNeonIcon(displayName: string, data: IconGeometryData): NeonIconComponent {
  const Icon = forwardRef<SVGSVGElement, NeonIconProps>(function NeonIconInner(
    { variant, stroke, size, title, color = 'currentColor', 'aria-label': ariaLabel, ...rest },
    ref,
  ) {
    const defaults = useNeonIconDefaults()
    const renderArtwork = useContext(IconArtwork)
    const resolvedVariant = variant ?? defaults.variant
    const resolvedStroke = stroke ?? defaults.stroke
    const resolvedSize = size ?? defaults.size
    const strokeKey = String(resolvedStroke) as '1.25' | '1.5' | '2'
    const hasName = Boolean(title || ariaLabel || rest['aria-labelledby'])

    if (resolvedVariant === 'filled') {
      const [d, evenOdd] = data.f[strokeKey]
      const artwork = <path d={d} fillRule={evenOdd ? 'evenodd' : undefined} clipRule={evenOdd ? 'evenodd' : undefined} />
      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={resolvedSize}
          height={resolvedSize}
          viewBox="0 0 24 24"
          fill={color}
          role={hasName ? 'img' : undefined}
          aria-label={ariaLabel}
          aria-hidden={hasName ? undefined : true}
          {...rest}
        >
          {title ? <title>{title}</title> : null}
          {renderArtwork ? renderArtwork(artwork) : artwork}
        </svg>
      )
    }

    const artwork = renderOutlineNodes(data.o[strokeKey], color)
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={resolvedSize}
        height={resolvedSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={resolvedStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        role={hasName ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={hasName ? undefined : true}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        {renderArtwork ? renderArtwork(artwork) : artwork}
      </svg>
    )
  })

  Icon.displayName = displayName
  return Icon
}

export function createStaticOutlineIcon(
  displayName: string,
  strokeWeight: StrokeWeight,
  nodes: readonly CompactOutlineNode[],
): StaticIconComponent {
  const Icon = forwardRef<SVGSVGElement, StaticIconProps>(function StaticOutlineIcon(
    { size = 24, title, color = 'currentColor', 'aria-label': ariaLabel, ...rest },
    ref,
  ) {
    const hasName = Boolean(title || ariaLabel || rest['aria-labelledby'])
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWeight}
        strokeLinecap="round"
        strokeLinejoin="round"
        role={hasName ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={hasName ? undefined : true}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        {renderOutlineNodes(nodes, color)}
      </svg>
    )
  })

  Icon.displayName = displayName
  return Icon
}

export function createStaticFilledIcon(
  displayName: string,
  d: string,
  evenOdd: boolean,
): StaticIconComponent {
  const Icon = forwardRef<SVGSVGElement, StaticIconProps>(function StaticFilledIcon(
    { size = 24, title, color = 'currentColor', 'aria-label': ariaLabel, ...rest },
    ref,
  ) {
    const hasName = Boolean(title || ariaLabel || rest['aria-labelledby'])
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={color}
        role={hasName ? 'img' : undefined}
        aria-label={ariaLabel}
        aria-hidden={hasName ? undefined : true}
        {...rest}
      >
        {title ? <title>{title}</title> : null}
        <path d={d} fillRule={evenOdd ? 'evenodd' : undefined} clipRule={evenOdd ? 'evenodd' : undefined} />
      </svg>
    )
  })

  Icon.displayName = displayName
  return Icon
}
