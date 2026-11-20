import * as M from '../motifs.ts'
import { circle, line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

// Carry the filled seam through the outer edge of the expanded page.
const FILE_FOLD_CUTOUT = 'M13.75 1.5V7A1.25 1.25 0 0 0 15 8.25H20.25'
const FILE_AUDIO_NOTE =
  'M11 15.15V12.35Q11 11.65 11.675 11.45L15.35 10.4A.8 .8 0 0 1 15.8 11.94L12.6 12.85V16.4C12.6 17.5 11.31 18.4 10.05 18.4C8.98 18.4 8.25 17.84 8.25 16.98C8.25 15.95 9.45 15 10.58 15Q10.82 15 11 15.15Z'
const INBOX_TRAY_LIP = 'H8.5L9.8 15.5A1.25 1.25 0 0 0 10.88 16.1H13.12A1.25 1.25 0 0 0 14.2 15.5L15.5 13.25'

export const fileIcons: IconDef[] = [
  {
    name: 'file',
    category: 'files',
    tags: ['document', 'page', 'blank', 'paper'],
    outline: { strokes: [M.FILE_BODY, M.FILE_FOLD] },
    filled: { solids: [M.FILE_BODY], cutoutStrokes: [FILE_FOLD_CUTOUT] },
  },
  {
    name: 'file-text',
    category: 'files',
    tags: ['document', 'article', 'notes', 'readme', 'doc'],
    outline: { strokes: [M.FILE_BODY, M.FILE_FOLD, line(8.5, 12.5, 15.5, 12.5), line(8.5, 16, 13.5, 16)] },
    filled: { solids: [M.FILE_BODY], cutoutStrokes: [FILE_FOLD_CUTOUT, line(8.5, 12.5, 15.5, 12.5), line(8.5, 16, 13.5, 16)] },
  },
  {
    name: 'file-plus',
    category: 'files',
    tags: ['new-file', 'add', 'create', 'document'],
    outline: { strokes: [M.FILE_BODY, M.FILE_FOLD, line(12, 11.5, 12, 17.5), line(9, 14.5, 15, 14.5)] },
    filled: { solids: [M.FILE_BODY], cutoutStrokes: [FILE_FOLD_CUTOUT, line(12, 11.5, 12, 17.5), line(9, 14.5, 15, 14.5)] },
  },
  {
    name: 'file-minus',
    category: 'files',
    tags: ['remove-file', 'delete', 'document'],
    outline: { strokes: [M.FILE_BODY, M.FILE_FOLD, line(9, 14.5, 15, 14.5)] },
    filled: { solids: [M.FILE_BODY], cutoutStrokes: [FILE_FOLD_CUTOUT, line(9, 14.5, 15, 14.5)] },
  },
  {
    name: 'file-check',
    category: 'files',
    tags: ['approved', 'verified', 'done', 'document'],
    outline: { strokes: [M.FILE_BODY, M.FILE_FOLD, poly([[9, 14.75], [11.1, 16.85], [15.25, 12.5]])] },
    filled: { solids: [M.FILE_BODY], cutoutStrokes: [FILE_FOLD_CUTOUT, poly([[9, 14.75], [11.1, 16.85], [15.25, 12.5]])] },
  },
  {
    name: 'file-x',
    category: 'files',
    tags: ['error', 'corrupt', 'reject', 'delete'],
    outline: { strokes: [M.FILE_BODY, M.FILE_FOLD, line(9.5, 12.25, 14.5, 17.25), line(14.5, 12.25, 9.5, 17.25)] },
    filled: { solids: [M.FILE_BODY], cutoutStrokes: [FILE_FOLD_CUTOUT, line(9.5, 12.25, 14.5, 17.25), line(14.5, 12.25, 9.5, 17.25)] },
  },
  {
    name: 'file-code',
    category: 'files',
    tags: ['source', 'script', 'dev', 'programming'],
    outline: {
      strokes: [
        M.FILE_BODY,
        M.FILE_FOLD,
        poly([[10.25, 12.5], [8.25, 14.75], [10.25, 17]]),
        poly([[13.75, 12.5], [15.75, 14.75], [13.75, 17]]),
      ],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [
        FILE_FOLD_CUTOUT,
        poly([[10.25, 12.5], [8.25, 14.75], [10.25, 17]]),
        poly([[13.75, 12.5], [15.75, 14.75], [13.75, 17]]),
      ],
    },
  },
  {
    name: 'file-json',
    category: 'files',
    tags: ['config', 'data', 'braces', 'schema'],
    outline: {
      strokes: [
        M.FILE_BODY,
        M.FILE_FOLD,
        'M10 11.75C9.25 11.75 9 12.2 9 12.85V13.75C9 14.3 8.65 14.65 8.15 14.75C8.65 14.85 9 15.2 9 15.75V16.65C9 17.3 9.25 17.75 10 17.75',
        'M14 11.75C14.75 11.75 15 12.2 15 12.85V13.75C15 14.3 15.35 14.65 15.85 14.75C15.35 14.85 15 15.2 15 15.75V16.65C15 17.3 14.75 17.75 14 17.75',
      ],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [
        FILE_FOLD_CUTOUT,
        { d: 'M10 11.75C9.25 11.75 9 12.2 9 12.85V13.75C9 14.3 8.65 14.65 8.15 14.75C8.65 14.85 9 15.2 9 15.75V16.65C9 17.3 9.25 17.75 10 17.75', widthScale: 0.8 },
        { d: 'M14 11.75C14.75 11.75 15 12.2 15 12.85V13.75C15 14.3 15.35 14.65 15.85 14.75C15.35 14.85 15 15.2 15 15.75V16.65C15 17.3 14.75 17.75 14 17.75', widthScale: 0.8 },
      ],
    },
  },
  {
    name: 'file-image',
    category: 'files',
    tags: ['photo', 'picture', 'png', 'jpg', 'media'],
    outline: {
      strokes: [M.FILE_BODY, M.FILE_FOLD, poly([[7.85, 17.75], [10.5, 14.25], [13.1, 17.25], [14.6, 15.5], [16.15, 17.75]])],
      dots: [{ cx: 8.9, cy: 10.75, scale: 1.05 }],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [FILE_FOLD_CUTOUT, poly([[7.85, 17.75], [10.5, 14.25], [13.1, 17.25], [14.6, 15.5], [16.15, 17.75]])],
      cutoutDots: [{ cx: 8.9, cy: 10.75, scale: 1.15 }],
    },
  },
  {
    name: 'file-video',
    category: 'files',
    tags: ['movie', 'mp4', 'clip', 'media'],
    outline: {
      strokes: [M.FILE_BODY, M.FILE_FOLD, 'M10.25 11.75L15.25 14.5L10.25 17.25Z'],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [FILE_FOLD_CUTOUT],
      cutoutFills: ['M10 11.4L15.75 14.5L10 17.6Z'],
    },
  },
  {
    name: 'file-audio',
    category: 'files',
    tags: ['music', 'mp3', 'sound', 'wav'],
    outline: {
      strokes: [M.FILE_BODY, M.FILE_FOLD],
      fills: [FILE_AUDIO_NOTE],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [FILE_FOLD_CUTOUT],
      cutoutFills: [FILE_AUDIO_NOTE],
    },
  },
  {
    name: 'file-spreadsheet',
    category: 'files',
    tags: ['excel', 'csv', 'table', 'sheet', 'data'],
    outline: {
      strokes: [
        M.FILE_BODY,
        M.FILE_FOLD,
        rect(8, 11.5, 8, 6.75, 1),
        line(8, 14.88, 16, 14.88),
        line(12, 11.5, 12, 18.25),
      ],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [
        FILE_FOLD_CUTOUT,
        { d: rect(7.75, 11.5, 8.5, 6.75, 1), widthScale: 0.8 },
        { d: line(7.75, 14.88, 16.25, 14.88), widthScale: 0.8 },
        { d: line(12, 11.5, 12, 18.25), widthScale: 0.8 },
      ],
    },
  },
  {
    name: 'file-archive',
    category: 'files',
    tags: ['zip', 'compressed', 'tar', 'bundle'],
    outline: {
      strokes: [
        M.FILE_BODY,
        M.FILE_FOLD,
        line(10, 6.5, 10, 8),
        line(10, 10.5, 10, 12),
        rect(8.5, 14.25, 3, 3.5, 0.8),
      ],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [FILE_FOLD_CUTOUT, line(10, 6.5, 10, 8), line(10, 10.5, 10, 12)],
      cutoutFills: [rect(8.5, 14.25, 3, 3.5, 0.8)],
    },
  },
  {
    name: 'file-search',
    category: 'files',
    tags: ['find', 'inspect', 'lookup', 'audit'],
    outline: {
      strokes: [
        'M13.5 21.25H7A2 2 0 0 1 5 19.25V4.75A2 2 0 0 1 7 2.75H13.6C14.1 2.75 14.58 2.95 14.94 3.31L18.44 6.81C18.8 7.17 19 7.65 19 8.15V11',
        M.FILE_FOLD,
        circle(16.25, 16.25, 3),
        line(18.5, 18.5, 20.5, 20.5),
      ],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [FILE_FOLD_CUTOUT],
      cutoutFills: [circle(16.25, 16.25, 5.25), rect(16.25, 16.25, 7, 7)],
      strokes: [circle(16.25, 16.25, 2.85), line(18.4, 18.4, 20.6, 20.6)],
    },
  },
  {
    name: 'file-lock',
    category: 'files',
    tags: ['private', 'encrypted', 'protected', 'secure'],
    outline: {
      strokes: [
        'M11 21.25H7A2 2 0 0 1 5 19.25V4.75A2 2 0 0 1 7 2.75H13.6C14.1 2.75 14.58 2.95 14.94 3.31L18.44 6.81C18.8 7.17 19 7.65 19 8.15V9.2',
        M.FILE_FOLD,
        rect(13.5, 15.25, 6.75, 5.5, 1.35),
        'M15.1 15.25V13.75A1.75 1.75 0 0 1 18.6 13.75V15.25',
      ],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [FILE_FOLD_CUTOUT],
      cutoutFills: [rect(12, 9.5, 11, 14, 3.25)],
      topSolids: [{ d: rect(13.75, 15.5, 6.5, 5.25, 1.35), expand: false }],
      strokes: ['M15.25 15.5V13.75A1.75 1.75 0 0 1 18.75 13.75V15.5'],
    },
  },
  {
    name: 'file-symlink',
    category: 'files',
    tags: ['alias', 'shortcut', 'link', 'reference'],
    outline: {
      strokes: [
        M.FILE_BODY,
        M.FILE_FOLD,
        'M8.5 17.25V15.75A2 2 0 0 1 10.5 13.75H14.5',
        poly([[12.5, 11.75], [14.5, 13.75], [12.5, 15.75]]),
      ],
    },
    filled: {
      solids: [M.FILE_BODY],
      cutoutStrokes: [
        FILE_FOLD_CUTOUT,
        'M8.5 17.25V15.75A2 2 0 0 1 10.5 13.75H14.5',
        poly([[12.5, 11.75], [14.5, 13.75], [12.5, 15.75]]),
      ],
    },
  },

  // Folders
  {
    name: 'folder',
    category: 'files',
    tags: ['directory', 'group', 'category', 'project'],
    outline: { strokes: [M.FOLDER_BODY] },
    filled: { solids: [M.FOLDER_BODY] },
  },
  {
    name: 'folder-open',
    category: 'files',
    tags: ['directory', 'browse', 'expanded'],
    outline: {
      strokes: [
        'M3.5 17.5V7A2.25 2.25 0 0 1 5.75 4.75H9.1C9.7 4.75 10.25 5.05 10.6 5.55L11.4 6.75C11.65 7.1 12.05 7.3 12.5 7.3H17.75A2 2 0 0 1 19.75 9.3V10.5',
        'M3.5 17.5L5.4 11.65A1.75 1.75 0 0 1 7.06 10.45H19.75C20.68 10.45 21.35 11.35 21.08 12.24L19.4 17.9A2 2 0 0 1 17.48 19.35H5.25A1.85 1.85 0 0 1 3.5 17.5Z',
      ],
    },
    filled: {
      solids: [
        'M3.5 17.5L5.4 11.65A1.75 1.75 0 0 1 7.06 10.45H19.75C20.68 10.45 21.35 11.35 21.08 12.24L19.4 17.9A2 2 0 0 1 17.48 19.35H5.25A1.85 1.85 0 0 1 3.5 17.5Z',
      ],
      strokes: [
        'M3.5 17V7A2.25 2.25 0 0 1 5.75 4.75H9.1C9.7 4.75 10.25 5.05 10.6 5.55L11.4 6.75C11.65 7.1 12.05 7.3 12.5 7.3H17.75A2 2 0 0 1 19.75 9.3V10',
      ],
    },
  },
  {
    name: 'folder-plus',
    category: 'files',
    tags: ['new-folder', 'add', 'create', 'directory'],
    outline: { strokes: [M.FOLDER_BODY, line(12, 10.5, 12, 16.5), line(9, 13.5, 15, 13.5)] },
    filled: { solids: [M.FOLDER_BODY], cutoutStrokes: [line(12, 10.5, 12, 16.5), line(9, 13.5, 15, 13.5)] },
  },
  {
    name: 'folder-minus',
    category: 'files',
    tags: ['remove-folder', 'delete', 'directory'],
    outline: { strokes: [M.FOLDER_BODY, line(9, 13.5, 15, 13.5)] },
    filled: { solids: [M.FOLDER_BODY], cutoutStrokes: [line(9, 13.5, 15, 13.5)] },
  },
  {
    name: 'folder-check',
    category: 'files',
    tags: ['synced', 'verified', 'done', 'directory'],
    outline: { strokes: [M.FOLDER_BODY, poly([[9, 13.75], [11.1, 15.85], [15.25, 11.5]])] },
    filled: { solids: [M.FOLDER_BODY], cutoutStrokes: [poly([[9, 13.75], [11.1, 15.85], [15.25, 11.5]])] },
  },
  {
    name: 'folder-search',
    category: 'files',
    tags: ['find', 'browse', 'directory'],
    outline: {
      strokes: [
        'M12 19.5H5.25A2.25 2.25 0 0 1 3 17.25V7A2.25 2.25 0 0 1 5.25 4.75H8.8C9.42 4.75 10 5.05 10.35 5.56L11.2 6.8C11.45 7.16 11.86 7.38 12.3 7.38H18.75A2.25 2.25 0 0 1 21 9.63V11',
        circle(16.5, 16.25, 2.75),
        line(18.6, 18.35, 20.75, 20.5),
      ],
    },
    filled: {
      solids: [M.FOLDER_BODY],
      cutoutFills: [circle(16.5, 16.25, 5.25), rect(16.5, 16.25, 7, 7)],
      strokes: [circle(16.5, 16.25, 2.75), line(18.6, 18.35, 20.75, 20.5)],
    },
  },
  {
    name: 'folder-lock',
    category: 'files',
    tags: ['private', 'secure', 'vault', 'directory'],
    outline: {
      strokes: [
        'M11 19.5H5.25A2.25 2.25 0 0 1 3 17.25V7A2.25 2.25 0 0 1 5.25 4.75H8.8C9.42 4.75 10 5.05 10.35 5.56L11.2 6.8C11.45 7.16 11.86 7.38 12.3 7.38H18.75A2.25 2.25 0 0 1 21 9.63V10.5',
        rect(13.75, 15.25, 6.75, 5.25, 1.35),
        'M15.35 15.25V13.75A1.75 1.75 0 0 1 18.85 13.75V15.25',
      ],
    },
    filled: {
      solids: [M.FOLDER_BODY],
      cutoutFills: [rect(12.25, 9.5, 11.5, 13, 3.25)],
      topSolids: [{ d: rect(14, 15.5, 6.5, 5, 1.35), expand: false }],
      strokes: ['M15.5 15.5V13.75A1.75 1.75 0 0 1 19 13.75V15.5'],
    },
  },
  {
    name: 'folder-archive',
    category: 'files',
    tags: ['zip', 'compressed', 'backup', 'directory'],
    outline: {
      strokes: [M.FOLDER_BODY, line(12, 10.25, 12, 11.5), rect(10.25, 14.25, 3.5, 2.5, 0.75)],
    },
    filled: {
      solids: [M.FOLDER_BODY],
      cutoutStrokes: [line(12, 10.25, 12, 11.5)],
      cutoutFills: [rect(10.25, 14.25, 3.5, 2.5, 0.75)],
    },
  },

  // Archive, inbox, attachment, drive
  {
    name: 'archive',
    category: 'files',
    tags: ['box', 'store', 'backup', 'stash'],
    outline: {
      strokes: [
        rect(3, 4.25, 18, 4.5, 1.5),
        'M4.75 8.75V17.75A2 2 0 0 0 6.75 19.75H17.25A2 2 0 0 0 19.25 17.75V8.75',
        line(9.5, 13, 14.5, 13),
      ],
    },
    filled: {
      solids: [
        { d: rect(2.5, 3.75, 19, 4.5, 1.5), expand: false },
        { d: 'M4.25 10H19.75V18A2.25 2.25 0 0 1 17.5 20.25H6.5A2.25 2.25 0 0 1 4.25 18V10Z', expand: false },
      ],
      cutoutStrokes: [line(9.5, 14, 14.5, 14)],
    },
  },
  {
    name: 'inbox',
    category: 'files',
    tags: ['tray', 'messages', 'received', 'mail'],
    outline: {
      strokes: [
        'M3.75 13.25L5.55 6A2 2 0 0 1 7.5 4.5H16.5A2 2 0 0 1 18.45 6L20.25 13.25V17.5A2 2 0 0 1 18.25 19.5H5.75A2 2 0 0 1 3.75 17.5V13.25Z',
        `M3.75 13.25${INBOX_TRAY_LIP}H20.25`,
      ],
    },
    filled: {
      solids: [
        'M3.75 13.25L5.55 6A2 2 0 0 1 7.5 4.5H16.5A2 2 0 0 1 18.45 6L20.25 13.25V17.5A2 2 0 0 1 18.25 19.5H5.75A2 2 0 0 1 3.75 17.5V13.25Z',
      ],
      cutoutStrokes: [
        `M2.5 13.25${INBOX_TRAY_LIP}H21.5`,
      ],
    },
  },
  {
    name: 'paperclip',
    category: 'files',
    tags: ['attach', 'attachment', 'clip', 'file'],
    outline: {
      strokes: [
        'M18.65 11.25L10.7 19.2A4.5 4.5 0 0 1 4.35 12.85L12.65 4.55A3 3 0 0 1 16.9 8.8L8.95 16.75A1.5 1.5 0 0 1 6.85 14.65L14.1 7.4',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'hard-drive',
    category: 'files',
    tags: ['storage', 'disk', 'ssd', 'hdd', 'backup'],
    outline: {
      strokes: [
        'M3.75 14.25L5.7 6.5A2 2 0 0 1 7.64 5H16.36A2 2 0 0 1 18.3 6.5L20.25 14.25',
        rect(3.75, 13.25, 16.5, 6, 2),
      ],
      dots: [{ cx: 16.75, cy: 16.25, scale: 1 }, { cx: 12.75, cy: 16.25, scale: 1 }],
    },
    filled: {
      solids: [rect(3.75, 13.25, 16.5, 6, 2)],
      cutoutDots: [{ cx: 16.75, cy: 16.25, scale: 1.1 }, { cx: 12.75, cy: 16.25, scale: 1.1 }],
      strokes: ['M3.75 14.25L5.7 6.5A2 2 0 0 1 7.64 5H16.36A2 2 0 0 1 18.3 6.5L20.25 14.25'],
    },
  },
]
