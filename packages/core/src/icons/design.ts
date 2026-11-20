import * as M from '../motifs.ts'
import { circle, line, poly, rect, regularPoly, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const PALETTE_BODY =
  'M12 3A9 9 0 0 0 3 12A9 9 0 0 0 12 21A2 2 0 0 0 14 19C14 18.45 13.8 18 13.5 17.65C13.2 17.3 13 16.85 13 16.35A2 2 0 0 1 15 14.35H17.25A3.75 3.75 0 0 0 21 10.6A8.4 8.4 0 0 0 12 3Z'
const BULB_BODY =
  'M8.5 15.25C7.25 14 6.25 12.1 6.25 9.75A5.75 5.75 0 1 1 17.75 9.75C17.75 12.1 16.75 14 15.5 15.25C15 15.75 14.75 16.35 14.75 17H9.25C9.25 16.35 9 15.75 8.5 15.25Z'
const WRENCH_BODY =
  'M16.75 3.75C12.85 3.5 9.4 6.75 9.875 10.625L4.375 16.125A2.475 2.475 0 0 0 7.875 19.625L13.375 14.125C17.25 14.6 20.5 11.15 20.25 7.25L17.25 10.25L13.75 6.75Z'

const BRUSH_HANDLE = 'M10.25 11.5L17.75 3.75Q18.75 2.75 19.75 3.75Q20.75 4.75 19.75 5.75L12 13.25Z'
const BRUSH_TUFT = 'M10.25 11.5C8.25 11.65 6.9 13.1 6.65 15C6.4 17.1 5.45 18.55 3.75 19.25C6 20.4 8.8 20.2 10.55 18.65C12 17.4 12.5 15.1 12 13.25'
const BUCKET_BODY = 'M18 11.5L10.75 4.25L4 11Q2.5 12.5 4 14L8.25 18.25Q9.75 19.75 11.25 18.25Z'
const BUCKET_HANDLE = line(7.25, 2.75, 9.75, 5.25)
const BUCKET_DROP = 'M19.35 15.5C19.35 15.5 17.35 17.8 17.35 19A2 2 0 0 0 21.35 19C21.35 17.8 19.35 15.5 19.35 15.5Z'
const PALETTE_WELLS = [
  { cx: 7.56, cy: 10.76 }, { cx: 9.58, cy: 7.53 },
  { cx: 13.28, cy: 6.61 }, { cx: 16.65, cy: 8.4 },
]
const SWATCH_FACE = rect(3.75, 3.75, 6.5, 16.5, 2)
const SWATCH_LEAVES = [
  'M10.25 7.75L15.25 5.25Q16.8 4.5 17.6 6.05L20 10.85Q20.8 12.4 19.25 13.2L10.25 17.7',
  'M16.25 14.7H18.75A1.75 1.75 0 0 1 20.5 16.45V18.5A1.75 1.75 0 0 1 18.75 20.25H8.25',
]
const RULER_BODY = roundedPoly([[16, 3.5], [20.5, 8], [8, 20.5], [3.5, 16]], 0.75, true)
const RULER_TICKS = [6, 9.15, 12.3].map((y, i) => {
  const x = 19.5 - y
  const length = i === 1 ? 2.2 : 1.65
  return line(x, y, x + length, y + length)
})
const HAMMER_HEAD = roundedPoly([[12, 6.5], [15, 3.5], [20.5, 9], [17.5, 12]], 0.6, true)
const HAMMER_HANDLE = 'M14.25 8.75L4.25 18.75A1.414 1.414 0 0 0 6.25 20.75L16.25 10.75'

const PEN_BARREL = 'M9 5A1.5 1.5 0 0 1 10.5 3.5H13A1.5 1.5 0 0 1 14.5 5V15.5L11.75 20.5L9 15.5Z'
const PEN_CLIP = 'M14.5 6H16A1.5 1.5 0 0 1 17.5 7.5V12'
const PIPETTE_BULB = 'M12.25 8.75L16.75 4.25A2.15 2.15 0 0 1 19.75 7.25L15.25 11.75Z'
const PIPETTE_TUBE = 'M12 9L5.6 15.4Q4.75 16.25 4.75 17.5Q4.75 18.15 3.65 19.25Q3.35 19.55 3.9 20.1Q4.45 20.65 4.75 20.35Q5.85 19.25 6.5 19.25Q7.75 19.25 8.6 18.4L15 12'
const PIPETTE_COLLAR = line(10.5, 7, 17, 13.5)

const TOGGLE_TRACK = rect(3, 6.5, 18, 11, 5.5)

export const designIcons: IconDef[] = [
  {
    name: 'pen',
    category: 'design',
    tags: ['write', 'draw', 'sign', 'ink'],
    outline: { strokes: [PEN_BARREL, PEN_CLIP, line(9, 15.5, 14.5, 15.5)] },
    filled: { solids: [PEN_BARREL], strokes: [PEN_CLIP], cutoutStrokes: [line(10.25, 15.5, 13.25, 15.5)] },
  },
  {
    name: 'pencil',
    category: 'design',
    tags: ['sketch', 'edit', 'draw', 'annotate'],
    outline: {
      strokes: [M.PENCIL_BODY, line(13.25, 7, 17, 10.75), line(6.25, 14, 10, 17.75)],
    },
    filled: {
      solids: [M.PENCIL_BODY],
      cutoutStrokes: [
        { d: line(14, 7.75, 16.25, 10), widthScale: 0.74 },
        { d: line(7, 14.75, 9.25, 17), widthScale: 0.74 },
      ],
    },
  },
  {
    name: 'pen-tool',
    category: 'design',
    tags: ['vector', 'bezier', 'figma', 'path', 'illustrator'],
    outline: {
      strokes: [
        'M12 18.5L18.5 12L21 14.5L14.5 21L12 18.5Z',
        'M17.5 13L15.75 6.25L3.5 3.5L6.25 15.75L13 17.5',
        line(3.5, 3.5, 10, 10),
        circle(11.25, 11.25, 1.75),
      ],
    },
    filled: {
      solids: [
        { d: 'M17.5 13L15.75 6.25L2.75 2.75L6.25 15.75L13 17.5L17.5 13Z', expand: false },
        { d: 'M12.85 19.35L19.35 12.85L22 15.5L15.5 22Z', expand: false },
      ],
      cutoutFills: [circle(11.25, 11.25, 2)],
      cutoutStrokes: [line(2.75, 2.75, 10, 10)],
    },
  },
  {
    name: 'brush',
    category: 'design',
    tags: ['paint', 'style', 'art', 'format'],
    outline: { strokes: [BRUSH_HANDLE, BRUSH_TUFT] },
    filled: { solids: [BRUSH_HANDLE, BRUSH_TUFT + 'Z'] },
  },
  {
    name: 'paint-bucket',
    category: 'design',
    tags: ['fill', 'color', 'background', 'theme'],
    outline: { strokes: [BUCKET_BODY, BUCKET_HANDLE, line(3.583, 11.5, 18, 11.5), BUCKET_DROP] },
    filled: {
      solids: [BUCKET_BODY, { d: BUCKET_DROP, expand: false }],
      cutoutStrokes: [line(5.25, 11.5, 16.25, 11.5)],
      strokes: [BUCKET_HANDLE],
    },
  },
  {
    name: 'palette',
    category: 'design',
    tags: ['color', 'theme', 'appearance', 'brand', 'art'],
    outline: { strokes: [PALETTE_BODY], dots: PALETTE_WELLS },
    filled: { solids: [PALETTE_BODY], cutoutDots: PALETTE_WELLS.map(well => ({ ...well, scale: 1.2 })) },
  },
  {
    name: 'pipette',
    category: 'design',
    tags: ['eyedropper', 'color-picker', 'sample', 'hex'],
    outline: { strokes: [PIPETTE_BULB, PIPETTE_TUBE, PIPETTE_COLLAR] },
    filled: { solids: [PIPETTE_BULB], strokes: [PIPETTE_TUBE, PIPETTE_COLLAR] },
  },
  {
    name: 'swatch',
    category: 'design',
    tags: ['tokens', 'colors', 'themes', 'fan'],
    outline: { strokes: [SWATCH_FACE, ...SWATCH_LEAVES], dots: [{ cx: 7, cy: 16.75 }] },
    filled: {
      solids: [SWATCH_FACE],
      cutoutDots: [{ cx: 7, cy: 16.75, scale: 1.1 }],
      strokes: SWATCH_LEAVES,
    },
  },
  {
    name: 'ruler',
    category: 'design',
    tags: ['measure', 'size', 'dimensions', 'spacing', 'estimate'],
    outline: { strokes: [RULER_BODY, ...RULER_TICKS] },
    filled: { solids: [RULER_BODY], cutoutStrokes: RULER_TICKS },
  },

  // Hardware & craft tools
  {
    name: 'wrench',
    category: 'design',
    tags: ['tool', 'fix', 'repair', 'maintenance', 'build'],
    outline: { strokes: [WRENCH_BODY] },
    filled: { solids: [WRENCH_BODY] },
  },
  {
    name: 'hammer',
    category: 'design',
    tags: ['build', 'construct', 'tool', 'make'],
    outline: { strokes: [HAMMER_HEAD, HAMMER_HANDLE] },
    filled: { solids: [HAMMER_HEAD, HAMMER_HANDLE + 'Z'] },
  },
  {
    name: 'nut',
    category: 'design',
    tags: ['bolt', 'hardware', 'hexagon', 'config'],
    outline: { strokes: [regularPoly(12, 12, 9.25, 6, -90, 1.5), circle(12, 12, 3.25)] },
    filled: { solids: [regularPoly(12, 12, 9.25, 6, -90, 1.5)], cutoutFills: [circle(12, 12, 3.65)] },
  },
  {
    name: 'magnet',
    category: 'design',
    tags: ['snap', 'attract', 'align', 'dock'],
    outline: {
      strokes: [
        'M5.5 4.25H9.25V12.5A2.75 2.75 0 0 0 14.75 12.5V4.25H18.5V12.5A6.5 6.5 0 0 1 5.5 12.5V4.25Z',
        line(5.5, 8.25, 9.25, 8.25),
        line(14.75, 8.25, 18.5, 8.25),
      ],
    },
    filled: {
      solids: ['M5.5 4.25H9.25V12.5A2.75 2.75 0 0 0 14.75 12.5V4.25H18.5V12.5A6.5 6.5 0 0 1 5.5 12.5V4.25Z'],
      cutoutStrokes: [line(5, 8.25, 9.75, 8.25), line(14.25, 8.25, 19, 8.25)],
    },
  },
  {
    name: 'flashlight',
    category: 'design',
    tags: ['torch', 'beam', 'search', 'light'],
    outline: {
      strokes: [
        'M7.5 3.5H16.5V7.5L14.5 10.5V19.25A1.5 1.5 0 0 1 13 20.75H11A1.5 1.5 0 0 1 9.5 19.25V10.5L7.5 7.5V3.5Z',
        line(7.5, 7, 16.5, 7),
        line(12, 12.5, 12, 14.5),
      ],
    },
    filled: {
      solids: ['M7.5 3.5H16.5V7.5L14.5 10.5V19.25A1.5 1.5 0 0 1 13 20.75H11A1.5 1.5 0 0 1 9.5 19.25V10.5L7.5 7.5V3.5Z'],
      cutoutStrokes: [line(7, 6.75, 17, 6.75), line(12, 12.25, 12, 14.5)],
    },
  },
  {
    name: 'lightbulb',
    category: 'design',
    tags: ['idea', 'tip', 'insight', 'suggestion', 'hint'],
    outline: { strokes: [BULB_BODY, line(9.5, 20.25, 14.5, 20.25)] },
    filled: { solids: [BULB_BODY], strokes: [line(9.5, 20.25, 14.5, 20.25)] },
  },
  {
    name: 'lamp',
    category: 'design',
    tags: ['desk', 'light', 'workspace', 'interior'],
    outline: {
      strokes: [
        'M8 4.25H16L19 12.25H5L8 4.25Z',
        line(12, 12.25, 12, 19.75),
        line(8.25, 19.75, 15.75, 19.75),
      ],
    },
    filled: {
      solids: ['M8 4.25H16L19 12.25H5L8 4.25Z'],
      strokes: [line(12, 12.25, 12, 19.75), line(8.25, 19.75, 15.75, 19.75)],
    },
  },

  // Controls & display
  {
    name: 'toggle-left',
    category: 'design',
    tags: ['switch', 'off', 'disabled', 'boolean'],
    outline: { strokes: [TOGGLE_TRACK, circle(8.5, 12, 2.6)] },
    filled: { solids: [TOGGLE_TRACK], cutoutFills: [circle(8.5, 12, 3.3)] },
  },
  {
    name: 'toggle-right',
    category: 'design',
    tags: ['switch', 'on', 'enabled', 'boolean'],
    outline: { strokes: [TOGGLE_TRACK, circle(15.5, 12, 2.6)] },
    filled: { solids: [TOGGLE_TRACK], cutoutFills: [circle(15.5, 12, 3.3)] },
  },
  {
    name: 'contrast',
    category: 'design',
    tags: ['theme', 'invert', 'appearance', 'accessibility'],
    outline: { strokes: [M.CIRCLE_FRAME], fills: ['M12 3A9 9 0 0 1 12 21Z'] },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutFills: ['M12 4.75A7.25 7.25 0 0 0 12 19.25V4.75Z'],
    },
  },
  {
    name: 'sun-dim',
    category: 'design',
    tags: ['brightness', 'low-light', 'screen', 'display'],
    outline: {
      strokes: [circle(12, 12, 4.25)],
      dots: [
        { cx: 12, cy: 4, scale: 1 },
        { cx: 12, cy: 20, scale: 1 },
        { cx: 4, cy: 12, scale: 1 },
        { cx: 20, cy: 12, scale: 1 },
        { cx: 6.35, cy: 6.35, scale: 1 },
        { cx: 17.65, cy: 17.65, scale: 1 },
        { cx: 17.65, cy: 6.35, scale: 1 },
        { cx: 6.35, cy: 17.65, scale: 1 },
      ],
    },
    filled: {
      solids: [circle(12, 12, 4.5)],
      dots: [
        { cx: 12, cy: 4, scale: 1.2 },
        { cx: 12, cy: 20, scale: 1.2 },
        { cx: 4, cy: 12, scale: 1.2 },
        { cx: 20, cy: 12, scale: 1.2 },
        { cx: 6.35, cy: 6.35, scale: 1.2 },
        { cx: 17.65, cy: 17.65, scale: 1.2 },
        { cx: 17.65, cy: 6.35, scale: 1.2 },
        { cx: 6.35, cy: 17.65, scale: 1.2 },
      ],
    },
  },
]
