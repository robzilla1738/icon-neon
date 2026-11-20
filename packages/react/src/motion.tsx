import { forwardRef } from 'react'
import { IconArtwork } from './icon-artwork.js'
import { MovingArtwork, partsByName } from './motion-artwork.js'
import { NeonIcon, type DynamicNeonIconProps } from './dynamic.js'
import type { NeonIconName } from './generated/icon-map.js'
import { motionObjects } from './motion-objects.js'
import { motionSystem } from './motion-system.js'
import { motionUI } from './motion-ui.js'

type Motion =
  | 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right'
  | 'turn' | 'turn-back' | 'spin' | 'spin-back' | 'ring' | 'wiggle' | 'nod'
  | 'pop' | 'press' | 'lift' | 'drop' | 'stretch-x' | 'stretch-y' | 'fold'
  | 'focus' | 'inspect' | 'pulse' | 'ping' | 'scan' | 'draw' | 'double' | 'orbit' | 'bounce' | 'blink' | 'sway'

const motionByName = {
  ...motionUI,
  ...motionObjects,
  ...motionSystem,
  search: 'inspect',
  user: 'lift', 'user-circle': 'focus', 'user-plus': 'pop', 'user-minus': 'press',
  'user-check': 'draw', 'user-x': 'wiggle', 'user-cog': 'turn', 'user-shield': 'focus',
  users: 'stretch-x', 'users-plus': 'pop', 'id-card': 'scan', 'badge-check': 'draw',
  smile: 'bounce', frown: 'drop', meh: 'blink', 'thumbs-up': 'up', 'thumbs-down': 'down',
  hand: 'sway', accessibility: 'stretch-x', footprints: 'double',
  'shopping-cart': 'right', 'shopping-bag': 'lift', store: 'fold', tag: 'sway', tags: 'double',
  ticket: 'stretch-x', barcode: 'scan', gift: 'pop', 'credit-card': 'right', wallet: 'fold',
  banknote: 'stretch-x', coins: 'double', 'dollar-sign': 'lift', euro: 'turn-back',
  pound: 'nod', yen: 'drop', receipt: 'down', landmark: 'stretch-y', 'piggy-bank': 'bounce',
  scale: 'sway', briefcase: 'lift', truck: 'right', box: 'fold', 'package-check': 'draw',
  circle: 'pulse', square: 'focus', triangle: 'lift', diamond: 'turn', pentagon: 'nod',
  hexagon: 'turn', octagon: 'press', 'pill-shape': 'stretch-x', cone: 'stretch-y',
  cylinder: 'fold', cube: 'orbit', sphere: 'orbit', divide: 'stretch-y', infinity: 'sway',
  pi: 'stretch-x', asterisk: 'turn', 'percent-circle': 'turn-back', 'sparkles-circle': 'ping',
} satisfies Record<NeonIconName, Motion>

export interface AnimatedNeonIconProps extends DynamicNeonIconProps {
  /** Play once on mount. Change the React key to replay; reduced-motion still applies. */
  playOnMount?: boolean
}

export const AnimatedNeonIcon = forwardRef<SVGSVGElement, AnimatedNeonIconProps>(
  function AnimatedNeonIcon({ name, playOnMount, ...props }, ref) {
    const parts = partsByName[name]
    const icon = (
      <NeonIcon
        {...props}
        ref={ref}
        name={name}
        data-neon-motion={parts ? 'parts' : motionByName[name]}
        data-neon-play={playOnMount ? '' : undefined}
      />
    )
    if (!parts) return icon
    return (
      <IconArtwork.Provider value={(artwork) => <MovingArtwork artwork={artwork} parts={parts} />}>
        {icon}
      </IconArtwork.Provider>
    )
  },
)
