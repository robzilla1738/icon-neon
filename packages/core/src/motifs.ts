import { circle, line, poly, rect, roundedPoly } from './primitives.ts'

/**
 * Shared canonical silhouettes that guarantee unmistakable family cohesion
 * across all 500+ Neon Icons.
 */

// Keyline containers (24x24 grid, 2px optical padding)
export const CIRCLE_FRAME = circle(12, 12, 9)
export const SQUARE_FRAME = rect(4, 4, 16, 16, 2.5)
export const WINDOW_FRAME = rect(3, 4, 18, 16, 2.5)
export const CARD_FRAME = rect(3, 5, 18, 14, 2.5)
export const TALL_FRAME = rect(5, 3, 14, 18, 2.5)

// Canonical document / file silhouette (x: 5..19, y: 2.75..21.25, folded top-right)
export const FILE_BODY =
  'M7 2.75H13.6C14.1 2.75 14.58 2.95 14.94 3.31L18.44 6.81C18.8 7.17 19 7.65 19 8.15V19.25A2 2 0 0 1 17 21.25H7A2 2 0 0 1 5 19.25V4.75A2 2 0 0 1 7 2.75Z'
export const FILE_FOLD = 'M13.75 2.9V7A1.25 1.25 0 0 0 15 8.25H18.85'

// The beveled shoulders are mirrored around the 45° pencil axis.
export const PENCIL_BODY =
  'M4 20L5.54 14.86Q5.6 14.65 5.76 14.49L15.9 4.35A1.4 1.4 0 0 1 17.88 4.35L19.65 6.12A1.4 1.4 0 0 1 19.65 8.1L9.51 18.24Q9.35 18.4 9.14 18.46Z'

// Canonical folder silhouette (x: 3..21, y: 4.5..19.5)
export const FOLDER_BODY =
  'M5.25 4.75H8.8C9.42 4.75 10 5.05 10.35 5.56L11.2 6.8C11.45 7.16 11.86 7.38 12.3 7.38H18.75A2.25 2.25 0 0 1 21 9.63V17.25A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V7A2.25 2.25 0 0 1 5.25 4.75Z'

// Canonical shield silhouette (refined modern kite, x: 4.5..19.5, y: 2.75..21.25)
export const SHIELD_BODY =
  'M12 2.75L18.65 5.15C19.16 5.34 19.5 5.82 19.5 6.37V11.35C19.5 16.05 16.38 19.56 12.42 21.12C12.15 21.23 11.85 21.23 11.58 21.12C7.62 19.56 4.5 16.05 4.5 11.35V6.37C4.5 5.82 4.84 5.34 5.35 5.15L12 2.75Z'

// Canonical cloud silhouette (harmonic 3-lobe puff, x: 2.75..21.25, y: 6..18.5)
export const CLOUD_BODY =
  'M7 18.25H17.25A4 4 0 0 0 17.65 10.28A5.5 5.5 0 0 0 7.15 8.85A4.75 4.75 0 0 0 7 18.25Z'

// Canonical mail silhouette
export const MAIL_BODY = CARD_FRAME
export const MAIL_FLAP = 'M3.75 6.85L11.22 12.15C11.69 12.48 12.31 12.48 12.78 12.15L20.25 6.85'

// Canonical padlock
export const LOCK_BODY = rect(4.75, 10.5, 14.5, 10, 2.5)
export const LOCK_SHACKLE = 'M8.25 10.5V7.25A3.75 3.75 0 0 1 15.75 7.25V10.5'
export const LOCK_SHACKLE_OPEN = 'M8.25 10.5V7.25A3.75 3.75 0 0 1 15.35 5.5'

// Canonical bell
export const BELL_DOME =
  'M6 9.75A6 6 0 0 1 18 9.75C18 13.75 19.6 15.35 20.15 15.9C20.47 16.22 20.24 16.8 19.79 16.8H4.21C3.76 16.8 3.53 16.22 3.85 15.9C4.4 15.35 6 13.75 6 9.75Z'
export const BELL_CLAPPER = 'M9.75 20A2.4 2.4 0 0 0 14.25 20'

