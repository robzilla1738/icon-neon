import * as M from '../motifs.ts'
import { arc, circle, line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const FUNNEL = 'M3.5 4.75H20.5L14 19.25H10Z'
const FUNNEL_STAGES = [[5.67, 9.58], [7.83, 14.42]] as const
const FUNNEL_SEPARATORS = FUNNEL_STAGES.map(([x, y]) => line(x, y, 24 - x, y))
const FUNNEL_SEPARATOR_CUTOUTS = FUNNEL_STAGES.map(([x, y]) => {
  const left = x - 1.25
  return line(left, y, 24 - left, y)
})

export const chartIcons: IconDef[] = [
  {
    name: 'bar-chart',
    category: 'charts',
    tags: ['analytics', 'metrics', 'stats', 'graph', 'columns'],
    outline: {
      strokes: [line(6.5, 20, 6.5, 13.5), line(12, 20, 12, 4.5), line(17.5, 20, 17.5, 9.5)],
    },
    filled: {
      solids: [
        rect(5.5, 13.5, 2, 6.5, 0.5),
        rect(11, 4.5, 2, 15.5, 0.5),
        rect(16.5, 9.5, 2, 10.5, 0.5),
      ],
    },
  },
  {
    name: 'bar-chart-2',
    category: 'charts',
    tags: ['histogram', 'axis', 'report', 'metrics'],
    outline: {
      strokes: [
        'M4 4V18A2 2 0 0 0 6 20H20',
        line(9, 16, 9, 12),
        line(13.5, 16, 13.5, 7.5),
        line(18, 16, 18, 10.5),
      ],
    },
    filled: {
      solids: [
        rect(8.25, 12, 1.5, 4, 0.75),
        rect(12.75, 7.5, 1.5, 8.5, 0.75),
        rect(17.25, 10.5, 1.5, 5.5, 0.75),
      ],
      strokes: ['M4 4V18A2 2 0 0 0 6 20H20'],
    },
  },
  {
    name: 'bar-chart-horizontal',
    category: 'charts',
    tags: ['ranking', 'breakdown', 'metrics', 'graph'],
    outline: {
      strokes: [
        'M4 4V18A2 2 0 0 0 6 20H20',
        line(7.75, 7.5, 17.5, 7.5),
        line(7.75, 11.75, 14, 11.75),
        line(7.75, 16, 11, 16),
      ],
    },
    filled: {
      solids: [
        rect(7.75, 6.75, 9.75, 1.5, 0.75),
        rect(7.75, 11, 6.25, 1.5, 0.75),
        rect(7.75, 15.25, 3.25, 1.5, 0.75),
      ],
      strokes: ['M4 4V18A2 2 0 0 0 6 20H20'],
    },
  },
  {
    name: 'line-chart',
    category: 'charts',
    tags: ['trend', 'analytics', 'series', 'graph'],
    outline: {
      strokes: ['M4 4V18A2 2 0 0 0 6 20H20', poly([[7.5, 15], [11.5, 10.5], [15, 13], [19.5, 7]])],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'area-chart',
    category: 'charts',
    tags: ['filled-graph', 'volume', 'analytics', 'series'],
    outline: {
      strokes: [
        'M4 4V18A2 2 0 0 0 6 20H20',
        'M7.75 16V12.5L11.5 8.5L15 11.5L19.25 7V16Z',
      ],
    },
    filled: {
      solids: ['M7.75 16V12.5L11.5 8.5L15 11.5L19.25 7V16Z'],
      strokes: ['M4 4V18A2 2 0 0 0 6 20H20'],
    },
  },
  {
    name: 'pie-chart',
    category: 'charts',
    tags: ['share', 'proportion', 'breakdown', 'analytics'],
    outline: {
      strokes: [
        'M10.5 5.75A7.75 7.75 0 1 0 18.25 13.5H10.5Z',
        'M13.5 2.75A7.75 7.75 0 0 1 21.25 10.5H13.5Z',
      ],
    },
    filled: {
      solids: [
        'M10.5 5.75A7.75 7.75 0 1 0 18.25 13.5H10.5Z',
        'M13.5 2.75A7.75 7.75 0 0 1 21.25 10.5H13.5Z',
      ],
    },
  },
  {
    name: 'donut-chart',
    category: 'charts',
    tags: ['ring', 'progress', 'breakdown', 'pie'],
    outline: {
      strokes: [
        M.CIRCLE_FRAME,
        circle(12, 12, 4.25),
        line(12, 3, 12, 7.75),
        line(16.25, 12, 21, 12),
      ],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutFills: [circle(12, 12, 4.5)],
      cutoutStrokes: [line(12, 2.5, 12, 8.25), line(15.75, 12, 21.5, 12)],
    },
  },
  {
    name: 'trending-up',
    category: 'charts',
    tags: ['growth', 'increase', 'bull', 'profit', 'kpi'],
    outline: {
      strokes: [
        poly([[3.5, 17], [9.5, 11], [13.5, 15], [20.5, 7]]),
        poly([[15, 7], [20.5, 7], [20.5, 12.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'trending-down',
    category: 'charts',
    tags: ['decline', 'decrease', 'bear', 'loss', 'kpi'],
    outline: {
      strokes: [
        poly([[3.5, 7], [9.5, 13], [13.5, 9], [20.5, 17]]),
        poly([[15, 17], [20.5, 17], [20.5, 11.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'activity',
    category: 'charts',
    tags: ['pulse', 'heartbeat', 'health', 'telemetry', 'live'],
    outline: {
      strokes: [poly([[2.75, 12], [6.5, 12], [9.25, 4.75], [14.75, 19.25], [17.5, 12], [21.25, 12]])],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'gauge',
    category: 'charts',
    tags: ['speed', 'performance', 'meter', 'score', 'benchmark'],
    outline: {
      strokes: [arc(12, 14, 8.25, 160, 380), line(12, 14, 15.6, 10.4)],
      dots: [{ cx: 12, cy: 14, scale: 1.25 }],
    },
    filled: {
      solids: [circle(12, 14, 1.65)],
      strokes: [arc(12, 14, 8.25, 160, 380), line(12, 14, 15.6, 10.4)],
    },
  },
  {
    name: 'target',
    category: 'charts',
    tags: ['goal', 'bullseye', 'focus', 'okr', 'accuracy'],
    outline: { strokes: [M.CIRCLE_FRAME, circle(12, 12, 5.25), circle(12, 12, 1.75)] },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: [circle(12, 12, 6.5), circle(12, 12, 2.75)],
    },
  },
  {
    name: 'crosshair',
    category: 'charts',
    tags: ['aim', 'precision', 'locate', 'gps'],
    outline: {
      strokes: [
        circle(12, 12, 7.5),
        line(12, 2.5, 12, 6.25),
        line(12, 17.75, 12, 21.5),
        line(2.5, 12, 6.25, 12),
        line(17.75, 12, 21.5, 12),
      ],
    },
    filled: {
      solids: [circle(12, 12, 2)],
      strokes: [
        circle(12, 12, 7.5),
        line(12, 2.5, 12, 6.25),
        line(12, 17.75, 12, 21.5),
        line(2.5, 12, 6.25, 12),
        line(17.75, 12, 21.5, 12),
      ],
    },
  },
  {
    name: 'table',
    category: 'charts',
    tags: ['grid', 'spreadsheet', 'data', 'rows', 'columns'],
    outline: {
      strokes: [M.WINDOW_FRAME, line(3, 9.33, 21, 9.33), line(3, 14.67, 21, 14.67), line(9.5, 4, 9.5, 20)],
    },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: [
        { d: line(3, 9.33, 21, 9.33), widthScale: 0.78 },
        { d: line(3, 14.67, 21, 14.67), widthScale: 0.78 },
        { d: line(9.5, 4, 9.5, 20), widthScale: 0.78 },
      ],
    },
  },
  {
    name: 'funnel',
    category: 'charts',
    tags: ['conversion', 'pipeline', 'cohort', 'stages'],
    outline: { strokes: [FUNNEL, ...FUNNEL_SEPARATORS] },
    filled: { solids: [FUNNEL], cutoutStrokes: FUNNEL_SEPARATOR_CUTOUTS },
  },
  {
    name: 'percent',
    category: 'charts',
    tags: ['ratio', 'discount', 'rate', 'percentage'],
    outline: { strokes: [line(18.5, 5.5, 5.5, 18.5), circle(7, 7, 2.25), circle(17, 17, 2.25)] },
    filled: { solids: [circle(7, 7, 2.25), circle(17, 17, 2.25)], strokes: [line(18.5, 5.5, 5.5, 18.5)] },
  },
  {
    name: 'sigma',
    category: 'charts',
    tags: ['sum', 'total', 'aggregate', 'formula', 'math'],
    outline: { strokes: [poly([[18.5, 7], [18.5, 4.5], [5.5, 4.5], [12.5, 12], [5.5, 19.5], [18.5, 19.5], [18.5, 17]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'calculator',
    category: 'charts',
    tags: ['math', 'estimate', 'budget', 'finance'],
    outline: {
      strokes: [M.TALL_FRAME, rect(8, 6, 8, 3.5, 0.8)],
      dots: [
        { cx: 8.5, cy: 13.25, scale: 0.9 },
        { cx: 12, cy: 13.25, scale: 0.9 },
        { cx: 15.5, cy: 13.25, scale: 0.9 },
        { cx: 8.5, cy: 17, scale: 0.9 },
        { cx: 12, cy: 17, scale: 0.9 },
        { cx: 15.5, cy: 17, scale: 0.9 },
      ],
    },
    filled: {
      solids: [M.TALL_FRAME],
      cutoutFills: [rect(8, 6, 8, 3.5, 0.8)],
      cutoutDots: [
        { cx: 8.5, cy: 13.25, scale: 1.05 },
        { cx: 12, cy: 13.25, scale: 1.05 },
        { cx: 15.5, cy: 13.25, scale: 1.05 },
        { cx: 8.5, cy: 17, scale: 1.05 },
        { cx: 12, cy: 17, scale: 1.05 },
        { cx: 15.5, cy: 17, scale: 1.05 },
      ],
    },
  },
  {
    name: 'scatter-chart',
    category: 'charts',
    tags: ['correlation', 'points', 'plot', 'data'],
    outline: {
      strokes: ['M4 4V18A2 2 0 0 0 6 20H20'],
      dots: [
        { cx: 7.75, cy: 15.75, scale: 1.1 },
        { cx: 10.5, cy: 11.25, scale: 1.1 },
        { cx: 13.25, cy: 13.75, scale: 1.1 },
        { cx: 16, cy: 8.25, scale: 1.1 },
        { cx: 18.75, cy: 11.75, scale: 1.1 },
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'candlestick',
    category: 'charts',
    tags: ['stocks', 'trading', 'market', 'finance', 'ohlc'],
    outline: {
      strokes: [
        line(7.5, 3.5, 7.5, 7.5),
        rect(5.5, 7.5, 4, 8, 1),
        line(7.5, 15.5, 7.5, 20.5),
        line(16.5, 5, 16.5, 9),
        rect(14.5, 9, 4, 6.5, 1),
        line(16.5, 15.5, 16.5, 19.5),
      ],
    },
    filled: {
      solids: [rect(5.5, 7.5, 4, 8, 1), rect(14.5, 9, 4, 6.5, 1)],
      strokes: [line(7.5, 3.5, 7.5, 20.5), line(16.5, 5, 16.5, 19.5)],
    },
  },
]
