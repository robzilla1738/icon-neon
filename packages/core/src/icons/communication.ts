import * as M from '../motifs.ts'
import { arc, circle, line, poly, rect, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const PHONE_BODY =
  'M6.25 4.25H9.1C9.68 4.25 10.18 4.65 10.31 5.22L11.08 8.55C11.19 9.04 10.97 9.54 10.54 9.8L8.85 10.82C9.82 12.76 11.24 14.18 13.18 15.15L14.2 13.46C14.46 13.03 14.96 12.81 15.45 12.92L18.78 13.69C19.35 13.82 19.75 14.32 19.75 14.9V17.75C19.75 18.85 18.85 19.75 17.75 19.75C10.3 19.75 4.25 13.7 4.25 6.25C4.25 5.15 5.15 4.25 6.25 4.25Z'

const SEND_PLANE =
  'M20.35 4.45L14.85 19.85C14.55 20.68 13.38 20.7 13.05 19.88L10.35 13.65L4.12 10.95C3.3 10.62 3.32 9.45 4.15 9.15L19.55 3.65C20.15 3.44 20.56 3.85 20.35 4.45Z'

const VOICEMAIL_REELS = [circle(6.75, 12, 3.75), circle(17.25, 12, 3.75)]
const VOICEMAIL_TAPE = line(6.75, 15.75, 17.25, 15.75)

const MEGAPHONE_BODY =
  'M4.25 9.75H7.25L17 4.85Q17.5 4.6 17.5 5.15V18.85Q17.5 19.4 17 19.15L7.25 14.25H4.25A1.25 1.25 0 0 1 3 13V11A1.25 1.25 0 0 1 4.25 9.75Z'
const MEGAPHONE_GRIP = 'M6.65 14.25L8.1 20.03Q8.28 20.75 9.02 20.75H11.85Q12.69 20.75 12.44 19.93L11.42 16.36'
const MEGAPHONE_WAVE = 'M20.45 9C21.4 10.55 21.4 13.45 20.45 15'

const RECEIVER_DOWN = 'M3.25 12.25C3.85 8.75 7.5 7 12 7C16.5 7 20.15 8.75 20.75 12.25L21.1 14.35Q21.25 15.2 20.4 15.45L17.55 16.3Q16.7 16.55 16.4 15.7L15.6 13.1C13.6 12.15 10.4 12.15 8.4 13.1L7.6 15.7Q7.3 16.55 6.45 16.3L3.6 15.45Q2.75 15.2 2.9 14.35Z'

export const communicationIcons: IconDef[] = [
  // Mail family
  {
    name: 'mail',
    category: 'communication',
    tags: ['email', 'envelope', 'message', 'letter', 'inbox'],
    outline: { strokes: [M.MAIL_BODY, M.MAIL_FLAP] },
    filled: { solids: [M.MAIL_BODY], cutoutStrokes: [M.MAIL_FLAP] },
  },
  {
    name: 'mail-open',
    category: 'communication',
    tags: ['email', 'read', 'opened', 'envelope'],
    outline: {
      strokes: [
        'M3.25 9.65L11.2 4.35C11.68 4.03 12.32 4.03 12.8 4.35L20.75 9.65V17.5A2 2 0 0 1 18.75 19.5H5.25A2 2 0 0 1 3.25 17.5V9.65Z',
        'M3.5 9.85L11.22 14.65C11.7 14.95 12.3 14.95 12.78 14.65L20.5 9.85',
      ],
    },
    filled: {
      solids: [
        'M3.25 9.65L11.2 4.35C11.68 4.03 12.32 4.03 12.8 4.35L20.75 9.65V17.5A2 2 0 0 1 18.75 19.5H5.25A2 2 0 0 1 3.25 17.5V9.65Z',
      ],
      cutoutStrokes: ['M3.5 9.85L11.22 14.65C11.7 14.95 12.3 14.95 12.78 14.65L20.5 9.85'],
    },
  },
  {
    name: 'mail-plus',
    category: 'communication',
    tags: ['compose', 'new-email', 'add'],
    outline: {
      strokes: [
        'M21 12.5V7.5A2.5 2.5 0 0 0 18.5 5H5.5A2.5 2.5 0 0 0 3 7.5V16.5A2.5 2.5 0 0 0 5.5 19H12.5',
        M.MAIL_FLAP,
        line(18, 15, 18, 21),
        line(15, 18, 21, 18),
      ],
    },
    filled: {
      solids: [M.MAIL_BODY],
      cutoutStrokes: [M.MAIL_FLAP],
      cutoutFills: [circle(18, 18, 4.75)],
      strokes: [line(18, 15.25, 18, 20.75), line(15.25, 18, 20.75, 18)],
    },
  },
  {
    name: 'mail-check',
    category: 'communication',
    tags: ['delivered', 'verified', 'email', 'sent'],
    outline: {
      strokes: [
        'M21 12.5V7.5A2.5 2.5 0 0 0 18.5 5H5.5A2.5 2.5 0 0 0 3 7.5V16.5A2.5 2.5 0 0 0 5.5 19H12',
        M.MAIL_FLAP,
        poly([[15.25, 18.25], [17, 20], [20.75, 16.25]]),
      ],
    },
    filled: {
      solids: [M.MAIL_BODY],
      cutoutStrokes: [M.MAIL_FLAP],
      cutoutFills: [circle(18, 18, 5)],
      strokes: [poly([[15.25, 18.25], [17, 20], [20.75, 16.25]])],
    },
  },
  {
    name: 'mail-warning',
    category: 'communication',
    tags: ['spam', 'alert', 'bounce', 'email'],
    outline: {
      strokes: [
        'M21 11.5V7.5A2.5 2.5 0 0 0 18.5 5H5.5A2.5 2.5 0 0 0 3 7.5V16.5A2.5 2.5 0 0 0 5.5 19H14',
        M.MAIL_FLAP,
        line(18.5, 14.25, 18.5, 17.1),
      ],
      dots: [{ cx: 18.5, cy: 20.25, scale: 1 }],
    },
    filled: {
      solids: [M.MAIL_BODY],
      cutoutStrokes: [M.MAIL_FLAP],
      cutoutFills: [rect(15.5, 12.75, 6.25, 9, 2)],
      strokes: [line(18.5, 14.25, 18.5, 17.1)],
      dots: [{ cx: 18.5, cy: 20.25, scale: 1.05 }],
    },
  },

  // Send, reply, forward
  {
    name: 'send',
    category: 'communication',
    tags: ['paper-plane', 'submit', 'deliver', 'message'],
    outline: { strokes: [SEND_PLANE, line(10.35, 13.65, 19.75, 4.25)] },
    filled: { solids: [SEND_PLANE], cutoutStrokes: [line(10.35, 13.65, 19.75, 4.25)] },
  },
  {
    name: 'reply',
    category: 'communication',
    tags: ['respond', 'back', 'answer', 'email'],
    outline: {
      strokes: [
        poly([[9, 6.5], [4, 11.5], [9, 16.5]]),
        'M4 11.5H14.5A5.5 5.5 0 0 1 20 17V18.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'reply-all',
    category: 'communication',
    tags: ['respond-all', 'group', 'email'],
    outline: {
      strokes: [
        poly([[8, 6.5], [3.5, 11.5], [8, 16.5]]),
        poly([[12.5, 6.5], [8, 11.5], [12.5, 16.5]]),
        'M8 11.5H15A5 5 0 0 1 20 16.5V18.5',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'forward',
    category: 'communication',
    tags: ['share', 'redirect', 'pass', 'email'],
    outline: {
      strokes: [
        poly([[15, 6.5], [20, 11.5], [15, 16.5]]),
        'M20 11.5H9.5A5.5 5.5 0 0 0 4 17V18.5',
      ],
    },
    filled: { boostedOutline: true },
  },

  // Chat & messaging
  {
    name: 'message-circle',
    category: 'communication',
    tags: ['chat', 'comment', 'bubble', 'talk'],
    outline: { strokes: [M.MESSAGE_CIRCLE_BODY] },
    filled: { solids: [M.MESSAGE_CIRCLE_BODY] },
  },
  {
    name: 'message-square',
    category: 'communication',
    tags: ['chat', 'comment', 'feedback', 'bubble'],
    outline: { strokes: [M.MESSAGE_SQUARE_BODY] },
    filled: { solids: [M.MESSAGE_SQUARE_BODY] },
  },
  {
    name: 'messages-square',
    category: 'communication',
    tags: ['forum', 'discussion', 'thread', 'chat'],
    outline: {
      strokes: [
        'M15.25 10.5V6.25A2 2 0 0 0 13.25 4.25H5.75A2 2 0 0 0 3.75 6.25V14.75L6.75 12.5H13.25A2 2 0 0 0 15.25 10.5Z',
        'M18.25 9.5H18.5A2 2 0 0 1 20.5 11.5V20L17.5 17.75H10.75A2 2 0 0 1 8.75 15.75V15',
      ],
    },
    filled: {
      solids: [
        'M15.25 10.5V6.25A2 2 0 0 0 13.25 4.25H5.75A2 2 0 0 0 3.75 6.25V14.75L6.75 12.5H13.25A2 2 0 0 0 15.25 10.5Z',
      ],
      strokes: ['M18.25 9.5H18.5A2 2 0 0 1 20.5 11.5V20L17.5 17.75H10.75A2 2 0 0 1 8.75 15.75V15'],
    },
  },
  {
    name: 'message-plus',
    category: 'communication',
    tags: ['new-chat', 'comment', 'add'],
    outline: { strokes: [M.MESSAGE_CIRCLE_BODY, line(12, 9, 12, 15), line(9, 12, 15, 12)] },
    filled: { solids: [M.MESSAGE_CIRCLE_BODY], cutoutStrokes: [line(12, 9, 12, 15), line(9, 12, 15, 12)] },
  },
  {
    name: 'message-dots',
    category: 'communication',
    tags: ['typing', 'chat', 'reply', 'conversation'],
    outline: {
      strokes: [M.MESSAGE_CIRCLE_BODY],
      dots: [{ cx: 8.5, cy: 12, scale: 1.05 }, { cx: 12, cy: 12, scale: 1.05 }, { cx: 15.5, cy: 12, scale: 1.05 }],
    },
    filled: {
      solids: [M.MESSAGE_CIRCLE_BODY],
      cutoutDots: [{ cx: 8.5, cy: 12, scale: 1.2 }, { cx: 12, cy: 12, scale: 1.2 }, { cx: 15.5, cy: 12, scale: 1.2 }],
    },
  },
  {
    name: 'quote',
    category: 'communication',
    tags: ['blockquote', 'citation', 'testimonial', 'speech'],
    outline: {
      strokes: [
        'M4.25 12.75H8.5A1.5 1.5 0 0 1 10 14.25V17.25A1.5 1.5 0 0 1 8.5 18.75H5.75A1.5 1.5 0 0 1 4.25 17.25V11C4.25 7.75 6.25 5.75 9.25 5',
        'M14 12.75H18.25A1.5 1.5 0 0 1 19.75 14.25V17.25A1.5 1.5 0 0 1 18.25 18.75H15.5A1.5 1.5 0 0 1 14 17.25V11C14 7.75 16 5.75 19 5',
      ],
    },
    filled: {
      solids: [
        rect(4.25, 12.5, 5.75, 6, 1.5),
        rect(14, 12.5, 5.75, 6, 1.5),
      ],
      strokes: [
        'M4.25 14.5V11C4.25 7.75 6.25 5.75 9.25 5',
        'M14 14.5V11C14 7.75 16 5.75 19 5',
      ],
    },
  },

  // Phone family
  {
    name: 'phone',
    category: 'communication',
    tags: ['call', 'telephone', 'contact', 'support'],
    outline: { strokes: [PHONE_BODY] },
    filled: { solids: [PHONE_BODY] },
  },
  {
    name: 'phone-call',
    category: 'communication',
    tags: ['ringing', 'active', 'voice', 'telephone'],
    outline: {
      strokes: [
        PHONE_BODY,
        'M14.5 5.5A4 4 0 0 1 18.5 9.5',
        'M14.5 2.75A6.75 6.75 0 0 1 21.25 9.5',
      ],
    },
    filled: {
      solids: [PHONE_BODY],
      strokes: ['M14.5 5.5A4 4 0 0 1 18.5 9.5', 'M14.5 2.75A6.75 6.75 0 0 1 21.25 9.5'],
    },
  },
  {
    name: 'phone-incoming',
    category: 'communication',
    tags: ['receive', 'call', 'inbound'],
    outline: {
      strokes: [
        PHONE_BODY,
        line(20, 4, 14.25, 9.75),
        poly([[14.25, 5.5], [14.25, 9.75], [18.5, 9.75]]),
      ],
    },
    filled: {
      solids: [PHONE_BODY],
      strokes: [line(20, 4, 14.25, 9.75), poly([[14.25, 5.5], [14.25, 9.75], [18.5, 9.75]])],
    },
  },
  {
    name: 'phone-outgoing',
    category: 'communication',
    tags: ['dial', 'call', 'outbound'],
    outline: {
      strokes: [
        PHONE_BODY,
        line(14.25, 9.75, 20, 4),
        poly([[15.75, 4], [20, 4], [20, 8.25]]),
      ],
    },
    filled: {
      solids: [PHONE_BODY],
      strokes: [line(14.25, 9.75, 20, 4), poly([[15.75, 4], [20, 4], [20, 8.25]])],
    },
  },
  {
    name: 'phone-missed',
    category: 'communication',
    tags: ['declined', 'unanswered', 'call'],
    outline: { strokes: [PHONE_BODY, line(15, 4, 20, 9), line(20, 4, 15, 9)] },
    filled: { solids: [PHONE_BODY], strokes: [line(15, 4, 20, 9), line(20, 4, 15, 9)] },
  },
  {
    name: 'phone-off',
    category: 'communication',
    tags: ['hangup', 'mute', 'disconnected', 'call'],
    outline: { strokes: [RECEIVER_DOWN] },
    filled: { solids: [RECEIVER_DOWN], slash: M.SLASH_LINE },
  },
  {
    name: 'voicemail',
    category: 'communication',
    tags: ['recording', 'message', 'tape', 'phone'],
    outline: {
      strokes: [...VOICEMAIL_REELS, VOICEMAIL_TAPE],
    },
    filled: {
      solids: VOICEMAIL_REELS,
      cutoutFills: [circle(6.75, 12, 1.85), circle(17.25, 12, 1.85)],
      strokes: [VOICEMAIL_TAPE],
    },
  },

  // Notifications & broadcasts
  {
    name: 'bell',
    category: 'communication',
    tags: ['notification', 'alert', 'alarm', 'subscribe'],
    outline: { strokes: [M.BELL_DOME, M.BELL_CLAPPER] },
    filled: { solids: [M.BELL_DOME], strokes: [M.BELL_CLAPPER] },
  },
  {
    name: 'bell-off',
    category: 'communication',
    tags: ['mute', 'silent', 'dnd', 'notifications-off'],
    outline: { strokes: [M.BELL_DOME, M.BELL_CLAPPER] },
    filled: { solids: [M.BELL_DOME], strokes: [M.BELL_CLAPPER], slash: M.SLASH_LINE },
  },
  {
    name: 'bell-ring',
    category: 'communication',
    tags: ['active', 'alert', 'chime', 'notification'],
    outline: {
      strokes: [
        M.BELL_DOME,
        M.BELL_CLAPPER,
        arc(12, 9.75, 9, -155, -125),
        arc(12, 9.75, 9, -55, -25),
      ],
    },
    filled: {
      solids: [M.BELL_DOME],
      strokes: [M.BELL_CLAPPER, arc(12, 9.75, 9, -155, -125), arc(12, 9.75, 9, -55, -25)],
    },
  },
  {
    name: 'bell-dot',
    category: 'communication',
    tags: ['unread', 'badge', 'new-notification', 'alert'],
    outline: {
      strokes: [
        'M13.5 4A6 6 0 0 0 6 9.75C6 13.75 4.4 15.35 3.85 15.9C3.53 16.22 3.76 16.8 4.21 16.8H19.79C20.24 16.8 20.47 16.22 20.15 15.9C19.6 15.35 18 13.75 18 11',
        M.BELL_CLAPPER,
        circle(18.25, 6.25, 2.25),
      ],
    },
    filled: {
      solids: [M.BELL_DOME],
      cutoutFills: [circle(18.25, 6.25, 3.6)],
      topSolids: [{ d: circle(18.25, 6.25, 2.35), expand: false }],
      strokes: [M.BELL_CLAPPER],
    },
  },
  {
    name: 'megaphone',
    category: 'communication',
    tags: ['announcement', 'broadcast', 'marketing', 'campaign'],
    outline: { strokes: [MEGAPHONE_BODY, MEGAPHONE_GRIP, MEGAPHONE_WAVE] },
    filled: { solids: [MEGAPHONE_BODY, MEGAPHONE_GRIP + 'Z'], strokes: [MEGAPHONE_WAVE] },
  },
  {
    name: 'at-sign',
    category: 'communication',
    tags: ['mention', 'email', 'handle', 'username'],
    outline: {
      strokes: [
        circle(12, 12, 3.5),
        'M15.5 12V13.25A2.5 2.5 0 0 0 20.5 13.25V12A8.5 8.5 0 1 0 16.25 19.35',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'hash',
    category: 'communication',
    tags: ['channel', 'tag', 'number', 'pound', 'slack'],
    outline: {
      strokes: [
        line(4.5, 9, 19.5, 9),
        line(4.5, 15, 19.5, 15),
        line(10, 4, 8, 20),
        line(16, 4, 14, 20),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'contact',
    category: 'communication',
    tags: ['address-book', 'profile', 'directory', 'vcard'],
    outline: {
      strokes: [
        M.TALL_FRAME,
        line(3.25, 7.5, 5, 7.5),
        line(3.25, 12, 5, 12),
        line(3.25, 16.5, 5, 16.5),
        circle(12, 9.75, 2.25),
        'M8.5 16.75C8.5 14.85 10 13.75 12 13.75C14 13.75 15.5 14.85 15.5 16.75',
      ],
    },
    filled: {
      solids: [M.TALL_FRAME],
      cutoutFills: [
        circle(12, 9.75, 2.35),
        'M8.25 17C8.25 14.85 9.9 13.5 12 13.5C14.1 13.5 15.75 14.85 15.75 17A0.85 0.85 0 0 1 14.9 17.85H9.1A0.85 0.85 0 0 1 8.25 17Z',
      ],
      strokes: [line(3, 7.5, 4.75, 7.5), line(3, 12, 4.75, 12), line(3, 16.5, 4.75, 16.5)],
    },
  },
]
