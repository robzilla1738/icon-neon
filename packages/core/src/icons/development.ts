import * as M from '../motifs.ts'
import { arc, circle, ellipse, line, poly, rect } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const CONTAINER = 'M3 7.5L8.25 4.5H20.5V16.5L15.25 19.5H3Z'
const CONTAINER_SEAMS = ['M3 7.5H15.25L20.5 4.5', line(15.25, 7.5, 15.25, 19.5)]
const CONTAINER_CUTOUTS = ['M1.5 7.5H15.25L22.5 3.357', line(15.25, 7.5, 15.25, 21.25)]
const CONTAINER_RIBS = [line(7.08, 10.75, 7.08, 16.25), line(11.17, 10.75, 11.17, 16.25)]

// Leave equal bottom shoulders on either side of the transfer arrow.
const CLOUD_TRANSFER_BODY =
  'M7.5 18.25H7A4.75 4.75 0 0 1 7.15 8.85A5.5 5.5 0 0 1 17.65 10.28A4 4 0 0 1 17.25 18.25H16.5'

// Each arm follows the tangent of its circular hook into the shared hub.
const WEBHOOK_HOOKS = ([
  [12, 7.125, 0],
  [17.629, 16.875, 120],
  [6.371, 16.875, 240],
] as const).map(([cx, cy, rotation]) => arc(cx, cy, 3.1, 28 + rotation, -208.485 + rotation) + 'L12 13.625')

