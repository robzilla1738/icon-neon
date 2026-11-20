import * as M from '../motifs.ts'
import { arc, circle, line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const laptopBase = 'M2.75 16.25H21.25L20 19.25H4Z'
const laptopScreen = 'M4.5 16.25V7A2 2 0 0 1 6.5 5H17.5A2 2 0 0 1 19.5 7V16.25'

const USB_BRANCHES = [
  line(12, 16.75, 12, 3.75),
  poly([[9.65, 6.1], [12, 3.75], [14.35, 6.1]]),
  'M12 15L5.75 13V11.75',
  'M12 12.75L18.625 12V11.5',
]
const USB_TERMINALS = [circle(12, 18.75, 2), circle(5.75, 10, 1.75), rect(17, 8.25, 3.25, 3.25, 0.65)]

const WIFI_ARCS = [arc(12, 18.5, 12.25, -135, -45), arc(12, 18.5, 8.25, -135, -45), arc(12, 18.5, 4.25, -135, -45)]

const PRINTER_PAPER = rect(6.5, 13.5, 11, 7.25, 1.25)

const NFC_ARCS = [arc(6.65, 12, 3, -55, 55), arc(6.65, 12, 6, -45, 45), arc(6.65, 12, 9, -34, 34)]

export const deviceIcons: IconDef[] = [
  {
    name: 'monitor',
    category: 'devices',
    tags: ['desktop', 'screen', 'display', 'imac', 'computer'],
    outline: { strokes: [rect(3, 4, 18, 12.25, 2.25), line(8.5, 20, 15.5, 20), line(12, 16.25, 12, 20)] },
    filled: {
      solids: [rect(3, 4, 18, 12.25, 2.25)],
      strokes: [line(8.5, 20, 15.5, 20), line(12, 16.25, 12, 20)],
    },
  },
  {
    name: 'laptop',
    category: 'devices',
    tags: ['macbook', 'notebook', 'computer', 'portable'],
    outline: { strokes: [laptopScreen, laptopBase] },
    filled: {
      solids: [laptopScreen, laptopBase],
      cutoutStrokes: [line(2, 16.25, 22, 16.25)],
    },
  },
  {
    name: 'tablet',
    category: 'devices',
    tags: ['ipad', 'device', 'screen', 'mobile'],
    outline: { strokes: [rect(3, 5, 18, 14, 2.25), line(10, 15.75, 14, 15.75)] },
    filled: { solids: [rect(3, 5, 18, 14, 2.25)], cutoutStrokes: [line(10, 15.75, 14, 15.75)] },
  },
  {
    name: 'smartphone',
    category: 'devices',
    tags: ['iphone', 'mobile', 'phone', 'cell', 'device'],
    outline: { strokes: [rect(6.5, 3, 11, 18, 2.25), line(10.5, 17.75, 13.5, 17.75)] },
    filled: { solids: [rect(6.5, 3, 11, 18, 2.25)], cutoutStrokes: [line(10.5, 17.75, 13.5, 17.75)] },
  },
  {
    name: 'tv',
    category: 'devices',
    tags: ['television', 'display', 'stream', 'screen'],
    outline: { strokes: [rect(3, 7, 18, 12.5, 2.25), poly([[8.5, 3.5], [12, 7], [15.5, 3.5]])] },
    filled: { solids: [rect(3, 7, 18, 12.5, 2.25)], strokes: [poly([[8.5, 3.5], [12, 7], [15.5, 3.5]])] },
  },
  {
    name: 'printer',
    category: 'devices',
    tags: ['print', 'paper', 'document', 'fax'],
    outline: {
      strokes: [
        'M6.5 8.5V4.25A1 1 0 0 1 7.5 3.25H16.5A1 1 0 0 1 17.5 4.25V8.5',
        'M6.5 16.5H5A2 2 0 0 1 3 14.5V10.5A2 2 0 0 1 5 8.5H19A2 2 0 0 1 21 10.5V14.5A2 2 0 0 1 19 16.5H17.5',
        PRINTER_PAPER,
      ],
    },
    filled: {
      solids: [rect(3, 8.5, 18, 8, 2)],
      cutoutFills: [rect(4.75, 11.75, 14.5, 9.5, 2.25)],
      strokes: ['M6.5 8.5V4.25A1 1 0 0 1 7.5 3.25H16.5A1 1 0 0 1 17.5 4.25V8.5', PRINTER_PAPER],
    },
  },
  {
    name: 'keyboard',
    category: 'devices',
    tags: ['typing', 'shortcuts', 'input', 'keys'],
    outline: {
      strokes: [M.CARD_FRAME, line(8.5, 15.25, 15.5, 15.25)],
      dots: [
        { cx: 6.75, cy: 9.25, scale: 0.85 },
        { cx: 10.25, cy: 9.25, scale: 0.85 },
        { cx: 13.75, cy: 9.25, scale: 0.85 },
        { cx: 17.25, cy: 9.25, scale: 0.85 },
        { cx: 8.5, cy: 12.25, scale: 0.85 },
        { cx: 12, cy: 12.25, scale: 0.85 },
        { cx: 15.5, cy: 12.25, scale: 0.85 },
      ],
    },
    filled: {
      solids: [M.CARD_FRAME],
      cutoutStrokes: [line(8.5, 15.25, 15.5, 15.25)],
      cutoutDots: [
        { cx: 6.75, cy: 9.25, scale: 1 },
        { cx: 10.25, cy: 9.25, scale: 1 },
        { cx: 13.75, cy: 9.25, scale: 1 },
        { cx: 17.25, cy: 9.25, scale: 1 },
        { cx: 8.5, cy: 12.25, scale: 1 },
        { cx: 12, cy: 12.25, scale: 1 },
        { cx: 15.5, cy: 12.25, scale: 1 },
      ],
    },
  },
  {
    name: 'mouse',
    category: 'devices',
    tags: ['pointer', 'scroll', 'click', 'hardware'],
    outline: { strokes: [rect(6.5, 3, 11, 18, 5.5), line(12, 7, 12, 10.5)] },
    filled: { solids: [rect(6.5, 3, 11, 18, 5.5)], cutoutStrokes: [line(12, 7, 12, 10.5)] },
  },
  {
    name: 'gamepad',
    category: 'devices',
    tags: ['controller', 'gaming', 'play', 'console'],
    outline: {
      strokes: [
        'M6.25 6.5H17.75C19.6 6.5 21 8.05 21.15 9.9L21.65 15.25C21.85 17.2 20.1 18.75 18.2 18.25C17.25 18 16.5 17.25 16 16.35L15.15 15H8.85L8 16.35C7.5 17.25 6.75 18 5.8 18.25C3.9 18.75 2.15 17.2 2.35 15.25L2.85 9.9C3 8.05 4.4 6.5 6.25 6.5Z',
        line(7.5, 9.5, 7.5, 13),
        line(5.75, 11.25, 9.25, 11.25),
      ],
      dots: [{ cx: 15.25, cy: 12.25, scale: 0.9 }, { cx: 17.5, cy: 10, scale: 0.9 }],
    },
    filled: {
      solids: [
        'M6.25 6.5H17.75C19.6 6.5 21 8.05 21.15 9.9L21.65 15.25C21.85 17.2 20.1 18.75 18.2 18.25C17.25 18 16.5 17.25 16 16.35L15.15 15H8.85L8 16.35C7.5 17.25 6.75 18 5.8 18.25C3.9 18.75 2.15 17.2 2.35 15.25L2.85 9.9C3 8.05 4.4 6.5 6.25 6.5Z',
      ],
      cutoutStrokes: [line(7.5, 9.5, 7.5, 13), line(5.75, 11.25, 9.25, 11.25)],
      cutoutDots: [{ cx: 15.25, cy: 12.25, scale: 1.05 }, { cx: 17.5, cy: 10, scale: 1.05 }],
    },
  },

  // Battery family
  {
    name: 'battery',
    category: 'devices',
    tags: ['power', 'energy', 'empty', 'charge'],
    outline: { strokes: [M.BATTERY_BODY, M.BATTERY_NUB] },
    filled: {
      solids: [M.BATTERY_BODY],
      cutoutFills: [rect(4.75, 9, 11.5, 6, 1)],
      strokes: [M.BATTERY_NUB],
    },
  },
  {
    name: 'battery-low',
    category: 'devices',
    tags: ['power', 'energy', 'drain', 'charge'],
    outline: { strokes: [M.BATTERY_BODY, M.BATTERY_NUB, line(6.25, 10, 6.25, 14)] },
    filled: {
      solids: [M.BATTERY_BODY],
      cutoutFills: [rect(8.75, 9, 7.5, 6, 0.85)],
      strokes: [M.BATTERY_NUB],
    },
  },
  {
    name: 'battery-medium',
    category: 'devices',
    tags: ['power', 'energy', 'half', 'charge'],
    outline: { strokes: [M.BATTERY_BODY, M.BATTERY_NUB, line(6.25, 10, 6.25, 14), line(10.5, 10, 10.5, 14)] },
    filled: {
      solids: [M.BATTERY_BODY],
      cutoutFills: [rect(12.25, 9, 4, 6, 0.85)],
      strokes: [M.BATTERY_NUB],
    },
  },
  {
    name: 'battery-full',
    category: 'devices',
    tags: ['power', 'energy', 'charged', '100'],
    outline: {
      strokes: [M.BATTERY_BODY, M.BATTERY_NUB, line(6.25, 10, 6.25, 14), line(10.5, 10, 10.5, 14), line(14.75, 10, 14.75, 14)],
    },
    filled: {
      solids: [M.BATTERY_BODY],
      strokes: [M.BATTERY_NUB],
    },
  },
  {
    name: 'battery-charging',
    category: 'devices',
    tags: ['power', 'bolt', 'plug', 'fast-charge'],
    outline: {
      strokes: [
        'M8.25 6.75H4.75A2.25 2.25 0 0 0 2.5 9V15A2.25 2.25 0 0 0 4.75 17.25H5.75',
        'M15.25 6.75H16.25A2.25 2.25 0 0 1 18.5 9V15A2.25 2.25 0 0 1 16.25 17.25H12.75',
        M.BATTERY_NUB,
        poly([[11.75, 7.75], [8.75, 12], [12.25, 12], [9.25, 16.25]]),
      ],
    },
    filled: {
      solids: [M.BATTERY_BODY],
      cutoutStrokes: [poly([[11.5, 8.25], [8.75, 12], [12.25, 12], [9.5, 15.75]])],
      strokes: [M.BATTERY_NUB],
    },
  },

  // Connectivity & power
  {
    name: 'wifi',
    category: 'devices',
    tags: ['wireless', 'internet', 'network', 'signal', 'online'],
    outline: {
      strokes: WIFI_ARCS,
      dots: [{ cx: 12, cy: 18.5, scale: 1.25 }],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'wifi-off',
    category: 'devices',
    tags: ['offline', 'no-internet', 'disconnected'],
    outline: { strokes: WIFI_ARCS, dots: [{ cx: 12, cy: 18.5, scale: 1.25 }] },
    filled: {
      strokes: WIFI_ARCS,
      dots: [{ cx: 12, cy: 18.5, scale: 1.45 }],
      slash: M.SLASH_LINE,
    },
  },
  {
    name: 'bluetooth',
    category: 'devices',
    tags: ['wireless', 'pair', 'connect', 'audio'],
    outline: { strokes: [poly([[7, 7.5], [17, 16.5], [12, 20.5], [12, 3.5], [17, 7.5], [7, 16.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'signal',
    category: 'devices',
    tags: ['cellular', 'bars', '5g', 'network', 'reception'],
    outline: {
      strokes: [
        line(4.5, 19.5, 4.5, 16.5),
        line(9.5, 19.5, 9.5, 12.5),
        line(14.5, 19.5, 14.5, 8.5),
        line(19.5, 19.5, 19.5, 4.5),
      ],
    },
    filled: { boostedOutline: true, boostDelta: 0.65 },
  },
  {
    name: 'cast',
    category: 'devices',
    tags: ['chromecast', 'stream', 'screen-share', 'mirror'],
    outline: {
      strokes: [
        'M3.5 8.5V6.5A2 2 0 0 1 5.5 4.5H18.5A2 2 0 0 1 20.5 6.5V17.5A2 2 0 0 1 18.5 19.5H15',
        arc(3.5, 19.5, 7.5, -90, 0),
        arc(3.5, 19.5, 4, -90, 0),
      ],
      dots: [{ cx: 3.75, cy: 19.25, scale: 1.05 }],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'airplay',
    category: 'devices',
    tags: ['apple', 'stream', 'mirror', 'cast', 'screen'],
    outline: {
      strokes: [
        'M5.25 17.5H5A2 2 0 0 1 3 15.5V6.5A2 2 0 0 1 5 4.5H19A2 2 0 0 1 21 6.5V15.5A2 2 0 0 1 19 17.5H18.75',
        'M12 14.5L16.75 20.25H7.25L12 14.5Z',
      ],
    },
    filled: {
      solids: ['M12 14.5L16.75 20.25H7.25L12 14.5Z'],
      strokes: ['M5.25 17.5H5A2 2 0 0 1 3 15.5V6.5A2 2 0 0 1 5 4.5H19A2 2 0 0 1 21 6.5V15.5A2 2 0 0 1 19 17.5H18.75'],
    },
  },
  {
    name: 'nfc',
    category: 'devices',
    tags: ['contactless', 'tap', 'pay', 'rfid'],
    outline: {
      strokes: [M.SQUARE_FRAME, ...NFC_ARCS],
    },
    filled: {
      solids: [M.SQUARE_FRAME],
      cutoutStrokes: NFC_ARCS,
    },
  },
  {
    name: 'usb',
    category: 'devices',
    tags: ['port', 'cable', 'drive', 'connect'],
    outline: { strokes: [...USB_BRANCHES, ...USB_TERMINALS] },
    filled: { solids: USB_TERMINALS, strokes: USB_BRANCHES },
  },
  {
    name: 'plug',
    category: 'devices',
    tags: ['integration', 'power', 'connect', 'extension'],
    outline: {
      strokes: [
        line(9, 3.5, 9, 8.25),
        line(15, 3.5, 15, 8.25),
        'M6 8.25H18V11.5A6 6 0 0 1 6 11.5V8.25Z',
        line(12, 17.5, 12, 21),
      ],
    },
    filled: {
      solids: ['M6 8.25H18V11.5A6 6 0 0 1 6 11.5V8.25Z'],
      strokes: [line(9, 3.5, 9, 8.25), line(15, 3.5, 15, 8.25), line(12, 17.5, 12, 21)],
    },
  },
  {
    name: 'power',
    category: 'devices',
    tags: ['shutdown', 'start', 'toggle', 'standby', 'on-off'],
    outline: { strokes: [line(12, 3.5, 12, 11.5), arc(12, 12.5, 7.75, -55, 235)] },
    filled: { boostedOutline: true },
  },
]
