import * as M from '../motifs.ts'
import { arc, circle, line, poly, rect, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

function speakerCone(left: number, flare: number): string {
  const inset = left + 1
  const neck = left + 4.5
  return `M${inset} 9.5H${neck}L${neck + flare} 5.25V18.75L${neck} 14.5H${inset}A1 1 0 0 1 ${left} 13.5V10.5A1 1 0 0 1 ${inset} 9.5Z`
}

const VOLUME_CONE = speakerCone(2.75, 5)
const VOLUME_CONE_ONE = speakerCone(4.25, 5)
const VOLUME_CONE_CENTERED = speakerCone(6.5, 5.5)
const VOLUME_WAVE_ONE = arc(14.5, 12, 3.75, -45, 45)
const MIC_CAPSULE = rect(8.75, 3, 6.5, 11.25, 3.25)
const MIC_CRADLE = 'M5.5 11.5A6.5 6.5 0 0 0 18.5 11.5'
const CAMERA_BODY =
  'M5.25 7H7.25L8.65 4.75A1.25 1.25 0 0 1 9.72 4.15H14.28A1.25 1.25 0 0 1 15.35 4.75L16.75 7H18.75A2.25 2.25 0 0 1 21 9.25V17.25A2.25 2.25 0 0 1 18.75 19.5H5.25A2.25 2.25 0 0 1 3 17.25V9.25A2.25 2.25 0 0 1 5.25 7Z'
const VIDEO_BODY = rect(3, 6.25, 12.25, 11.5, 2.25)
const VIDEO_LENS = 'M15.25 10.25L20.1 7.35C20.55 7.08 21 7.4 21 7.92V16.08C21 16.6 20.55 16.92 20.1 16.65L15.25 13.75Z'

const REWIND = [
  roundedPoly([[10.25, 6], [3, 12], [10.25, 18]], 1, true),
  roundedPoly([[21, 6], [13.75, 12], [21, 18]], 1, true),
]

const FAST_FORWARD = [
  roundedPoly([[3, 6], [10.25, 12], [3, 18]], 1, true),
  roundedPoly([[13.75, 6], [21, 12], [13.75, 18]], 1, true),
]

function apertureBlades(outerR: number): string[] {
  const innerR = 3.6
  const d = innerR * Math.cos(Math.PI / 6)
  const chordHalf = Math.sqrt(outerR * outerR - d * d)
  const blades: string[] = []
  for (let i = 0; i < 6; i++) {
    const a = (i * Math.PI) / 3
    const vx = 12 + innerR * Math.cos(a)
    const vy = 12 + innerR * Math.sin(a)
    const dir = a + (2 * Math.PI) / 3
    const len = chordHalf + innerR / 2
    blades.push(line(vx, vy, vx + len * Math.cos(dir), vy + len * Math.sin(dir)))
  }
  return blades
}

const APERTURE_BLADES_OUTLINE = apertureBlades(8.85)
const APERTURE_BLADES_FILLED = apertureBlades(9.8)

const RECORD_LIGHT = circle(12, 12, 4.75)

export const mediaIcons: IconDef[] = [
  // Transport controls
  {
    name: 'play',
    category: 'media',
    tags: ['start', 'run', 'video', 'audio', 'resume'],
    outline: { strokes: [M.PLAY_TRIANGLE] },
    filled: { solids: [M.PLAY_TRIANGLE] },
  },
  {
    name: 'play-circle',
    category: 'media',
    tags: ['watch', 'video', 'run', 'tutorial'],
    outline: { strokes: [M.CIRCLE_FRAME, M.PLAY_SMALL] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutFills: [roundedPoly([[9.9, 8.7], [15.9, 12], [9.9, 15.3]], 0.8, true)] },
  },
  {
    name: 'pause',
    category: 'media',
    tags: ['hold', 'suspend', 'media', 'wait'],
    outline: { strokes: [rect(5.5, 4.75, 4.25, 14.5, 1.25), rect(14.25, 4.75, 4.25, 14.5, 1.25)] },
    filled: { solids: [rect(5.5, 4.75, 4.25, 14.5, 1.25), rect(14.25, 4.75, 4.25, 14.5, 1.25)] },
  },
  {
    name: 'pause-circle',
    category: 'media',
    tags: ['hold', 'media', 'suspend'],
    outline: { strokes: [M.CIRCLE_FRAME, line(9.75, 8.75, 9.75, 15.25), line(14.25, 8.75, 14.25, 15.25)] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [line(9.75, 8.75, 9.75, 15.25), line(14.25, 8.75, 14.25, 15.25)] },
  },
  {
    name: 'stop',
    category: 'media',
    tags: ['halt', 'end', 'square', 'media'],
    outline: { strokes: [rect(5.25, 5.25, 13.5, 13.5, 2.25)] },
    filled: { solids: [rect(5.25, 5.25, 13.5, 13.5, 2.25)] },
  },
  {
    name: 'stop-circle',
    category: 'media',
    tags: ['halt', 'end', 'abort', 'media'],
    outline: { strokes: [M.CIRCLE_FRAME, rect(9, 9, 6, 6, 1.2)] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutFills: [rect(8.75, 8.75, 6.5, 6.5, 1.35)] },
  },
  {
    name: 'record',
    category: 'media',
    tags: ['capture', 'live', 'dot', 'rec'],
    outline: { strokes: [M.CIRCLE_FRAME], fills: [RECORD_LIGHT] },
    filled: { solids: [RECORD_LIGHT], strokes: [M.CIRCLE_FRAME] },
  },
  {
    name: 'skip-back',
    category: 'media',
    tags: ['previous', 'track', 'rewind', 'media'],
    outline: { strokes: [line(5.25, 5.5, 5.25, 18.5), roundedPoly([[18.75, 5.75], [9.5, 12], [18.75, 18.25]], 1.2, true)] },
    filled: {
      solids: [roundedPoly([[18.75, 5.75], [9.5, 12], [18.75, 18.25]], 1.2, true)],
      strokes: [line(5.25, 5.5, 5.25, 18.5)],
    },
  },
  {
    name: 'skip-forward',
    category: 'media',
    tags: ['next', 'track', 'media'],
    outline: { strokes: [line(18.75, 5.5, 18.75, 18.5), roundedPoly([[5.25, 5.75], [14.5, 12], [5.25, 18.25]], 1.2, true)] },
    filled: {
      solids: [roundedPoly([[5.25, 5.75], [14.5, 12], [5.25, 18.25]], 1.2, true)],
      strokes: [line(18.75, 5.5, 18.75, 18.5)],
    },
  },
  {
    name: 'rewind',
    category: 'media',
    tags: ['backward', 'seek', 'fast', 'media'],
    outline: { strokes: REWIND },
    filled: { solids: REWIND },
  },
  {
    name: 'fast-forward',
    category: 'media',
    tags: ['forward', 'seek', 'speed', 'media'],
    outline: { strokes: FAST_FORWARD },
    filled: { solids: FAST_FORWARD },
  },
  {
    name: 'step-back',
    category: 'media',
    tags: ['frame-back', 'debug', 'previous'],
    outline: { strokes: [line(6.5, 5.5, 6.5, 18.5), poly([[17.25, 6.25], [11.5, 12], [17.25, 17.75]])] },
    filled: { boostedOutline: true },
  },
  {
    name: 'step-forward',
    category: 'media',
    tags: ['frame-forward', 'debug', 'next'],
    outline: { strokes: [line(17.5, 5.5, 17.5, 18.5), poly([[6.75, 6.25], [12.5, 12], [6.75, 17.75]])] },
    filled: { boostedOutline: true },
  },

  // Audio & voice
  {
    name: 'volume',
    category: 'media',
    tags: ['sound', 'audio', 'speaker', 'low'],
    outline: { strokes: [VOLUME_CONE_CENTERED] },
    filled: { solids: [VOLUME_CONE_CENTERED] },
  },
  {
    name: 'volume-1',
    category: 'media',
    tags: ['sound', 'audio', 'medium', 'speaker'],
    outline: { strokes: [VOLUME_CONE_ONE, VOLUME_WAVE_ONE] },
    filled: { solids: [VOLUME_CONE_ONE], strokes: [VOLUME_WAVE_ONE] },
  },
  {
    name: 'volume-2',
    category: 'media',
    tags: ['sound', 'audio', 'loud', 'speaker'],
    outline: { strokes: [VOLUME_CONE, arc(13, 12, 3.75, -45, 45), arc(13, 12, 7, -45, 45)] },
    filled: { solids: [VOLUME_CONE], strokes: [arc(13, 12, 3.75, -45, 45), arc(13, 12, 7, -45, 45)] },
  },
  {
    name: 'volume-x',
    category: 'media',
    tags: ['mute', 'silent', 'sound-off', 'audio'],
    outline: { strokes: [VOLUME_CONE, line(16.5, 9.75, 21, 14.25), line(21, 9.75, 16.5, 14.25)] },
    filled: { solids: [VOLUME_CONE], strokes: [line(16.5, 9.75, 21, 14.25), line(21, 9.75, 16.5, 14.25)] },
  },
  {
    name: 'mic',
    category: 'media',
    tags: ['microphone', 'voice', 'dictation', 'record', 'audio'],
    outline: { strokes: [MIC_CAPSULE, MIC_CRADLE, line(12, 18, 12, 21), line(8.75, 21, 15.25, 21)] },
    filled: { solids: [MIC_CAPSULE], strokes: [MIC_CRADLE, line(12, 18, 12, 21), line(8.75, 21, 15.25, 21)] },
  },
  {
    name: 'mic-off',
    category: 'media',
    tags: ['mute', 'microphone', 'voice-off', 'silent'],
    outline: { strokes: [MIC_CAPSULE, MIC_CRADLE, line(12, 18, 12, 21), line(8.75, 21, 15.25, 21)] },
    filled: {
      solids: [MIC_CAPSULE],
      strokes: [MIC_CRADLE, line(12, 18, 12, 21), line(8.75, 21, 15.25, 21)],
      slash: M.SLASH_LINE,
    },
  },
  {
    name: 'headphones',
    category: 'media',
    tags: ['audio', 'listen', 'music', 'support', 'headset'],
    outline: {
      strokes: [
        'M3.75 15V12A8.25 8.25 0 0 1 20.25 12V15',
        rect(3.75, 13.25, 4, 6.25, 1.75),
        rect(16.25, 13.25, 4, 6.25, 1.75),
      ],
    },
    filled: {
      solids: [rect(3.75, 13.25, 4, 6.25, 1.75), rect(16.25, 13.25, 4, 6.25, 1.75)],
      strokes: ['M3.75 15V12A8.25 8.25 0 0 1 20.25 12V15'],
    },
  },
  {
    name: 'speaker',
    category: 'media',
    tags: ['audio', 'woofer', 'sound', 'device'],
    outline: {
      strokes: [M.TALL_FRAME, circle(12, 14.5, 3.25)],
      dots: [{ cx: 12, cy: 7.25, scale: 1.05 }, { cx: 12, cy: 14.5, scale: 0.85 }],
    },
    filled: {
      solids: [M.TALL_FRAME],
      cutoutDots: [{ cx: 12, cy: 7.25, scale: 1.2 }],
      cutoutFills: [circle(12, 14.5, 3.5)],
      topSolids: [{ d: circle(12, 14.5, 1.65), expand: false }],
    },
  },
  {
    name: 'music',
    category: 'media',
    tags: ['song', 'note', 'audio', 'melody', 'playlist'],
    outline: {
      strokes: [
        'M9.25 17.5V5.75L19.5 4V15.75',
        line(9.25, 9.75, 19.5, 8),
        circle(6.75, 17.5, 2.5),
        circle(17, 15.75, 2.5),
      ],
    },
    filled: {
      solids: [circle(6.75, 17.5, 2.5), circle(17, 15.75, 2.5), 'M9.25 5.75L19.5 4V7.75L9.25 9.5Z'],
      strokes: [line(9.25, 5.75, 9.25, 17.5), line(19.5, 4, 19.5, 15.75)],
    },
  },
  {
    name: 'disc',
    category: 'media',
    tags: ['vinyl', 'album', 'cd', 'record', 'music'],
    outline: { strokes: [M.CIRCLE_FRAME, circle(12, 12, 2.75), arc(12, 12, 6, -140, -85), arc(12, 12, 6, 40, 95)] },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutFills: [circle(12, 12, 3.25)],
      cutoutStrokes: [arc(12, 12, 6, -140, -85), arc(12, 12, 6, 40, 95)],
    },
  },
  {
    name: 'radio',
    category: 'media',
    tags: ['broadcast', 'live', 'signal', 'stream'],
    outline: {
      strokes: [
        circle(12, 12, 2),
        arc(12, 12, 5.5, -45, 45),
        arc(12, 12, 5.5, 135, 225),
        arc(12, 12, 9, -45, 45),
        arc(12, 12, 9, 135, 225),
      ],
    },
    filled: {
      solids: [circle(12, 12, 2.25)],
      strokes: [
        arc(12, 12, 5.5, -45, 45),
        arc(12, 12, 5.5, 135, 225),
        arc(12, 12, 9, -45, 45),
        arc(12, 12, 9, 135, 225),
      ],
    },
  },
  {
    name: 'podcast',
    category: 'media',
    tags: ['audio', 'episode', 'broadcast', 'stream'],
    outline: {
      strokes: [
        circle(12, 10.6, 2),
        'M9.75 20.5L10.75 16.1H13.25L14.25 20.5',
        arc(12, 11, 5.25, -210, 30),
        arc(12, 11, 8.5, -215, 35),
      ],
    },
    filled: {
      solids: [circle(12, 10.6, 2), 'M9.75 20.5L10.75 16.1H13.25L14.25 20.5Z'],
      strokes: [arc(12, 11, 5.25, -210, 30), arc(12, 11, 8.5, -215, 35)],
    },
  },
  {
    name: 'waveform',
    category: 'media',
    tags: ['audio', 'voice', 'equalizer', 'sound', 'transcribe'],
    outline: {
      strokes: [
        line(3.5, 10, 3.5, 14),
        line(7.75, 6.5, 7.75, 17.5),
        line(12, 3.5, 12, 20.5),
        line(16.25, 7.5, 16.25, 16.5),
        line(20.5, 10, 20.5, 14),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'captions',
    category: 'media',
    tags: ['subtitles', 'cc', 'transcript', 'accessibility'],
    outline: {
      strokes: [
        M.CARD_FRAME,
        line(6.75, 14, 11, 14),
        line(14, 14, 17.25, 14),
        line(6.75, 10, 9, 10),
        line(12, 10, 17.25, 10),
      ],
    },
    filled: {
      solids: [M.CARD_FRAME],
      cutoutStrokes: [
        line(6.75, 14, 11, 14),
        line(14, 14, 17.25, 14),
        line(6.75, 10, 9, 10),
        line(12, 10, 17.25, 10),
      ],
    },
  },

  // Camera, video, image
  {
    name: 'camera',
    category: 'media',
    tags: ['photo', 'snapshot', 'capture', 'picture'],
    outline: { strokes: [CAMERA_BODY, circle(12, 13, 3.25)] },
    filled: {
      solids: [CAMERA_BODY],
      cutoutFills: [circle(12, 13, 3.75)],
      topSolids: [{ d: circle(12, 13, 1.9), expand: false }],
    },
  },
  {
    name: 'camera-off',
    category: 'media',
    tags: ['no-photo', 'disabled', 'privacy'],
    outline: { strokes: [CAMERA_BODY, circle(12, 13, 3.25)] },
    filled: {
      solids: [CAMERA_BODY],
      cutoutFills: [circle(12, 13, 3.75)],
      topSolids: [{ d: circle(12, 13, 1.9), expand: false }],
      slash: M.SLASH_LINE,
    },
  },
  {
    name: 'video',
    category: 'media',
    tags: ['camcorder', 'meeting', 'call', 'film', 'record'],
    outline: { strokes: [VIDEO_BODY, VIDEO_LENS] },
    filled: { solids: [VIDEO_BODY, VIDEO_LENS] },
  },
  {
    name: 'video-off',
    category: 'media',
    tags: ['camera-off', 'meeting', 'disabled'],
    outline: { strokes: [VIDEO_BODY, VIDEO_LENS] },
    filled: { solids: [VIDEO_BODY, VIDEO_LENS], slash: M.SLASH_LINE },
  },
  {
    name: 'image',
    category: 'media',
    tags: ['photo', 'picture', 'gallery', 'thumbnail'],
    outline: {
      strokes: [
        M.SQUARE_FRAME,
        poly([[4.5, 17], [9, 12.25], [12.75, 15.75], [15.5, 13.25], [19.5, 17.25]]),
      ],
      dots: [{ cx: 8.75, cy: 8.75, scale: 1.25 }],
    },
    filled: {
      solids: [M.SQUARE_FRAME],
      cutoutStrokes: [poly([[4.5, 17], [9, 12.25], [12.75, 15.75], [15.5, 13.25], [19.5, 17.25]])],
      cutoutDots: [{ cx: 8.75, cy: 8.75, scale: 1.45 }],
    },
  },
  {
    name: 'images',
    category: 'media',
    tags: ['photos', 'album', 'gallery', 'stack'],
    outline: {
      strokes: [
        rect(6.5, 4, 14, 13, 2),
        poly([[7, 14.25], [10.75, 10.75], [14, 13.75], [16.5, 11.5], [20, 15]]),
        'M16.5 20H5.5A2 2 0 0 1 3.5 18V8',
      ],
      dots: [{ cx: 10.25, cy: 7.75, scale: 1 }],
    },
    filled: {
      solids: [rect(6.5, 4, 14, 13, 2)],
      cutoutStrokes: [poly([[7, 14.25], [10.75, 10.75], [14, 13.75], [16.5, 11.5], [20, 15]])],
      cutoutDots: [{ cx: 10.25, cy: 7.75, scale: 1.15 }],
      strokes: ['M16.5 20H5.5A2 2 0 0 1 3.5 18V8'],
    },
  },
  {
    name: 'film',
    category: 'media',
    tags: ['cinema', 'movie', 'reel', 'video'],
    outline: {
      strokes: [
        M.SQUARE_FRAME,
        line(7.75, 4, 7.75, 20),
        line(16.25, 4, 16.25, 20),
        line(4, 12, 20, 12),
        line(4, 8, 7.75, 8),
        line(4, 16, 7.75, 16),
        line(16.25, 8, 20, 8),
        line(16.25, 16, 20, 16),
      ],
    },
    filled: {
      solids: [M.SQUARE_FRAME],
      cutoutFills: [
        ...[6, 10, 14, 18].flatMap((cy) => [
          rect(5, cy - 1, 2, 2, 0.5),
          rect(17, cy - 1, 2, 2, 0.5),
        ]),
        rect(9.25, 5.75, 5.5, 5, 0.8),
        rect(9.25, 13.25, 5.5, 5, 0.8),
      ],
    },
  },
  {
    name: 'aperture',
    category: 'media',
    tags: ['lens', 'shutter', 'photography', 'iris'],
    outline: {
      strokes: [M.CIRCLE_FRAME, ...APERTURE_BLADES_OUTLINE],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: APERTURE_BLADES_FILLED.map((d) => ({ d, widthScale: 0.85 })),
    },
  },
]
