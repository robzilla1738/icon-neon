import * as M from '../motifs.ts'
import { circle, ellipse, fourPointStar, line, pill, regularPoly, roundedPoly } from '../primitives.ts'
import type { IconDef } from '../types.ts'

const TRIANGLE_SHAPE = roundedPoly([[12, 3.75], [20.75, 19.25], [3.25, 19.25]], 2, true)
const DIAMOND_SHAPE = roundedPoly([[12, 3], [21, 12], [12, 21], [3, 12]], 1.8, true)
const PENTAGON_SHAPE = regularPoly(12, 12.5, 9.25, 5, -90, 1.6)
const HEXAGON_SHAPE = regularPoly(12, 12, 9.25, 6, -90, 1.5)
const OCTAGON_SHAPE = regularPoly(12, 12, 9.5, 8, -67.5, 1.35)
const SPARKLE_IN_CIRCLE = fourPointStar(12, 12, 4.75)

const SPHERE_LIGHT = 'M6.75 10A5.75 5.75 0 0 1 10 6.75'
const SPHERE_SHADOW = 'M10.75 18.5C14.9 18.5 18.5 14.9 18.5 10.75'

export const shapeIcons: IconDef[] = [
  {
    name: 'circle',
    category: 'shapes',
    tags: ['round', 'dot', 'ring', 'shape', 'geometry'],
    outline: { strokes: [M.CIRCLE_FRAME] },
    filled: { solids: [M.CIRCLE_FRAME] },
  },
  {
    name: 'square',
    category: 'shapes',
    tags: ['box', 'rect', 'checkbox', 'shape', 'geometry'],
    outline: { strokes: [M.SQUARE_FRAME] },
    filled: { solids: [M.SQUARE_FRAME] },
  },
  {
    name: 'triangle',
    category: 'shapes',
    tags: ['delta', 'pyramid', 'vercel', 'shape', 'geometry'],
    outline: { strokes: [TRIANGLE_SHAPE] },
    filled: { solids: [TRIANGLE_SHAPE] },
  },
  {
    name: 'diamond',
    category: 'shapes',
    tags: ['rhombus', 'gem', 'milestone', 'shape', 'geometry'],
    outline: { strokes: [DIAMOND_SHAPE] },
    filled: { solids: [DIAMOND_SHAPE] },
  },
  {
    name: 'pentagon',
    category: 'shapes',
    tags: ['polygon', 'five', 'shape', 'geometry'],
    outline: { strokes: [PENTAGON_SHAPE] },
    filled: { solids: [PENTAGON_SHAPE] },
  },
  {
    name: 'hexagon',
    category: 'shapes',
    tags: ['polygon', 'six', 'node', 'shape', 'geometry'],
    outline: { strokes: [HEXAGON_SHAPE] },
    filled: { solids: [HEXAGON_SHAPE] },
  },
  {
    name: 'octagon',
    category: 'shapes',
    tags: ['polygon', 'eight', 'stop', 'shape', 'geometry'],
    outline: { strokes: [OCTAGON_SHAPE] },
    filled: { solids: [OCTAGON_SHAPE] },
  },
  {
    name: 'pill-shape',
    category: 'shapes',
    tags: ['stadium', 'badge', 'chip', 'tag', 'capsule'],
    outline: { strokes: [pill(3, 6.75, 18, 10.5)] },
    filled: { solids: [pill(3, 6.75, 18, 10.5)] },
  },
  {
    name: 'cone',
    category: 'shapes',
    tags: ['3d', 'geometry', 'solid', 'mesh'],
    outline: {
      strokes: ['M12 3.5L19.5 17.5', 'M12 3.5L4.5 17.5', ellipse(12, 17.5, 7.5, 2.75)],
    },
    filled: {
      solids: ['M12 3.5L19.5 17.5C19.5 19.02 16.14 20.25 12 20.25C7.86 20.25 4.5 19.02 4.5 17.5L12 3.5Z'],
      cutoutStrokes: ['M4.8 17.2C6.2 15.8 8.9 15 12 15C15.1 15 17.8 15.8 19.2 17.2'],
    },
  },
  {
    name: 'cylinder',
    category: 'shapes',
    tags: ['3d', 'tube', 'drum', 'geometry'],
    outline: {
      strokes: [
        ellipse(12, 6, 7.5, 2.75),
        'M4.5 6V18C4.5 19.52 7.86 20.75 12 20.75C16.14 20.75 19.5 19.52 19.5 18V6',
      ],
    },
    filled: {
      solids: ['M4.5 6C4.5 4.48 7.86 3.25 12 3.25C16.14 3.25 19.5 4.48 19.5 6V18C19.5 19.52 16.14 20.75 12 20.75C7.86 20.75 4.5 19.52 4.5 18V6Z'],
      cutoutStrokes: ['M4.5 6.5C4.5 8.02 7.86 9.25 12 9.25C16.14 9.25 19.5 8.02 19.5 6.5'],
    },
  },
  {
    name: 'cube',
    category: 'shapes',
    tags: ['3d', 'blender', 'model', 'mesh', 'object'],
    outline: {
      strokes: [
        'M12 3L19.75 7.25V16.75L12 21L4.25 16.75V7.25L12 3Z',
        line(12, 11.5, 12, 21),
        line(4.25, 7.25, 12, 11.5),
        line(19.75, 7.25, 12, 11.5),
      ],
    },
    filled: {
      solids: ['M12 3L19.75 7.25V16.75L12 21L4.25 16.75V7.25L12 3Z'],
      cutoutStrokes: [line(12, 11.5, 12, 21.5), line(4, 7.11, 12, 11.5), line(20, 7.11, 12, 11.5)],
    },
  },
  {
    name: 'sphere',
    category: 'shapes',
    tags: ['3d', 'orb', 'ball', 'mesh', 'geometry'],
    outline: { strokes: [M.CIRCLE_FRAME, SPHERE_LIGHT, SPHERE_SHADOW] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutStrokes: [SPHERE_LIGHT, SPHERE_SHADOW] },
  },

  // Math & symbols
  {
    name: 'divide',
    category: 'shapes',
    tags: ['math', 'split', 'operator', 'ratio'],
    outline: {
      strokes: [line(5, 12, 19, 12)],
      dots: [{ cx: 12, cy: 6.5, scale: 1.4 }, { cx: 12, cy: 17.5, scale: 1.4 }],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'infinity',
    category: 'shapes',
    tags: ['loop', 'unlimited', 'forever', 'eternal', 'math'],
    outline: {
      strokes: [
        'M12 12C10.5 9.25 9.25 7.75 7.25 7.75A4.25 4.25 0 1 0 7.25 16.25C9.25 16.25 10.5 14.75 12 12C13.5 9.25 14.75 7.75 16.75 7.75A4.25 4.25 0 1 1 16.75 16.25C14.75 16.25 13.5 14.75 12 12Z',
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'pi',
    category: 'shapes',
    tags: ['math', 'constant', 'formula', 'geometry'],
    outline: {
      strokes: [line(4, 6, 20, 6), line(8.5, 6, 8.5, 18), 'M15.5 6V16A2 2 0 0 0 17.5 18H19'],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'asterisk',
    category: 'shapes',
    tags: ['wildcard', 'required', 'star', 'multiply', 'footnote'],
    outline: {
      strokes: [
        line(12, 4, 12, 20),
        line(5.07, 8, 18.93, 16),
        line(18.93, 8, 5.07, 16),
      ],
    },
    filled: { boostedOutline: true },
  },
  {
    name: 'percent-circle',
    category: 'shapes',
    tags: ['discount', 'promo', 'deal', 'rate', 'badge'],
    outline: {
      strokes: [M.CIRCLE_FRAME, line(15.25, 8.75, 8.75, 15.25)],
      dots: [{ cx: 9.25, cy: 9.25, scale: 1.05 }, { cx: 14.75, cy: 14.75, scale: 1.05 }],
    },
    filled: {
      solids: [M.CIRCLE_FRAME],
      cutoutStrokes: [line(15.25, 8.75, 8.75, 15.25)],
      cutoutDots: [{ cx: 9.25, cy: 9.25, scale: 1.2 }, { cx: 14.75, cy: 14.75, scale: 1.2 }],
    },
  },
  {
    name: 'sparkles-circle',
    category: 'shapes',
    tags: ['ai-badge', 'featured', 'magic', 'highlight'],
    outline: { strokes: [M.CIRCLE_FRAME, SPARKLE_IN_CIRCLE] },
    filled: { solids: [M.CIRCLE_FRAME], cutoutFills: [SPARKLE_IN_CIRCLE] },
  },
]
