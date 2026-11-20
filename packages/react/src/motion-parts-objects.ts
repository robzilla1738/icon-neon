export const partObjects = {
  // The radiating marks and glints answer the motion of the object they surround.
  wand: [
    { box: [6.75, 1.5, 5, 5.875], action: 'spark' },
    { box: [14, 1.5, 9, 5.875], action: 'spark', delay: 60 },
    { box: [17, 7.375, 6, 3], action: 'spark', delay: 110 },
  ],
  'mail-check': [{ box: [14, 15, 10, 9], action: 'draw' }],
  'mail-warning': [{ box: [17, 13, 3, 9], action: 'shake' }],
  quote: [
    { box: [2.75, 3.5, 8.75, 17], action: 'nudge-down' },
    { box: [12.5, 3.5, 8.75, 17], action: 'nudge-down', delay: 85 },
  ],
  'phone-call': [{ box: [13, 1, 10, 10], action: 'beat' }],
  'phone-incoming': [{ box: [12.75, 2.5, 8.75, 8.75], action: 'nudge-down' }],
  'phone-outgoing': [{ box: [12.75, 2.5, 8.75, 8.75], action: 'nudge-up' }],
  'phone-missed': [{ box: [13.5, 2.5, 8, 8], action: 'shake' }],
  bell: [{ box: [8, 18.5, 8, 5.5], action: 'swing' }],
  'bell-ring': [{ box: [8, 18.5, 8, 5.5], action: 'swing' }],
  'bell-dot': [{ box: [8, 18.5, 8, 5.5], action: 'swing', delay: 70 }],
  megaphone: [{ box: [19, 7, 5, 10], action: 'nudge-right' }],

  code: [
    { box: [0, 0, 12, 24], action: 'nudge-left' },
    { box: [12, 0, 12, 24], action: 'nudge-right' },
  ],
  'code-2': [
    { box: [0, 0, 8.875, 24], action: 'nudge-left' },
    { box: [15.125, 0, 8.875, 24], action: 'nudge-right' },
  ],
  terminal: [{ box: [10.5, 15.5, 11, 3.25], action: 'draw' }],
  braces: [
    { box: [0, 0, 12, 24], action: 'nudge-left' },
    { box: [12, 0, 12, 24], action: 'nudge-right', delay: 35 },
  ],
  brackets: [
    { box: [0, 0, 12, 24], action: 'nudge-left' },
    { box: [12, 0, 12, 24], action: 'nudge-right' },
  ],
  regex: [{ box: [9.875, 2.5, 11.25, 12.5], action: 'spin' }],
  'git-pull-request': [{ box: [10.5, 2.25, 10.5, 19.5], action: 'nudge-down' }],
  server: [
    { box: [0, 0, 24, 12], action: 'nudge-up' },
    { box: [0, 12, 24, 12], action: 'nudge-down', delay: 65 },
  ],
  blocks: [{ box: [13, 1.75, 9.5, 9.25], action: 'nudge-up' }],
  binary: [
    { box: [3, 2, 9, 10], action: 'beat' },
    { box: [12, 2, 9, 10], action: 'beat', delay: 50 },
    { box: [3, 12, 9, 10], action: 'beat', delay: 100 },
    { box: [12, 12, 9, 10], action: 'beat', delay: 150 },
  ],

  library: [{ box: [15.25, 0, 8.75, 24], action: 'nudge-up' }],
  coffee: [
    { box: [5.75, 0, 3, 8], action: 'nudge-up' },
    { box: [9, 0, 3, 8], action: 'nudge-up', delay: 60 },
    { box: [12.25, 0, 3, 8], action: 'nudge-up', delay: 120 },
  ],
  utensils: [
    { box: [0, 0, 12.75, 24], action: 'swing' },
    { box: [12.75, 0, 11.25, 24], action: 'hinge', delay: 45 },
  ],
  lightbulb: [{ box: [4.75, 2.5, 14.5, 16.25], action: 'beat' }],
  'sun-dim': [
    { box: [10, 2, 4, 3.875], action: 'nudge-up' },
    { box: [18.125, 10, 3.875, 4], action: 'nudge-right', delay: 60 },
    { box: [10, 18.125, 4, 3.875], action: 'nudge-down', delay: 120 },
    { box: [2, 10, 3.875, 4], action: 'nudge-left', delay: 180 },
  ],
  rocket: [{ box: [2.25, 17.25, 4.5, 4.5], action: 'beat' }],
} as const
