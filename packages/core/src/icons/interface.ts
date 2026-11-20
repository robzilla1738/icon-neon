import * as M from '../motifs.ts'
import { circle, gear, line, poly, rect, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const GEAR_BODY = gear(12, 12, 9.25, 8)
const FILTER_FUNNEL =
  'M3.75 5.25C3.75 4.42 4.42 3.75 5.25 3.75H18.75C19.58 3.75 20.25 4.42 20.25 5.25C20.25 5.65 20.09 6.03 19.81 6.31L14.5 11.62V17.85C14.5 18.38 14.22 18.87 13.76 19.14L10.9 20.82C10.23 21.21 9.5 20.73 9.5 19.95V11.62L4.19 6.31C3.91 6.03 3.75 5.65 3.75 5.25Z'
const PIN_CAP = line(13.25, 3.75, 20.25, 10.75)
const PIN_HEAD = 'M14.5 5L10 9.5H6.5Q5.25 9.5 6.15 10.4L13.6 17.85Q14.5 18.75 14.5 17.5V14L19 9.5Z'
const PIN_NEEDLE = line(9.85, 14.15, 4.5, 19.5)

const EDIT_LINE = line(12.25, 20, 20.25, 20)

export const interfaceIcons: IconDef[] = [
  {
    name: 'home',
    category: 'interface',
    tags: ['house', 'main', 'start', 'dashboard', 'index'],
    outline: { strokes: [M.HOME_BODY, M.HOME_DOOR_OUTLINE] },
    filled: { solids: [M.HOME_BODY], cutoutFills: [M.HOME_ROOF_DOOR_CUTOUT] },
  },
  {
    name: 'search',
    category: 'interface',
    tags: ['find', 'lookup', 'magnifier', 'query', 'lens'],
    outline: { strokes: [circle(10.75, 10.75, 6.75), line(15.65, 15.65, 20.25, 20.25)] },
    filled: {
      solids: [circle(10.75, 10.75, 6.75)],
      cutoutFills: [circle(10.75, 10.75, 3.6)],
      strokes: [line(15.65, 15.65, 20.25, 20.25)],
    },
  },
  {
    name: 'zoom-in',
    category: 'interface',
    tags: ['magnify', 'enlarge', 'search', 'plus'],
    outline: {
      strokes: [
        circle(10.75, 10.75, 6.75),
        line(15.65, 15.65, 20.25, 20.25),
        line(10.75, 8.25, 10.75, 13.25),
        line(8.25, 10.75, 13.25, 10.75),
      ],
    },
    filled: {
      solids: [circle(10.75, 10.75, 6.75)],
      cutoutStrokes: [line(10.75, 8.25, 10.75, 13.25), line(8.25, 10.75, 13.25, 10.75)],
      strokes: [line(15.65, 15.65, 20.25, 20.25)],
    },
  },
  {
    name: 'zoom-out',
    category: 'interface',
    tags: ['shrink', 'reduce', 'search', 'minus'],
    outline: {
      strokes: [
        circle(10.75, 10.75, 6.75),
        line(15.65, 15.65, 20.25, 20.25),
        line(8.25, 10.75, 13.25, 10.75),
      ],
    },
    filled: {
      solids: [circle(10.75, 10.75, 6.75)],
      cutoutStrokes: [line(8.25, 10.75, 13.25, 10.75)],
      strokes: [line(15.65, 15.65, 20.25, 20.25)],
    },
  },
  {
    name: 'menu',
    category: 'interface',
    tags: ['hamburger', 'navigation', 'bars', 'drawer'],
    outline: { strokes: [line(4, 6.5, 20, 6.5), line(4, 12, 20, 12), line(4, 17.5, 20, 17.5)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'more-horizontal',
    category: 'interface',
    tags: ['ellipsis', 'dots', 'options', 'overflow'],
    outline: { strokes: [], dots: [{ cx: 5.5, cy: 12, scale: 1.35 }, { cx: 12, cy: 12, scale: 1.35 }, { cx: 18.5, cy: 12, scale: 1.35 }] },
    filled: { dots: [{ cx: 5.5, cy: 12, scale: 1.7 }, { cx: 12, cy: 12, scale: 1.7 }, { cx: 18.5, cy: 12, scale: 1.7 }] },
  },
  {
    name: 'more-vertical',
    category: 'interface',
    tags: ['kebab', 'dots', 'options', 'overflow'],
    outline: { strokes: [], dots: [{ cx: 12, cy: 5.5, scale: 1.35 }, { cx: 12, cy: 12, scale: 1.35 }, { cx: 12, cy: 18.5, scale: 1.35 }] },
    filled: { dots: [{ cx: 12, cy: 5.5, scale: 1.7 }, { cx: 12, cy: 12, scale: 1.7 }, { cx: 12, cy: 18.5, scale: 1.7 }] },
  },

  // Core math/action glyphs
  {
    name: 'plus',
    category: 'interface',
    tags: ['add', 'new', 'create', 'positive'],
    outline: { strokes: [line(12, 5, 12, 19), line(5, 12, 19, 12)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'minus',
    category: 'interface',
    tags: ['subtract', 'remove', 'dash', 'collapse'],
    outline: { strokes: [line(5, 12, 19, 12)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'x',
    category: 'interface',
    tags: ['close', 'cancel', 'dismiss', 'delete', 'multiply'],
    outline: { strokes: [line(6, 6, 18, 18), line(18, 6, 6, 18)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'check',
    category: 'interface',
    tags: ['done', 'ok', 'confirm', 'tick', 'selected'],
    outline: { strokes: [M.CHECK_MED] },
    filled: { boostedOutline: true },
  },
  {
    name: 'check-double',
    category: 'interface',
    tags: ['read', 'seen', 'verified', 'all-done'],
    outline: {
      strokes: [
        poly([[2.5, 13.625], [5, 16.125], [12, 7.875]]),
        poly([[12, 13.625], [14.5, 16.125], [21.5, 7.875]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'equal',
    category: 'interface',
    tags: ['same', 'equals', 'math', 'balance'],
    outline: { strokes: [line(5, 9, 19, 9), line(5, 15, 19, 15)] },
    filled: { boostedOutline: true },
  },

  // Circle & square state badges
  {
    name: 'plus-circle',
    category: 'interface',
    tags: ['add', 'create', 'insert', 'new'],
    outline: { strokes: [M.CIRCLE_FRAME, line(12, 8.25, 12, 15.75), line(8.25, 12, 15.75, 12)] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(12, 8.25, 12, 15.75), line(8.25, 12, 15.75, 12)] },
  },
  {
    name: 'minus-circle',
    category: 'interface',
    tags: ['remove', 'subtract', 'disable'],
    outline: { strokes: [M.CIRCLE_FRAME, line(8.25, 12, 15.75, 12)] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(8.25, 12, 15.75, 12)] },
  },
  {
    name: 'x-circle',
    category: 'interface',
    tags: ['close', 'error', 'clear', 'cancel', 'fail'],
    outline: { strokes: [M.CIRCLE_FRAME, line(9.25, 9.25, 14.75, 14.75), line(14.75, 9.25, 9.25, 14.75)] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(9.25, 9.25, 14.75, 14.75), line(14.75, 9.25, 9.25, 14.75)] },
  },
  {
    name: 'check-circle',
    category: 'interface',
    tags: ['success', 'complete', 'done', 'valid'],
    outline: { strokes: [M.CIRCLE_FRAME, M.CHECK_SMALL] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [M.CHECK_SMALL] },
  },
  {
    name: 'plus-square',
    category: 'interface',
    tags: ['add', 'box', 'new', 'create'],
    outline: { strokes: [M.SQUARE_FRAME, line(12, 8.5, 12, 15.5), line(8.5, 12, 15.5, 12)] },
    filled: { solids: [M.SQUARE_FRAME], cutoutStrokes: [line(12, 8.5, 12, 15.5), line(8.5, 12, 15.5, 12)] },
  },
  {
    name: 'check-square',
    category: 'interface',
    tags: ['checkbox', 'checked', 'done', 'todo'],
    outline: { strokes: [M.SQUARE_FRAME, M.CHECK_SMALL] },
    filled: { solids: [M.SQUARE_FRAME], cutoutStrokes: [M.CHECK_SMALL] },
  },
  {
    name: 'x-square',
    category: 'interface',
    tags: ['close', 'box', 'cancel', 'remove'],
    outline: { strokes: [M.SQUARE_FRAME, line(9.25, 9.25, 14.75, 14.75), line(14.75, 9.25, 9.25, 14.75)] },
    filled: { solids: [M.SQUARE_FRAME], cutoutStrokes: [line(9.25, 9.25, 14.75, 14.75), line(14.75, 9.25, 9.25, 14.75)] },
  },

  // Settings, sliders, filter, sort
  {
    name: 'settings',
    category: 'interface',
    tags: ['cog', 'gear', 'preferences', 'config', 'options'],
    outline: { strokes: [GEAR_BODY, circle(12, 12, 2.75)] },
    filled: { solids: [GEAR_BODY], cutoutFills: [circle(12, 12, 3.25)] },
  },
  {
    name: 'sliders',
    category: 'interface',
    tags: ['adjust', 'controls', 'tune', 'preferences', 'equalizer'],
    outline: {
      strokes: [
        line(3.5, 7, 8, 7),
        line(12, 7, 20.5, 7),
        circle(10, 7, 2),
        line(3.5, 17, 12, 17),
        line(16, 17, 20.5, 17),
        circle(14, 17, 2),
      ],
    },
    filled: {
      solids: [circle(10, 7, 2.15), circle(14, 17, 2.15)],
      strokes: [line(3.5, 7, 20.5, 7), line(3.5, 17, 20.5, 17)],
    },
  },
  {
    name: 'sliders-vertical',
    category: 'interface',
    tags: ['mixer', 'audio', 'adjust', 'faders'],
    outline: {
      strokes: [
        line(7, 3.5, 7, 8),
        line(7, 12, 7, 20.5),
        circle(7, 10, 2),
        line(17, 3.5, 17, 12),
        line(17, 16, 17, 20.5),
        circle(17, 14, 2),
      ],
    },
    filled: {
      solids: [circle(7, 10, 2.15), circle(17, 14, 2.15)],
      strokes: [line(7, 3.5, 7, 20.5), line(17, 3.5, 17, 20.5)],
    },
  },
  {
    name: 'filter',
    category: 'interface',
    tags: ['funnel', 'refine', 'query', 'sort'],
    outline: { strokes: [FILTER_FUNNEL] },
    filled: { solids: [FILTER_FUNNEL] },
  },
  {
    name: 'sort-asc',
    category: 'interface',
    tags: ['order', 'ascending', 'list', 'rank'],
    outline: {
      strokes: [
        line(4, 7, 7, 7),
        line(4, 12, 10, 12),
        line(4, 17, 13, 17),
        line(17, 18.5, 17, 5.5),
        poly([[14, 8.5], [17, 5.5], [20, 8.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'sort-desc',
    category: 'interface',
    tags: ['order', 'descending', 'list', 'rank'],
    outline: {
      strokes: [
        line(4, 7, 13, 7),
        line(4, 12, 10, 12),
        line(4, 17, 7, 17),
        line(17, 5.5, 17, 18.5),
        poly([[14, 15.5], [17, 18.5], [20, 15.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },

  // CRUD & clipboard actions
  {
    name: 'edit',
    category: 'interface',
    tags: ['pencil', 'write', 'modify', 'rename'],
    outline: { strokes: [M.PENCIL_BODY, EDIT_LINE] },
    filled: { solids: [M.PENCIL_BODY], strokes: [EDIT_LINE] },
  },
  {
    name: 'edit-square',
    category: 'interface',
    tags: ['compose', 'write', 'draft', 'modify'],
    outline: {
      strokes: [
        'M11.5 4.5H6.5A2.25 2.25 0 0 0 4.25 6.75V17.5A2.25 2.25 0 0 0 6.5 19.75H17.25A2.25 2.25 0 0 0 19.5 17.5V12.5',
        'M17.35 4.15C18.1 3.4 19.3 3.4 20.05 4.15C20.8 4.9 20.8 6.1 20.05 6.85L12.2 14.7L9 15.25L9.55 12.05L17.35 4.15Z',
      ],
    },
    filled: {
      solids: ['M17.35 4.15C18.1 3.4 19.3 3.4 20.05 4.15C20.8 4.9 20.8 6.1 20.05 6.85L12.2 14.7L9 15.25L9.55 12.05L17.35 4.15Z'],
      strokes: ['M11.5 4.5H6.5A2.25 2.25 0 0 0 4.25 6.75V17.5A2.25 2.25 0 0 0 6.5 19.75H17.25A2.25 2.25 0 0 0 19.5 17.5V12.5'],
    },
  },
  {
    name: 'trash',
    category: 'interface',
    tags: ['delete', 'remove', 'bin', 'discard', 'garbage'],
    outline: {
      strokes: [
        line(4, 6.5, 20, 6.5),
        'M9 6.5V4.75A1.25 1.25 0 0 1 10.25 3.5H13.75A1.25 1.25 0 0 1 15 4.75V6.5',
        'M6 6.5L6.85 18.65A2 2 0 0 0 8.85 20.5H15.15A2 2 0 0 0 17.15 18.65L18 6.5',
        line(10, 10.5, 10, 16.5),
        line(14, 10.5, 14, 16.5),
      ],
    },
    filled: {
      solids: ['M6 7.5L6.85 18.65A2 2 0 0 0 8.85 20.5H15.15A2 2 0 0 0 17.15 18.65L18 7.5Z'],
      cutoutStrokes: [line(10, 11, 10, 16.5), line(14, 11, 14, 16.5)],
      strokes: [
        line(4, 6.25, 20, 6.25),
        'M9 6.25V4.75A1.25 1.25 0 0 1 10.25 3.5H13.75A1.25 1.25 0 0 1 15 4.75V6.25',
      ],
    },
  },
  {
    name: 'copy',
    category: 'interface',
    tags: ['duplicate', 'clone', 'clipboard'],
    outline: {
      strokes: [
        rect(8.5, 8.5, 11.75, 11.75, 2.25),
        'M5.75 15.5H5.5A1.75 1.75 0 0 1 3.75 13.75V5.5A1.75 1.75 0 0 1 5.5 3.75H13.75A1.75 1.75 0 0 1 15.5 5.5V5.75',
      ],
    },
    filled: {
      solids: [rect(8.5, 8.5, 11.75, 11.75, 2.25)],
      strokes: [
        'M5.75 15.5H5.5A1.75 1.75 0 0 1 3.75 13.75V5.5A1.75 1.75 0 0 1 5.5 3.75H13.75A1.75 1.75 0 0 1 15.5 5.5V5.75',
      ],
    },
  },
  {
    name: 'clipboard',
    category: 'interface',
    tags: ['paste', 'board', 'notes', 'copy'],
    outline: {
      strokes: [
        rect(8.5, 2.75, 7, 3.25, 1.25),
        'M8.5 4.5H6.75A2 2 0 0 0 4.75 6.5V19A2 2 0 0 0 6.75 21H17.25A2 2 0 0 0 19.25 19V6.5A2 2 0 0 0 17.25 4.5H15.5',
      ],
    },
    filled: {
      solids: [rect(4.75, 5, 14.5, 16, 2.25)],
      cutoutFills: [rect(7.25, 2.25, 9.5, 5, 2)],
      topSolids: [{ d: rect(8.75, 2.75, 6.5, 3, 1.25), expand: false }],
    },
  },
  {
    name: 'clipboard-check',
    category: 'interface',
    tags: ['copied', 'done', 'verified', 'paste'],
    outline: {
      strokes: [
        rect(8.5, 2.75, 7, 3.25, 1.25),
        'M8.5 4.5H6.75A2 2 0 0 0 4.75 6.5V19A2 2 0 0 0 6.75 21H17.25A2 2 0 0 0 19.25 19V6.5A2 2 0 0 0 17.25 4.5H15.5',
        poly([[8.75, 13.75], [11, 16], [15.5, 11.25]]),
      ],
    },
    filled: {
      solids: [rect(4.75, 5, 14.5, 16, 2.25)],
      cutoutFills: [rect(7.25, 2.25, 9.5, 5, 2)],
      cutoutStrokes: [poly([[8.75, 13.75], [11, 16], [15.5, 11.25]])],
      topSolids: [{ d: rect(8.75, 2.75, 6.5, 3, 1.25), expand: false }],
    },
  },
  {
    name: 'scissors',
    category: 'interface',
    tags: ['cut', 'trim', 'snip', 'clip'],
    outline: {
      strokes: [
        circle(6.5, 7, 2.75),
        circle(6.5, 17, 2.75),
        line(8.8, 8.7, 19.5, 16.75),
        line(8.8, 15.3, 19.5, 7.25),
      ],
    },
    filled: {
      solids: [circle(6.5, 7, 2.75), circle(6.5, 17, 2.75)],
      cutoutFills: [circle(6.5, 7, 1.15), circle(6.5, 17, 1.15)],
      strokes: [line(8.8, 8.7, 19.5, 16.75), line(8.8, 15.3, 19.5, 7.25)],
    },
  },

  // Transfer & persistence
  {
    name: 'download',
    category: 'interface',
    tags: ['save', 'export', 'import', 'tray'],
    outline: {
      strokes: [
        line(12, 4, 12, 15.25),
        poly([[7.75, 11], [12, 15.25], [16.25, 11]]),
        'M4.25 16.5V17.75A2 2 0 0 0 6.25 19.75H17.75A2 2 0 0 0 19.75 17.75V16.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'upload',
    category: 'interface',
    tags: ['publish', 'import', 'send', 'tray'],
    outline: {
      strokes: [
        line(12, 15.25, 12, 4),
        poly([[7.75, 8.25], [12, 4], [16.25, 8.25]]),
        'M4.25 16.5V17.75A2 2 0 0 0 6.25 19.75H17.75A2 2 0 0 0 19.75 17.75V16.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'share',
    category: 'interface',
    tags: ['export', 'ios', 'send', 'publish'],
    outline: {
      strokes: [
        line(12, 14.5, 12, 3.75),
        poly([[8, 7.75], [12, 3.75], [16, 7.75]]),
        'M7.5 10.5H6.25A2 2 0 0 0 4.25 12.5V18A2 2 0 0 0 6.25 20H17.75A2 2 0 0 0 19.75 18V12.5A2 2 0 0 0 17.75 10.5H16.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'share-2',
    category: 'interface',
    tags: ['network', 'nodes', 'distribute', 'social'],
    outline: {
      strokes: [
        circle(17.75, 5.75, 2.5),
        circle(6.25, 12, 2.5),
        circle(17.75, 18.25, 2.5),
        line(8.45, 10.8, 15.55, 6.95),
        line(8.45, 13.2, 15.55, 17.05),
      ],
    },
    filled: {
      solids: [circle(17.75, 5.75, 2.5), circle(6.25, 12, 2.5), circle(17.75, 18.25, 2.5)],
      strokes: [line(8.45, 10.8, 15.55, 6.95), line(8.45, 13.2, 15.55, 17.05)],
    },
  },
  {
    name: 'save',
    category: 'interface',
    tags: ['disk', 'floppy', 'store', 'persist'],
    outline: {
      strokes: [
        'M6 3.75H15.5L20.25 8.5V18A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75Z',
        'M8 3.75V8.5A1 1 0 0 0 9 9.5H14.5A1 1 0 0 0 15.5 8.5V4.25',
        'M7.5 20.25V14.25A1.25 1.25 0 0 1 8.75 13H15.25A1.25 1.25 0 0 1 16.5 14.25V20.25',
      ],
    },
    filled: {
      solids: ['M6 3.75H15.5L20.25 8.5V18A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75Z'],
      cutoutFills: [rect(8.25, 4.75, 6.25, 4.25, 0.9), rect(7.25, 13.25, 9.5, 5.25, 1.15)],
      topSolids: [{ d: rect(12.25, 5.5, 1.35, 2.75, 0.4), expand: false }],
    },
  },
  {
    name: 'bookmark',
    category: 'interface',
    tags: ['save', 'favorite', 'ribbon', 'mark'],
    outline: { strokes: [M.BOOKMARK_BODY] },
    filled: { solids: [M.BOOKMARK_BODY] },
  },
  {
    name: 'pin',
    category: 'interface',
    tags: ['thumbtack', 'stick', 'attach', 'fix'],
    outline: { strokes: [PIN_CAP, PIN_HEAD, PIN_NEEDLE] },
    filled: { solids: [PIN_HEAD], strokes: [PIN_CAP, PIN_NEEDLE] },
  },
  {
    name: 'pin-off',
    category: 'interface',
    tags: ['unpin', 'detach', 'remove'],
    outline: { strokes: [PIN_CAP, PIN_HEAD, PIN_NEEDLE] },
    filled: { solids: [PIN_HEAD], strokes: [PIN_CAP, PIN_NEEDLE], slash: M.SLASH_LINE },
  },

  // Visibility, handles, command
  {
    name: 'eye',
    category: 'interface',
    tags: ['view', 'show', 'visible', 'preview', 'watch'],
    outline: { strokes: [M.EYE_OUTLINE, circle(12, 12, 3)] },
    filled: {
      solids: [M.EYE_OUTLINE],
      cutoutFills: [circle(12, 12, 3.6)],
      topSolids: [{ d: circle(12, 12, 1.8), expand: false }],
    },
  },
  {
    name: 'eye-off',
    category: 'interface',
    tags: ['hide', 'invisible', 'private', 'password'],
    outline: { strokes: [M.EYE_OUTLINE, circle(12, 12, 3.25)] },
    filled: {
      solids: [M.EYE_OUTLINE],
      cutoutFills: [circle(12, 12, 3.6)],
      slash: M.SLASH_LINE,
    },
  },
  {
    name: 'grip-vertical',
    category: 'interface',
    tags: ['drag', 'handle', 'reorder', 'dots'],
    outline: {
      strokes: [],
      dots: [
        { cx: 9, cy: 6, scale: 1.2 },
        { cx: 15, cy: 6, scale: 1.2 },
        { cx: 9, cy: 12, scale: 1.2 },
        { cx: 15, cy: 12, scale: 1.2 },
        { cx: 9, cy: 18, scale: 1.2 },
        { cx: 15, cy: 18, scale: 1.2 },
      ],
    },
    filled: {
      dots: [
        { cx: 9, cy: 6, scale: 1.55 },
        { cx: 15, cy: 6, scale: 1.55 },
        { cx: 9, cy: 12, scale: 1.55 },
        { cx: 15, cy: 12, scale: 1.55 },
        { cx: 9, cy: 18, scale: 1.55 },
        { cx: 15, cy: 18, scale: 1.55 },
      ],
    },
  },
  {
    name: 'grip-horizontal',
    category: 'interface',
    tags: ['drag', 'handle', 'reorder', 'dots'],
    outline: {
      strokes: [],
      dots: [
        { cx: 6, cy: 9, scale: 1.2 },
        { cx: 12, cy: 9, scale: 1.2 },
        { cx: 18, cy: 9, scale: 1.2 },
        { cx: 6, cy: 15, scale: 1.2 },
        { cx: 12, cy: 15, scale: 1.2 },
        { cx: 18, cy: 15, scale: 1.2 },
      ],
    },
    filled: {
      dots: [
        { cx: 6, cy: 9, scale: 1.55 },
        { cx: 12, cy: 9, scale: 1.55 },
        { cx: 18, cy: 9, scale: 1.55 },
        { cx: 6, cy: 15, scale: 1.55 },
        { cx: 12, cy: 15, scale: 1.55 },
        { cx: 18, cy: 15, scale: 1.55 },
      ],
    },
  },
  {
    name: 'command',
    category: 'interface',
    tags: ['cmd', 'shortcut', 'mac', 'key', 'palette'],
    outline: {
      strokes: [
        'M15.25 6.25V17.75A2.5 2.5 0 1 0 17.75 15.25H6.25A2.5 2.5 0 1 0 8.75 17.75V6.25A2.5 2.5 0 1 0 6.25 8.75H17.75A2.5 2.5 0 1 0 15.25 6.25Z',
      ],
    },
    filled: { boostedOutline: true },
  },
]
