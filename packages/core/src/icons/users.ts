import * as M from '../motifs.ts'
import { circle, gear, line, poly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

// Compact left-shifted user for modifier badges (`user-plus`, `user-check`, etc.)
const USER_LEFT_HEAD = circle(8.5, 7.5, 3.25)
const USER_LEFT_SHOULDERS_OUTLINE = 'M2.75 20.25C2.75 16.95 5.15 14.75 8.5 14.75C9.85 14.75 10.95 15.05 11.85 15.6'
const USER_LEFT_SHOULDERS_SOLID =
  'M2.75 19.5C2.75 16.55 5.15 14.5 8.5 14.5C9.75 14.5 10.9 14.85 11.8 15.45C12.15 15.7 12.35 16.1 12.35 16.5V19.5A1 1 0 0 1 11.35 20.5H3.75A1 1 0 0 1 2.75 19.5Z'
// One compact contour keeps the teeth crisp and the bore round at small sizes.
const USER_COG_BADGE = gear(18.25, 16.25, 4.05, 6, { tip: 0.23, flank: 0.07, root: 0.78, rounding: 0.13 }) + 'M20 16.25a1.75 1.75 0 1 0-3.5 0a1.75 1.75 0 1 0 3.5 0Z'
const USER_SHIELD = 'M18.25 12.25L21.5 13.45V16.25C21.5 18.4 20.05 20.05 18.25 20.75C16.45 20.05 15 18.4 15 16.25V13.45Z'

const BADGE_BODY = 'M8.75 3H15.25L19 7V18.75A2.25 2.25 0 0 1 16.75 21H7.25A2.25 2.25 0 0 1 5 18.75V7Z'
const BADGE_SLOT = line(10.5, 6.75, 13.5, 6.75)
const BADGE_CHECK = poly([[8.75, 14.5], [11, 16.75], [15.5, 12.25]])

const THUMBS_DOWN = [
  'M16.5 13.5V4H19.25A1.25 1.25 0 0 1 20.5 5.25V12.25A1.25 1.25 0 0 1 19.25 13.5H16.5Z',
  'M16.5 13.5L12.85 19.7C12.45 20.38 11.52 20.48 10.97 19.92C10.5 19.45 10.3 18.78 10.45 18.12L11.25 14.25H5.65C4.35 14.25 3.4 13.05 3.68 11.78L4.98 5.78C5.18 4.75 6.08 4 7.13 4H16.5Z',
]

const THUMBS_UP = [
  'M7.5 10.5V20H4.75A1.25 1.25 0 0 1 3.5 18.75V11.75A1.25 1.25 0 0 1 4.75 10.5H7.5Z',
  'M7.5 10.5L11.15 4.3C11.55 3.62 12.48 3.52 13.03 4.08C13.5 4.55 13.7 5.22 13.55 5.88L12.75 9.75H18.35C19.65 9.75 20.6 10.95 20.32 12.22L19.02 18.22C18.82 19.25 17.92 20 16.87 20H7.5Z',
]

const HAND_BODY =
  'M8 13.25V6.3A1.4 1.4 0 0 1 10.8 6.3V4.65A1.4 1.4 0 0 1 13.6 4.65V6.05A1.4 1.4 0 0 1 16.4 6.05V8.1A1.4 1.4 0 0 1 19.2 8.1V14.55A6.2 6.2 0 0 1 13 20.75H11.75C9.2 20.75 7.3 19.5 6.1 17.35L3.8 13.2C3.03 11.81 4.74 10.48 5.9 11.56Z'
const FINGER_SEAMS = [line(10.8, 6.3, 10.8, 10.75), line(13.6, 6.05, 13.6, 10.75), line(16.4, 8.1, 16.4, 11.5)]

const FOOTPRINTS = [
  'M6.25 10.25C5.25 8.75 5 6 6.35 4.25C7.35 2.95 9.15 2.95 9.75 4.5C10.25 5.8 9.75 8.25 9 10.25H6.25Z',
  'M6.25 13.05H9.5V14.65A1.625 1.625 0 0 1 6.25 14.65V13.05Z',
  'M14.75 14.75C14 12.75 13.5 10.3 14 9C14.6 7.45 16.4 7.45 17.4 8.75C18.75 10.5 18.5 13.25 17.5 14.75H14.75Z',
  'M14.25 17.55H17.5V19.15A1.625 1.625 0 0 1 14.25 19.15V17.55Z',
]

export const userIcons: IconDef[] = [
  {
    name: 'user',
    category: 'users',
    tags: ['person', 'account', 'profile', 'member', 'avatar'],
    outline: { strokes: [M.USER_HEAD, M.USER_SHOULDERS_OPEN] },
    filled: { solids: [M.USER_HEAD, M.USER_SHOULDERS_SOLID] },
  },
  {
    name: 'user-circle',
    category: 'users',
    tags: ['avatar', 'profile', 'account', 'person'],
    outline: {
      strokes: [
        M.CIRCLE_FRAME,
        circle(12, 9.5, 2.75),
        'M6.35 18.65C7.45 16.35 9.5 15 12 15C14.5 15 16.55 16.35 17.65 18.65',
      ],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutFills: [
        circle(12, 9.1, 2.8),
        'M6.75 17.95C7.85 15.9 9.7 14.5 12 14.5C14.3 14.5 16.15 15.9 17.25 17.95A7.95 7.95 0 0 1 6.75 17.95Z',
      ],
    },
  },
  {
    name: 'user-plus',
    category: 'users',
    tags: ['invite', 'add-member', 'register', 'signup'],
    outline: {
      strokes: [
        USER_LEFT_HEAD,
        USER_LEFT_SHOULDERS_OUTLINE,
        line(18, 12.25, 18, 18.25),
        line(15, 15.25, 21, 15.25),
      ],
    },
    filled: {
      solids: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_SOLID],
      strokes: [line(18, 12.25, 18, 18.25), line(15, 15.25, 21, 15.25)],
    },
  },
  {
    name: 'user-minus',
    category: 'users',
    tags: ['remove-member', 'unfollow', 'revoke'],
    outline: {
      strokes: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_OUTLINE, line(15, 15.25, 21, 15.25)],
    },
    filled: {
      solids: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_SOLID],
      strokes: [line(15, 15.25, 21, 15.25)],
    },
  },
  {
    name: 'user-check',
    category: 'users',
    tags: ['verified-user', 'approved', 'following', 'active'],
    outline: {
      strokes: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_OUTLINE, poly([[15, 15.5], [17, 17.5], [21.25, 13.25]])],
    },
    filled: {
      solids: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_SOLID],
      strokes: [poly([[15, 15.5], [17, 17.5], [21.25, 13.25]])],
    },
  },
  {
    name: 'user-x',
    category: 'users',
    tags: ['block', 'ban', 'remove', 'rejected'],
    outline: {
      strokes: [
        USER_LEFT_HEAD,
        USER_LEFT_SHOULDERS_OUTLINE,
        line(15.5, 12.75, 20.5, 17.75),
        line(20.5, 12.75, 15.5, 17.75),
      ],
    },
    filled: {
      solids: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_SOLID],
      strokes: [line(15.5, 12.75, 20.5, 17.75), line(20.5, 12.75, 15.5, 17.75)],
    },
  },
  {
    name: 'user-cog',
    category: 'users',
    tags: ['account-settings', 'admin', 'manage', 'permissions'],
    outline: {
      strokes: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_OUTLINE],
      fills: [USER_COG_BADGE],
    },
    filled: {
      solids: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_SOLID, { d: USER_COG_BADGE, expand: false }],
    },
  },
  {
    name: 'user-shield',
    category: 'users',
    tags: ['moderator', 'admin', 'security', 'role'],
    outline: { strokes: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_OUTLINE, USER_SHIELD] },
    filled: { solids: [USER_LEFT_HEAD, USER_LEFT_SHOULDERS_SOLID, USER_SHIELD] },
  },
  {
    name: 'users',
    category: 'users',
    tags: ['team', 'group', 'people', 'organization', 'members'],
    outline: {
      strokes: [
        circle(9.25, 7.75, 3.25),
        'M3 20.25C3 16.85 5.65 14.75 9.25 14.75C12.85 14.75 15.5 16.85 15.5 20.25',
        'M15.5 5.1A3 3 0 0 1 15.5 10.65',
        'M17.25 15.15C19.55 15.75 21 17.5 21 20.25',
      ],
    },
    filled: {
      solids: [
        circle(16.2, 8, 2.6),
        'M16.25 14.95C18.95 15.25 21 17.05 21 19.5A.75.75 0 0 1 20.25 20.25H16.25Z',
      ],
      cutoutFills: [
        circle(9.25, 7.75, 5.6),
        'M2 21.5V19.5C2 15.25 5.3 12.35 9.25 12.35C13.75 12.35 17.8 15.65 17.8 19.75V21.5Z',
      ],
      topSolids: [
        circle(9.25, 7.75, 3.25),
        'M3 19.5C3 16.6 5.65 14.65 9.25 14.65C12.85 14.65 15.5 16.6 15.5 19.5A.75.75 0 0 1 14.75 20.25H3.75A.75.75 0 0 1 3 19.5Z',
      ],
    },
  },
  {
    name: 'users-plus',
    category: 'users',
    tags: ['invite-team', 'add-group', 'community'],
    outline: {
      strokes: [
        circle(8.75, 8, 3),
        'M3 20C3 16.85 5.4 14.85 8.75 14.85C12.1 14.85 14.5 16.85 14.5 20',
        'M14.25 5.5A2.75 2.75 0 0 1 14.25 10.5',
        line(18.5, 13, 18.5, 18.5),
        line(15.75, 15.75, 21.25, 15.75),
      ],
    },
    filled: {
      solids: [
        circle(8.75, 8, 3),
        'M3 19.35C3 16.55 5.4 14.65 8.75 14.65C12.1 14.65 14.5 16.55 14.5 19.35A0.95 0.95 0 0 1 13.55 20.3H3.95A0.95 0.95 0 0 1 3 19.35Z',
      ],
      strokes: ['M14.25 5.5A2.75 2.75 0 0 1 14.25 10.5', line(18.5, 13, 18.5, 18.5), line(15.75, 15.75, 21.25, 15.75)],
    },
  },
  {
    name: 'id-card',
    category: 'users',
    tags: ['badge', 'identity', 'employee', 'credential'],
    outline: {
      strokes: [
        M.CARD_FRAME,
        circle(8.25, 9.2, 1.6),
        'M5.5 15.75C5.5 14.4 6.7 13.6 8.25 13.6C9.8 13.6 11 14.4 11 15.75',
        line(13.5, 10, 18, 10),
        line(13.5, 13.75, 17, 13.75),
      ],
    },
    filled: {
      solids: [M.CARD_FRAME],
      cutoutFills: [
        circle(8.25, 9.2, 1.65),
        'M5.5 15.75C5.5 14.4 6.7 13.6 8.25 13.6C9.8 13.6 11 14.4 11 15.75A0.65 0.65 0 0 1 10.35 16.4H6.15A0.65 0.65 0 0 1 5.5 15.75Z',
      ],
      cutoutStrokes: [line(13.5, 10, 18, 10), line(13.5, 13.75, 17, 13.75)],
    },
  },
  {
    name: 'badge-check',
    category: 'users',
    tags: ['verified', 'official', 'certified', 'trust'],
    outline: { strokes: [BADGE_BODY, BADGE_SLOT, BADGE_CHECK] },
    filled: { solids: [BADGE_BODY], cutoutStrokes: [BADGE_SLOT, BADGE_CHECK] },
  },

  // Expressions & gestures
  {
    name: 'smile',
    category: 'users',
    tags: ['happy', 'emoji', 'positive', 'feedback'],
    outline: {
      strokes: [M.CIRCLE_FRAME, 'M8.5 14.5C9.35 15.85 10.6 16.5 12 16.5C13.4 16.5 14.65 15.85 15.5 14.5'],
      dots: [{ cx: 9, cy: 10, scale: 1.05 }, { cx: 15, cy: 10, scale: 1.05 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: ['M8.5 14.5C9.35 15.85 10.6 16.5 12 16.5C13.4 16.5 14.65 15.85 15.5 14.5'],
      cutoutDots: [{ cx: 9, cy: 10, scale: 1.2 }, { cx: 15, cy: 10, scale: 1.2 }],
    },
  },
  {
    name: 'frown',
    category: 'users',
    tags: ['sad', 'unhappy', 'emoji', 'negative'],
    outline: {
      strokes: [M.CIRCLE_FRAME, 'M8.5 16.25C9.35 14.9 10.6 14.25 12 14.25C13.4 14.25 14.65 14.9 15.5 16.25'],
      dots: [{ cx: 9, cy: 10, scale: 1.05 }, { cx: 15, cy: 10, scale: 1.05 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: ['M8.5 16.25C9.35 14.9 10.6 14.25 12 14.25C13.4 14.25 14.65 14.9 15.5 16.25'],
      cutoutDots: [{ cx: 9, cy: 10, scale: 1.2 }, { cx: 15, cy: 10, scale: 1.2 }],
    },
  },
  {
    name: 'meh',
    category: 'users',
    tags: ['neutral', 'indifferent', 'emoji', 'feedback'],
    outline: {
      strokes: [M.CIRCLE_FRAME, line(8.75, 15.25, 15.25, 15.25)],
      dots: [{ cx: 9, cy: 10, scale: 1.05 }, { cx: 15, cy: 10, scale: 1.05 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: [line(8.75, 15.25, 15.25, 15.25)],
      cutoutDots: [{ cx: 9, cy: 10, scale: 1.2 }, { cx: 15, cy: 10, scale: 1.2 }],
    },
  },
  {
    name: 'thumbs-up',
    category: 'users',
    tags: ['like', 'approve', 'upvote', 'good'],
    outline: { strokes: THUMBS_UP },
    filled: { solids: THUMBS_UP, cutoutStrokes: ['M7.5 10.5V21.5'] },
  },
  {
    name: 'thumbs-down',
    category: 'users',
    tags: ['dislike', 'reject', 'downvote', 'bad'],
    outline: { strokes: THUMBS_DOWN },
    filled: { solids: THUMBS_DOWN, cutoutStrokes: ['M16.5 13.5V2.5'] },
  },
  {
    name: 'hand',
    category: 'users',
    tags: ['pan', 'grab', 'stop', 'raise-hand', 'palm'],
    outline: { strokes: [HAND_BODY, ...FINGER_SEAMS] },
    filled: {
      solids: [HAND_BODY],
      cutoutStrokes: FINGER_SEAMS.map(d => ({ d, widthScale: 0.7 })),
    },
  },
  {
    name: 'accessibility',
    category: 'users',
    tags: ['a11y', 'inclusive', 'human', 'universal'],
    outline: {
      strokes: [
        M.CIRCLE_FRAME,
        line(7.5, 10.5, 16.5, 10.5),
        line(12, 10.5, 12, 14.25),
        poly([[9.5, 17.75], [12, 14.25], [14.5, 17.75]]),
      ],
      dots: [{ cx: 12, cy: 7, scale: 1.1 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: [line(7.5, 10.5, 16.5, 10.5), line(12, 10.5, 12, 14.25), poly([[9.5, 17.75], [12, 14.25], [14.5, 17.75]])],
      cutoutDots: [{ cx: 12, cy: 7, scale: 1.2 }],
    },
  },
  {
    name: 'footprints',
    category: 'users',
    tags: ['steps', 'walk', 'track', 'activity'],
    outline: { strokes: FOOTPRINTS },
    filled: { solids: FOOTPRINTS },
  },
]
