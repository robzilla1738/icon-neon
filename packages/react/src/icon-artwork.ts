import { createContext, type ReactNode } from 'react'

export const IconArtwork = createContext<((artwork: ReactNode) => ReactNode) | null>(null)