// Canonical user head & shoulders
export const USER_HEAD = circle(12, 7.5, 3.5)
export const USER_SHOULDERS_OPEN = 'M4.75 20.25C4.75 16.75 7.85 14.5 12 14.5C16.15 14.5 19.25 16.75 19.25 20.25'
export const USER_SHOULDERS_SOLID =
  'M4.75 19.5C4.75 16.35 7.85 14.25 12 14.25C16.15 14.25 19.25 16.35 19.25 19.5A1 1 0 0 1 18.25 20.5H5.75A1 1 0 0 1 4.75 19.5Z'

// Canonical calendar
export const CALENDAR_BODY = rect(3.5, 4.75, 17, 15.75, 2.5)
export const CALENDAR_PINS = [line(8, 2.75, 8, 6.25), line(16, 2.75, 16, 6.25)]
export const CALENDAR_DIVIDER = line(3.5, 9.75, 20.5, 9.75)

// Canonical heart (balanced modern geometry, x: 3..21, y: 4.25..20)
export const HEART_BODY =
  'M12 20C12 20 3.25 14.85 3.25 8.85C3.25 6.05 5.45 4 8.05 4C9.72 4 11.18 4.86 12 6.15C12.82 4.86 14.28 4 15.95 4C18.55 4 20.75 6.05 20.75 8.85C20.75 14.85 12 20 12 20Z'

// Canonical house / home
export const HOME_BODY =
  'M3.75 10.65L10.75 4.35C11.46 3.71 12.54 3.71 13.25 4.35L20.25 10.65V18.5A2 2 0 0 1 18.25 20.5H5.75A2 2 0 0 1 3.75 18.5V10.65Z'
export const HOME_ROOF_DOOR_CUTOUT = 'M9.5 21.5V14.75A1.25 1.25 0 0 1 10.75 13.5H13.25A1.25 1.25 0 0 1 14.5 14.75V21.5Z'
export const HOME_DOOR_OUTLINE = 'M9.5 20.5V14.75A1.25 1.25 0 0 1 10.75 13.5H13.25A1.25 1.25 0 0 1 14.5 14.75V20.5'

// Canonical speech bubbles
export const MESSAGE_CIRCLE_BODY =
  'M12 3.9A9 7.85 0 1 1 8.56 19L3.8 20.1L4.81 16.47A9 7.85 0 0 1 12 3.9Z'
export const MESSAGE_SQUARE_BODY =
  'M5.5 4H18.5A2.5 2.5 0 0 1 21 6.5V15.5A2.5 2.5 0 0 1 18.5 18H8.25L3 21V6.5A2.5 2.5 0 0 1 5.5 4Z'

// Canonical bookmark
export const BOOKMARK_BODY =
  'M6.5 3.5H17.5A1.5 1.5 0 0 1 19 5V20.25L12 16.25L5 20.25V5A1.5 1.5 0 0 1 6.5 3.5Z'

// Canonical battery
export const BATTERY_BODY = rect(2.5, 6.75, 16, 10.5, 2.25)
export const BATTERY_NUB = line(21, 10.25, 21, 13.75)

// Canonical eye silhouette
export const EYE_OUTLINE =
  'M2.5 12C4.6 7.85 8 5.75 12 5.75C16 5.75 19.4 7.85 21.5 12C19.4 16.15 16 18.25 12 18.25C8 18.25 4.6 16.15 2.5 12Z'

// Canonical diagonal slash for -off icons
export const SLASH_LINE = line(3.25, 3.25, 20.75, 20.75)

// Canonical checkmarks (small for badges/circles, medium for standalone)
export const CHECK_SMALL = poly([[8.75, 12.25], [10.85, 14.35], [15.5, 9.7]])
export const CHECK_MED = poly([[5, 12.5], [9.75, 17.25], [19, 7.5]])

// Canonical play triangle (optically shifted right by +0.75px for visual balance)
export const PLAY_TRIANGLE = roundedPoly([[8.25, 5.75], [18.5, 12], [8.25, 18.25]], 1.4, true)
export const PLAY_SMALL = roundedPoly([[10.2, 9.1], [15.4, 12], [10.2, 14.9]], 0.75, true)
