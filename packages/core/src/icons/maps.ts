import * as M from '../motifs.ts'
import { circle, line, poly, rect, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const MAP_PIN_BODY =
  'M12 20.75C12 20.75 18.75 15.1 18.75 9.75A6.75 6.75 0 0 0 5.25 9.75C5.25 15.1 12 20.75 12 20.75Z'
const NAV_ARROW = roundedPoly([[3.5, 11], [20.25, 3.75], [13, 20.5], [11.15, 12.85]], 0.85, true)
const COMPASS_NEEDLE = 'M15.75 8.25L13.75 13.75L8.25 15.75L10.25 10.25L15.75 8.25Z'
const ROCKET_BODY =
  'M12.5 16.5L7.5 11.5C9.5 7 14 4.25 19.75 4.25C19.75 10 17 14.5 12.5 16.5Z'

const signpostUpper = 'M7 5.25H18L21 8L18 10.75H7Z'
const signpostLower = 'M17 13.25H6L3 16L6 18.75H17Z'
const schoolFlag = 'M12 8V2.75L18 4.75L12 6.75'
const schoolBody = 'M5 12L12 8L19 12V20.5H5Z'
const schoolDoor = 'M10 20.5V16.5A2 2 0 0 1 14 16.5V20.5'
const carBody =
  'M3.5 12.25L5.9 6.25A2 2 0 0 1 7.75 5H16.25A2 2 0 0 1 18.1 6.25L20.5 12.25V17.25H3.5Z'
const carWheels = ['M4.75 17.25V19.5H7.25V17.25', 'M16.75 17.25V19.5H19.25V17.25']
const carLights = [line(6.5, 14.25, 8.25, 14.25), line(15.75, 14.25, 17.5, 14.25)]

const shipHull = 'M3.25 11.75L12 9L20.75 11.75L18.25 17L12 18.25L5.75 17Z'
const shipCabin = 'M6 10.75V6A1.25 1.25 0 0 1 7.25 4.75H16.75A1.25 1.25 0 0 1 18 6V10.75'
const shipMast = line(12, 2.75, 12, 4.75)
const shipWake = 'M3 20.5Q5.25 19.25 7.5 20.5T12 20.5T16.5 20.5T21 20.5'

export const mapIcons: IconDef[] = [
  {
    name: 'map',
    category: 'maps',
    tags: ['location', 'world', 'atlas', 'navigation', 'directions'],
    outline: {
      strokes: [
        'M3.5 6.25L9 4L15 6.25L20.5 4V17.75L15 20L9 17.75L3.5 20V6.25Z',
        line(9, 4, 9, 17.75),
        line(15, 6.25, 15, 20),
      ],
    },
    filled: {
      solids: ['M3.5 6.25L9 4L15 6.25L20.5 4V17.75L15 20L9 17.75L3.5 20V6.25Z'],
      cutoutStrokes: [line(9, 3.5, 9, 18.25), line(15, 5.75, 15, 20.5)],
    },
  },
  {
    name: 'map-pin',
    category: 'maps',
    tags: ['location', 'marker', 'place', 'address', 'gps'],
    outline: { strokes: [MAP_PIN_BODY, circle(12, 9.75, 2.5)] },
    filled: { solids: [MAP_PIN_BODY], cutoutFills: [circle(12, 9.75, 2.75)] },
  },
  {
    name: 'map-pin-off',
    category: 'maps',
    tags: ['no-location', 'gps-off', 'privacy'],
    outline: { strokes: [MAP_PIN_BODY, circle(12, 9.75, 2.5)] },
    filled: { solids: [MAP_PIN_BODY], cutoutFills: [circle(12, 9.75, 2.75)], slash: M.SLASH_LINE },
  },
  {
    name: 'navigation',
    category: 'maps',
    tags: ['gps', 'cursor', 'location', 'direction', 'pointer'],
    outline: { strokes: [NAV_ARROW] },
    filled: { solids: [NAV_ARROW] },
  },
  {
    name: 'compass',
    category: 'maps',
    tags: ['explore', 'discover', 'safari', 'direction', 'north'],
    outline: { strokes: [M.CIRCLE_FRAME, COMPASS_NEEDLE] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutFills: [COMPASS_NEEDLE] },
  },
  {
    name: 'route',
    category: 'maps',
    tags: ['path', 'journey', 'directions', 'roadmap'],
    outline: {
      strokes: [
        circle(6.25, 18, 2.25),
        circle(17.75, 6, 2.25),
        'M8.5 18H14A3 3 0 0 0 14 12H10A3 3 0 0 1 10 6H15.5',
      ],
    },
    filled: {
      solids: [circle(6.25, 18, 2.25), circle(17.75, 6, 2.25)],
      strokes: ['M8.5 18H14A3 3 0 0 0 14 12H10A3 3 0 0 1 10 6H15.5'],
    },
  },
  {
    name: 'signpost',
    category: 'maps',
    tags: ['directions', 'guide', 'wayfinding', 'road'],
    outline: {
      strokes: [signpostUpper, signpostLower, line(12, 2.75, 12, 5.25), line(12, 10.75, 12, 13.25), line(12, 18.75, 12, 21.25)],
    },
    filled: { solids: [signpostUpper, signpostLower], strokes: [line(12, 2.75, 12, 21.25)] },
  },
  {
    name: 'milestone',
    category: 'maps',
    tags: ['goal', 'roadmap', 'checkpoint', 'stage'],
    outline: {
      strokes: [
        'M5 5.5H16.75L20 9L16.75 12.5H5A1.25 1.25 0 0 1 3.75 11.25V6.75A1.25 1.25 0 0 1 5 5.5Z',
        line(12, 3, 12, 5.5),
        line(12, 12.5, 12, 21),
        line(8.5, 21, 15.5, 21),
      ],
    },
    filled: {
      solids: ['M5 5.5H16.75L20 9L16.75 12.5H5A1.25 1.25 0 0 1 3.75 11.25V6.75A1.25 1.25 0 0 1 5 5.5Z'],
      strokes: [line(12, 3, 12, 21), line(8.5, 21, 15.5, 21)],
    },
  },

  // Buildings & places
  {
    name: 'building',
    category: 'maps',
    tags: ['office', 'company', 'enterprise', 'hq', 'construction'],
    outline: {
      strokes: [
        rect(5.25, 3, 13.5, 18, 2),
        line(3, 21, 21, 21),
        'M9.75 21V16.75A1 1 0 0 1 10.75 15.75H13.25A1 1 0 0 1 14.25 16.75V21',
      ],
      dots: [
        { cx: 9.25, cy: 7.25, scale: 0.9 },
        { cx: 14.75, cy: 7.25, scale: 0.9 },
        { cx: 9.25, cy: 11.25, scale: 0.9 },
        { cx: 14.75, cy: 11.25, scale: 0.9 },
      ],
    },
    filled: {
      solids: [rect(5.25, 3, 13.5, 18, 2)],
      cutoutFills: ['M9.5 21.5V16.5A1 1 0 0 1 10.5 15.5H13.5A1 1 0 0 1 14.5 16.5V21.5Z'],
      cutoutDots: [
        { cx: 9.25, cy: 7.5, scale: 1.15 },
        { cx: 14.75, cy: 7.5, scale: 1.15 },
        { cx: 9.25, cy: 11.5, scale: 1.15 },
        { cx: 14.75, cy: 11.5, scale: 1.15 },
      ],
      strokes: [line(3, 21, 21, 21)],
    },
  },
  {
    name: 'building-2',
    category: 'maps',
    tags: ['city', 'skyline', 'campus', 'real-estate'],
    outline: {
      strokes: [
        'M6 20.5V5A1.5 1.5 0 0 1 7.5 3.5H14.5A1.5 1.5 0 0 1 16 5V20.5',
        'M16 9.5H18.5A1.5 1.5 0 0 1 20 11V20.5',
        'M6 12H4A1.25 1.25 0 0 0 2.75 13.25V20.5',
        line(2.5, 20.5, 21.5, 20.5),
        line(9.5, 7.5, 12.5, 7.5),
        line(9.5, 11.5, 12.5, 11.5),
        line(9.5, 15.5, 12.5, 15.5),
      ],
    },
    filled: {
      solids: [
        'M6 20.5V5A1.5 1.5 0 0 1 7.5 3.5H14.5A1.5 1.5 0 0 1 16 5V20.5Z',
        'M16 9.5H18.5A1.5 1.5 0 0 1 20 11V20.5H16V9.5Z',
        'M6 12H4A1.25 1.25 0 0 0 2.75 13.25V20.5H6V12Z',
      ],
      cutoutStrokes: [line(9.5, 7.5, 12.5, 7.5), line(9.5, 11.5, 12.5, 11.5), line(9.5, 15.5, 12.5, 15.5)],
      strokes: [line(2.5, 20.5, 21.5, 20.5)],
    },
  },
  {
    name: 'factory',
    category: 'maps',
    tags: ['industrial', 'manufacturing', 'plant', 'build'],
    outline: {
      strokes: [
        'M3.5 20V10L9.5 13.5V10L15.5 13.5V5A1.25 1.25 0 0 1 16.75 3.75H19.25A1.25 1.25 0 0 1 20.5 5V20H3.5Z',
        line(7.5, 16.75, 9.5, 16.75),
        line(13.5, 16.75, 15.5, 16.75),
      ],
    },
    filled: {
      solids: ['M3.5 20V10L9.5 13.5V10L15.5 13.5V5A1.25 1.25 0 0 1 16.75 3.75H19.25A1.25 1.25 0 0 1 20.5 5V20H3.5Z'],
      cutoutStrokes: [line(7.5, 16.75, 9.5, 16.75), line(13.5, 16.75, 15.5, 16.75)],
    },
  },
  {
    name: 'hospital',
    category: 'maps',
    tags: ['healthcare', 'medical', 'clinic', 'emergency'],
    outline: {
      strokes: [
        rect(4.5, 3.5, 15, 17, 2),
        line(12, 7.5, 12, 13.5),
        line(9, 10.5, 15, 10.5),
        'M9.75 20.5V16.75A1 1 0 0 1 10.75 15.75H13.25A1 1 0 0 1 14.25 16.75V20.5',
      ],
    },
    filled: {
      solids: [rect(4.5, 3.5, 15, 17, 2)],
      cutoutStrokes: [line(12, 7.5, 12, 13.5), line(9, 10.5, 15, 10.5)],
      cutoutFills: ['M9.5 21V16.5A1 1 0 0 1 10.5 15.5H13.5A1 1 0 0 1 14.5 16.5V21Z'],
    },
  },
  {
    name: 'school',
    category: 'maps',
    tags: ['campus', 'education', 'university', 'academy'],
    outline: { strokes: [schoolFlag, schoolBody, schoolDoor] },
    filled: { solids: [schoolBody], cutoutFills: [schoolDoor + 'V22H10Z'], strokes: [schoolFlag] },
  },
  {
    name: 'warehouse',
    category: 'maps',
    tags: ['storage', 'depot', 'logistics', 'inventory'],
    outline: {
      strokes: [
        'M3.5 9.25L12 4L20.5 9.25V19.75H3.5V9.25Z',
        rect(7.25, 12.25, 9.5, 7.5, 1),
        line(7.25, 16, 16.75, 16),
      ],
    },
    filled: {
      solids: ['M3.5 9.25L12 4L20.5 9.25V19.75H3.5V9.25Z'],
      cutoutFills: [rect(7.25, 12.25, 9.5, 8, 1)],
      topSolids: [{ d: rect(8.5, 14.25, 7, 1.5, 0.5), expand: false }, { d: rect(8.5, 17.25, 7, 1.5, 0.5), expand: false }],
    },
  },

  // Vehicles & travel
  {
    name: 'car',
    category: 'maps',
    tags: ['drive', 'auto', 'vehicle', 'commute', 'transport'],
    outline: { strokes: [carBody, line(3.8, 11.5, 20.2, 11.5), line(6, 17.25, 6, 19.5), line(18, 17.25, 18, 19.5), ...carLights] },
    filled: {
      solids: [carBody, ...carWheels],
      cutoutFills: ['M6 10.75L7.5 7H16.5L18 10.75Z'],
      cutoutStrokes: carLights,
    },
  },
  {
    name: 'plane',
    category: 'maps',
    tags: ['flight', 'travel', 'airport', 'airplane', 'trip'],
    outline: {
      strokes: [
        'M20 4C19 3 17.5 4 16 5.5L13.5 8L5.25 5.5L3.75 7L10.25 11.25L7.25 14.25L4.5 13.75L3.25 15L6.5 17.5L9 20.75L10.25 19.5L9.75 16.75L12.75 13.75L17 20.25L18.5 18.75L16 10.5L18.5 8C20 6.5 21 5 20 4Z',
      ],
    },
    filled: {
      solids: [
        'M20 4C19 3 17.5 4 16 5.5L13.5 8L5.25 5.5L3.75 7L10.25 11.25L7.25 14.25L4.5 13.75L3.25 15L6.5 17.5L9 20.75L10.25 19.5L9.75 16.75L12.75 13.75L17 20.25L18.5 18.75L16 10.5L18.5 8C20 6.5 21 5 20 4Z',
      ],
    },
  },
  {
    name: 'train',
    category: 'maps',
    tags: ['rail', 'transit', 'subway', 'commute'],
    outline: {
      strokes: [
        rect(5.5, 3.5, 13, 14, 3),
        line(5.5, 11.5, 18.5, 11.5),
        line(8.25, 17.5, 6.25, 20.75),
        line(15.75, 17.5, 17.75, 20.75),
        line(6.5, 20, 17.5, 20),
      ],
      dots: [{ cx: 8.75, cy: 14.5, scale: 0.9 }, { cx: 15.25, cy: 14.5, scale: 0.9 }],
    },
    filled: {
      solids: [rect(5.5, 3.5, 13, 14, 3)],
      cutoutFills: [rect(7.25, 5.5, 9.5, 5.25, 1.25)],
      cutoutDots: [{ cx: 8.75, cy: 14.5, scale: 1.05 }, { cx: 15.25, cy: 14.5, scale: 1.05 }],
      strokes: [line(8.25, 17.5, 6.25, 20.75), line(15.75, 17.5, 17.75, 20.75), line(6.5, 20, 17.5, 20)],
    },
  },
  {
    name: 'ship',
    category: 'maps',
    tags: ['boat', 'freight', 'deploy', 'launch', 'ocean'],
    outline: { strokes: [shipHull, shipCabin, shipMast, shipWake] },
    filled: { solids: [shipHull], strokes: [shipCabin, shipMast, shipWake] },
  },
  {
    name: 'bike',
    category: 'maps',
    tags: ['bicycle', 'cycling', 'fitness', 'eco'],
    outline: {
      strokes: [
        circle(6, 17, 3),
        circle(18, 17, 3),
        'M6 14L9 9.75H16L11.5 17L7.75 6.125',
        line(5.75, 6.125, 9.75, 6.125),
        'M12.5 4.5H13.4Q14.5 4.5 15 6.25L16.85 14.23',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'rocket',
    category: 'maps',
    tags: ['launch', 'ship', 'deploy', 'startup', 'fast'],
    outline: {
      strokes: [
        ROCKET_BODY,
        'M7.5 11.5L4 12.75L5.75 15.75L8.25 14.75',
        'M12.5 16.5L11.25 20L8.25 18.25L9.25 15.75',
        'M5.5 18.5C4.25 19.75 3.75 20.25 3.75 20.25',
      ],
      dots: [{ cx: 14.25, cy: 9.75, scale: 1.1 }],
    },
    filled: {
      solids: [ROCKET_BODY],
      cutoutDots: [{ cx: 14.25, cy: 9.75, scale: 1.3 }],
      strokes: ['M7.5 11.5L4 12.75L5.75 15.75L8.25 14.75', 'M12.5 16.5L11.25 20L8.25 18.25L9.25 15.75', line(5.5, 18.5, 3.75, 20.25)],
    },
  },
]
