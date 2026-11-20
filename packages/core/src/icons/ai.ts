import * as M from '../motifs.ts'
import { arc, circle, fourPointStar, line, poly, rect, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const SPARKLE_MAIN = fourPointStar(12, 12, 8.75)
const SPARKLE_BIG = fourPointStar(10, 12.5, 6.75)
const SPARKLE_SMALL = fourPointStar(18.25, 6.25, 3.5)
const CONSTELLATION = [
  fourPointStar(8.5, 10.25, 5.5),
  fourPointStar(16.75, 16.75, 4.25),
  fourPointStar(17.5, 5.75, 3.25),
]

const ELECTRON_ORBITS = [
  'M5.28 5.28A9.5 4.15 45 1 1 18.72 18.72A9.5 4.15 45 1 1 5.28 5.28Z',
  'M18.72 5.28A9.5 4.15 135 1 1 5.28 18.72A9.5 4.15 135 1 1 18.72 5.28Z',
]

const RADAR_SWEEP = line(12, 12, 16.5, 7.5)
const RADAR_RING = arc(12, 12, 5.25, 72, 275)
const ORBIT_TRACK = [arc(12, 12, 8.25, -14, 104), arc(12, 12, 8.25, 166, 284)]
const PROMPT_FRAME = rect(2.5, 4.5, 19, 15, 2.5)
const PROMPT_CHEVRON = poly([[6.25, 9.25], [8.75, 12], [6.25, 14.75]])
const TELESCOPE_BODY = roundedPoly([
  [4.193, 13.369], [6.991, 11.62], [6.567, 10.941], [15.923, 4.211],
  [19.102, 9.3], [8.952, 14.758], [8.528, 14.079], [5.73, 15.828],
], 0.32, true)
const TELESCOPE_LEGS = poly([[8.686, 20.5], [12.836, 12.669], [16.986, 20.5]])
const MICROSCOPE_OBJECTIVE = roundedPoly([[10.25, 3.5], [14.5, 5.02], [12, 12], [7.75, 10.48]], 0.5, true)
const MICROSCOPE_STAND = [
  'M13.22 8.6C17.35 8.6 19.5 11.55 19.5 14.75C19.5 17.5 17.65 19.8 15.5 20.5',
  poly([[6.5, 15.25], [12.5, 15.25], [12.5, 20.5]]),
  line(4.75, 20.5, 19.25, 20.5),
]

export const aiIcons: IconDef[] = [
  {
    name: 'sparkles',
    category: 'ai',
    tags: ['ai', 'magic', 'generate', 'assistant', 'llm'],
    outline: { strokes: [SPARKLE_BIG, SPARKLE_SMALL] },
    filled: { solids: [SPARKLE_BIG, SPARKLE_SMALL] },
  },
  {
    name: 'sparkle',
    category: 'ai',
    tags: ['ai', 'star', 'shine', 'magic', 'gemini'],
    outline: { strokes: [SPARKLE_MAIN] },
    filled: { solids: [SPARKLE_MAIN] },
  },
  {
    name: 'wand',
    category: 'ai',
    tags: ['magic', 'autofill', 'generate', 'enhance'],
    outline: {
      strokes: [
        line(4.25, 19.75, 15.25, 8.75),
        line(15.5, 3, 15.5, 5.5),
        line(18.5, 8.5, 21, 8.5),
        line(18.5, 5.5, 20.25, 3.75),
        line(9.25, 3.75, 9.25, 6),
        line(8.12, 4.88, 10.38, 4.88),
      ],
    },
    filled: {
      solids: [{ d: 'M3.5 19L14.5 8L16 9.5L5 20.5Z', expand: false }],
      strokes: [
        line(15.5, 3, 15.5, 5.5),
        line(18.5, 8.5, 21, 8.5),
        line(18.5, 5.5, 20.25, 3.75),
        { d: line(9.25, 3.75, 9.25, 6), widthScale: 0.85 },
        { d: line(8.12, 4.88, 10.38, 4.88), widthScale: 0.85 },
      ],
    },
  },
  {
    name: 'bot',
    category: 'ai',
    tags: ['agent', 'robot', 'assistant', 'automation', 'ai'],
    outline: {
      strokes: [
        rect(4.25, 7.5, 15.5, 12.25, 3),
        line(12, 4, 12, 7.5),
        line(2.5, 13.5, 4.25, 13.5),
        line(19.75, 13.5, 21.5, 13.5),
        line(9.5, 16.25, 14.5, 16.25),
      ],
      dots: [{ cx: 9.25, cy: 12.5, scale: 1.1 }, { cx: 14.75, cy: 12.5, scale: 1.1 }, { cx: 12, cy: 3.5, scale: 1 }],
    },
    filled: {
      solids: [rect(4.25, 7.5, 15.5, 12.25, 3)],
      cutoutDots: [{ cx: 9.25, cy: 12.5, scale: 1.25 }, { cx: 14.75, cy: 12.5, scale: 1.25 }],
      cutoutStrokes: [line(9.5, 16.25, 14.5, 16.25)],
      strokes: [line(12, 4.25, 12, 7.5), line(2.5, 13.5, 4.25, 13.5), line(19.75, 13.5, 21.5, 13.5)],
      dots: [{ cx: 12, cy: 3.75, scale: 1.25 }],
    },
  },
  {
    name: 'brain',
    category: 'ai',
    tags: ['intelligence', 'thinking', 'memory', 'neural', 'model'],
    outline: {
      strokes: [
        line(12, 5, 12, 19.25),
        'M12 6.25A3.25 3.25 0 0 0 6.5 8.5A3 3 0 0 0 4.5 12.75A3.25 3.25 0 0 0 6.75 18.25A3 3 0 0 0 12 18.75',
        'M12 6.25A3.25 3.25 0 0 1 17.5 8.5A3 3 0 0 1 19.5 12.75A3.25 3.25 0 0 1 17.25 18.25A3 3 0 0 1 12 18.75',
        'M7.5 11.25C8.5 11.25 9.5 11.75 9.75 12.75',
        'M16.5 11.25C15.5 11.25 14.5 11.75 14.25 12.75',
      ],
    },
    filled: {
      solids: [
        'M12 6.25A3.25 3.25 0 0 0 6.5 8.5A3 3 0 0 0 4.5 12.75A3.25 3.25 0 0 0 6.75 18.25A3 3 0 0 0 12 18.75A3 3 0 0 0 17.25 18.25A3.25 3.25 0 0 0 19.5 12.75A3 3 0 0 0 17.5 8.5A3.25 3.25 0 0 0 12 6.25Z',
      ],
      cutoutStrokes: [
        line(12, 5.25, 12, 19.5),
        'M7.5 11.25C8.5 11.25 9.5 11.75 9.75 12.75',
        'M16.5 11.25C15.5 11.25 14.5 11.75 14.25 12.75',
      ],
    },
  },
  {
    name: 'cpu-ai',
    category: 'ai',
    tags: ['npu', 'chip', 'inference', 'gpu', 'hardware'],
    outline: {
      strokes: [
        rect(6, 6, 12, 12, 2.25),
        fourPointStar(12, 12, 3.25),
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
      cutoutFills: [fourPointStar(12, 12, 4)],
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
    name: 'stars',
    category: 'ai',
    tags: ['twinkle', 'magic', 'ai', 'constellation'],
    outline: {
      strokes: CONSTELLATION,
    },
    filled: {
      solids: CONSTELLATION,
    },
  },
  {
    name: 'workflow',
    category: 'ai',
    tags: ['pipeline', 'automation', 'flow', 'agent', 'graph'],
    outline: {
      strokes: [
        rect(3.5, 3.75, 6.5, 6.5, 1.75),
        rect(14, 13.75, 6.5, 6.5, 1.75),
        'M10 7H14.75A2.5 2.5 0 0 1 17.25 9.5V13.75',
        'M6.75 10.25V14.5A2.5 2.5 0 0 0 9.25 17H14',
      ],
    },
    filled: {
      solids: [rect(3.5, 3.75, 6.5, 6.5, 1.75), rect(14, 13.75, 6.5, 6.5, 1.75)],
      strokes: ['M10 7H14.75A2.5 2.5 0 0 1 17.25 9.5V13.75', 'M6.75 10.25V14.5A2.5 2.5 0 0 0 9.25 17H14'],
    },
  },
  {
    name: 'nodes',
    category: 'ai',
    tags: ['graph', 'network', 'knowledge', 'embeddings'],
    outline: {
      strokes: [
        circle(12, 5.5, 2.25),
        circle(5.5, 17.5, 2.25),
        circle(18.5, 17.5, 2.25),
        line(10.93, 7.48, 6.57, 15.52),
        line(13.07, 7.48, 17.43, 15.52),
        line(7.75, 17.5, 16.25, 17.5),
      ],
    },
    filled: {
      solids: [circle(12, 5.5, 2.25), circle(5.5, 17.5, 2.25), circle(18.5, 17.5, 2.25)],
      strokes: [line(10.93, 7.48, 6.57, 15.52), line(13.07, 7.48, 17.43, 15.52), line(7.75, 17.5, 16.25, 17.5)],
    },
  },
  {
    name: 'circuit',
    category: 'ai',
    tags: ['pcb', 'electronics', 'hardware', 'trace'],
    outline: {
      strokes: [
        M.SQUARE_FRAME,
        circle(9.25, 9.25, 1.5),
        circle(14.75, 14.75, 1.5),
        'M10.75 9.25H14.75V13.25',
        line(9.25, 10.75, 9.25, 20),
      ],
    },
    filled: {
      solids: [M.SQUARE_FRAME],
      cutoutFills: [circle(9.25, 9.25, 1.75), circle(14.75, 14.75, 1.75)],
      cutoutStrokes: ['M10.75 9.25H14.75V13.25', line(9.25, 10.75, 9.25, 20.5)],
    },
  },
  {
    name: 'prompt',
    category: 'ai',
    tags: ['input', 'command', 'ask', 'llm', 'ai'],
    outline: {
      strokes: [PROMPT_FRAME, PROMPT_CHEVRON, fourPointStar(15.25, 12, 3.2)],
    },
    filled: {
      solids: [PROMPT_FRAME],
      cutoutStrokes: [PROMPT_CHEVRON],
      cutoutFills: [fourPointStar(15.25, 12, 3.6)],
    },
  },
  {
    name: 'chat-ai',
    category: 'ai',
    tags: ['copilot', 'assistant', 'conversation', 'llm'],
    outline: { strokes: [M.MESSAGE_CIRCLE_BODY, fourPointStar(12, 12, 3.75)] },
    filled: { solids: [M.MESSAGE_CIRCLE_BODY], cutoutFills: [fourPointStar(12, 12, 4.35)] },
  },
  {
    name: 'image-ai',
    category: 'ai',
    tags: ['generate-image', 'diffusion', 'art', 'visual'],
    outline: {
      strokes: [
        'M12.5 4H6.5A2.5 2.5 0 0 0 4 6.5V17.5A2.5 2.5 0 0 0 6.5 20H17.5A2.5 2.5 0 0 0 20 17.5V11.5',
        poly([[4.5, 17], [9, 12.5], [12.75, 16], [15.5, 13.5], [19.5, 17.5]]),
        fourPointStar(18, 6, 3),
      ],
    },
    filled: {
      solids: [M.SQUARE_FRAME],
      cutoutFills: [circle(18, 6, 4.75)],
      cutoutStrokes: [poly([[4.5, 17], [9, 12.5], [12.75, 16], [15.5, 13.5], [19.5, 17.5]])],
      topSolids: [fourPointStar(18, 6, 3)],
    },
  },
  {
    name: 'code-ai',
    category: 'ai',
    tags: ['copilot', 'coding-agent', 'autocomplete', 'generate'],
    outline: {
      strokes: [
        poly([[7.25, 8.25], [3.5, 12], [7.25, 15.75]]),
        poly([[16.75, 8.25], [20.5, 12], [16.75, 15.75]]),
        fourPointStar(12, 12, 3.25),
      ],
    },
    filled: {
      solids: [fourPointStar(12, 12, 3.5)],
      strokes: [poly([[7.25, 8.25], [3.5, 12], [7.25, 15.75]]), poly([[16.75, 8.25], [20.5, 12], [16.75, 15.75]])],
    },
  },
  {
    name: 'radar',
    category: 'ai',
    tags: ['scan', 'detect', 'monitor', 'telemetry'],
    outline: {
      strokes: [M.CIRCLE_FRAME, RADAR_RING, RADAR_SWEEP],
      dots: [{ cx: 15.25, cy: 14.75, scale: 1.1 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: [RADAR_RING, RADAR_SWEEP],
      cutoutDots: [{ cx: 15.25, cy: 14.75, scale: 1.2 }],
    },
  },
  {
    name: 'atom',
    category: 'ai',
    tags: ['science', 'physics', 'react', 'quantum', 'nucleus'],
    outline: { strokes: ELECTRON_ORBITS, dots: [{ cx: 12, cy: 12, scale: 1.3 }] },
    filled: { strokes: ELECTRON_ORBITS.map((d) => ({ d, widthScale: 1.1 })), solids: [circle(12, 12, 1.15)] },
  },
  {
    name: 'orbit',
    category: 'ai',
    tags: ['planet', 'space', 'ecosystem', 'hub'],
    outline: {
      strokes: [
        circle(12, 12, 3),
        circle(17.83, 6.17, 1.75),
        circle(6.17, 17.83, 1.75),
        ...ORBIT_TRACK,
      ],
    },
    filled: {
      solids: [circle(12, 12, 3.25), circle(17.83, 6.17, 1.75), circle(6.17, 17.83, 1.75)],
      strokes: ORBIT_TRACK,
    },
  },
  {
    name: 'telescope',
    category: 'ai',
    tags: ['explore', 'discover', 'observability', 'search'],
    outline: { strokes: [TELESCOPE_BODY, TELESCOPE_LEGS] },
    filled: { solids: [TELESCOPE_BODY], strokes: [TELESCOPE_LEGS] },
  },
  {
    name: 'flask',
    category: 'ai',
    tags: ['experiment', 'lab', 'beta', 'research', 'eval'],
    outline: {
      strokes: [
        line(8.75, 3.5, 15.25, 3.5),
        'M10 3.5V9.25L4.85 17.85A2 2 0 0 0 6.56 20.75H17.44A2 2 0 0 0 19.15 17.85L14 9.25V3.5',
        line(6.75, 15, 17.25, 15),
      ],
    },
    filled: {
      solids: ['M10 3.5H14V9.25L19.15 17.85A2 2 0 0 1 17.44 20.75H6.56A2 2 0 0 1 4.85 17.85L10 9.25V3.5Z'],
      cutoutFills: ['M10.75 5.25H13.25V9.6L16.25 14.5H7.75L10.75 9.6V5.25Z'],
      strokes: [line(8.75, 3.5, 15.25, 3.5)],
    },
  },
  {
    name: 'microscope',
    category: 'ai',
    tags: ['inspect', 'research', 'science', 'analysis'],
    outline: { strokes: [MICROSCOPE_OBJECTIVE, ...MICROSCOPE_STAND] },
    filled: { solids: [MICROSCOPE_OBJECTIVE], strokes: MICROSCOPE_STAND },
  },
]
