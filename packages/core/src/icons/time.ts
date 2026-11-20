import * as M from '../motifs.ts'
import { arc, circle, line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const CLOCK_BADGE = circle(17, 17, 4.25)
const CLOCK_HANDS = poly([[17, 15.25], [17, 17], [18.5, 18]])
const CLOCK_CLEARANCE = circle(17, 17, 6.5)
const STOPWATCH_DIAL = circle(12, 13.25, 7.5)
const STOPWATCH_PUSHERS = [
  line(10, 3, 14, 3),
  line(12, 3, 12, 5.75),
  line(17.3, 7.95, 19.3, 5.95),
  line(18.35, 5, 20.25, 6.9),
]
const STOPWATCH_HAND = line(12, 9.25, 12, 13.25)
const GLOBE_CLOCK_STROKES = [
  arc(12, 12, 9, -10, -260),
  'M12 3C9.1 5.5 7.5 11.6 8.84 17.5',
  line(3.54, 8.94, 20.46, 8.94),
]
const BELL_CLOCK_BODY =
  'M4.75 9.25A5.55 5.55 0 0 1 15.85 9.25C15.85 12.6 17.05 13.95 17.65 14.7Q18.35 15.75 17.1 15.75H3.5Q2.25 15.75 2.95 14.7C3.55 13.95 4.75 12.6 4.75 9.25Z'
const BELL_CLOCK_CLAPPER = 'M7.15 18.4A1.6 1.6 0 0 0 10.15 18.4'
const COUNTDOWN_SECTOR = 'M12 6.5A5.5 5.5 0 0 1 17.5 12H12Z'

export const timeIcons: IconDef[] = [
  {
    name: 'clock',
    category: 'time',
    tags: ['time', 'schedule', 'hours', 'recent', 'duration'],
    outline: { strokes: [M.CIRCLE_FRAME, poly([[12, 7.25], [12, 12], [15.5, 13.75]])] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [poly([[12, 7.25], [12, 12], [15.5, 13.75]])] },
  },
  {
    name: 'alarm-clock',
    category: 'time',
    tags: ['wakeup', 'reminder', 'alert', 'timer'],
    outline: {
      strokes: [
        circle(12, 12.75, 7.5),
        poly([[12, 8.75], [12, 12.75], [14.75, 14.5]]),
        line(4.5, 5.25, 7.25, 3.25),
        line(19.5, 5.25, 16.75, 3.25),
        line(6.5, 18.75, 4.75, 20.5),
        line(17.5, 18.75, 19.25, 20.5),
      ],
    },
    filled: {
      solids: [circle(12, 12.75, 7.5)],
      cutoutStrokes: [poly([[12, 8.75], [12, 12.75], [14.75, 14.5]])],
      strokes: [
        line(4.5, 5.25, 7.25, 3.25),
        line(19.5, 5.25, 16.75, 3.25),
        line(6.5, 18.75, 4.75, 20.5),
        line(17.5, 18.75, 19.25, 20.5),
      ],
    },
  },
  {
    name: 'timer',
    category: 'time',
    tags: ['countdown', 'duration', 'pomodoro', 'stopwatch'],
    outline: { strokes: [M.CIRCLE_FRAME, COUNTDOWN_SECTOR] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutFills: [COUNTDOWN_SECTOR] },
  },
  {
    name: 'stopwatch',
    category: 'time',
    tags: ['speed', 'lap', 'benchmark', 'latency'],
    outline: { strokes: [STOPWATCH_DIAL, ...STOPWATCH_PUSHERS, STOPWATCH_HAND] },
    filled: {
      solids: [STOPWATCH_DIAL],
      cutoutStrokes: [STOPWATCH_HAND],
      strokes: STOPWATCH_PUSHERS,
    },
  },
  {
    name: 'hourglass',
    category: 'time',
    tags: ['wait', 'loading', 'pending', 'sand'],
    outline: {
      strokes: [
        line(6, 3.5, 18, 3.5),
        line(6, 20.5, 18, 20.5),
        'M7.5 3.5V6.75C7.5 9.25 12 12 12 12C12 12 16.5 9.25 16.5 6.75V3.5',
        'M7.5 20.5V17.25C7.5 14.75 12 12 12 12C12 12 16.5 14.75 16.5 17.25V20.5',
      ],
    },
    filled: {
      solids: [
        'M7.5 3.5H16.5V6.75C16.5 9.25 12 12 12 12C12 12 7.5 9.25 7.5 6.75V3.5Z',
        'M7.5 20.5H16.5V17.25C16.5 14.75 12 12 12 12C12 12 7.5 14.75 7.5 17.25V20.5Z',
      ],
      cutoutFills: [
        'M9 5.5H15C15 7 13.4 8.65 12 9.75C10.6 8.65 9 7 9 5.5Z',
        'M9 18.25L12 15.25L15 18.25Z',
      ],
      strokes: [line(6, 3.5, 18, 3.5), line(6, 20.5, 18, 20.5)],
    },
  },
  {
    name: 'history',
    category: 'time',
    tags: ['past', 'audit', 'changelog', 'recent', 'rewind'],
    outline: {
      strokes: [
        arc(12, 12, 8.25, -168, 155),
        poly([[3.93, 5.3], [3.93, 10.28], [8.75, 10.28]]),
        poly([[12, 7.5], [12, 12], [15.25, 13.75]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'watch',
    category: 'time',
    tags: ['smartwatch', 'wearable', 'apple-watch', 'time'],
    outline: {
      strokes: [
        rect(6.25, 6.25, 11.5, 11.5, 2.75),
        'M8.75 6.25L9.5 3.25H14.5L15.25 6.25',
        'M8.75 17.75L9.5 20.75H14.5L15.25 17.75',
        poly([[12, 9.5], [12, 12], [14, 13]]),
      ],
    },
    filled: {
      solids: [rect(6.25, 6.25, 11.5, 11.5, 2.75)],
      cutoutStrokes: [poly([[12, 9.5], [12, 12], [14, 13]])],
      strokes: ['M8.75 6.25L9.5 3.25H14.5L15.25 6.25', 'M8.75 17.75L9.5 20.75H14.5L15.25 17.75'],
    },
  },

  // Calendar family
  {
    name: 'calendar',
    category: 'time',
    tags: ['date', 'event', 'schedule', 'planner'],
    outline: { strokes: [M.CALENDAR_BODY, ...M.CALENDAR_PINS, M.CALENDAR_DIVIDER] },
    filled: {
      solids: [M.CALENDAR_BODY],
      cutoutStrokes: [M.CALENDAR_DIVIDER],
      strokes: M.CALENDAR_PINS,
    },
  },
  {
    name: 'calendar-days',
    category: 'time',
    tags: ['month', 'grid', 'dates', 'schedule'],
    outline: {
      strokes: [M.CALENDAR_BODY, ...M.CALENDAR_PINS, M.CALENDAR_DIVIDER],
      dots: [
        { cx: 8, cy: 13.5, scale: 0.9 },
        { cx: 12, cy: 13.5, scale: 0.9 },
        { cx: 16, cy: 13.5, scale: 0.9 },
        { cx: 8, cy: 17, scale: 0.9 },
        { cx: 12, cy: 17, scale: 0.9 },
      ],
    },
    filled: {
      solids: [M.CALENDAR_BODY],
      cutoutStrokes: [M.CALENDAR_DIVIDER],
      cutoutDots: [
        { cx: 8, cy: 13.5, scale: 1.05 },
        { cx: 12, cy: 13.5, scale: 1.05 },
        { cx: 16, cy: 13.5, scale: 1.05 },
        { cx: 8, cy: 17, scale: 1.05 },
        { cx: 12, cy: 17, scale: 1.05 },
      ],
      strokes: M.CALENDAR_PINS,
    },
  },
  {
    name: 'calendar-check',
    category: 'time',
    tags: ['booked', 'confirmed', 'rsvp', 'schedule'],
    outline: {
      strokes: [M.CALENDAR_BODY, ...M.CALENDAR_PINS, M.CALENDAR_DIVIDER, poly([[9, 15.25], [11.1, 17.35], [15.25, 13]])],
    },
    filled: {
      solids: [M.CALENDAR_BODY],
      cutoutStrokes: [M.CALENDAR_DIVIDER, poly([[9, 15.25], [11.1, 17.35], [15.25, 13]])],
      strokes: M.CALENDAR_PINS,
    },
  },
  {
    name: 'calendar-plus',
    category: 'time',
    tags: ['new-event', 'schedule', 'add', 'book'],
    outline: {
      strokes: [M.CALENDAR_BODY, ...M.CALENDAR_PINS, M.CALENDAR_DIVIDER, line(12, 12.75, 12, 17.75), line(9.5, 15.25, 14.5, 15.25)],
    },
    filled: {
      solids: [M.CALENDAR_BODY],
      cutoutStrokes: [M.CALENDAR_DIVIDER, line(12, 12.75, 12, 17.75), line(9.5, 15.25, 14.5, 15.25)],
      strokes: M.CALENDAR_PINS,
    },
  },
  {
    name: 'calendar-x',
    category: 'time',
    tags: ['cancel', 'unavailable', 'decline', 'event'],
    outline: {
      strokes: [M.CALENDAR_BODY, ...M.CALENDAR_PINS, M.CALENDAR_DIVIDER, line(9.75, 13, 14.25, 17.5), line(14.25, 13, 9.75, 17.5)],
    },
    filled: {
      solids: [M.CALENDAR_BODY],
      cutoutStrokes: [M.CALENDAR_DIVIDER, line(9.75, 13, 14.25, 17.5), line(14.25, 13, 9.75, 17.5)],
      strokes: M.CALENDAR_PINS,
    },
  },
  {
    name: 'calendar-clock',
    category: 'time',
    tags: ['deadline', 'reminder', 'meeting', 'appointment'],
    outline: {
      strokes: [
        'M20.5 11.25V7.25A2.5 2.5 0 0 0 18 4.75H6A2.5 2.5 0 0 0 3.5 7.25V18A2.5 2.5 0 0 0 6 20.5H11',
        ...M.CALENDAR_PINS,
        M.CALENDAR_DIVIDER,
        CLOCK_BADGE,
        CLOCK_HANDS,
      ],
    },
    filled: {
      solids: [M.CALENDAR_BODY],
      cutoutStrokes: [M.CALENDAR_DIVIDER],
      cutoutFills: [CLOCK_CLEARANCE],
      strokes: [...M.CALENDAR_PINS, CLOCK_BADGE, { d: CLOCK_HANDS, widthScale: 0.85 }],
    },
  },
  {
    name: 'calendar-range',
    category: 'time',
    tags: ['duration', 'span', 'dates', 'sprint'],
    outline: {
      strokes: [
        M.CALENDAR_BODY,
        ...M.CALENDAR_PINS,
        M.CALENDAR_DIVIDER,
        line(7.5, 15.25, 16.5, 15.25),
        line(7.5, 13.75, 7.5, 16.75),
        line(16.5, 13.75, 16.5, 16.75),
      ],
    },
    filled: {
      solids: [M.CALENDAR_BODY],
      cutoutStrokes: [M.CALENDAR_DIVIDER, line(7.5, 15.25, 16.5, 15.25), line(7.5, 13.75, 7.5, 16.75), line(16.5, 13.75, 16.5, 16.75)],
      strokes: M.CALENDAR_PINS,
    },
  },
  {
    name: 'sunrise',
    category: 'time',
    tags: ['morning', 'dawn', 'daybreak', 'brief'],
    outline: {
      strokes: [
        line(3, 18.5, 21, 18.5),
        'M7.5 18.5A4.5 4.5 0 0 1 16.5 18.5',
        line(12, 10, 12, 4),
        poly([[9, 7], [12, 4], [15, 7]]),
        line(4.75, 11.75, 6.25, 13.25),
        line(19.25, 11.75, 17.75, 13.25),
      ],
    },
    filled: {
      solids: ['M7.5 18.5A4.5 4.5 0 0 1 16.5 18.5Z'],
      strokes: [
        line(3, 18.5, 21, 18.5),
        line(12, 10, 12, 4),
        poly([[9, 7], [12, 4], [15, 7]]),
        line(4.75, 11.75, 6.25, 13.25),
        line(19.25, 11.75, 17.75, 13.25),
      ],
    },
  },
  {
    name: 'sunset',
    category: 'time',
    tags: ['evening', 'dusk', 'nightfall'],
    outline: {
      strokes: [
        line(3, 18.5, 21, 18.5),
        'M7.5 18.5A4.5 4.5 0 0 1 16.5 18.5',
        line(12, 4, 12, 10),
        poly([[9, 7], [12, 10], [15, 7]]),
        line(4.75, 11.75, 6.25, 13.25),
        line(19.25, 11.75, 17.75, 13.25),
      ],
    },
    filled: {
      solids: ['M7.5 18.5A4.5 4.5 0 0 1 16.5 18.5Z'],
      strokes: [
        line(3, 18.5, 21, 18.5),
        line(12, 4, 12, 10),
        poly([[9, 7], [12, 10], [15, 7]]),
        line(4.75, 11.75, 6.25, 13.25),
        line(19.25, 11.75, 17.75, 13.25),
      ],
    },
  },
  {
    name: 'globe-clock',
    category: 'time',
    tags: ['timezone', 'world-time', 'utc', 'global'],
    outline: { strokes: [...GLOBE_CLOCK_STROKES, CLOCK_BADGE, CLOCK_HANDS] },
    filled: {
      solids: [CLOCK_BADGE],
      cutoutStrokes: [CLOCK_HANDS],
      strokes: GLOBE_CLOCK_STROKES,
    },
  },
  {
    name: 'bell-clock',
    category: 'time',
    tags: ['snooze', 'reminder', 'schedule', 'alert'],
    outline: {
      strokes: [
        'M15.85 10.55V9.25A5.55 5.55 0 0 0 4.75 9.25C4.75 12.6 3.55 13.95 2.95 14.7Q2.25 15.75 3.5 15.75H10.25',
        BELL_CLOCK_CLAPPER, CLOCK_BADGE, CLOCK_HANDS,
      ],
    },
    filled: {
      solids: [BELL_CLOCK_BODY],
      cutoutFills: [CLOCK_CLEARANCE],
      strokes: [BELL_CLOCK_CLAPPER, CLOCK_BADGE, { d: CLOCK_HANDS, widthScale: 0.85 }],
    },
  },
]