export const developmentIcons: IconDef[] = [
  {
    name: 'code',
    category: 'development',
    tags: ['html', 'xml', 'dev', 'programming', 'tags'],
    outline: {
      strokes: [
        poly([[8.5, 6.5], [3.5, 12], [8.5, 17.5]]),
        poly([[15.5, 6.5], [20.5, 12], [15.5, 17.5]]),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'code-2',
    category: 'development',
    tags: ['source', 'syntax', 'slash', 'dev'],
    outline: {
      strokes: [
        poly([[7.5, 7.5], [3.5, 12], [7.5, 16.5]]),
        poly([[16.5, 7.5], [20.5, 12], [16.5, 16.5]]),
        line(13.75, 5.75, 10.25, 18.25),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'terminal',
    category: 'development',
    tags: ['cli', 'shell', 'console', 'bash', 'prompt'],
    outline: {
      strokes: [poly([[4.5, 7], [10, 12], [4.5, 17]]), line(12, 17, 19.5, 17)],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'terminal-square',
    category: 'development',
    tags: ['cli', 'console', 'command', 'shell'],
    outline: {
      strokes: [M.WINDOW_FRAME, poly([[7, 9], [10.25, 12], [7, 15]]), line(12.25, 15, 16.75, 15)],
    },
    filled: {
      solids: [M.WINDOW_FRAME],
      cutoutStrokes: [poly([[7, 9], [10.25, 12], [7, 15]]), line(12.25, 15, 16.75, 15)],
    },
  },
  {
    name: 'braces',
    category: 'development',
    tags: ['json', 'object', 'curly', 'code'],
    outline: {
      strokes: [
        'M8.5 4.25C6.75 4.25 6 5.25 6 6.75V9.5C6 10.75 5.15 11.75 4 12C5.15 12.25 6 13.25 6 14.5V17.25C6 18.75 6.75 19.75 8.5 19.75',
        'M15.5 4.25C17.25 4.25 18 5.25 18 6.75V9.5C18 10.75 18.85 11.75 20 12C18.85 12.25 18 13.25 18 14.5V17.25C18 18.75 17.25 19.75 15.5 19.75',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'brackets',
    category: 'development',
    tags: ['array', 'square', 'list', 'code'],
    outline: {
      strokes: [
        'M9 4.25H6.5A1.25 1.25 0 0 0 5.25 5.5V18.5A1.25 1.25 0 0 0 6.5 19.75H9',
        'M15 4.25H17.5A1.25 1.25 0 0 1 18.75 5.5V18.5A1.25 1.25 0 0 1 17.5 19.75H15',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'regex',
    category: 'development',
    tags: ['pattern', 'match', 'expression', 'search'],
    outline: {
      strokes: [line(15.5, 4.5, 15.5, 13.5), line(11.6, 6.75, 19.4, 11.25), line(19.4, 6.75, 11.6, 11.25)],
      dots: [{ cx: 6.5, cy: 17, scale: 1.75 }],
    },
    filled: { boostedOutline: true },
  },

  // Git family
  {
    name: 'git-branch',
    category: 'development',
    tags: ['vcs', 'github', 'version', 'tree'],
    outline: {
      strokes: [
        circle(6.75, 6, 2.25),
        circle(6.75, 18, 2.25),
        circle(17.25, 8.5, 2.25),
        line(6.75, 8.25, 6.75, 15.75),
        'M17.25 10.75C17.25 14.5 13 15.75 6.75 15.75',
      ],
    },
    filled: {
      solids: [circle(6.75, 6, 2.25), circle(6.75, 18, 2.25), circle(17.25, 8.5, 2.25)],
      strokes: [line(6.75, 8.25, 6.75, 15.75), 'M17.25 10.75C17.25 14.5 13 15.75 6.75 15.75'],
    },
  },
  {
    name: 'git-commit',
    category: 'development',
    tags: ['vcs', 'snapshot', 'sha', 'revision'],
    outline: {
      strokes: [circle(12, 12, 3.25), line(3, 12, 8.75, 12), line(15.25, 12, 21, 12)],
    },
    filled: {
      solids: [circle(12, 12, 3.25)],
      strokes: [line(3, 12, 8.75, 12), line(15.25, 12, 21, 12)],
    },
  },
  {
    name: 'git-merge',
    category: 'development',
    tags: ['vcs', 'combine', 'pull-request', 'join'],
    outline: {
      strokes: [
        circle(6.75, 6, 2.25),
        circle(6.75, 18, 2.25),
        circle(17.25, 16, 2.25),
        line(6.75, 8.25, 6.75, 15.75),
        'M6.75 8.25C6.75 12.75 10.5 16 15 16',
      ],
    },
    filled: {
      solids: [circle(6.75, 6, 2.25), circle(6.75, 18, 2.25), circle(17.25, 16, 2.25)],
      strokes: [line(6.75, 8.25, 6.75, 15.75), 'M6.75 8.25C6.75 12.75 10.5 16 15 16'],
    },
  },
  {
    name: 'git-pull-request',
    category: 'development',
    tags: ['pr', 'review', 'github', 'vcs'],
    outline: {
      strokes: [
        circle(6.75, 6, 2.25),
        circle(6.75, 18, 2.25),
        circle(17.25, 18, 2.25),
        line(6.75, 8.25, 6.75, 15.75),
        'M12.45 6.5H15.25A2 2 0 0 1 17.25 8.5V15.75',
        poly([[14.85, 4.1], [12.45, 6.5], [14.85, 8.9]]),
      ],
    },
    filled: {
      solids: [circle(6.75, 6, 2.25), circle(6.75, 18, 2.25), circle(17.25, 18, 2.25)],
      strokes: [
        line(6.75, 8.25, 6.75, 15.75),
        'M12.45 6.5H15.25A2 2 0 0 1 17.25 8.5V15.75',
        poly([[14.85, 4.1], [12.45, 6.5], [14.85, 8.9]]),
      ],
    },
  },
  {
    name: 'git-fork',
    category: 'development',
    tags: ['clone', 'split', 'repo', 'vcs'],
    outline: {
      strokes: [
        circle(6.75, 6, 2.25),
        circle(17.25, 6, 2.25),
        circle(12, 18, 2.25),
        'M6.75 8.25V10.25A2.25 2.25 0 0 0 9 12.5H15A2.25 2.25 0 0 0 17.25 10.25V8.25',
        line(12, 12.5, 12, 15.75),
      ],
    },
    filled: {
      solids: [circle(6.75, 6, 2.25), circle(17.25, 6, 2.25), circle(12, 18, 2.25)],
      strokes: [
        'M6.75 8.25V10.25A2.25 2.25 0 0 0 9 12.5H15A2.25 2.25 0 0 0 17.25 10.25V8.25',
        line(12, 12.5, 12, 15.75),
      ],
    },
  },
  {
    name: 'git-compare',
    category: 'development',
    tags: ['diff', 'review', 'changes', 'vcs'],
    outline: {
      strokes: [
        circle(6.5, 6.25, 2.25),
        circle(17.5, 17.75, 2.25),
        'M12.45 6.5H15.5A2 2 0 0 1 17.5 8.5V15.5',
        poly([[14.85, 4.1], [12.45, 6.5], [14.85, 8.9]]),
        'M11.55 17.5H8.5A2 2 0 0 1 6.5 15.5V8.5',
        poly([[9.15, 15.1], [11.55, 17.5], [9.15, 19.9]]),
      ],
    },
    filled: {
      solids: [circle(6.5, 6.25, 2.25), circle(17.5, 17.75, 2.25)],
      strokes: [
        'M12.45 6.5H15.5A2 2 0 0 1 17.5 8.5V15.5',
        poly([[14.85, 4.1], [12.45, 6.5], [14.85, 8.9]]),
        'M11.55 17.5H8.5A2 2 0 0 1 6.5 15.5V8.5',
        poly([[9.15, 15.1], [11.55, 17.5], [9.15, 19.9]]),
      ],
    },
  },
  {
    name: 'git-diff',
    category: 'development',
    tags: ['plus-minus', 'changes', 'patch', 'compare'],
    outline: {
      strokes: [
        M.SQUARE_FRAME,
        line(12, 7.5, 12, 12.25),
        line(9.6, 9.88, 14.4, 9.88),
        line(9.6, 15.75, 14.4, 15.75),
      ],
    },
    filled: {
      solids: [M.SQUARE_FRAME],
      cutoutStrokes: [line(12, 7.5, 12, 12.25), line(9.6, 9.88, 14.4, 9.88), line(9.6, 15.75, 14.4, 15.75)],
    },
  },

  // Infrastructure, database, cloud, network
  {
    name: 'database',
    category: 'development',
    tags: ['sql', 'postgres', 'storage', 'table', 'neon'],
    outline: {
      strokes: [
        ellipse(12, 6, 7.75, 2.75),
        'M4.25 6V18C4.25 19.52 7.72 20.75 12 20.75C16.28 20.75 19.75 19.52 19.75 18V6',
        'M4.25 12C4.25 13.52 7.72 14.75 12 14.75C16.28 14.75 19.75 13.52 19.75 12',
      ],
    },
    filled: {
      solids: ['M4.25 6C4.25 4.48 7.72 3.25 12 3.25C16.28 3.25 19.75 4.48 19.75 6V18C19.75 19.52 16.28 20.75 12 20.75C7.72 20.75 4.25 19.52 4.25 18V6Z'],
      cutoutStrokes: [
        'M4.25 6.5C4.25 8.02 7.72 9.25 12 9.25C16.28 9.25 19.75 8.02 19.75 6.5',
        'M4.25 12.5C4.25 14.02 7.72 15.25 12 15.25C16.28 15.25 19.75 14.02 19.75 12.5',
      ],
    },
  },
  {
    name: 'server',
    category: 'development',
    tags: ['host', 'backend', 'rack', 'cluster', 'machine'],
    outline: {
      strokes: [rect(3.5, 4, 17, 6.75, 2), rect(3.5, 13.25, 17, 6.75, 2), line(12.5, 7.38, 17, 7.38), line(12.5, 16.63, 17, 16.63)],
      dots: [{ cx: 7.25, cy: 7.38, scale: 1 }, { cx: 7.25, cy: 16.63, scale: 1 }],
    },
    filled: {
      solids: [rect(3.5, 4, 17, 6.5, 2), rect(3.5, 13.5, 17, 6.5, 2)],
      cutoutDots: [{ cx: 7.25, cy: 7.25, scale: 1.15 }, { cx: 7.25, cy: 16.75, scale: 1.15 }],
      cutoutStrokes: [line(12.5, 7.25, 17, 7.25), line(12.5, 16.75, 17, 16.75)],
    },
  },
  {
    name: 'cpu',
    category: 'development',
    tags: ['processor', 'chip', 'compute', 'hardware'],
    outline: {
      strokes: [
        rect(6, 6, 12, 12, 2.25),
        rect(9.5, 9.5, 5, 5, 1),
        line(9.25, 3, 9.25, 6),
        line(14.75, 3, 14.75, 6),
        line(9.25, 18, 9.25, 21),
        line(14.75, 18, 14.75, 21),
        line(3, 9.25, 6, 9.25),
        line(3, 14.75, 6, 14.75),
        line(18, 9.25, 21, 9.25),
        line(18, 14.75, 21, 14.75),
      ],
    },
    filled: {
      solids: [rect(6, 6, 12, 12, 2.25)],
      cutoutFills: [rect(9.5, 9.5, 5, 5, 1)],
      strokes: [
        line(9.25, 3, 9.25, 6),
        line(14.75, 3, 14.75, 6),
        line(9.25, 18, 9.25, 21),
        line(14.75, 18, 14.75, 21),
        line(3, 9.25, 6, 9.25),
        line(3, 14.75, 6, 14.75),
        line(18, 9.25, 21, 9.25),
        line(18, 14.75, 21, 14.75),
      ],
    },
  },
  {
    name: 'memory-stick',
    category: 'development',
    tags: ['ram', 'hardware', 'dimm', 'chip'],
    outline: {
      strokes: [
        rect(3, 7, 18, 8.5, 2),
        line(7.25, 10.25, 7.25, 12.25),
        line(12, 10.25, 12, 12.25),
        line(16.75, 10.25, 16.75, 12.25),
        line(6.5, 15.5, 6.5, 18.25),
        line(10.17, 15.5, 10.17, 18.25),
        line(13.83, 15.5, 13.83, 18.25),
        line(17.5, 15.5, 17.5, 18.25),
      ],
    },
    filled: {
      solids: [rect(3, 7, 18, 8.5, 2)],
      cutoutStrokes: [
        line(7.25, 10.25, 7.25, 12.25),
        line(12, 10.25, 12, 12.25),
        line(16.75, 10.25, 16.75, 12.25),
      ],
      strokes: [
        line(6.5, 15.5, 6.5, 18.25),
        line(10.17, 15.5, 10.17, 18.25),
        line(13.83, 15.5, 13.83, 18.25),
        line(17.5, 15.5, 17.5, 18.25),
      ],
    },
  },

  // Cloud family
  {
    name: 'cloud',
    category: 'development',
    tags: ['hosting', 'aws', 'sync', 'weather', 'saas'],
    outline: { strokes: [M.CLOUD_BODY] },
    filled: { solids: [M.CLOUD_BODY] },
  },
  {
    name: 'cloud-upload',
    category: 'development',
    tags: ['deploy', 'backup', 'push', 'sync'],
    outline: {
      strokes: [
        CLOUD_TRANSFER_BODY,
        line(12, 19.5, 12, 11.75),
        poly([[9, 14.75], [12, 11.75], [15, 14.75]]),
      ],
    },
    filled: {
      solids: [M.CLOUD_BODY],
      cutoutStrokes: [line(12, 19.25, 12, 11.25), poly([[9, 14.25], [12, 11.25], [15, 14.25]])],
    },
  },
  {
    name: 'cloud-download',
    category: 'development',
    tags: ['pull', 'fetch', 'sync', 'export'],
    outline: {
      strokes: [
        CLOUD_TRANSFER_BODY,
        line(12, 11.75, 12, 19.5),
        poly([[9, 16.5], [12, 19.5], [15, 16.5]]),
      ],
    },
    filled: {
      solids: [M.CLOUD_BODY],
      cutoutStrokes: [line(12, 10.5, 12, 17.25), poly([[9, 14.25], [12, 17.25], [15, 14.25]])],
    },
  },
  {
    name: 'cloud-off',
    category: 'development',
    tags: ['offline', 'disconnected', 'sync-error'],
    outline: { strokes: [M.CLOUD_BODY] },
    filled: { solids: [M.CLOUD_BODY], slash: M.SLASH_LINE },
  },
  {
    name: 'cloud-check',
    category: 'development',
    tags: ['synced', 'deployed', 'saved', 'ready'],
    outline: { strokes: [M.CLOUD_BODY, poly([[9.25, 13.5], [11.25, 15.5], [15.25, 11.25]])] },
    filled: { solids: [M.CLOUD_BODY], cutoutStrokes: [poly([[9.25, 13.5], [11.25, 15.5], [15.25, 11.25]])] },
  },

  // Web, network, webhook, api, containers, packages
  {
    name: 'globe',
    category: 'development',
    tags: ['world', 'web', 'internet', 'domain', 'i18n'],
    outline: {
      strokes: [
        M.CIRCLE_FRAME,
        ellipse(12, 12, 4, 9),
        line(3.35, 9.25, 20.65, 9.25),
        line(3.35, 14.75, 20.65, 14.75),
      ],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: [ellipse(12, 12, 4, 7.25), line(4.75, 9.25, 19.25, 9.25), line(4.75, 14.75, 19.25, 14.75)],
    },
  },
  {
    name: 'network',
    category: 'development',
    tags: ['hierarchy', 'sitemap', 'cluster', 'lan'],
    outline: {
      strokes: [
        rect(9.25, 3.5, 5.5, 5, 1.25),
        rect(3.5, 15.5, 5.5, 5, 1.25),
        rect(15, 15.5, 5.5, 5, 1.25),
        line(12, 8.5, 12, 12),
        'M6.25 15.5V13.5A1.5 1.5 0 0 1 7.75 12H16.25A1.5 1.5 0 0 1 17.75 13.5V15.5',
      ],
    },
    filled: {
      solids: [rect(9.25, 3.5, 5.5, 5, 1.25), rect(3.5, 15.5, 5.5, 5, 1.25), rect(15, 15.5, 5.5, 5, 1.25)],
      strokes: [line(12, 8.5, 12, 12), 'M6.25 15.5V13.5A1.5 1.5 0 0 1 7.75 12H16.25A1.5 1.5 0 0 1 17.75 13.5V15.5'],
    },
  },
  {
    name: 'webhook',
    category: 'development',
    tags: ['event', 'callback', 'trigger', 'integration'],
    outline: { strokes: WEBHOOK_HOOKS },
    filled: { boostedOutline: true },
  },
  {
    name: 'api',
    category: 'development',
    tags: ['endpoint', 'rest', 'rpc', 'sdk', 'plug'],
    outline: {
      strokes: [
        'M4.5 12A3.5 3.5 0 0 1 8 8.5H9.75V15.5H8A3.5 3.5 0 0 1 4.5 12Z',
        'M19.5 12A3.5 3.5 0 0 0 16 8.5H14.25V15.5H16A3.5 3.5 0 0 0 19.5 12Z',
        line(2.25, 12, 4.5, 12),
        line(19.5, 12, 21.75, 12),
        line(9.75, 10.25, 14.25, 10.25),
        line(9.75, 13.75, 14.25, 13.75),
      ],
    },
    filled: {
      solids: [
        { d: 'M4 12A4 4 0 0 1 8 8H9.75V16H8A4 4 0 0 1 4 12Z', expand: false },
        { d: 'M20 12A4 4 0 0 0 16 8H14.25V16H16A4 4 0 0 0 20 12Z', expand: false },
      ],
      strokes: [line(2.25, 12, 4.5, 12), line(19.5, 12, 21.75, 12), line(9.75, 10.25, 14.25, 10.25), line(9.75, 13.75, 14.25, 13.75)],
    },
  },
  {
    name: 'container',
    category: 'development',
    tags: ['docker', 'pod', 'sandbox', 'shipping'],
    outline: { strokes: [CONTAINER, ...CONTAINER_SEAMS, ...CONTAINER_RIBS] },
    filled: { solids: [CONTAINER], cutoutStrokes: [...CONTAINER_CUTOUTS, ...CONTAINER_RIBS] },
  },
  {
    name: 'package',
    category: 'development',
    tags: ['npm', 'module', 'box', 'dependency', 'crate'],
    outline: {
      strokes: [
        'M12 3L19.75 7.25V16.75L12 21L4.25 16.75V7.25L12 3Z',
        line(12, 11.5, 12, 21),
        line(4.25, 7.25, 12, 11.5),
        line(19.75, 7.25, 12, 11.5),
        line(8.125, 5.125, 15.875, 9.375),
      ],
    },
    filled: {
      solids: ['M12 3L19.75 7.25V16.75L12 21L4.25 16.75V7.25L12 3Z'],
      cutoutStrokes: [
        { d: line(12, 11.5, 12, 21.5), widthScale: 0.85 },
        { d: line(4, 7.11, 12, 11.5), widthScale: 0.85 },
        { d: line(20, 7.11, 12, 11.5), widthScale: 0.85 },
        { d: line(8.125, 5.125, 15.875, 9.375), widthScale: 0.8 },
      ],
    },
  },
  {
    name: 'blocks',
    category: 'development',
    tags: ['components', 'plugins', 'modules', 'lego'],
    outline: {
      strokes: [
        rect(4, 13.5, 6.5, 6.5, 1.5),
        rect(13.5, 13.5, 6.5, 6.5, 1.5),
        rect(4, 4, 6.5, 6.5, 1.5),
        rect(14.5, 3.25, 6.25, 6.25, 1.5),
      ],
    },
    filled: {
      solids: [
        rect(4, 13.5, 6.5, 6.5, 1.5),
        rect(13.5, 13.5, 6.5, 6.5, 1.5),
        rect(4, 4, 6.5, 6.5, 1.5),
        rect(14.5, 3.25, 6.25, 6.25, 1.5),
      ],
    },
  },
  {
    name: 'binary',
    category: 'development',
    tags: ['bits', '01', 'machine-code', 'data'],
    outline: {
      strokes: [
        rect(5, 4, 5, 6.5, 2),
        rect(14, 13.5, 5, 6.5, 2),
        'M14.5 5.25L16.5 4V10.5',
        line(14.5, 10.5, 18.5, 10.5),
        'M5.5 14.75L7.5 13.5V20',
        line(5.5, 20, 9.5, 20),
      ],
    },
    filled: { boostedOutline: true },
  },
]
