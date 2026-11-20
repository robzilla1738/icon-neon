import * as M from '../motifs.ts'
import { line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const gridTiles = [
  rect(3.5, 3.5, 7, 7, 1.75),
  rect(13.5, 3.5, 7, 7, 1.75),
  rect(3.5, 13.5, 7, 7, 1.75),
  rect(13.5, 13.5, 7, 7, 1.75),
]
const dashboardPanels = [
  rect(3.5, 4, 7.5, 16, 1.75),
  rect(14.25, 4, 6.25, 6.25, 1.5),
  rect(14.25, 13.75, 6.25, 6.25, 1.5),
]
// Divider cutouts cross the expanded frame so their end caps leave no edge bridges.
const windowColumnCut = (x: number): string => line(x, 2.75, x, 21.25)
const windowRowCut = (y: number): string => line(1.75, y, 22.25, y)
const browserTab = 'H4.5Q5 10.25 5.3 9.75L6.52 7.65Q6.75 7.25 7.25 7.25H10.75Q11.25 7.25 11.48 7.65L12.7 9.75Q13 10.25 13.5 10.25'
const kanbanColumns = [
  rect(3, 4, 4, 16, 1.25),
  rect(10, 4, 4, 10.5, 1.25),
  rect(17, 4, 4, 13, 1.25),
]

export const layoutIcons: IconDef[] = [
  {
    name: 'sidebar-left',
    category: 'layout',
    tags: ['panel', 'drawer', 'navigation', 'dock'],
    outline: { strokes: [M.WINDOW_FRAME, line(9, 4, 9, 20)] },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutFills: [rect(10, 5.75, 9.25, 12.5, 1.25)],
    },
  },
  {
    name: 'sidebar-right',
    category: 'layout',
    tags: ['panel', 'inspector', 'drawer', 'dock'],
    outline: { strokes: [M.WINDOW_FRAME, line(15, 4, 15, 20)] },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutFills: [rect(4.75, 5.75, 9.25, 12.5, 1.25)],
    },
  },
  {
    name: 'panel-top',
    category: 'layout',
    tags: ['header', 'toolbar', 'topbar', 'window'],
    outline: { strokes: [M.WINDOW_FRAME, line(3, 9.5, 21, 9.5)] },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutFills: [rect(4.75, 10.5, 14.5, 7.75, 1.25)],
    },
  },
  {
    name: 'panel-bottom',
    category: 'layout',
    tags: ['footer', 'tray', 'console', 'dock'],
    outline: { strokes: [M.WINDOW_FRAME, line(3, 14.5, 21, 14.5)] },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutFills: [rect(4.75, 5.75, 14.5, 7.75, 1.25)],
    },
  },
  {
    name: 'panel-left-close',
    category: 'layout',
    tags: ['collapse', 'sidebar', 'hide', 'drawer'],
    outline: { strokes: [M.WINDOW_FRAME, line(9, 4, 9, 20), poly([[16, 9.5], [13.5, 12], [16, 14.5]])] },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: [windowColumnCut(9), poly([[16, 9.5], [13.5, 12], [16, 14.5]])],
    },
  },
  {
    name: 'panel-left-open',
    category: 'layout',
    tags: ['expand', 'sidebar', 'show', 'drawer'],
    outline: { strokes: [M.WINDOW_FRAME, line(9, 4, 9, 20), poly([[13.5, 9.5], [16, 12], [13.5, 14.5]])] },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: [windowColumnCut(9), poly([[13.5, 9.5], [16, 12], [13.5, 14.5]])],
    },
  },
  {
    name: 'layout-grid',
    category: 'layout',
    tags: ['apps', 'tiles', 'blocks', 'gallery'],
    outline: { strokes: gridTiles },
    filled: { solids: gridTiles },
  },
  {
    name: 'layout-list',
    category: 'layout',
    tags: ['rows', 'items', 'feed', 'view'],
    outline: {
      strokes: [
        rect(3.75, 4.25, 5.5, 5.5, 1.5),
        rect(3.75, 14.25, 5.5, 5.5, 1.5),
        line(12.5, 5.75, 20.25, 5.75),
        line(12.5, 8.75, 17.5, 8.75),
        line(12.5, 15.75, 20.25, 15.75),
        line(12.5, 18.75, 17.5, 18.75),
      ],
    },
    filled: {
      solids: [rect(3.75, 4.25, 5.5, 5.5, 1.5), rect(3.75, 14.25, 5.5, 5.5, 1.5)],
      strokes: [
        line(12.5, 5.75, 20.25, 5.75),
        line(12.5, 8.75, 17.5, 8.75),
        line(12.5, 15.75, 20.25, 15.75),
        line(12.5, 18.75, 17.5, 18.75),
      ],
    },
  },
  {
    name: 'layout-dashboard',
    category: 'layout',
    tags: ['bento', 'widgets', 'overview', 'home'],
    outline: { strokes: dashboardPanels },
    filled: { solids: dashboardPanels },
  },
  {
    name: 'layout-columns',
    category: 'layout',
    tags: ['split', 'two-column', 'grid'],
    outline: { strokes: [rect(3.5, 4, 6.5, 16, 1.75), rect(14, 4, 6.5, 16, 1.75)] },
    filled: { solids: [rect(3.5, 4, 6.5, 16, 1.75), rect(14, 4, 6.5, 16, 1.75)] },
  },
  {
    name: 'layout-rows',
    category: 'layout',
    tags: ['split', 'two-row', 'stack'],
    outline: { strokes: [rect(4, 3.5, 16, 6.5, 1.75), rect(4, 14, 16, 6.5, 1.75)] },
    filled: { solids: [rect(4, 3.5, 16, 6.5, 1.75), rect(4, 14, 16, 6.5, 1.75)] },
  },
  {
    name: 'layout-kanban',
    category: 'layout',
    tags: ['board', 'trello', 'columns', 'tasks'],
    outline: { strokes: kanbanColumns },
    filled: { solids: kanbanColumns },
  },
  {
    name: 'columns-2',
    category: 'layout',
    tags: ['pane', 'split', 'dual'],
    outline: { strokes: [M.WINDOW_FRAME, line(12, 4, 12, 20)] },
    filled: { solids: [M.WINDOW_FRAME], cutoutStrokes: [windowColumnCut(12)] },
  },
  {
    name: 'columns-3',
    category: 'layout',
    tags: ['panes', 'triple', 'grid'],
    outline: { strokes: [M.WINDOW_FRAME, line(9, 4, 9, 20), line(15, 4, 15, 20)] },
    filled: { solids: [M.WINDOW_FRAME], cutoutStrokes: [windowColumnCut(9), windowColumnCut(15)] },
  },
  {
    name: 'rows-2',
    category: 'layout',
    tags: ['horizontal', 'split', 'panes'],
    outline: { strokes: [M.WINDOW_FRAME, line(3, 12, 21, 12)] },
    filled: { solids: [M.WINDOW_FRAME], cutoutStrokes: [windowRowCut(12)] },
  },
  {
    name: 'rows-3',
    category: 'layout',
    tags: ['horizontal', 'triple', 'table'],
    outline: { strokes: [M.WINDOW_FRAME, line(3, 9.33, 21, 9.33), line(3, 14.67, 21, 14.67)] },
    filled: { solids: [M.WINDOW_FRAME], cutoutStrokes: [windowRowCut(9.33), windowRowCut(14.67)] },
  },
  {
    name: 'split-horizontal',
    category: 'layout',
    tags: ['divide', 'panes', 'resize'],
    outline: {
      strokes: [
        line(12, 3.5, 12, 20.5),
        line(4, 12, 8.75, 12),
        poly([[6.5, 9.5], [4, 12], [6.5, 14.5]]),
        line(20, 12, 15.25, 12),
        poly([[17.5, 9.5], [20, 12], [17.5, 14.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'split-vertical',
    category: 'layout',
    tags: ['divide', 'panes', 'resize'],
    outline: {
      strokes: [
        line(3.5, 12, 20.5, 12),
        line(12, 4, 12, 8.75),
        poly([[9.5, 6.5], [12, 4], [14.5, 6.5]]),
        line(12, 20, 12, 15.25),
        poly([[9.5, 17.5], [12, 20], [14.5, 17.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'app-window',
    category: 'layout',
    tags: ['application', 'desktop', 'gui', 'frame'],
    outline: {
      strokes: [M.WINDOW_FRAME, line(3, 9, 21, 9)],
      dots: [{ cx: 6.25, cy: 6.5, scale: 0.75 }, { cx: 9, cy: 6.5, scale: 0.75 }],
    },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: [windowRowCut(9)],
      cutoutDots: [{ cx: 6.25, cy: 6.5, scale: 0.85 }, { cx: 9, cy: 6.5, scale: 0.85 }],
    },
  },
  {
    name: 'browser',
    category: 'layout',
    tags: ['web', 'page', 'chrome', 'safari', 'site'],
    outline: { strokes: [M.WINDOW_FRAME, `M3 10.25${browserTab}H21`] },
    filled: { solids: [M.WINDOW_FRAME], cutoutStrokes: [`M1.75 10.25${browserTab}H22.25`] },
  },
  {
    name: 'tabs',
    category: 'layout',
    tags: ['browser', 'multi-tab', 'sheets', 'window'],
    outline: {
      strokes: [
        M.WINDOW_FRAME,
        line(3, 9.75, 21, 9.75),
        line(9, 4, 9, 9.75),
        line(15, 4, 15, 9.75),
      ],
    },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: [
        windowRowCut(9.75),
        { d: line(9, 2.75, 9, 9.75), widthScale: 0.85 },
        { d: line(15, 2.75, 15, 9.75), widthScale: 0.85 },
      ],
    },
  },
  {
    name: 'layers',
    category: 'layout',
    tags: ['stack', 'z-index', 'depth', 'design'],
    outline: {
      strokes: [
        'M12 3.75L20.5 8.25L12 12.75L3.5 8.25L12 3.75Z',
        'M3.5 12.25L12 16.75L20.5 12.25',
        'M3.5 16.25L12 20.75L20.5 16.25',
      ],
    },
    filled: {
      solids: ['M12 3.75L20.5 8.25L12 12.75L3.5 8.25L12 3.75Z'],
      strokes: ['M3.5 12.25L12 16.75L20.5 12.25', 'M3.5 16.25L12 20.75L20.5 16.25'],
    },
  },
  {
    name: 'stack',
    category: 'layout',
    tags: ['cards', 'deck', 'layers', 'collection'],
    outline: {
      strokes: [
        rect(4, 10.5, 16, 9.5, 2.25),
        'M6.25 7.25H17.75',
        'M8.5 4H15.5',
      ],
    },
    filled: {
      solids: [rect(4, 10.5, 16, 9.5, 2.25)],
      strokes: ['M6.25 7.25H17.75', 'M8.5 4H15.5'],
    },
  },
  {
    name: 'box-select',
    category: 'layout',
    tags: ['marquee', 'selection', 'region', 'area'],
    outline: {
      strokes: [
        'M4 7V5.75A1.75 1.75 0 0 1 5.75 4H7',
        'M17 4H18.25A1.75 1.75 0 0 1 20 5.75V7',
        'M20 17V18.25A1.75 1.75 0 0 1 18.25 20H17',
        'M7 20H5.75A1.75 1.75 0 0 1 4 18.25V17',
        line(10.5, 4, 13.5, 4),
        line(10.5, 20, 13.5, 20),
        line(4, 10.5, 4, 13.5),
        line(20, 10.5, 20, 13.5),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'crop',
    category: 'layout',
    tags: ['trim', 'cut', 'frame', 'photo'],
    outline: {
      strokes: [
        'M7 3.5V15A2 2 0 0 0 9 17H20.5',
        'M3.5 7H15A2 2 0 0 1 17 9V20.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'fullscreen',
    category: 'layout',
    tags: ['expand', 'present', 'stage', 'screen'],
    outline: {
      strokes: [
        M.WINDOW_FRAME,
        'M7.25 10.25V7.75H9.75',
        'M16.75 13.75V16.25H14.25',
      ],
    },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: ['M7.25 10.25V7.75H9.75', 'M16.75 13.75V16.25H14.25'],
    },
  },
  {
    name: 'exit-fullscreen',
    category: 'layout',
    tags: ['collapse', 'windowed', 'restore'],
    outline: {
      strokes: [
        M.WINDOW_FRAME,
        'M10 7.5V10H7.5',
        'M14 16.5V14H16.5',
      ],
    },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: ['M10 7.5V10H7.5', 'M14 16.5V14H16.5'],
    },
  },
  {
    name: 'picture-in-picture',
    category: 'layout',
    tags: ['pip', 'mini-player', 'floating', 'video'],
    outline: {
      strokes: [
        M.WINDOW_FRAME,
        rect(11.75, 11.75, 6.25, 5.25, 1.25),
      ],
    },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutFills: [rect(11.5, 11.5, 6.75, 5.75, 1.35)],
    },
  },
]
