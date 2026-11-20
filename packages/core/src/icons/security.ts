import * as M from '../motifs.ts'
import { circle, line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const vaultDoor = rect(4.5, 4, 16.5, 16, 2.25)
const vaultHinges = [line(2.75, 8, 4.5, 8), line(2.75, 16, 4.5, 16)]
const vaultWheel = circle(11.5, 12, 4.25)
const vaultSpokes = 'M11.5 7.75V12L7.82 14.125M11.5 12L15.18 14.125'
const vaultHandle = line(18.25, 10.25, 18.25, 13.75)
const INCOGNITO_BRIM = line(3, 11.75, 21, 11.75)
const INCOGNITO_HAT = 'M5.75 11.75L7.4 5.75A1.75 1.75 0 0 1 9.08 4.5H14.92A1.75 1.75 0 0 1 16.6 5.75L18.25 11.75'
const INCOGNITO_GLASS = [circle(8, 17.5, 2.5), circle(16, 17.5, 2.5)]
const INCOGNITO_BRIDGE = 'M10.5 17.25C11.15 16.85 12.85 16.85 13.5 17.25'

const ROUND_KEY_CENTER = { cx: 8, cy: 12 }
const ROUND_KEY_BOW = circle(ROUND_KEY_CENTER.cx, ROUND_KEY_CENTER.cy, 4.25)
const ROUND_KEY_HOLE = circle(ROUND_KEY_CENTER.cx, ROUND_KEY_CENTER.cy, 1.5)

const BUG_HEAD = 'M8.5 9.5V8A3.5 3.5 0 0 1 15.5 8V9.5'
const BUG_SHELL = 'M8.5 9.5H15.5A1.5 1.5 0 0 1 17 11V14.5A5 5 0 0 1 7 14.5V11A1.5 1.5 0 0 1 8.5 9.5Z'
const BUG_APPENDAGES = [
  line(3.5, 11, 7, 12.25), line(20.5, 11, 17, 12.25),
  line(3.5, 16.5, 7.16, 15.75), line(20.5, 16.5, 16.84, 15.75),
  line(8.05, 4.05, 9.53, 5.52), line(15.95, 4.05, 14.47, 5.52),
]

export const securityIcons: IconDef[] = [
  // Padlocks
  {
    name: 'lock',
    category: 'security',
    tags: ['padlock', 'private', 'secure', 'password', 'closed'],
    outline: { strokes: [M.LOCK_BODY, M.LOCK_SHACKLE] },
    filled: {
      solids: [M.LOCK_BODY],
      strokes: [M.LOCK_SHACKLE],
    },
  },
  {
    name: 'lock-open',
    category: 'security',
    tags: ['unlock', 'public', 'accessible', 'open'],
    outline: { strokes: [M.LOCK_BODY, M.LOCK_SHACKLE_OPEN] },
    filled: {
      solids: [M.LOCK_BODY],
      strokes: [M.LOCK_SHACKLE_OPEN],
    },
  },
  {
    name: 'lock-keyhole',
    category: 'security',
    tags: ['padlock', 'encrypt', 'auth', 'vault'],
    outline: {
      strokes: [M.LOCK_BODY, M.LOCK_SHACKLE, line(12, 15.25, 12, 17.25)],
      dots: [{ cx: 12, cy: 14.75, scale: 1.1 }],
    },
    filled: {
      solids: [M.LOCK_BODY],
      cutoutDots: [{ cx: 12, cy: 14.75, scale: 1.35 }],
      cutoutStrokes: [{ d: line(12, 15, 12, 17.5), widthScale: 0.85 }],
      strokes: [M.LOCK_SHACKLE],
    },
  },

  // Keys & biometrics
  {
    name: 'key',
    category: 'security',
    tags: ['password', 'token', 'secret', 'access', 'api-key'],
    outline: {
      strokes: [
        circle(8.25, 15.75, 4.25),
        line(11.3, 12.7, 19.75, 4.25),
        line(16.75, 7.25, 19.25, 9.75),
        line(19.75, 4.25, 21.25, 5.75),
      ],
    },
    filled: {
      solids: [circle(8.25, 15.75, 4.25)],
      cutoutFills: [circle(8.25, 15.75, 1.75)],
      strokes: [line(11.2, 12.8, 19.75, 4.25), line(16.75, 7.25, 19.25, 9.75), line(19.75, 4.25, 21.25, 5.75)],
    },
  },
  {
    name: 'key-round',
    category: 'security',
    tags: ['ssh', 'credential', 'login', 'secret'],
    outline: {
      strokes: [
        ROUND_KEY_BOW,
        line(12.25, 12, 20.5, 12),
        line(17, 12, 17, 15.25),
        line(20.5, 12, 20.5, 14.5),
      ],
      dots: [{ ...ROUND_KEY_CENTER, scale: 0.9 }],
    },
    filled: {
      solids: [ROUND_KEY_BOW],
      cutoutFills: [ROUND_KEY_HOLE],
      strokes: [line(12, 12, 20.5, 12), line(17, 12, 17, 15.25), line(20.5, 12, 20.5, 14.5)],
    },
  },
  {
    name: 'fingerprint',
    category: 'security',
    tags: ['biometric', 'touch-id', 'identity', 'auth'],
    outline: {
      strokes: [
        'M5.35 8.85C6.2 5.4 8.75 3.65 12 3.65C16.15 3.65 19 6.75 19 11V13C19 15.7 18.5 17.75 17.5 19.75',
        'M8.5 11A3.5 3.5 0 0 1 15.5 11V13.5C15.5 16.3 14.9 18.25 14 20.25',
        'M12 11.25V14.25C12 16.9 11.45 18.75 10.5 20.5',
        'M5 12.5V13.5C5 15.75 4.6 17.35 3.75 19',
        'M8.5 14.5C8.5 16.95 7.95 18.65 7 20.25',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'scan-face',
    category: 'security',
    tags: ['face-id', 'biometric', 'login', 'apple'],
    outline: {
      strokes: [
        'M4 8.5V6A2 2 0 0 1 6 4H8.5',
        'M15.5 4H18A2 2 0 0 1 20 6V8.5',
        'M20 15.5V18A2 2 0 0 1 18 20H15.5',
        'M8.5 20H6A2 2 0 0 1 4 18V15.5',
        'M9 15C9.8 16 10.8 16.5 12 16.5C13.2 16.5 14.2 16 15 15',
        line(12, 9.5, 12, 12.25),
      ],
      dots: [{ cx: 9, cy: 9.5, scale: 1 }, { cx: 15, cy: 9.5, scale: 1 }],
    },
    filled: { boostedOutline: true },
  },

  // Shields
  {
    name: 'shield',
    category: 'security',
    tags: ['protect', 'defense', 'safe', 'guard'],
    outline: { strokes: [M.SHIELD_BODY] },
    filled: { solids: [M.SHIELD_BODY] },
  },
  {
    name: 'shield-check',
    category: 'security',
    tags: ['verified', 'protected', 'safe', 'compliant'],
    outline: { strokes: [M.SHIELD_BODY, poly([[8.75, 12.1], [10.85, 14.2], [15.5, 9.55]])] },
    filled: { solids: [M.SHIELD_BODY], cutoutStrokes: [poly([[8.75, 12.1], [10.85, 14.2], [15.5, 9.55]])] },
  },
  {
    name: 'shield-alert',
    category: 'security',
    tags: ['warning', 'vulnerability', 'risk', 'caution'],
    outline: {
      strokes: [M.SHIELD_BODY, line(12, 8.25, 12, 12.75)],
      dots: [{ cx: 12, cy: 15.75, scale: 1.05 }],
    },
    filled: {
      solids: [M.SHIELD_BODY],
      cutoutStrokes: [line(12, 8.25, 12, 12.75)],
      cutoutDots: [{ cx: 12, cy: 15.75, scale: 1.2 }],
    },
  },
  {
    name: 'shield-x',
    category: 'security',
    tags: ['blocked', 'unsafe', 'denied', 'compromised'],
    outline: { strokes: [M.SHIELD_BODY, line(9.5, 9.5, 14.5, 14.5), line(14.5, 9.5, 9.5, 14.5)] },
    filled: { solids: [M.SHIELD_BODY], cutoutStrokes: [line(9.5, 9.5, 14.5, 14.5), line(14.5, 9.5, 9.5, 14.5)] },
  },
  {
    name: 'shield-off',
    category: 'security',
    tags: ['unprotected', 'disabled', 'insecure'],
    outline: { strokes: [M.SHIELD_BODY] },
    filled: { solids: [M.SHIELD_BODY], slash: M.SLASH_LINE },
  },
  {
    name: 'shield-lock',
    category: 'security',
    tags: ['encrypted', 'vpn', 'zero-trust', 'privacy'],
    outline: {
      strokes: [
        M.SHIELD_BODY,
        rect(9, 11.75, 6, 4.75, 1.15),
        'M10.25 11.75V9.75A1.75 1.75 0 0 1 13.75 9.75V11.75',
      ],
    },
    filled: {
      solids: [M.SHIELD_BODY],
      cutoutFills: [rect(8.75, 11.75, 6.5, 5, 1.25)],
      cutoutStrokes: [{ d: 'M10.25 11.75V9.6A1.75 1.75 0 0 1 13.75 9.6V11.75', widthScale: 0.9 }],
    },
  },

  // Trust, privacy, bug, siren, vault, passkey, qr
  {
    name: 'verified',
    category: 'security',
    tags: ['authentic', 'trust', 'seal', 'check'],
    outline: {
      strokes: [
        'M12 2.75L14.4 4.45L17.35 4.55L18.35 7.3L20.5 9.25L19.9 12L20.5 14.75L18.35 16.7L17.35 19.45L14.4 19.55L12 21.25L9.6 19.55L6.65 19.45L5.65 16.7L3.5 14.75L4.1 12L3.5 9.25L5.65 7.3L6.65 4.55L9.6 4.45L12 2.75Z',
        M.CHECK_SMALL,
      ],
    },
    filled: {
      solids: [
        'M12 2.75L14.4 4.45L17.35 4.55L18.35 7.3L20.5 9.25L19.9 12L20.5 14.75L18.35 16.7L17.35 19.45L14.4 19.55L12 21.25L9.6 19.55L6.65 19.45L5.65 16.7L3.5 14.75L4.1 12L3.5 9.25L5.65 7.3L6.65 4.55L9.6 4.45L12 2.75Z',
      ],
      cutoutStrokes: [M.CHECK_SMALL],
    },
  },
  {
    name: 'incognito',
    category: 'security',
    tags: ['private', 'anonymous', 'stealth', 'spy'],
    outline: {
      strokes: [INCOGNITO_BRIM, INCOGNITO_HAT, ...INCOGNITO_GLASS, INCOGNITO_BRIDGE],
    },
    filled: {
      solids: [INCOGNITO_HAT + 'Z', ...INCOGNITO_GLASS],
      strokes: [INCOGNITO_BRIM, INCOGNITO_BRIDGE],
    },
  },
  {
    name: 'bug',
    category: 'security',
    tags: ['issue', 'debug', 'defect', 'malware', 'insect'],
    outline: {
      strokes: [BUG_SHELL, BUG_HEAD, line(12, 9.5, 12, 19.5), ...BUG_APPENDAGES],
    },
    filled: {
      solids: [BUG_SHELL, BUG_HEAD + 'Z'],
      cutoutStrokes: [
        line(12, 9.5, 12, 20.75),
        { d: line(6.25, 9.5, 17.75, 9.5), widthScale: 0.8 },
      ],
      strokes: BUG_APPENDAGES,
    },
  },
  {
    name: 'siren',
    category: 'security',
    tags: ['emergency', 'incident', 'alert', 'alarm'],
    outline: {
      strokes: [
        'M7 16.5V12.75A5 5 0 0 1 17 12.75V16.5',
        rect(4.75, 16.5, 14.5, 3.5, 1.25),
        line(12, 3, 12, 4.75),
        line(5, 6, 6.25, 7.25),
        line(19, 6, 17.75, 7.25),
      ],
    },
    filled: {
      solids: ['M7 16.25V12.75A5 5 0 0 1 17 12.75V16.25Z', rect(4.75, 16.75, 14.5, 3.25, 1.25)],
      strokes: [line(12, 3, 12, 4.75), line(5, 6, 6.25, 7.25), line(19, 6, 17.75, 7.25)],
    },
  },
  {
    name: 'vault',
    category: 'security',
    tags: ['safe', 'secrets', 'storage', 'bank'],
    outline: { strokes: [vaultDoor, ...vaultHinges, vaultWheel, vaultSpokes, vaultHandle] },
    filled: {
      solids: [vaultDoor],
      cutoutFills: [vaultWheel],
      cutoutStrokes: [vaultHandle],
      strokes: [...vaultHinges, { d: vaultSpokes, widthScale: 0.72 }],
    },
  },
  {
    name: 'passkey',
    category: 'security',
    tags: ['webauthn', 'fido', 'login', 'passwordless'],
    outline: {
      strokes: [
        circle(9.25, 7.5, 3),
        'M3.5 19.75C3.5 16.6 5.95 14.5 9.25 14.5C10.55 14.5 11.75 14.85 12.7 15.45',
        circle(17.25, 11.5, 2.5),
        line(17.25, 14, 17.25, 20.5),
        line(17.25, 17.5, 19.75, 17.5),
      ],
    },
    filled: {
      solids: [
        circle(9.25, 7.5, 3),
        'M3.5 19C3.5 16.25 5.95 14.25 9.25 14.25C11.45 14.25 13.15 15.2 14 16.75V19A1 1 0 0 1 13 20H4.5A1 1 0 0 1 3.5 19Z',
        circle(17.25, 11.5, 2.5),
      ],
      cutoutFills: [circle(17.25, 11.5, 1.25)],
      strokes: [line(17.25, 14, 17.25, 20.5), line(17.25, 17.5, 19.75, 17.5)],
    },
  },
  {
    name: 'qr-code',
    category: 'security',
    tags: ['scan', '2fa', 'barcode', 'code'],
    outline: {
      strokes: [
        rect(4, 4, 6, 6, 1.25),
        rect(14, 4, 6, 6, 1.25),
        rect(4, 14, 6, 6, 1.25),
        'M14 14H16.5V16.5',
        'M20 14V20H14V18.5',
      ],
    },
    filled: {
      solids: [rect(4, 4, 6, 6, 1.25), rect(14, 4, 6, 6, 1.25), rect(4, 14, 6, 6, 1.25)],
      cutoutFills: [rect(5.75, 5.75, 2.5, 2.5, 0.45), rect(15.75, 5.75, 2.5, 2.5, 0.45), rect(5.75, 15.75, 2.5, 2.5, 0.45)],
      strokes: ['M14 14H16.5V16.5', 'M20 14V20H14V18.5'],
    },
  },
]
