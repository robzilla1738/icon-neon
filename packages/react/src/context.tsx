import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { IconVariant, StrokeWeight } from './types.js'

export interface NeonIconDefaults {
  variant: IconVariant
  stroke: StrokeWeight
  size: number | string
}

const DEFAULT_CONFIG: NeonIconDefaults = {
  variant: 'outline',
  stroke: 1.5,
  size: 24,
}

const NeonIconContext = createContext<NeonIconDefaults>(DEFAULT_CONFIG)

export interface NeonIconProviderProps {
  variant?: IconVariant
  stroke?: StrokeWeight
  size?: number | string
  children: ReactNode
}

export function NeonIconProvider({ variant, stroke, size, children }: NeonIconProviderProps) {
  const parent = useContext(NeonIconContext)
  const value: NeonIconDefaults = {
    variant: variant ?? parent.variant,
    stroke: stroke ?? parent.stroke,
    size: size ?? parent.size,
  }
  return <NeonIconContext.Provider value={value}>{children}</NeonIconContext.Provider>
}

export function useNeonIconDefaults(): NeonIconDefaults {
  return useContext(NeonIconContext)
}
