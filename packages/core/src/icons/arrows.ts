import * as M from '../motifs.ts'
import { arc, line, poly, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

export const arrowIcons: IconDef[] = [
  // Cardinal arrows
  {
    name: 'arrow-up',
    category: 'arrows',
    tags: ['north', 'direction', 'top', 'upload'],
    outline: { strokes: [line(12, 19, 12, 5), poly([[6.5, 10.5], [12, 5], [17.5, 10.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrow-down',
    category: 'arrows',
    tags: ['south', 'direction', 'bottom', 'download'],
    outline: { strokes: [line(12, 5, 12, 19), poly([[6.5, 13.5], [12, 19], [17.5, 13.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrow-left',
    category: 'arrows',
    tags: ['west', 'back', 'previous', 'direction'],
    outline: { strokes: [line(19, 12, 5, 12), poly([[10.5, 6.5], [5, 12], [10.5, 17.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrow-right',
    category: 'arrows',
    tags: ['east', 'forward', 'next', 'direction'],
    outline: { strokes: [line(5, 12, 19, 12), poly([[13.5, 6.5], [19, 12], [13.5, 17.5]])] },
    filled: { boostedOutline: true },
  },

  // Diagonal arrows
  {
    name: 'arrow-up-left',
    category: 'arrows',
    tags: ['northwest', 'diagonal', 'direction'],
    outline: { strokes: [line(17.5, 17.5, 6.5, 6.5), poly([[15, 6.5], [6.5, 6.5], [6.5, 15]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrow-up-right',
    category: 'arrows',
    tags: ['northeast', 'diagonal', 'external', 'link'],
    outline: { strokes: [line(6.5, 17.5, 17.5, 6.5), poly([[9, 6.5], [17.5, 6.5], [17.5, 15]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrow-down-left',
    category: 'arrows',
    tags: ['southwest', 'diagonal', 'direction'],
    outline: { strokes: [line(17.5, 6.5, 6.5, 17.5), poly([[6.5, 9], [6.5, 17.5], [15, 17.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrow-down-right',
    category: 'arrows',
    tags: ['southeast', 'diagonal', 'direction'],
    outline: { strokes: [line(6.5, 6.5, 17.5, 17.5), poly([[17.5, 9], [17.5, 17.5], [9, 17.5]])] },
    filled: { boostedOutline: true },
  },

  // Bidirectional & scale arrows
  {
    name: 'arrow-up-down',
    category: 'arrows',
    tags: ['sort', 'swap', 'vertical', 'reorder'],
    outline: {
      strokes: [
        line(8.25, 5, 8.25, 19),
        poly([[5, 8.25], [8.25, 5], [11.5, 8.25]]),
        line(15.75, 19, 15.75, 5),
        poly([[12.5, 15.75], [15.75, 19], [19, 15.75]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrow-left-right',
    category: 'arrows',
    tags: ['swap', 'exchange', 'horizontal', 'transfer'],
    outline: {
      strokes: [
        line(5, 8.25, 19, 8.25),
        poly([[15.75, 5], [19, 8.25], [15.75, 11.5]]),
        line(19, 15.75, 5, 15.75),
        poly([[8.25, 12.5], [5, 15.75], [8.25, 19]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrows-expand',
    category: 'arrows',
    tags: ['enlarge', 'scale', 'diagonal', 'resize'],
    outline: {
      strokes: [
        poly([[14.5, 4.5], [19.5, 4.5], [19.5, 9.5]]),
        line(19.5, 4.5, 13.75, 10.25),
        poly([[9.5, 19.5], [4.5, 19.5], [4.5, 14.5]]),
        line(4.5, 19.5, 10.25, 13.75),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'arrows-collapse',
    category: 'arrows',
    tags: ['shrink', 'compress', 'diagonal', 'resize'],
    outline: {
      strokes: [
        poly([[19, 10], [14, 10], [14, 5]]),
        line(14, 10, 19.75, 4.25),
        poly([[5, 14], [10, 14], [10, 19]]),
        line(10, 14, 4.25, 19.75),
      ],
    },
    filled: { boostedOutline: true },
  },

  // Circle arrows
  {
    name: 'arrow-up-circle',
    category: 'arrows',
    tags: ['top', 'upload', 'round', 'direction'],
    outline: { strokes: [M.CIRCLE_FRAME, line(12, 16, 12, 8), poly([[8.5, 11.5], [12, 8], [15.5, 11.5]])] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(12, 16, 12, 8), poly([[8.5, 11.5], [12, 8], [15.5, 11.5]])] },
  },
  {
    name: 'arrow-down-circle',
    category: 'arrows',
    tags: ['bottom', 'download', 'round', 'direction'],
    outline: { strokes: [M.CIRCLE_FRAME, line(12, 8, 12, 16), poly([[8.5, 12.5], [12, 16], [15.5, 12.5]])] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(12, 8, 12, 16), poly([[8.5, 12.5], [12, 16], [15.5, 12.5]])] },
  },
  {
    name: 'arrow-left-circle',
    category: 'arrows',
    tags: ['back', 'previous', 'round', 'direction'],
    outline: { strokes: [M.CIRCLE_FRAME, line(16, 12, 8, 12), poly([[11.5, 8.5], [8, 12], [11.5, 15.5]])] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(16, 12, 8, 12), poly([[11.5, 8.5], [8, 12], [11.5, 15.5]])] },
  },
  {
    name: 'arrow-right-circle',
    category: 'arrows',
    tags: ['next', 'forward', 'round', 'direction'],
    outline: { strokes: [M.CIRCLE_FRAME, line(8, 12, 16, 12), poly([[12.5, 8.5], [16, 12], [12.5, 15.5]])] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(8, 12, 16, 12), poly([[12.5, 8.5], [16, 12], [12.5, 15.5]])] },
  },

  // Chevrons
  {
    name: 'chevron-up',
    category: 'arrows',
    tags: ['collapse', 'up', 'accordion', 'caret'],
    outline: { strokes: [poly([[6, 15], [12, 9], [18, 15]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'chevron-down',
    category: 'arrows',
    tags: ['expand', 'down', 'dropdown', 'select'],
    outline: { strokes: [poly([[6, 9], [12, 15], [18, 9]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'chevron-left',
    category: 'arrows',
    tags: ['back', 'previous', 'left', 'navigate'],
    outline: { strokes: [poly([[15, 6], [9, 12], [15, 18]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'chevron-right',
    category: 'arrows',
    tags: ['next', 'forward', 'right', 'breadcrumb'],
    outline: { strokes: [poly([[9, 6], [15, 12], [9, 18]])] },
    filled: { boostedOutline: true },
  },

  // Double chevrons
  {
    name: 'chevrons-up',
    category: 'arrows',
    tags: ['top', 'fast', 'collapse-all'],
    outline: { strokes: [poly([[6.5, 11.5], [12, 6], [17.5, 11.5]]), poly([[6.5, 17.5], [12, 12], [17.5, 17.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'chevrons-down',
    category: 'arrows',
    tags: ['bottom', 'fast', 'expand-all'],
    outline: { strokes: [poly([[6.5, 6.5], [12, 12], [17.5, 6.5]]), poly([[6.5, 12.5], [12, 18], [17.5, 12.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'chevrons-left',
    category: 'arrows',
    tags: ['first', 'rewind', 'collapse-sidebar'],
    outline: { strokes: [poly([[11.5, 6.5], [6, 12], [11.5, 17.5]]), poly([[17.5, 6.5], [12, 12], [17.5, 17.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'chevrons-right',
    category: 'arrows',
    tags: ['last', 'fast-forward', 'expand-sidebar'],
    outline: { strokes: [poly([[6.5, 6.5], [12, 12], [6.5, 17.5]]), poly([[12.5, 6.5], [18, 12], [12.5, 17.5]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'chevrons-up-down',
    category: 'arrows',
    tags: ['select', 'combobox', 'picker', 'sort'],
    outline: { strokes: [poly([[7.5, 9], [12, 4.5], [16.5, 9]]), poly([[7.5, 15], [12, 19.5], [16.5, 15]])] },
    filled: { boostedOutline: true },
  },

  // Solid-capable triangular carets
  {
    name: 'caret-up',
    category: 'arrows',
    tags: ['triangle', 'sort-asc', 'up', 'dropdown'],
    outline: { strokes: [roundedPoly([[6.5, 15.25], [12, 7.75], [17.5, 15.25]], 1, true)] },
    filled: { solids: [roundedPoly([[6.5, 15.25], [12, 7.75], [17.5, 15.25]], 1, true)] },
  },
  {
    name: 'caret-down',
    category: 'arrows',
    tags: ['triangle', 'sort-desc', 'down', 'dropdown'],
    outline: { strokes: [roundedPoly([[6.5, 8.75], [17.5, 8.75], [12, 16.25]], 1, true)] },
    filled: { solids: [roundedPoly([[6.5, 8.75], [17.5, 8.75], [12, 16.25]], 1, true)] },
  },
  {
    name: 'caret-left',
    category: 'arrows',
    tags: ['triangle', 'left', 'previous'],
    outline: { strokes: [roundedPoly([[15.25, 6.5], [7.75, 12], [15.25, 17.5]], 1, true)] },
    filled: { solids: [roundedPoly([[15.25, 6.5], [7.75, 12], [15.25, 17.5]], 1, true)] },
  },
  {
    name: 'caret-right',
    category: 'arrows',
    tags: ['triangle', 'right', 'next'],
    outline: { strokes: [roundedPoly([[8.75, 6.5], [16.25, 12], [8.75, 17.5]], 1, true)] },
    filled: { solids: [roundedPoly([[8.75, 6.5], [16.25, 12], [8.75, 17.5]], 1, true)] },
  },

  // Corner return arrows
  {
    name: 'corner-down-left',
    category: 'arrows',
    tags: ['enter', 'return', 'reply', 'newline'],
    outline: {
      strokes: [
        'M19 5V11A3.5 3.5 0 0 1 15.5 14.5H5.5',
        poly([[9.5, 10.5], [5.5, 14.5], [9.5, 18.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'corner-down-right',
    category: 'arrows',
    tags: ['indent', 'subtask', 'reply', 'child'],
    outline: {
      strokes: [
        'M5 5V11A3.5 3.5 0 0 0 8.5 14.5H18.5',
        poly([[14.5, 10.5], [18.5, 14.5], [14.5, 18.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'corner-up-left',
    category: 'arrows',
    tags: ['parent', 'directory', 'back', 'return'],
    outline: {
      strokes: [
        'M19 19V13A3.5 3.5 0 0 0 15.5 9.5H5.5',
        poly([[9.5, 5.5], [5.5, 9.5], [9.5, 13.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'corner-up-right',
    category: 'arrows',
    tags: ['forward', 'branch', 'share', 'redirect'],
    outline: {
      strokes: [
        'M5 19V13A3.5 3.5 0 0 1 8.5 9.5H18.5',
        poly([[14.5, 5.5], [18.5, 9.5], [14.5, 13.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },

  // Undo, redo, refresh, rotate, repeat, shuffle
  {
    name: 'undo',
    category: 'arrows',
    tags: ['revert', 'back', 'history', 'ctrl-z'],
    outline: {
      strokes: [
        poly([[8.5, 5], [4.5, 9], [8.5, 13]]),
        'M4.5 9H14A5.25 5.25 0 0 1 14 19.5H10',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'redo',
    category: 'arrows',
    tags: ['forward', 'repeat', 'history', 'ctrl-y'],
    outline: {
      strokes: [
        poly([[15.5, 5], [19.5, 9], [15.5, 13]]),
        'M19.5 9H10A5.25 5.25 0 0 0 10 19.5H14',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'refresh-cw',
    category: 'arrows',
    tags: ['sync', 'reload', 'update', 'cycle'],
    outline: {
      strokes: [
        arc(12, 12, 7.75, -145, -10),
        poly([[19.75, 4.75], [19.65, 10.65], [14, 9.8]]),
        arc(12, 12, 7.75, 35, 170),
        poly([[4.25, 19.25], [4.35, 13.35], [10, 14.2]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'refresh-ccw',
    category: 'arrows',
    tags: ['sync', 'reload', 'reset', 'counterclockwise'],
    outline: {
      strokes: [
        arc(12, 12, 7.75, -170, -35),
        poly([[4.25, 4.75], [4.35, 10.65], [10, 9.8]]),
        arc(12, 12, 7.75, 10, 145),
        poly([[19.75, 19.25], [19.65, 13.35], [14, 14.2]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'rotate-cw',
    category: 'arrows',
    tags: ['turn', 'clockwise', 'spin', 'reload'],
    outline: {
      strokes: [
        arc(12, 12, 7.75, 35, 325),
        poly([[18.35, 2.75], [18.35, 7.55], [13.55, 7.55]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'rotate-ccw',
    category: 'arrows',
    tags: ['turn', 'counterclockwise', 'reset', 'undo'],
    outline: {
      strokes: [
        arc(12, 12, 7.75, -145, 145),
        poly([[5.65, 2.75], [5.65, 7.55], [10.45, 7.55]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'repeat',
    category: 'arrows',
    tags: ['loop', 'cycle', 'replay', 'media'],
    outline: {
      strokes: [
        poly([[16.5, 3.75], [19.75, 7], [16.5, 10.25]]),
        'M4.25 11V9.5A2.5 2.5 0 0 1 6.75 7H19.75',
        poly([[7.5, 20.25], [4.25, 17], [7.5, 13.75]]),
        'M19.75 13V14.5A2.5 2.5 0 0 1 17.25 17H4.25',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'shuffle',
    category: 'arrows',
    tags: ['random', 'mix', 'cross', 'media'],
    outline: {
      strokes: [
        poly([[17.25, 3.5], [20.25, 6.5], [17.25, 9.5]]),
        poly([[17.25, 14.5], [20.25, 17.5], [17.25, 20.5]]),
        'M3.75 17.5H6.75Q8.85 17.5 10.15 15.3L13.85 8.7Q15.15 6.5 17.25 6.5H20.25',
        'M3.75 6.5H6.75Q8.85 6.5 10.15 8.7L10.25 8.87',
        'M13.75 15.13L13.85 15.3Q15.15 17.5 17.25 17.5H20.25',
      ],
    },
    filled: { boostedOutline: true },
  },

  // External link, auth doors, move, maximize/minimize
  {
    name: 'external-link',
    category: 'arrows',
    tags: ['open', 'new-tab', 'launch', 'outbound'],
    outline: {
      strokes: [
        'M14.5 4.25H19.75V9.5',
        line(11, 13, 19.75, 4.25),
        'M18.25 13.75V17.5A2.25 2.25 0 0 1 16 19.75H6.5A2.25 2.25 0 0 1 4.25 17.5V8A2.25 2.25 0 0 1 6.5 5.75H10.25',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'log-in',
    category: 'arrows',
    tags: ['sign-in', 'enter', 'auth', 'portal'],
    outline: {
      strokes: [
        'M14.5 4H17.5A2.25 2.25 0 0 1 19.75 6.25V17.75A2.25 2.25 0 0 1 17.5 20H14.5',
        poly([[10.5, 8], [14.5, 12], [10.5, 16]]),
        line(4.25, 12, 14.5, 12),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'log-out',
    category: 'arrows',
    tags: ['sign-out', 'exit', 'leave', 'auth'],
    outline: {
      strokes: [
        'M9.5 4H6.5A2.25 2.25 0 0 0 4.25 6.25V17.75A2.25 2.25 0 0 0 6.5 20H9.5',
        poly([[15.75, 8], [19.75, 12], [15.75, 16]]),
        line(9.5, 12, 19.75, 12),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'move',
    category: 'arrows',
    tags: ['drag', 'pan', 'reposition', '4-way'],
    outline: {
      strokes: [
        line(12, 3.25, 12, 20.75),
        line(3.25, 12, 20.75, 12),
        poly([[9.75, 5.5], [12, 3.25], [14.25, 5.5]]),
        poly([[9.75, 18.5], [12, 20.75], [14.25, 18.5]]),
        poly([[5.5, 9.75], [3.25, 12], [5.5, 14.25]]),
        poly([[18.5, 9.75], [20.75, 12], [18.5, 14.25]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'maximize',
    category: 'arrows',
    tags: ['expand', 'corners', 'viewport', 'zoom'],
    outline: {
      strokes: [
        'M4.25 9V6.25A2 2 0 0 1 6.25 4.25H9',
        'M15 4.25H17.75A2 2 0 0 1 19.75 6.25V9',
        'M19.75 15V17.75A2 2 0 0 1 17.75 19.75H15',
        'M9 19.75H6.25A2 2 0 0 1 4.25 17.75V15',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'minimize',
    category: 'arrows',
    tags: ['shrink', 'corners', 'collapse', 'restore'],
    outline: {
      strokes: [
        'M8.5 3.75V6.5A2 2 0 0 1 6.5 8.5H3.75',
        'M20.25 8.5H17.5A2 2 0 0 1 15.5 6.5V3.75',
        'M15.5 20.25V17.5A2 2 0 0 1 17.5 15.5H20.25',
        'M3.75 15.5H6.5A2 2 0 0 1 8.5 17.5V20.25',
      ],
    },
    filled: { boostedOutline: true },
  },
]
