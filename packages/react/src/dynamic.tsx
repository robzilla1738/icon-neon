import { forwardRef } from 'react'
import { ICON_MAP } from './generated/icon-map.js'
import type { NeonIconName } from './generated/icon-map.js'
import type { NeonIconProps } from './types.js'

export interface DynamicNeonIconProps extends NeonIconProps {
  name: NeonIconName
}

export const NeonIcon = forwardRef<SVGSVGElement, DynamicNeonIconProps>(function NeonIcon({ name, ...props }, ref) {
  const Component = ICON_MAP[name]
  return <Component ref={ref} {...props} />
})
