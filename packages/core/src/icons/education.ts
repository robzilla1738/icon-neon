import * as M from '../motifs.ts'
import { circle, line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const scrollBody = 'M5.5 6A2.5 2.5 0 0 1 8 3.5H18.5A2.5 2.5 0 0 1 21 6V8H17V17.5A3 3 0 0 1 14 20.5H5.5A3 3 0 0 1 2.5 17.5V16H5.5Z'
const scrollDetails = [
  'M17 8V6A2.5 2.5 0 0 1 19.5 3.5',
  'M5.5 16H11V17.5A3 3 0 0 0 14 20.5',
  line(9, 8.5, 13.5, 8.5),
  line(9, 12, 12.25, 12),
]

const LIBRARY_SPINE = rect(3.5, 4, 6.5, 16, 1.25)
const LIBRARY_BAND = line(3.5, 8.75, 10, 8.75)
const LIBRARY_BOOKS = [line(13.5, 4, 13.5, 20), line(17, 4, 20.5, 20)]
const BOOKMARK_CHECK = poly([[8.75, 10.25], [11, 12.5], [15.25, 8.25]])
const NEWSPAPER_PAGE = rect(3.5, 4, 13.75, 16, 1.75)
const NEWSPAPER_FOLD = 'M17.25 8.75H18.75A1.75 1.75 0 0 1 20.5 10.5V17.75A2.25 2.25 0 0 1 18.25 20H15.5'
const NEWSPAPER_HEADLINE = rect(6.75, 7.25, 7.25, 4, 0.75)
const NEWSPAPER_TEXT = [line(6.75, 14, 14, 14), line(6.75, 16.75, 11.25, 16.75)]
const CAP_BOARD = 'M12 5L2.75 9.5L12 14L21.25 9.5Z'
const CAP_TASSEL = line(21.25, 9.5, 21.25, 16)

const DUMBBELL_PLATES = [rect(5.25, 6.75, 3.5, 10.5, 1.25), rect(15.25, 6.75, 3.5, 10.5, 1.25)]
const DUMBBELL_CAPS = [line(2.75, 9.25, 2.75, 14.75), line(21.25, 9.25, 21.25, 14.75)]
const PRESENTATION_STAND = 'M12 16.25V17.5M8.5 21L12 17.5L15.5 21'

export const educationIcons: IconDef[] = [
  {
    name: 'book',
    category: 'education',
    tags: ['docs', 'documentation', 'read', 'manual', 'guide'],
    outline: {
      strokes: [
        'M5 19.5V5A2 2 0 0 1 7 3H18.5A1 1 0 0 1 19.5 4V17H7.25A2.25 2.25 0 0 0 5 19.25V19.5A1.5 1.5 0 0 0 6.5 21H19.5',
      ],
    },
    filled: {
      solids: ['M5 18.5V5A2 2 0 0 1 7 3H18.5A1 1 0 0 1 19.5 4V17H7.25A2.25 2.25 0 0 0 5 18.5Z'],
      strokes: ['M5 18.5V19.5A1.5 1.5 0 0 0 6.5 21H19.5'],
    },
  },
  {
    name: 'book-open',
    category: 'education',
    tags: ['docs', 'wiki', 'knowledge', 'handbook', 'study'],
    outline: {
      strokes: [
        'M12 6.5A4.25 4.25 0 0 0 8 4.25H3.5V18H8.5A3.5 3.5 0 0 1 12 20.25A3.5 3.5 0 0 1 15.5 18H20.5V4.25H16A4.25 4.25 0 0 0 12 6.5Z',
        line(12, 6.5, 12, 20.25),
      ],
    },
    filled: {
      solids: [
        'M12 6.5A4.25 4.25 0 0 0 8 4.25H3.5V18H8.5A3.5 3.5 0 0 1 12 20.25A3.5 3.5 0 0 1 15.5 18H20.5V4.25H16A4.25 4.25 0 0 0 12 6.5Z',
      ],
      cutoutStrokes: [line(12, 6, 12, 20.75)],
    },
  },
  {
    name: 'bookmark-check',
    category: 'education',
    tags: ['saved', 'read', 'done', 'favorite'],
    outline: { strokes: [M.BOOKMARK_BODY, BOOKMARK_CHECK] },
    filled: { solids: [M.BOOKMARK_BODY], cutoutStrokes: [BOOKMARK_CHECK] },
  },
  {
    name: 'library',
    category: 'education',
    tags: ['books', 'catalog', 'collection', 'archive'],
    outline: { strokes: [LIBRARY_SPINE, LIBRARY_BAND, ...LIBRARY_BOOKS] },
    filled: { solids: [LIBRARY_SPINE], cutoutStrokes: [LIBRARY_BAND], strokes: LIBRARY_BOOKS },
  },
  {
    name: 'newspaper',
    category: 'education',
    tags: ['news', 'feed', 'blog', 'press', 'article'],
    outline: {
      strokes: [
        NEWSPAPER_PAGE,
        NEWSPAPER_FOLD,
        NEWSPAPER_HEADLINE,
        ...NEWSPAPER_TEXT,
      ],
    },
    filled: {
      solids: [NEWSPAPER_PAGE],
      cutoutFills: [NEWSPAPER_HEADLINE],
      cutoutStrokes: NEWSPAPER_TEXT,
      strokes: [NEWSPAPER_FOLD],
    },
  },
  {
    name: 'notebook',
    category: 'education',
    tags: ['journal', 'notes', 'obsidian', 'vault', 'diary'],
    outline: {
      strokes: [
        rect(5.5, 3, 14.5, 18, 2.25),
        line(3.5, 7.25, 7, 7.25),
        line(3.5, 12, 7, 12),
        line(3.5, 16.75, 7, 16.75),
        line(10, 8.5, 16, 8.5),
        line(10, 12.5, 14.5, 12.5),
      ],
    },
    filled: {
      solids: [rect(5.5, 3, 14.5, 18, 2.25)],
      cutoutStrokes: [line(10, 8.5, 16, 8.5), line(10, 12.5, 14.5, 12.5)],
      strokes: [line(3.25, 7.25, 5.5, 7.25), line(3.25, 12, 5.5, 12), line(3.25, 16.75, 5.5, 16.75)],
    },
  },
  {
    name: 'sticky-note',
    category: 'education',
    tags: ['memo', 'post-it', 'note', 'reminder'],
    outline: {
      strokes: [
        'M6.25 4H17.75A2.25 2.25 0 0 1 20 6.25V14.5L14.5 20H6.25A2.25 2.25 0 0 1 4 17.75V6.25A2.25 2.25 0 0 1 6.25 4Z',
        'M14.5 20V15.75A1.25 1.25 0 0 1 15.75 14.5H20',
      ],
    },
    filled: {
      solids: ['M6.25 4H17.75A2.25 2.25 0 0 1 20 6.25V14.5L14.5 20H6.25A2.25 2.25 0 0 1 4 17.75V6.25A2.25 2.25 0 0 1 6.25 4Z'],
      cutoutStrokes: ['M14.5 20V15.75A1.25 1.25 0 0 1 15.75 14.5H20'],
    },
  },
  {
    name: 'graduation-cap',
    category: 'education',
    tags: ['learn', 'academy', 'course', 'degree', 'tutorial'],
    outline: {
      strokes: [
        CAP_BOARD,
        'M6.75 11.446V16C6.75 17.65 9.1 19 12 19C14.9 19 17.25 17.65 17.25 16V11.446',
        CAP_TASSEL,
      ],
    },
    filled: {
      solids: [
        CAP_BOARD,
        { d: 'M6.75 13.75L12 16.3L17.25 13.75V16.5C17.25 18.15 14.9 19.5 12 19.5C9.1 19.5 6.75 18.15 6.75 16.5Z', expand: false },
      ],
      strokes: [CAP_TASSEL],
    },
  },
  {
    name: 'scroll',
    category: 'education',
    tags: ['contract', 'script', 'license', 'parchment'],
    outline: { strokes: [scrollBody, ...scrollDetails] },
    filled: { solids: [scrollBody], cutoutStrokes: scrollDetails },
  },
  {
    name: 'presentation',
    category: 'education',
    tags: ['slides', 'deck', 'keynote', 'pitch', 'chart'],
    outline: {
      strokes: [
        line(2.75, 4.25, 21.25, 4.25),
        'M4.25 4.25V14.25A2 2 0 0 0 6.25 16.25H17.75A2 2 0 0 0 19.75 14.25V4.25',
        PRESENTATION_STAND,
      ],
    },
    filled: {
      solids: ['M4.25 4.25H19.75V14.25A2 2 0 0 1 17.75 16.25H6.25A2 2 0 0 1 4.25 14.25V4.25Z'],
      strokes: [line(2.75, 4.25, 21.25, 4.25), PRESENTATION_STAND],
    },
  },

  // Life, wellness & hobbies
  {
    name: 'coffee',
    category: 'education',
    tags: ['cafe', 'cup', 'break', 'morning', 'drink'],
    outline: {
      strokes: [
        'M4.25 9.5H16.5V15.5A4.5 4.5 0 0 1 12 20H8.75A4.5 4.5 0 0 1 4.25 15.5V9.5Z',
        'M16.5 10.5H18.25A2.25 2.25 0 0 1 18.25 15H16.5',
        line(7.25, 4.25, 7.25, 6.5),
        line(10.5, 4.25, 10.5, 6.5),
        line(13.75, 4.25, 13.75, 6.5),
      ],
    },
    filled: {
      solids: ['M4.25 9.5H16.5V15.5A4.5 4.5 0 0 1 12 20H8.75A4.5 4.5 0 0 1 4.25 15.5V9.5Z'],
      strokes: ['M16.5 10.5H18.25A2.25 2.25 0 0 1 18.25 15H16.5', line(7.25, 4.25, 7.25, 6.5), line(10.5, 4.25, 10.5, 6.5), line(13.75, 4.25, 13.75, 6.5)],
    },
  },
  {
    name: 'utensils',
    category: 'education',
    tags: ['food', 'restaurant', 'dining', 'lunch'],
    outline: {
      strokes: [
        'M5.25 3.75V9.25A2.75 2.75 0 0 0 10.75 9.25V3.75',
        line(8, 3.75, 8, 20.25),
        'M18.25 20.25V3.75C16.25 4.25 14.75 6.5 14.75 10.5V13.75H18.25',
      ],
    },
    filled: {
      solids: ['M18.25 3.75C16.25 4.25 14.75 6.5 14.75 10.5V13.75H18.25V3.75Z'],
      strokes: ['M5.25 3.75V9.25A2.75 2.75 0 0 0 10.75 9.25V3.75', line(8, 3.75, 8, 20.25), line(18.25, 13.75, 18.25, 20.25)],
    },
  },
  {
    name: 'pill',
    category: 'education',
    tags: ['medicine', 'health', 'capsule', 'pharmacy'],
    outline: {
      strokes: [
        'M11.89 5.39A4.75 4.75 0 0 1 18.61 12.11L12.11 18.61A4.75 4.75 0 0 1 5.39 11.89L11.89 5.39Z',
        line(8.64, 8.64, 15.36, 15.36),
      ],
    },
    filled: {
      solids: ['M11.89 5.39A4.75 4.75 0 0 1 18.61 12.11L15.36 15.36L8.64 8.64L11.89 5.39Z'],
      strokes: ['M8.64 8.64L5.39 11.89A4.75 4.75 0 0 0 12.11 18.61L15.36 15.36'],
    },
  },
  {
    name: 'stethoscope',
    category: 'education',
    tags: ['doctor', 'medical', 'health', 'diagnostics'],
    outline: {
      strokes: [
        'M5.5 4H4.5V9A4.75 4.75 0 0 0 14 9V4H13',
        'M9.25 13.75V16.25A4.5 4.5 0 0 0 18.25 16.25V13.75',
        circle(18.25, 11.75, 2),
      ],
    },
    filled: {
      solids: [circle(18.25, 11.75, 2.15)],
      strokes: ['M5.5 4H4.5V9A4.75 4.75 0 0 0 14 9V4H13', 'M9.25 13.75V16.25A4.5 4.5 0 0 0 18.25 16.25V13.75'],
    },
  },
  {
    name: 'dumbbell',
    category: 'education',
    tags: ['fitness', 'gym', 'workout', 'strength', 'health'],
    outline: {
      strokes: [
        ...DUMBBELL_PLATES,
        ...DUMBBELL_CAPS,
        line(2.75, 12, 5.25, 12),
        line(8.75, 12, 15.25, 12),
        line(18.75, 12, 21.25, 12),
      ],
    },
    filled: {
      solids: DUMBBELL_PLATES,
      strokes: [...DUMBBELL_CAPS, line(2.75, 12, 21.25, 12)],
    },
  },
  {
    name: 'puzzle',
    category: 'education',
    tags: ['plugin', 'extension', 'addon', 'integration', 'game'],
    outline: {
      strokes: [
        'M14.75 6.5V5.25A2 2 0 0 0 12.75 3.25A2 2 0 0 0 10.75 5.25V6.5H6.5A1.75 1.75 0 0 0 4.75 8.25V11.25H6A2 2 0 0 1 6 15.25H4.75V18.25A1.75 1.75 0 0 0 6.5 20H16.5A1.75 1.75 0 0 0 18.25 18.25V14.75H19.5A2 2 0 0 0 19.5 10.75H18.25V8.25A1.75 1.75 0 0 0 16.5 6.5H14.75Z',
      ],
    },
    filled: {
      solids: [
        'M14.75 6.5V5.25A2 2 0 0 0 12.75 3.25A2 2 0 0 0 10.75 5.25V6.5H6.5A1.75 1.75 0 0 0 4.75 8.25V11.25H6A2 2 0 0 1 6 15.25H4.75V18.25A1.75 1.75 0 0 0 6.5 20H16.5A1.75 1.75 0 0 0 18.25 18.25V14.75H19.5A2 2 0 0 0 19.5 10.75H18.25V8.25A1.75 1.75 0 0 0 16.5 6.5H14.75Z',
      ],
    },
  },
]
