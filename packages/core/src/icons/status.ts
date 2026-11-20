import * as M from '../motifs.ts'
import { arc, circle, line, rect, regularPoly, roundedPoly, starPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const ALERT_TRIANGLE = roundedPoly([[12, 3.5], [21, 19.5], [3, 19.5]], 2, true)
const OCTAGON_FRAME = regularPoly(12, 12, 9.5, 8, -67.5, 1.35)
const STAR_SHAPE = starPoly(12, 12.4, 9.2, 4.4, 5, 0.9)
const CROWN_BODY = roundedPoly(
  [[5.5, 19.5], [3.25, 7.25], [8.5, 10.75], [12, 4.5], [15.5, 10.75], [20.75, 7.25], [18.5, 19.5]],
  1.35,
  true,
)
const GEM_BODY = roundedPoly([[7, 4.5], [17, 4.5], [21, 10], [12, 20], [3, 10]], 0.9, true)
const FLAME_BODY =
  'M11 2.75C12.25 6.5 10.5 8.5 8.25 10.5C7.75 9.75 7.5 8.75 7.5 7.5C5.25 9.5 4.75 12 4.75 14A7.25 7.25 0 0 0 19.25 14C19.25 11.5 18.25 9 16.75 7C16.75 9.5 16 10.5 15 11.25C15.75 7.75 13.75 4.75 11 2.75Z'

export const statusIcons: IconDef[] = [
  {
    name: 'info',
    category: 'status',
    tags: ['information', 'details', 'about', 'tooltip', 'help'],
    outline: {
      strokes: [M.CIRCLE_FRAME, 'M10.5 11.5H12V16.5M10 16.5H14'],
      dots: [{ cx: 12, cy: 8, scale: 1.05 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: ['M10.5 11.5H12V16.5M10 16.5H14'],
      cutoutDots: [{ cx: 12, cy: 8, scale: 1.2 }],
    },
  },
  {
    name: 'help-circle',
    category: 'status',
    tags: ['question', 'faq', 'support', 'docs', 'tooltip'],
    outline: {
      strokes: [
        M.CIRCLE_FRAME,
        'M9.5 9.25A2.75 2.75 0 0 1 14.8 10.15C14.8 11.8 12 12.2 12 14',
      ],
      dots: [{ cx: 12, cy: 17, scale: 1.05 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: ['M9.5 9.25A2.75 2.75 0 0 1 14.8 10.15C14.8 11.8 12 12.2 12 14'],
      cutoutDots: [{ cx: 12, cy: 17, scale: 1.2 }],
    },
  },
  {
    name: 'alert-circle',
    category: 'status',
    tags: ['error', 'warning', 'exclamation', 'notice', 'important'],
    outline: {
      strokes: [M.CIRCLE_FRAME, line(12, 7.75, 12, 13)],
      dots: [{ cx: 12, cy: 16.5, scale: 1.05 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: [line(12, 7.75, 12, 13)],
      cutoutDots: [{ cx: 12, cy: 16.5, scale: 1.2 }],
    },
  },
  {
    name: 'alert-triangle',
    category: 'status',
    tags: ['warning', 'caution', 'danger', 'hazard'],
    outline: {
      strokes: [ALERT_TRIANGLE, line(12, 9.25, 12, 13.75)],
      dots: [{ cx: 12, cy: 16.75, scale: 1.05 }],
    },
    filled: {
      solids: [ALERT_TRIANGLE],
      cutoutStrokes: [line(12, 9.25, 12, 13.75)],
      cutoutDots: [{ cx: 12, cy: 16.75, scale: 1.2 }],
    },
  },
  {
    name: 'octagon-alert',
    category: 'status',
    tags: ['stop', 'critical', 'danger', 'blocker'],
    outline: {
      strokes: [OCTAGON_FRAME, line(12, 7.75, 12, 13)],
      dots: [{ cx: 12, cy: 16.5, scale: 1.05 }],
    },
    filled: {
      solids: [OCTAGON_FRAME],
      cutoutStrokes: [line(12, 7.75, 12, 13)],
      cutoutDots: [{ cx: 12, cy: 16.5, scale: 1.2 }],
    },
  },
  {
    name: 'ban',
    category: 'status',
    tags: ['prohibit', 'block', 'forbidden', 'disabled', 'cancel'],
    outline: { strokes: [M.CIRCLE_FRAME, line(5.65, 5.65, 18.35, 18.35)] },
    filled: { boostedOutline: true, boostDelta: 0.65 },
  },
  {
    name: 'slash',
    category: 'status',
    tags: ['divider', 'command', 'separator', 'shortcut'],
    outline: { strokes: [line(16.5, 4, 7.5, 20)] },
    filled: { boostedOutline: true },
  },
  {
    name: 'loader',
    category: 'status',
    tags: ['spinner', 'loading', 'pending', 'progress', 'wait'],
    outline: {
      strokes: [
        line(12, 3, 12, 6.25),
        line(12, 17.75, 12, 21),
        line(5.64, 5.64, 7.93, 7.93),
        line(16.07, 16.07, 18.36, 18.36),
        line(3, 12, 6.25, 12),
        line(17.75, 12, 21, 12),
        line(5.64, 18.36, 7.93, 16.07),
        line(16.07, 7.93, 18.36, 5.64),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'circle-dot',
    category: 'status',
    tags: ['radio', 'selected', 'active', 'online', 'status'],
    outline: { strokes: [M.CIRCLE_FRAME], dots: [{ cx: 12, cy: 12, scale: 2.2 }] },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutFills: [circle(12, 12, 5.25)],
      topSolids: [{ d: circle(12, 12, 2.75), expand: false }],
    },
  },
  {
    name: 'circle-dashed',
    category: 'status',
    tags: ['backlog', 'todo', 'empty', 'placeholder', 'issue'],
    outline: {
      strokes: [0, 60, 120, 180, 240, 300].map((angle) => arc(12, 12, 9, angle - 17, angle + 17)),
    },
    filled: { boostedOutline: true },
  },

  // Appreciation, flags, awards
  {
    name: 'flag',
    category: 'status',
    tags: ['report', 'milestone', 'feature-flag', 'bookmark'],
    outline: {
      strokes: [
        line(5.25, 3.5, 5.25, 20.5),
        'M5.25 4.75C7.75 3.5 10.75 6 13.75 4.75C16.25 3.75 18.25 4.5 19.25 5.25V14.25C18.25 13.5 16.25 12.75 13.75 13.75C10.75 15 7.75 12.5 5.25 13.75',
      ],
    },
    filled: {
      solids: [
        'M5.25 4.75C7.75 3.5 10.75 6 13.75 4.75C16.25 3.75 18.25 4.5 19.25 5.25V14.25C18.25 13.5 16.25 12.75 13.75 13.75C10.75 15 7.75 12.5 5.25 13.75V4.75Z',
      ],
      strokes: [line(5.25, 3.5, 5.25, 20.5)],
    },
  },
  {
    name: 'heart',
    category: 'status',
    tags: ['like', 'love', 'favorite', 'health', 'wishlist'],
    outline: { strokes: [M.HEART_BODY] },
    filled: { solids: [M.HEART_BODY] },
  },
  {
    name: 'heart-off',
    category: 'status',
    tags: ['unlike', 'unfavorite', 'broken'],
    outline: { strokes: [M.HEART_BODY] },
    filled: { solids: [M.HEART_BODY], slash: M.SLASH_LINE },
  },
  {
    name: 'star',
    category: 'status',
    tags: ['favorite', 'rating', 'featured', 'bookmark', 'review'],
    outline: { strokes: [STAR_SHAPE] },
    filled: { solids: [STAR_SHAPE] },
  },
  {
    name: 'star-half',
    category: 'status',
    tags: ['rating', 'review', 'partial', 'score'],
    outline: {
      strokes: [STAR_SHAPE, line(12, 3.75, 12, 16.75)],
    },
    filled: {
      solids: [STAR_SHAPE],
      cutoutFills: [rect(12, 0, 12, 24, 0)],
      strokes: [STAR_SHAPE],
    },
  },
  {
    name: 'award',
    category: 'status',
    tags: ['medal', 'achievement', 'certificate', 'prize'],
    outline: {
      strokes: [circle(12, 9.25, 5.75), 'M8.75 14.1L7.5 21L12 18.75L16.5 21L15.25 14.1'],
    },
    filled: {
      solids: [circle(12, 9.25, 5.75), 'M8.75 13.5L7.5 21L12 18.75L16.5 21L15.25 13.5Z'],
      cutoutFills: [circle(12, 9.25, 2.75)],
    },
  },
  {
    name: 'trophy',
    category: 'status',
    tags: ['winner', 'leaderboard', 'first', 'cup', 'prize'],
    outline: {
      strokes: [
        'M7 4H17V10A5 5 0 0 1 7 10V4Z',
        'M7 5.5H4.5A1.5 1.5 0 0 0 3 7V8C3 10.2 4.925 11.5 7.23 11.5',
        'M17 5.5H19.5A1.5 1.5 0 0 1 21 7V8C21 10.2 19.075 11.5 16.77 11.5',
        line(12, 15, 12, 19.75),
        line(8, 19.75, 16, 19.75),
      ],
    },
    filled: {
      solids: ['M7 4H17V10A5 5 0 0 1 7 10V4Z'],
      strokes: [
        'M7 5.5H4.5A1.5 1.5 0 0 0 3 7V8C3 10.2 4.925 11.5 7.23 11.5',
        'M17 5.5H19.5A1.5 1.5 0 0 1 21 7V8C21 10.2 19.075 11.5 16.77 11.5',
        line(12, 15, 12, 19.75),
        line(8, 19.75, 16, 19.75),
      ],
    },
  },
  {
    name: 'crown',
    category: 'status',
    tags: ['pro', 'premium', 'king', 'owner', 'vip'],
    outline: { strokes: [CROWN_BODY, line(4.857, 16, 19.143, 16)] },
    filled: { solids: [CROWN_BODY], cutoutStrokes: [line(3, 16, 21, 16)] },
  },
  {
    name: 'gem',
    category: 'status',
    tags: ['diamond', 'pro', 'premium', 'jewel', 'ruby'],
    outline: {
      strokes: [GEM_BODY, line(3.5, 10, 20.5, 10), 'M12 20L8.5 10L10.25 4.5', 'M12 20L15.5 10L13.75 4.5'],
    },
    filled: {
      solids: [GEM_BODY],
      cutoutStrokes: [
        { d: line(2, 10, 22, 10), widthScale: 0.78 },
        { d: 'M12 20.5L8.5 10L10.25 4', widthScale: 0.78 },
        { d: 'M12 20.5L15.5 10L13.75 4', widthScale: 0.78 },
      ],
    },
  },
  {
    name: 'flame',
    category: 'status',
    tags: ['fire', 'hot', 'trending', 'streak', 'popular'],
    outline: { strokes: [FLAME_BODY] },
    filled: {
      solids: [FLAME_BODY],
      cutoutFills: ['M12.25 13C12.6 14.5 14.5 15.75 14.5 17.15A2.5 2.5 0 0 1 9.5 17.15C9.5 15.8 11.25 14.3 12.25 13Z'],
    },
  },
]
