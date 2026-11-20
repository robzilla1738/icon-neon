import * as M from '../motifs.ts'
import { arc, circle, line, poly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const MOON_CRESCENT =
  'M19.75 14.25A8 8 0 0 1 9.75 4.25A8.25 8.25 0 1 0 19.75 14.25Z'
const DROPLET_BODY =
  'M12 3.25C12 3.25 5.5 10.1 5.5 14.5A6.5 6.5 0 0 0 18.5 14.5C18.5 10.1 12 3.25 12 3.25Z'
const ZAP_BOLT =
  'M13.25 3L4.5 13.5H11.5L10.75 21L19.5 10.5H12.5L13.25 3Z'
const LEAF_BODY =
  'M19.75 4.25C11.5 4.25 5.25 8.5 5.25 15.5C5.25 17.5 6 19 7.25 19.75C14.25 19.75 19.75 13.75 19.75 4.25Z'
const CLOUD_SMALL =
  'M6.75 15.75H17.25A3.75 3.75 0 0 0 17.65 8.28A5 5 0 0 0 8 7A4.4 4.4 0 0 0 6.75 15.75Z'

const CLOUD_SUN_BODY =
  'M6.75 19.5H15A4.15 4.15 0 0 0 15.4 11.22A4.85 4.85 0 0 0 6.37 11.02A4.25 4.25 0 0 0 6.75 19.5Z'
const CLOUD_SUN_DETAIL = [
  arc(14.5, 9.6, 3.1, -143, 50),
  line(14.5, 3, 14.5, 4.25),
  line(18.28, 5.82, 19.17, 4.93),
  line(19.85, 9.6, 21.1, 9.6),
]
const RAIN_STREAKS = [line(8.25, 18.75, 7.25, 20.75), line(12.25, 18.75, 11.25, 20.75), line(16.25, 18.75, 15.25, 20.75)]
const LIGHTNING_STREAK = poly([[13, 11.5], [10.5, 15.75], [14, 15.75], [11.5, 20.25]])
const THERMOMETER_BODY =
  'M14.75 13.35V5.25A2.75 2.75 0 0 0 9.25 5.25V13.35A4.25 4.25 0 1 0 14.75 13.35Z'

const UMBRELLA_CANOPY = 'M3 13A9 9 0 0 1 21 13Q18.75 10.75 16.5 13Q14.25 10.75 12 13Q9.75 10.75 7.5 13Q5.25 10.75 3 13Z'
const UMBRELLA_HANDLE = 'M12 13V18.5A2.25 2.25 0 0 1 7.5 18.5'

export const weatherIcons: IconDef[] = [
  {
    name: 'sun',
    category: 'weather',
    tags: ['light-mode', 'day', 'bright', 'weather', 'solar'],
    outline: {
      strokes: [
        circle(12, 12, 4.25),
        line(12, 2.75, 12, 4.75),
        line(12, 19.25, 12, 21.25),
        line(2.75, 12, 4.75, 12),
        line(19.25, 12, 21.25, 12),
        line(5.46, 5.46, 6.88, 6.88),
        line(17.12, 17.12, 18.54, 18.54),
        line(18.54, 5.46, 17.12, 6.88),
        line(6.88, 17.12, 5.46, 18.54),
      ],
    },
    filled: {
      solids: [circle(12, 12, 4.5)],
      strokes: [
        line(12, 2.75, 12, 4.75),
        line(12, 19.25, 12, 21.25),
        line(2.75, 12, 4.75, 12),
        line(19.25, 12, 21.25, 12),
        line(5.46, 5.46, 6.88, 6.88),
        line(17.12, 17.12, 18.54, 18.54),
        line(18.54, 5.46, 17.12, 6.88),
        line(6.88, 17.12, 5.46, 18.54),
      ],
    },
  },
  {
    name: 'moon',
    category: 'weather',
    tags: ['dark-mode', 'night', 'sleep', 'theme'],
    outline: { strokes: [MOON_CRESCENT] },
    filled: { solids: [MOON_CRESCENT] },
  },
  {
    name: 'sun-moon',
    category: 'weather',
    tags: ['theme', 'system', 'auto', 'light-dark'],
    outline: {
      strokes: [
        'M12 7.5A4.5 4.5 0 1 0 16.5 12A3.25 3.25 0 0 1 12 7.5Z',
        line(12, 2.75, 12, 4.5),
        line(12, 19.5, 12, 21.25),
        line(2.75, 12, 4.5, 12),
        line(19.5, 12, 21.25, 12),
        line(5.5, 5.5, 6.75, 6.75),
        line(17.25, 17.25, 18.5, 18.5),
        line(5.5, 18.5, 6.75, 17.25),
      ],
    },
    filled: {
      solids: ['M12 7.5A4.5 4.5 0 1 0 16.5 12A3.25 3.25 0 0 1 12 7.5Z'],
      strokes: [
        line(12, 2.75, 12, 4.5),
        line(12, 19.5, 12, 21.25),
        line(2.75, 12, 4.5, 12),
        line(19.5, 12, 21.25, 12),
        line(5.5, 5.5, 6.75, 6.75),
        line(17.25, 17.25, 18.5, 18.5),
        line(5.5, 18.5, 6.75, 17.25),
      ],
    },
  },
  {
    name: 'cloud-sun',
    category: 'weather',
    tags: ['partly-cloudy', 'forecast', 'day'],
    outline: {
      strokes: [CLOUD_SUN_BODY, ...CLOUD_SUN_DETAIL],
    },
    filled: { solids: [CLOUD_SUN_BODY], strokes: CLOUD_SUN_DETAIL },
  },
  {
    name: 'cloud-rain',
    category: 'weather',
    tags: ['shower', 'wet', 'weather', 'forecast'],
    outline: {
      strokes: [CLOUD_SMALL, ...RAIN_STREAKS],
    },
    filled: {
      solids: [CLOUD_SMALL],
      strokes: RAIN_STREAKS,
    },
  },
  {
    name: 'cloud-snow',
    category: 'weather',
    tags: ['winter', 'blizzard', 'cold', 'forecast'],
    outline: {
      strokes: [CLOUD_SMALL],
      dots: [{ cx: 8.25, cy: 19.75, scale: 1.05 }, { cx: 12.25, cy: 20.25, scale: 1.05 }, { cx: 16.25, cy: 19.75, scale: 1.05 }],
    },
    filled: {
      solids: [CLOUD_SMALL],
      dots: [{ cx: 8.25, cy: 19.75, scale: 1.15 }, { cx: 12.25, cy: 20.25, scale: 1.15 }, { cx: 16.25, cy: 19.75, scale: 1.15 }],
    },
  },
  {
    name: 'cloud-lightning',
    category: 'weather',
    tags: ['storm', 'thunder', 'weather', 'forecast'],
    outline: {
      strokes: [
        'M6.75 15.75H7.5M17 15.75H17.25A3.75 3.75 0 0 0 17.65 8.28A5 5 0 0 0 8 7A4.4 4.4 0 0 0 6.75 15.75',
        LIGHTNING_STREAK,
      ],
    },
    filled: {
      solids: [CLOUD_SMALL],
      cutoutStrokes: [{ d: LIGHTNING_STREAK, widthScale: 2.35 }],
      strokes: [LIGHTNING_STREAK],
    },
  },
  {
    name: 'wind',
    category: 'weather',
    tags: ['breeze', 'air', 'airflow', 'gust', 'speed'],
    outline: {
      strokes: [
        'M3.5 9.25H14.5A2.5 2.5 0 1 0 12.5 5.25',
        'M3.5 13H18A2.5 2.5 0 1 1 16 17',
        'M3.5 16.75H9.5A2 2 0 1 1 8 20',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'droplet',
    category: 'weather',
    tags: ['water', 'rain', 'humidity', 'liquid', 'opacity'],
    outline: { strokes: [DROPLET_BODY] },
    filled: { solids: [DROPLET_BODY] },
  },
  {
    name: 'snowflake',
    category: 'weather',
    tags: ['freeze', 'cold', 'winter', 'ice', 'frost'],
    outline: {
      strokes: [
        line(12, 3, 12, 21),
        line(4.21, 7.5, 19.79, 16.5),
        line(4.21, 16.5, 19.79, 7.5),
        poly([[10.25, 4.75], [12, 6.25], [13.75, 4.75]]),
        poly([[10.25, 19.25], [12, 17.75], [13.75, 19.25]]),
        poly([[4.85, 9.89], [7.02, 9.13], [6.6, 6.86]]),
        poly([[19.15, 14.11], [16.98, 14.87], [17.4, 17.14]]),
        poly([[4.85, 14.11], [7.02, 14.87], [6.6, 17.14]]),
        poly([[19.15, 9.89], [16.98, 9.13], [17.4, 6.86]]),
      ],
    },
    filled: { boostedOutline: true, boostDelta: 0.2 },
  },
  {
    name: 'thermometer',
    category: 'weather',
    tags: ['temperature', 'heat', 'climate', 'fever'],
    outline: {
      strokes: [
        THERMOMETER_BODY,
        line(12, 11.5, 12, 16.6),
      ],
      dots: [{ cx: 12, cy: 16.6, scale: 1.35 }],
    },
    filled: {
      solids: [THERMOMETER_BODY],
      cutoutStrokes: [line(12, 5.75, 12, 10.25)],
    },
  },
  {
    name: 'umbrella',
    category: 'weather',
    tags: ['rain', 'protection', 'coverage', 'insurance'],
    outline: { strokes: [UMBRELLA_CANOPY, UMBRELLA_HANDLE, line(12, 2.75, 12, 4)] },
    filled: { solids: [UMBRELLA_CANOPY], strokes: [UMBRELLA_HANDLE, line(12, 2.75, 12, 4)] },
  },
  {
    name: 'rainbow',
    category: 'weather',
    tags: ['color', 'spectrum', 'sky', 'pride'],
    outline: {
      strokes: [
        'M3 16.75A9 9 0 0 1 21 16.75',
        'M6.25 16.75A5.75 5.75 0 0 1 17.75 16.75',
        'M9.5 16.75A2.5 2.5 0 0 1 14.5 16.75',
      ],
    },
    filled: { boostedOutline: true, boostDelta: 0.25 },
  },
  {
    name: 'zap',
    category: 'weather',
    tags: ['lightning', 'fast', 'power', 'energy', 'action', 'bolt'],
    outline: { strokes: [ZAP_BOLT] },
    filled: { solids: [ZAP_BOLT] },
  },
  {
    name: 'zap-off',
    category: 'weather',
    tags: ['no-flash', 'power-off', 'disabled', 'bolt'],
    outline: { strokes: [ZAP_BOLT] },
    filled: { solids: [ZAP_BOLT], slash: M.SLASH_LINE },
  },
  {
    name: 'leaf',
    category: 'weather',
    tags: ['eco', 'nature', 'green', 'sustainable', 'plant'],
    outline: { strokes: [LEAF_BODY, 'M4.15 19.85L5.98 18.02C8.55 15.45 10.45 13.15 13.5 11.25'] },
    filled: {
      solids: [LEAF_BODY],
      cutoutStrokes: ['M7.7 16.28C9.55 14.35 11.2 12.68 13.5 11.25'],
      strokes: [line(4.15, 19.85, 5.98, 18.02)],
    },
  },
  {
    name: 'tree',
    category: 'weather',
    tags: ['pine', 'forest', 'nature', 'park', 'outdoor'],
    outline: {
      strokes: [
        'M12 3L6.25 11H9L5 17H19L15 11H17.75L12 3Z',
        line(12, 17, 12, 21),
      ],
    },
    filled: {
      solids: ['M12 3L6.25 11H9L5 17H19L15 11H17.75L12 3Z'],
      strokes: [line(12, 17, 12, 21)],
    },
  },
  {
    name: 'waves',
    category: 'weather',
    tags: ['water', 'ocean', 'sea', 'flow', 'stream'],
    outline: {
      strokes: [
        'M3 7.5C4.5 6 6.5 6 8 7.5C9.5 9 11.5 9 13 7.5C14.5 6 16.5 6 18 7.5C19 8.5 20 8.75 21 8.5',
        'M3 12C4.5 10.5 6.5 10.5 8 12C9.5 13.5 11.5 13.5 13 12C14.5 10.5 16.5 10.5 18 12C19 13 20 13.25 21 13',
        'M3 16.5C4.5 15 6.5 15 8 16.5C9.5 18 11.5 18 13 16.5C14.5 15 16.5 15 18 16.5C19 17.5 20 17.75 21 17.5',
      ],
    },
    filled: { boostedOutline: true },
  },
]
