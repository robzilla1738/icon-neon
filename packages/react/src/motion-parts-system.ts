export const partSystem = {
  // Security and feedback
  'scan-face': [
    { box: [7.375, 7.875, 3.25, 3.25], action: 'beat' },
    { box: [13.375, 7.875, 3.25, 3.25], action: 'beat' },
  ],
  incognito: [{ box: [1.75, 3.25, 20.5, 9.75], action: 'nudge-up' }],
  siren: [
    { box: [3.75, 4.75, 3.75, 3.75], action: 'spark' },
    { box: [10.75, 1.75, 2.5, 4.25], action: 'spark', delay: 45 },
    { box: [16.5, 4.75, 3.75, 3.75], action: 'spark', delay: 90 },
  ],
  'qr-code': [
    { box: [2.75, 2.75, 8.5, 8.5], action: 'scan' },
    { box: [12.75, 2.75, 8.5, 8.5], action: 'scan', delay: 50 },
    { box: [2.75, 12.75, 8.5, 8.5], action: 'scan', delay: 100 },
    { box: [12.75, 12.75, 8.5, 8.5], action: 'scan', delay: 145 },
  ],
  'circle-dot': [{ box: [9, 9, 6, 6], action: 'beat' }],
  loader: [
    { box: [10.5, 1.5, 3, 6.25], action: 'spark' },
    { box: [14.625, 4.125, 5.25, 5.25], action: 'spark', delay: 28 },
    { box: [16.25, 10.5, 6.25, 3], action: 'spark', delay: 56 },
    { box: [14.625, 14.625, 5.25, 5.25], action: 'spark', delay: 84 },
    { box: [10.5, 16.25, 3, 6.25], action: 'spark', delay: 112 },
    { box: [4.125, 14.625, 5.25, 5.25], action: 'spark', delay: 140 },
    { box: [1.5, 10.5, 6.25, 3], action: 'spark', delay: 168 },
    { box: [4.125, 4.125, 5.25, 5.25], action: 'spark', delay: 196 },
  ],
  // Playback and audio
  pause: [
    { box: [4.25, 3.5, 6.75, 17], action: 'nudge-down' },
    { box: [13, 3.5, 6.75, 17], action: 'nudge-down', delay: 35 },
  ],
  'skip-back': [{ box: [8.75, 4.875, 11.25, 14.25], action: 'nudge-left' }],
  'skip-forward': [{ box: [4, 4.875, 11.25, 14.25], action: 'nudge-right' }],
  rewind: [
    { box: [2.125, 5.125, 9.375, 13.75], action: 'nudge-left' },
    { box: [12.875, 5.125, 9.375, 13.75], action: 'nudge-left', delay: 55 },
  ],
  'fast-forward': [
    { box: [12.5, 5.125, 9.375, 13.75], action: 'nudge-right' },
    { box: [1.75, 5.125, 9.375, 13.75], action: 'nudge-right', delay: 55 },
  ],
  'step-back': [{ box: [10, 4.75, 8.75, 14.5], action: 'nudge-left' }],
  'step-forward': [{ box: [5.25, 4.75, 8.75, 14.5], action: 'nudge-right' }],
  'volume-1': [{ box: [15.875, 8, 3.625, 8], action: 'nudge-right' }],
  'volume-2': [{ box: [14.375, 5.75, 6.875, 12.5], action: 'nudge-right' }],
  'volume-x': [{ box: [15.25, 8.5, 7, 7], action: 'shake' }],
  waveform: [
    { box: [2, 8.5, 3, 7], action: 'beat' },
    { box: [6.25, 5, 3, 14], action: 'beat', delay: 45 },
    { box: [10.5, 2, 3, 20], action: 'beat', delay: 90 },
    { box: [14.75, 6, 3, 12], action: 'beat', delay: 135 },
    { box: [19, 8.5, 3, 7], action: 'beat', delay: 180 },
  ],
  // Weather and time
  sun: [
    { box: [10.75, 1.5, 2.5, 4.5], action: 'nudge-up' },
    { box: [3.875, 3.875, 4.125, 4.125], action: 'spark', delay: 65 },
    { box: [16, 3.875, 4.125, 4.125], action: 'spark', delay: 65 },
    { box: [1.5, 10.75, 4.5, 2.5], action: 'nudge-left', delay: 100 },
    { box: [18, 10.75, 4.5, 2.5], action: 'nudge-right', delay: 100 },
    { box: [3.875, 15.75, 4.125, 4.375], action: 'spark', delay: 135 },
    { box: [16, 15.875, 4.125, 4.25], action: 'spark', delay: 135 },
    { box: [10.75, 18, 2.5, 4.5], action: 'nudge-down', delay: 170 },
  ],
  'cloud-rain': [
    { box: [6, 17.375, 3.5, 4.625], action: 'nudge-down' },
    { box: [10, 17.375, 3.5, 4.625], action: 'nudge-down', delay: 75 },
    { box: [14, 17.375, 3.5, 4.625], action: 'nudge-down', delay: 150 },
  ],
  'cloud-snow': [
    { box: [6.5, 18, 3.5, 3.625], action: 'nudge-down', delay: 50 },
    { box: [10.5, 18.5, 3.5, 3.375], action: 'nudge-down' },
    { box: [14.5, 18, 3.5, 3.625], action: 'nudge-down', delay: 100 },
  ],
  'bell-clock': [{ box: [5.875, 17.125, 5.625, 3.625], action: 'swing', origin: [8.6875, 17.5] }],
  sunrise: [{ box: [7.75, 2.75, 8.5, 8.5], action: 'nudge-up' }],
  sunset: [{ box: [7.75, 2.75, 8.5, 8.5], action: 'nudge-down' }],
  // Data and measurement
  'bar-chart': [
    { box: [4.25, 12.25, 4.5, 9], action: 'meter' },
    { box: [9.75, 3.25, 4.5, 18], action: 'meter', delay: 55 },
    { box: [15.25, 8.25, 4.5, 13], action: 'meter', delay: 110 },
  ],
  'bar-chart-2': [
    { box: [7, 10.75, 4, 6.5], action: 'meter' },
    { box: [11.5, 6.25, 4, 11], action: 'meter', delay: 55 },
    { box: [16, 9.25, 4, 8], action: 'meter', delay: 110 },
  ],
  'bar-chart-horizontal': [
    { box: [6.5, 5.5, 12.25, 4], action: 'draw' },
    { box: [6.5, 9.75, 8.75, 4], action: 'draw', delay: 65 },
    { box: [6.5, 14, 5.75, 4], action: 'draw', delay: 130 },
  ],
  'line-chart': [{ box: [6, 5.5, 15, 10.875], action: 'draw' }],
  'area-chart': [{ box: [6.5, 5.75, 14, 11.5], action: 'draw' }],
  'pie-chart': [{ box: [12.25, 1.5, 10.25, 10.25], action: 'nudge-up' }],
  gauge: [{ box: [9, 9.125, 7.875, 7.875], action: 'swing', origin: [12, 14] }],
  'scatter-chart': [{ box: [5.875, 6.375, 14.75, 11.25], action: 'beat', origin: [10.25, 11.5] }],
  candlestick: [
    { box: [4.25, 2.25, 6.5, 19.5], action: 'nudge-up' },
    { box: [13.25, 3.75, 6.5, 17], action: 'nudge-down', delay: 80 },
  ],
} as const
