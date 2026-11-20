import { useId, type ReactNode } from 'react'
import { partControls } from './motion-parts-controls.js'
import { partObjects } from './motion-parts-objects.js'
import { partSystem } from './motion-parts-system.js'
import type { NeonIconName } from './generated/icon-map.js'

type PartAction =
  | 'nudge-up' | 'nudge-down' | 'nudge-left' | 'nudge-right' | 'hinge'
  | 'shake' | 'spark' | 'beat' | 'swing' | 'orbit' | 'draw' | 'scan' | 'spin' | 'meter'

interface MotionPart {
  box: readonly [x: number, y: number, width: number, height: number]
  action: PartAction
  delay?: number
  origin?: readonly [x: number, y: number]
}

export const partsByName: Partial<Record<NeonIconName, readonly MotionPart[]>> = {
  ...partControls,
  ...partObjects,
  ...partSystem,
  'user-plus': [{ box: [14, 10.75, 9, 9], action: 'beat' }],
  'user-minus': [{ box: [14, 12.75, 9, 5], action: 'nudge-right' }],
  'user-check': [{ box: [13.75, 11.5, 9.5, 8], action: 'draw' }],
  'user-x': [{ box: [14, 11, 8, 9], action: 'shake' }],
  footprints: [
    { box: [3.5, 1.75, 8.25, 16], action: 'nudge-up' },
    { box: [12.25, 6, 8.5, 16], action: 'nudge-up', delay: 140 },
  ],
  barcode: [3.5, 7.75, 12, 16.25, 20.5].map((x, index) => ({
    box: [x - 1.75, 4.5, 3.5, 15],
    action: 'meter',
    delay: index * 37,
  })),
  'user-cog': [{ box: [13.75, 11.75, 9, 9], action: 'spin' }],
}

export function MovingArtwork({ artwork, parts }: { artwork: ReactNode; parts: readonly MotionPart[] }) {
  const id = useId()
  const ink = '#' + id + '-ink'
  const fixed = id + '-fixed'
  const cutouts = parts.map(({ box: [x, y, w, h] }) => `M${x} ${y}h${w}v${h}h${-w}Z`).join(' ')
  return (
    <>
      <defs data-neon-defs="">
        <g id={ink.slice(1)} data-neon-artwork="">{artwork}</g>
        <clipPath id={fixed}>
          <path d={`M0 0H24V24H0Z ${cutouts}`} clipRule="evenodd" />
        </clipPath>
        {parts.map(({ box: [x, y, width, height] }, index) => (
          <clipPath id={`${id}-${index}`} key={index}>
            <rect x={x} y={y} width={width} height={height} />
          </clipPath>
        ))}
      </defs>
      <use href={ink} data-neon-base="" />
      <g data-neon-parts="" opacity="0">
        <g clipPath={`url(#${fixed})`}><use href={ink} /></g>
        {parts.map(({ box: [x, y, width, height], action, delay = 0, origin }, index) => (
          <g
            key={index}
            data-neon-part={action}
            style={{ transformOrigin: `${origin?.[0] ?? x + width / 2}px ${origin?.[1] ?? y + (action === 'meter' ? height : height / 2)}px`, animationDelay: `${delay}ms` }}
          >
            <g clipPath={`url(#${id}-${index})`}><use href={ink} /></g>
          </g>
        ))}
      </g>
    </>
  )
}
