import * as M from '../motifs.ts'
import { arc, circle, line, poly, rect, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const TAG_BODY =
  'M11.6 3.75H5.75A2 2 0 0 0 3.75 5.75V11.6C3.75 12.13 3.96 12.64 4.34 13.02L11.65 20.33C12.43 21.11 13.7 21.11 14.48 20.33L20.33 14.48C21.11 13.7 21.11 12.43 20.33 11.65L13.02 4.34C12.64 3.96 12.13 3.75 11.6 3.75Z'

const FRONT_TAG = roundedPoly([[3.25, 4.75], [10, 4.75], [18, 12.75], [11.25, 19.5], [3.25, 11.5]], 1.6, true)
const BACK_TAG_EDGE = roundedPoly([[14, 4.5], [22, 12.5], [15.625, 18.875]], 1.6)

const BARCODE_CENTERS = [3.5, 7.75, 12, 16.25, 20.5]
const BARCODE_BARS = BARCODE_CENTERS.map(x => line(x, 5.75, x, 18.25))

const TICKET_BODY =
  'M3 8.5A2 2 0 0 1 5 6.5H19A2 2 0 0 1 21 8.5V10A2 2 0 0 0 21 14V15.5A2 2 0 0 1 19 17.5H5A2 2 0 0 1 3 15.5V14A2 2 0 0 0 3 10V8.5Z'

const TICKET_PERFORATIONS = [9.25, 12, 14.75].map(cy => ({ cx: 14.5, cy, scale: 0.7 }))

const RECEIPT_BODY =
  'M5 3.5H19V20.5L16.67 19L14.33 20.5L12 19L9.67 20.5L7.33 19L5 20.5V3.5Z'

const CARTON_BODY = rect(3.5, 4.5, 17, 15, 1.75)
const CARTON_TAPE = 'M9.5 4.5V10L12 8.75L14.5 10V4.5'

const PIGGY_BANK = 'M4.5 11.75C4.5 8.25 7.15 6 11.25 6C12 6 12.8 6.1 13.5 6.3L17.25 3.75V7.55C18.6 8.35 19.4 9.55 19.7 10.75H21V14.15L18.55 14.85C18.05 15.8 17.3 16.6 16.4 17.15V20H13.4V18.05C12.25 18.3 10.6 18.3 9.5 18.05V20H6.5V16.65C5.25 15.6 4.5 13.8 4.5 11.75Z'
const PIGGY_TAIL = 'M4.5 11.75C2.9 11.75 2.25 10.9 2.5 9.5'
const WALLET_BACK = 'M5.75 7.25V6.65Q5.75 5.85 6.7 5.6L15.65 3.65A1.7 1.7 0 0 1 17.75 5.3V7.25'
const COIN_VALUE = 'M7.75 8.65L9.65 7.2V11.85'

export const commerceIcons: IconDef[] = [
  {
    name: 'shopping-cart',
    category: 'commerce',
    tags: ['buy', 'checkout', 'ecommerce', 'basket'],
    outline: {
      strokes: [
        'M3 4.5H5.5L7.6 13.75A1.75 1.75 0 0 0 9.3 15.1H17.6A1.75 1.75 0 0 0 19.31 13.73L20.6 8H6.3',
        circle(9.25, 19.5, 1.55),
        circle(17.25, 19.5, 1.55),
      ],
    },
    filled: {
      solids: [
        { d: 'M6.25 7.5H21.25L19.65 14A2 2 0 0 1 17.7 15.5H9.35A2 2 0 0 1 7.4 13.95L6.25 7.5Z', expand: false },
        { d: circle(9.25, 19.6, 1.65), expand: false },
        { d: circle(17.25, 19.6, 1.65), expand: false },
      ],
      strokes: ['M3 4.5H5.5L6.75 9.5'],
    },
  },
  {
    name: 'shopping-bag',
    category: 'commerce',
    tags: ['store', 'purchase', 'retail', 'bag'],
    outline: {
      strokes: [
        'M5.5 7.5H18.5L19.75 18.5A2 2 0 0 1 17.76 20.75H6.24A2 2 0 0 1 4.25 18.5L5.5 7.5Z',
        'M8.75 7.5V6.25A3.25 3.25 0 0 1 15.25 6.25V7.5',
      ],
    },
    filled: {
      solids: ['M5.5 7.5H18.5L19.75 18.5A2 2 0 0 1 17.76 20.75H6.24A2 2 0 0 1 4.25 18.5L5.5 7.5Z'],
      strokes: ['M8.75 7.5V6.25A3.25 3.25 0 0 1 15.25 6.25V7.5'],
    },
  },
  {
    name: 'store',
    category: 'commerce',
    tags: ['shop', 'market', 'retail', 'merchant'],
    outline: {
      strokes: [
        'M4.5 10.5V18.5A1.75 1.75 0 0 0 6.25 20.25H17.75A1.75 1.75 0 0 0 19.5 18.5V10.5',
        'M3 9.25L4.5 4.25H19.5L21 9.25A2.25 2.25 0 0 1 16.5 9.25A2.25 2.25 0 0 1 12 9.25A2.25 2.25 0 0 1 7.5 9.25A2.25 2.25 0 0 1 3 9.25Z',
        'M9.75 20.25V15.25A1 1 0 0 1 10.75 14.25H13.25A1 1 0 0 1 14.25 15.25V20.25',
      ],
    },
    filled: {
      solids: [
        'M3 9.25L4.5 4.25H19.5L21 9.25A2.25 2.25 0 0 1 16.5 9.25A2.25 2.25 0 0 1 12 9.25A2.25 2.25 0 0 1 7.5 9.25A2.25 2.25 0 0 1 3 9.25Z',
        { d: 'M4.5 13H19.5V18.5A1.75 1.75 0 0 1 17.75 20.25H6.25A1.75 1.75 0 0 1 4.5 18.5V13Z', expand: false },
      ],
      cutoutFills: ['M9.5 21V15.5A1 1 0 0 1 10.5 14.5H13.5A1 1 0 0 1 14.5 15.5V21Z'],
    },
  },
  {
    name: 'tag',
    category: 'commerce',
    tags: ['label', 'price', 'category', 'badge'],
    outline: { strokes: [TAG_BODY], dots: [{ cx: 8.25, cy: 8.25, scale: 1.15 }] },
    filled: { solids: [TAG_BODY], cutoutDots: [{ cx: 8.25, cy: 8.25, scale: 1.45 }] },
  },
  {
    name: 'tags',
    category: 'commerce',
    tags: ['labels', 'categories', 'prices', 'taxonomy'],
    outline: {
      strokes: [FRONT_TAG, BACK_TAG_EDGE],
      dots: [{ cx: 7.25, cy: 8.75, scale: 1.05 }],
    },
    filled: {
      solids: [FRONT_TAG],
      cutoutDots: [{ cx: 7.25, cy: 8.75, scale: 1.3 }],
      strokes: [BACK_TAG_EDGE],
    },
  },
  {
    name: 'ticket',
    category: 'commerce',
    tags: ['pass', 'coupon', 'voucher', 'event', 'support'],
    outline: {
      strokes: [TICKET_BODY],
      dots: TICKET_PERFORATIONS,
    },
    filled: {
      solids: [TICKET_BODY],
      cutoutDots: TICKET_PERFORATIONS,
    },
  },
  {
    name: 'barcode',
    category: 'commerce',
    tags: ['sku', 'scan', 'product', 'upc'],
    outline: { strokes: BARCODE_BARS },
    filled: {
      solids: BARCODE_CENTERS.filter((_, index) => index % 2 === 0)
        .map(x => rect(x - 0.55, 5.75, 1.1, 12.5, 0.4)),
      strokes: BARCODE_BARS.filter((_, index) => index % 2 === 1),
    },
  },
  {
    name: 'gift',
    category: 'commerce',
    tags: ['present', 'reward', 'bonus', 'perk'],
    outline: {
      strokes: [
        rect(3.5, 8.25, 17, 4, 1.25),
        'M5.25 12.25V18.5A1.75 1.75 0 0 0 7 20.25H17A1.75 1.75 0 0 0 18.75 18.5V12.25',
        line(12, 8.25, 12, 20.25),
        'M12 8.25H8.5A2.25 2.25 0 1 1 8.5 3.75C10.75 3.75 12 8.25 12 8.25Z',
        'M12 8.25H15.5A2.25 2.25 0 1 0 15.5 3.75C13.25 3.75 12 8.25 12 8.25Z',
      ],
    },
    filled: {
      solids: [
        { d: rect(3, 7.75, 18, 4, 1.35), expand: false },
        { d: 'M4.75 13.25H19.25V18.5A2 2 0 0 1 17.25 20.5H6.75A2 2 0 0 1 4.75 18.5V13.25Z', expand: false },
      ],
      cutoutStrokes: [line(12, 7.5, 12, 20.75)],
      strokes: [
        'M12 7.75H8.5A2.15 2.15 0 1 1 8.5 3.5C10.75 3.5 12 7.75 12 7.75Z',
        'M12 7.75H15.5A2.15 2.15 0 1 0 15.5 3.5C13.25 3.5 12 7.75 12 7.75Z',
      ],
    },
  },

  // Payments & finance
  {
    name: 'credit-card',
    category: 'commerce',
    tags: ['payment', 'billing', 'stripe', 'checkout', 'card'],
    outline: {
      strokes: [M.CARD_FRAME, line(3, 10, 21, 10), line(6.75, 15, 10.5, 15)],
    },
    filled: {
      solids: [M.CARD_FRAME],
      cutoutStrokes: [line(3, 10, 21, 10), line(6.75, 15, 10.5, 15)],
    },
  },
  {
    name: 'wallet',
    category: 'commerce',
    tags: ['balance', 'money', 'account', 'crypto', 'payout'],
    outline: {
      strokes: [
        WALLET_BACK,
        rect(3.5, 7.25, 17, 13.25, 2.25),
        'M20.5 11.5H16.5A2.25 2.25 0 0 0 16.5 16H20.5',
      ],
    },
    filled: {
      solids: [rect(3.5, 7.25, 17, 13.25, 2.25)],
      strokes: [WALLET_BACK],
      cutoutFills: ['M21.75 11.5H16.5A2.25 2.25 0 0 0 16.5 16H21.75Z'],
      topSolids: [{ d: circle(16.75, 13.75, 1), expand: false }],
    },
  },
  {
    name: 'banknote',
    category: 'commerce',
    tags: ['cash', 'bill', 'currency', 'money', 'payroll'],
    outline: {
      strokes: [M.CARD_FRAME, circle(12, 12, 2.75)],
      dots: [{ cx: 6.25, cy: 12, scale: 0.9 }, { cx: 17.75, cy: 12, scale: 0.9 }],
    },
    filled: {
      solids: [M.CARD_FRAME],
      cutoutFills: [circle(12, 12, 3)],
      cutoutDots: [{ cx: 6.25, cy: 12, scale: 1.1 }, { cx: 17.75, cy: 12, scale: 1.1 }],
    },
  },
  {
    name: 'coins',
    category: 'commerce',
    tags: ['money', 'credits', 'tokens', 'revenue'],
    outline: {
      strokes: [
        circle(9.25, 9.5, 5.5),
        'M16.2 10.6A5.5 5.5 0 1 1 10.6 16.2',
        COIN_VALUE,
      ],
    },
    filled: {
      solids: [circle(14.75, 14.5, 5.5), circle(9.25, 9.5, 5.5)],
      cutoutStrokes: [COIN_VALUE, arc(9.25, 9.5, 7, -18, 104)],
    },
  },
  {
    name: 'dollar-sign',
    category: 'commerce',
    tags: ['usd', 'price', 'money', 'currency', 'cost'],
    outline: {
      strokes: [
        line(12, 3, 12, 21),
        'M16.5 7.75C16.5 5.85 14.5 4.75 12 4.75C9.5 4.75 7.5 6 7.5 8.1C7.5 10.25 9.5 11.2 12 11.85C14.5 12.5 16.75 13.4 16.75 15.85C16.75 18 14.75 19.25 12 19.25C9.25 19.25 7.25 18.1 7.25 16.1',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'euro',
    category: 'commerce',
    tags: ['eur', 'currency', 'money', 'europe'],
    outline: {
      strokes: [
        'M18.25 6.75A7.25 7.25 0 1 0 18.25 17.25',
        line(4.5, 10, 14.5, 10),
        line(4.5, 14, 14.5, 14),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'pound',
    category: 'commerce',
    tags: ['gbp', 'sterling', 'currency', 'money'],
    outline: {
      strokes: [
        'M17.5 7.75A4 4 0 0 0 9.75 8.25V15.5C9.75 17.5 8.5 19 6.5 19.5H18',
        line(6.5, 12.5, 15, 12.5),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'yen',
    category: 'commerce',
    tags: ['jpy', 'cny', 'currency', 'money'],
    outline: {
      strokes: [
        poly([[6, 4.5], [12, 11.5], [18, 4.5]]),
        line(12, 11.5, 12, 20),
        line(7, 13.5, 17, 13.5),
        line(7, 17, 17, 17),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'receipt',
    category: 'commerce',
    tags: ['invoice', 'billing', 'order', 'statement'],
    outline: {
      strokes: [RECEIPT_BODY, line(8.5, 8.25, 15.5, 8.25), line(8.5, 12, 15.5, 12), line(8.5, 15.75, 12.5, 15.75)],
    },
    filled: {
      solids: [RECEIPT_BODY],
      cutoutStrokes: [line(8.5, 8.25, 15.5, 8.25), line(8.5, 12, 15.5, 12), line(8.5, 15.75, 12.5, 15.75)],
    },
  },
  {
    name: 'landmark',
    category: 'commerce',
    tags: ['bank', 'institution', 'government', 'treasury'],
    outline: {
      strokes: [
        roundedPoly([[3.5, 9], [12, 3.75], [20.5, 9]], 0.75, true),
        line(3.5, 20, 20.5, 20),
        line(6, 12, 6, 17.5),
        line(10, 12, 10, 17.5),
        line(14, 12, 14, 17.5),
        line(18, 12, 18, 17.5),
      ],
    },
    filled: {
      solids: [roundedPoly([[3.5, 9], [12, 3.75], [20.5, 9]], 0.75, true), rect(3.25, 18.5, 17.5, 2, 0.75)],
      strokes: [line(6, 11.75, 6, 17.5), line(10, 11.75, 10, 17.5), line(14, 11.75, 14, 17.5), line(18, 11.75, 18, 17.5)],
    },
  },
  {
    name: 'piggy-bank',
    category: 'commerce',
    tags: ['savings', 'budget', 'deposit', 'finance'],
    outline: {
      strokes: [PIGGY_BANK, PIGGY_TAIL, line(8.5, 9, 11.75, 9)],
      dots: [{ cx: 16.5, cy: 10.9, scale: 0.95 }],
    },
    filled: {
      solids: [PIGGY_BANK],
      strokes: [PIGGY_TAIL],
      cutoutStrokes: [line(8.5, 9, 11.75, 9)],
      cutoutDots: [{ cx: 16.5, cy: 10.9, scale: 1.1 }],
    },
  },
  {
    name: 'scale',
    category: 'commerce',
    tags: ['balance', 'legal', 'justice', 'compare', 'weight'],
    outline: {
      strokes: [
        line(12, 3.75, 12, 20),
        line(7.5, 20, 16.5, 20),
        line(4.5, 7.25, 19.5, 7.25),
        'M6 7.25L3.25 13.75A3.25 3.25 0 0 0 8.75 13.75L6 7.25Z',
        'M18 7.25L15.25 13.75A3.25 3.25 0 0 0 20.75 13.75L18 7.25Z',
      ],
    },
    filled: {
      solids: ['M3.25 13.75A3.25 3.25 0 0 0 8.75 13.75Z', 'M15.25 13.75A3.25 3.25 0 0 0 20.75 13.75Z'],
      strokes: [
        line(12, 3.75, 12, 20),
        line(7.5, 20, 16.5, 20),
        line(4.5, 7.25, 19.5, 7.25),
        poly([[3.5, 13.5], [6, 7.25], [8.5, 13.5]]),
        poly([[15.5, 13.5], [18, 7.25], [20.5, 13.5]]),
      ],
    },
  },
  {
    name: 'briefcase',
    category: 'commerce',
    tags: ['work', 'business', 'job', 'portfolio', 'enterprise'],
    outline: {
      strokes: [
        rect(3, 7.5, 18, 12.5, 2.25),
        'M8.5 7.5V5.75A1.75 1.75 0 0 1 10.25 4H13.75A1.75 1.75 0 0 1 15.5 5.75V7.5',
        line(3, 12.5, 21, 12.5),
      ],
    },
    filled: {
      solids: [rect(3, 7.5, 18, 12.5, 2.25)],
      cutoutStrokes: [line(3, 12.5, 21, 12.5)],
      strokes: ['M8.5 7.5V5.75A1.75 1.75 0 0 1 10.25 4H13.75A1.75 1.75 0 0 1 15.5 5.75V7.5'],
    },
  },
  {
    name: 'truck',
    category: 'commerce',
    tags: ['delivery', 'shipping', 'logistics', 'freight'],
    outline: {
      strokes: [
        'M5.518 16.75H3V7.5A2 2 0 0 1 5 5.5H14V16.75H8.982',
        'M14 9.5H17.65C18.3 9.5 18.9 9.85 19.2 10.42L20.85 13.5C20.95 13.7 21 13.92 21 14.15V16.75H18.482M15.018 16.75H14',
        circle(7.25, 17.75, 2),
        circle(16.75, 17.75, 2),
      ],
    },
    filled: {
      solids: [
        'M5.518 16.75H3V7.5A2 2 0 0 1 5 5.5H14V16.75H8.982',
        'M14 9.5H17.65C18.3 9.5 18.9 9.85 19.2 10.42L20.85 13.5C20.95 13.7 21 13.92 21 14.15V16.75H18.482M15.018 16.75H14V9.5Z',
      ],
      cutoutFills: [circle(7.25, 17.75, 3.1), circle(16.75, 17.75, 3.1)],
      topSolids: [{ d: circle(7.25, 17.75, 1.9), expand: false }, { d: circle(16.75, 17.75, 1.9), expand: false }],
    },
  },
  {
    name: 'box',
    category: 'commerce',
    tags: ['cube', 'parcel', 'inventory', '3d'],
    outline: { strokes: [CARTON_BODY, CARTON_TAPE, line(7, 16, 10, 16)] },
    filled: {
      solids: [CARTON_BODY],
      cutoutFills: [CARTON_TAPE + 'Z'],
      cutoutStrokes: [line(7, 16, 10, 16)],
    },
  },
  {
    name: 'package-check',
    category: 'commerce',
    tags: ['delivered', 'fulfilled', 'verified', 'order'],
    outline: {
      strokes: [
        'M12 21L4.25 16.75V7.25L12 3L19.75 7.25V12',
        line(12, 11.5, 12, 21),
        line(4.25, 7.25, 12, 11.5),
        line(19.75, 7.25, 12, 11.5),
        poly([[14.75, 17.5], [16.75, 19.5], [20.75, 15.25]]),
      ],
    },
    filled: {
      solids: ['M12 3L19.75 7.25V16.75L12 21L4.25 16.75V7.25L12 3Z'],
      cutoutStrokes: [line(12, 11.5, 12, 21.5), line(4, 7.11, 12, 11.5), line(20, 7.11, 12, 11.5)],
      cutoutFills: [circle(18, 17.75, 4.35)],
      strokes: [poly([[14.75, 17.5], [16.75, 19.5], [20.75, 15.25]])],
    },
  },
]
