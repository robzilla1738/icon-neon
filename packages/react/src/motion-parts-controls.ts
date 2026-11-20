export const partControls = {
  // Keep the arrows paired while they expand or close the gap.
  'arrows-expand': [
    { box: [12, 0, 12, 12], action: 'nudge-up' },
    { box: [0, 12, 12, 12], action: 'nudge-down' },
  ],
  'arrows-collapse': [
    { box: [12, 0, 12, 12], action: 'nudge-down' },
    { box: [0, 12, 12, 12], action: 'nudge-up' },
  ],
  'chevrons-up-down': [
    { box: [0, 0, 24, 12], action: 'nudge-up' },
    { box: [0, 12, 24, 12], action: 'nudge-down' },
  ],
  maximize: [
    { box: [0, 0, 24, 12], action: 'nudge-up' },
    { box: [0, 12, 24, 12], action: 'nudge-down' },
  ],
  minimize: [
    { box: [0, 0, 24, 12], action: 'nudge-down' },
    { box: [0, 12, 24, 12], action: 'nudge-up' },
  ],

  // Controls open in sequence. Dots follow their reading direction.
  menu: [
    { box: [0, 4, 24, 5], action: 'nudge-right' },
    { box: [0, 10, 24, 4], action: 'nudge-left', delay: 40 },
    { box: [0, 15, 24, 5], action: 'nudge-right', delay: 80 },
  ],
  'more-horizontal': [
    { box: [2.5, 9, 6, 6], action: 'beat' },
    { box: [9, 9, 6, 6], action: 'beat', delay: 65 },
    { box: [15.5, 9, 6, 6], action: 'beat', delay: 130 },
  ],
  'more-vertical': [
    { box: [9, 2.5, 6, 6], action: 'beat' },
    { box: [9, 9, 6, 6], action: 'beat', delay: 65 },
    { box: [9, 15.5, 6, 6], action: 'beat', delay: 130 },
  ],
  equal: [
    { box: [0, 7, 24, 4], action: 'nudge-up' },
    { box: [0, 13, 24, 4], action: 'nudge-down' },
  ],
  sliders: [
    { box: [0, 0, 24, 12], action: 'nudge-right' },
    { box: [0, 12, 24, 12], action: 'nudge-left', delay: 45 },
  ],
  'sliders-vertical': [
    { box: [0, 0, 12, 24], action: 'nudge-up' },
    { box: [12, 0, 12, 24], action: 'nudge-down', delay: 45 },
  ],
  'grip-horizontal': [
    { box: [3, 5, 6, 14], action: 'beat' },
    { box: [9.5, 5, 5, 14], action: 'beat', delay: 45 },
    { box: [15, 5, 6, 14], action: 'beat', delay: 90 },
  ],
  'grip-vertical': [
    { box: [5, 3, 14, 6], action: 'beat' },
    { box: [5, 9.5, 14, 5], action: 'beat', delay: 45 },
    { box: [5, 15, 14, 6], action: 'beat', delay: 90 },
  ],

  // Panels open along their gutters. Dashboard tiles lift independently.
  'layout-grid': [
    { box: [0, 0, 12, 12], action: 'nudge-left' },
    { box: [12, 0, 12, 12], action: 'nudge-right', delay: 35 },
    { box: [0, 12, 12, 12], action: 'nudge-left', delay: 65 },
    { box: [12, 12, 12, 12], action: 'nudge-right', delay: 100 },
  ],
  'layout-dashboard': [
    { box: [12.625, 2, 10, 10], action: 'nudge-up' },
    { box: [12.625, 12, 10, 10], action: 'nudge-down', delay: 55 },
  ],
  'layout-columns': [
    { box: [0, 0, 12, 24], action: 'nudge-left' },
    { box: [12, 0, 12, 24], action: 'nudge-right' },
  ],
  'layout-rows': [
    { box: [0, 0, 24, 12], action: 'nudge-up' },
    { box: [0, 12, 24, 12], action: 'nudge-down' },
  ],
  'layout-kanban': [
    { box: [1, 2, 7.5, 20], action: 'meter', origin: [5, 3] },
    { box: [8.5, 2, 7, 20], action: 'meter', origin: [12, 3], delay: 60 },
    { box: [15.5, 2, 7.5, 20], action: 'meter', origin: [19, 3], delay: 120 },
  ],
  'split-horizontal': [
    { box: [0, 7, 10.375, 10], action: 'nudge-left' },
    { box: [13.625, 7, 10.375, 10], action: 'nudge-right' },
  ],
  'split-vertical': [
    { box: [7, 0, 10, 10.375], action: 'nudge-up' },
    { box: [7, 13.625, 10, 10.375], action: 'nudge-down' },
  ],
  stack: [
    { box: [6, 2.5, 12, 3], action: 'nudge-up', delay: 50 },
    { box: [4, 5.75, 16, 3], action: 'nudge-up' },
  ],

  // Inline type and paragraph details move around their anchored text.
  underline: [{ box: [2, 17.75, 20, 4], action: 'draw' }],
  'heading-1': [{ box: [14, 7.5, 7.5, 13.5], action: 'beat' }],
  'heading-2': [{ box: [13.25, 7.5, 9, 13.5], action: 'beat' }],
  'heading-3': [{ box: [13.25, 8, 9, 13], action: 'beat' }],
  'align-left': [
    { box: [2, 8, 15, 3.75], action: 'nudge-right' },
    { box: [2, 16, 14, 4], action: 'nudge-right', delay: 65 },
  ],
  'align-center': [
    { box: [4, 8, 16, 3.75], action: 'beat' },
    { box: [5.5, 16, 13, 4], action: 'beat', delay: 65 },
  ],
  'align-right': [
    { box: [7, 8, 15, 3.75], action: 'nudge-left' },
    { box: [9, 16, 13, 4], action: 'nudge-left', delay: 65 },
  ],
  'align-justify': [
    { box: [2, 4, 20, 4], action: 'draw' },
    { box: [2, 8, 20, 4], action: 'draw', delay: 42 },
    { box: [2, 12, 20, 4], action: 'draw', delay: 84 },
    { box: [2, 16, 20, 4], action: 'draw', delay: 126 },
  ],
  list: [
    { box: [2, 4, 4.75, 5], action: 'beat' },
    { box: [2, 9.5, 4.75, 5], action: 'beat', delay: 55 },
    { box: [2, 15, 4.75, 5], action: 'beat', delay: 110 },
  ],
  'list-checks': [{ box: [1, 2, 8.875, 20], action: 'draw' }],
  superscript: [{ box: [14.375, 2, 8, 11], action: 'nudge-up' }],
  subscript: [{ box: [14.375, 10, 8, 12], action: 'nudge-down' }],
  unlink: [
    { box: [2.5, 2.5, 6.25, 6.25], action: 'spark' },
    { box: [15.25, 15.25, 6.25, 6.25], action: 'spark', delay: 50 },
  ],

  // Signal rises from the shortest to the tallest bar.
  signal: [
    { box: [2, 14, 5, 8], action: 'meter', origin: [4.5, 20.875] },
    { box: [7, 10, 5, 12], action: 'meter', origin: [9.5, 20.875], delay: 45 },
    { box: [12, 6, 5, 16], action: 'meter', origin: [14.5, 20.875], delay: 90 },
    { box: [17, 2, 5, 20], action: 'meter', origin: [19.5, 20.875], delay: 135 },
  ],
} as const
