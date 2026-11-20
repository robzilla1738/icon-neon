import { line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

export const editorIcons: IconDef[] = [
  {
    name: 'bold',
    category: 'editor',
    tags: ['strong', 'weight', 'format', 'typography'],
    outline: {
      strokes: [
        'M6.5 4.5H13A3.75 3.75 0 0 1 13 12H6.5V4.5Z',
        'M6.5 12H14A3.75 3.75 0 0 1 14 19.5H6.5V12Z',
      ],
    },
    filled: { boostedOutline: true, boostDelta: 0.5 },
  },
  {
    name: 'italic',
    category: 'editor',
    tags: ['emphasis', 'slant', 'format', 'typography'],
    outline: { strokes: [line(10, 4.5, 18.5, 4.5), line(5.5, 19.5, 14, 19.5), line(14.25, 4.5, 9.75, 19.5)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'underline',
    category: 'editor',
    tags: ['format', 'text', 'typography', 'line'],
    outline: {
      strokes: ['M6.5 4.5V10.5A5.5 5.5 0 0 0 17.5 10.5V4.5', line(5, 19.5, 19, 19.5)],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'strikethrough',
    category: 'editor',
    tags: ['strike', 'cross-out', 'format', 'text'],
    outline: {
      strokes: [
        line(4, 12, 20, 12),
        'M16.25 7.75C16.25 5.65 14.35 4.5 12 4.5C9.5 4.5 7.75 5.8 7.75 7.75C7.75 9.15 8.55 10 10.25 10.6',
        'M7.75 16.25C7.75 18.35 9.65 19.5 12 19.5C14.5 19.5 16.25 18.2 16.25 16.25C16.25 14.85 15.45 14 13.75 13.4',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'heading',
    category: 'editor',
    tags: ['title', 'h1', 'header', 'typography'],
    outline: { strokes: [line(6.5, 4.5, 6.5, 19.5), line(17.5, 4.5, 17.5, 19.5), line(6.5, 12, 17.5, 12)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'heading-1',
    category: 'editor',
    tags: ['h1', 'title', 'header', 'markdown'],
    outline: {
      strokes: [
        line(4.5, 5.5, 4.5, 18.5),
        line(12, 5.5, 12, 18.5),
        line(4.5, 12, 12, 12),
        'M16.25 12L19 10V18.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'heading-2',
    category: 'editor',
    tags: ['h2', 'subtitle', 'header', 'markdown'],
    outline: {
      strokes: [
        line(4, 5.5, 4, 18.5),
        line(11.25, 5.5, 11.25, 18.5),
        line(4, 12, 11.25, 12),
        'M15.25 12.25A2.25 2.25 0 0 1 19.75 12.25C19.75 14 15.25 16.5 15.25 18.5H20',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'heading-3',
    category: 'editor',
    tags: ['h3', 'section', 'header', 'markdown'],
    outline: {
      strokes: [
        line(4, 5.5, 4, 18.5),
        line(11.25, 5.5, 11.25, 18.5),
        line(4, 12, 11.25, 12),
        'M15.5 10.5H19.5L17 13.75A2.35 2.35 0 1 1 15.25 17.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'type',
    category: 'editor',
    tags: ['font', 'text', 'letter', 'typography'],
    outline: {
      strokes: [
        'M4.75 7V5.25A0.75 0.75 0 0 1 5.5 4.5H18.5A0.75 0.75 0 0 1 19.25 5.25V7',
        line(12, 4.5, 12, 19.5),
        line(9, 19.5, 15, 19.5),
      ],
    },
    filled: { boostedOutline: true },
  },

  // Alignment
  {
    name: 'align-left',
    category: 'editor',
    tags: ['text', 'paragraph', 'flush-left'],
    outline: { strokes: [line(4, 6, 20, 6), line(4, 10, 14.5, 10), line(4, 14, 18, 14), line(4, 18, 12.5, 18)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'align-center',
    category: 'editor',
    tags: ['text', 'paragraph', 'centered'],
    outline: { strokes: [line(4, 6, 20, 6), line(6.75, 10, 17.25, 10), line(5, 14, 19, 14), line(7.75, 18, 16.25, 18)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'align-right',
    category: 'editor',
    tags: ['text', 'paragraph', 'flush-right'],
    outline: { strokes: [line(4, 6, 20, 6), line(9.5, 10, 20, 10), line(6, 14, 20, 14), line(11.5, 18, 20, 18)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'align-justify',
    category: 'editor',
    tags: ['text', 'paragraph', 'block'],
    outline: { strokes: [line(4, 6, 20, 6), line(4, 10, 20, 10), line(4, 14, 20, 14), line(4, 18, 20, 18)] },
    filled: { boostedOutline: true },
  },

  // Lists & indentation
  {
    name: 'list',
    category: 'editor',
    tags: ['bullets', 'unordered', 'items', 'menu'],
    outline: {
      strokes: [line(8.5, 6.5, 20, 6.5), line(8.5, 12, 20, 12), line(8.5, 17.5, 20, 17.5)],
      dots: [{ cx: 4.5, cy: 6.5, scale: 1.05 }, { cx: 4.5, cy: 12, scale: 1.05 }, { cx: 4.5, cy: 17.5, scale: 1.05 }],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'list-ordered',
    category: 'editor',
    tags: ['numbered', 'steps', 'outline', 'items'],
    outline: {
      strokes: [
        line(12, 7, 20.5, 7),
        line(12, 17, 20.5, 17),
        'M4.5 5.75L6.75 4V10',
        'M3.75 15A2.25 2.25 0 0 1 8.25 15C8.25 16.75 4 18.25 4 20H8.5',
      ],
    },
    filled: { boostedOutline: true, boostDelta: 0.2 },
  },
  {
    name: 'list-checks',
    category: 'editor',
    tags: ['todo', 'checklist', 'tasks', 'completed'],
    outline: {
      strokes: [
        poly([[3.5, 6.75], [5.25, 8.5], [8.25, 5]]),
        poly([[3.5, 12.25], [5.25, 14], [8.25, 10.5]]),
        poly([[3.5, 17.75], [5.25, 19.5], [8.25, 16]]),
        line(11.5, 6.75, 20.5, 6.75),
        line(11.5, 12.25, 20.5, 12.25),
        line(11.5, 17.75, 20.5, 17.75),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'list-tree',
    category: 'editor',
    tags: ['nested', 'outline', 'hierarchy', 'explorer'],
    outline: {
      strokes: [
        line(4, 6, 20, 6),
        line(11.5, 12, 20, 12),
        line(11.5, 18, 20, 18),
        'M5.5 6V16A2 2 0 0 0 7.5 18H8',
        line(5.5, 12, 8, 12),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'indent',
    category: 'editor',
    tags: ['tab', 'increase', 'right', 'paragraph'],
    outline: {
      strokes: [
        line(4, 6, 20, 6),
        line(11, 10, 20, 10),
        line(11, 14, 20, 14),
        line(4, 18, 20, 18),
        poly([[4, 9.5], [7.25, 12], [4, 14.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'outdent',
    category: 'editor',
    tags: ['shift-tab', 'decrease', 'left', 'paragraph'],
    outline: {
      strokes: [
        line(4, 6, 20, 6),
        line(11, 10, 20, 10),
        line(11, 14, 20, 14),
        line(4, 18, 20, 18),
        poly([[7.25, 9.5], [4, 12], [7.25, 14.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },

  // Links & formatting extras
  {
    name: 'link',
    category: 'editor',
    tags: ['url', 'chain', 'hyperlink', 'connect'],
    outline: {
      strokes: [
        'M10.25 13.75A4.25 4.25 0 0 0 16.25 13.75L18.75 11.25A4.25 4.25 0 0 0 12.75 5.25L11.25 6.75',
        'M13.75 10.25A4.25 4.25 0 0 0 7.75 10.25L5.25 12.75A4.25 4.25 0 0 0 11.25 18.75L12.75 17.25',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'link-2',
    category: 'editor',
    tags: ['url', 'horizontal', 'chain', 'connect'],
    outline: {
      strokes: [
        'M9 7.75H7A4.25 4.25 0 0 0 7 16.25H9',
        'M15 7.75H17A4.25 4.25 0 0 1 17 16.25H15',
        line(8.25, 12, 15.75, 12),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'unlink',
    category: 'editor',
    tags: ['disconnect', 'break-link', 'detach', 'url'],
    outline: {
      strokes: [
        'M10.75 7.25L12.75 5.25A4.243 4.243 0 0 1 18.75 11.25L16.75 13.25',
        'M13.25 16.75L11.25 18.75A4.243 4.243 0 0 1 5.25 12.75L7.25 10.75',
        line(4.25, 4.25, 7.25, 7.25),
        line(16.75, 16.75, 19.75, 19.75),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'pilcrow',
    category: 'editor',
    tags: ['paragraph', 'formatting', 'whitespace', 'symbol'],
    outline: {
      strokes: [
        'M13 4.5H9.5A4 4 0 0 0 9.5 12.5H13',
        line(13, 4.5, 13, 19.5),
        line(17, 4.5, 17, 19.5),
        line(13, 4.5, 19, 4.5),
      ],
    },
    filled: {
      solids: ['M13 4.5H9.5A4 4 0 0 0 9.5 12.5H13V4.5Z'],
      strokes: [line(13, 4.5, 13, 19.5), line(17, 4.5, 17, 19.5), line(13, 4.5, 19, 4.5)],
    },
  },
  {
    name: 'superscript',
    category: 'editor',
    tags: ['exponent', 'power', 'math', 'format'],
    outline: {
      strokes: [
        line(4, 18.5, 12.5, 9),
        line(12.5, 18.5, 4, 9),
        'M16.25 6.5A1.75 1.75 0 0 1 19.75 6.5C19.75 8 16.25 9.75 16.25 11H20',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'subscript',
    category: 'editor',
    tags: ['index', 'formula', 'math', 'format'],
    outline: {
      strokes: [
        line(4, 15.5, 12.5, 6),
        line(12.5, 15.5, 4, 6),
        'M16.25 14.5A1.75 1.75 0 0 1 19.75 14.5C19.75 16 16.25 17.75 16.25 19H20',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'highlighter',
    category: 'editor',
    tags: ['marker', 'annotate', 'accent', 'color'],
    outline: {
      strokes: [
        'M9 11L15.75 4.25L20.25 8.75L13.5 15.5L9 11Z',
        'M9.25 11.25L5.25 15.25L4 19.5L8.25 18.25L12.75 14.75',
        line(4, 20.5, 16, 20.5),
      ],
    },
    filled: {
      solids: ['M9 11L15.75 4.25L20.25 8.75L13.5 15.5L9 11Z'],
      strokes: ['M9.25 11.25L5.25 15.25L4 19.5L8.25 18.25L12.75 14.75', line(4, 20.5, 16, 20.5)],
    },
  },
  {
    name: 'eraser',
    category: 'editor',
    tags: ['clear', 'rubber', 'remove', 'draw'],
    outline: {
      strokes: [
        'M7.5 19.5L3.75 15.75A2 2 0 0 1 3.75 12.92L12.17 4.5A2 2 0 0 1 15 4.5L19.75 9.25A2 2 0 0 1 19.75 12.08L12.33 19.5H7.5Z',
        line(9.5, 7.25, 16.75, 14.5),
        line(12.33, 19.5, 20.5, 19.5),
      ],
    },
    filled: {
      solids: [
        'M7.5 19.5L3.75 15.75A2 2 0 0 1 3.75 12.92L12.17 4.5A2 2 0 0 1 15 4.5L19.75 9.25A2 2 0 0 1 19.75 12.08L12.33 19.5H7.5Z',
      ],
      cutoutStrokes: [line(9.5, 7.25, 16.75, 14.5)],
      strokes: [line(12.33, 19.5, 20.5, 19.5)],
    },
  },
]
