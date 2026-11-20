/** Format coordinate cleanly to 2 decimal places without trailing zeros */
export function n(v: number): string {
  const rounded = Math.round(v * 100) / 100
  return Object.is(rounded, -0) ? '0' : String(rounded)
}

/** Crisp rounded rectangle path */
export function rect(x: number, y: number, w: number, h: number, r = 0): string {
  const cr = Math.min(r, w / 2, h / 2)
  if (cr <= 0.01) {
    return `M${n(x)} ${n(y)}H${n(x + w)}V${n(y + h)}H${n(x)}Z`
  }
  const x2 = x + w
  const y2 = y + h
  return [
    `M${n(x + cr)} ${n(y)}`,
    `H${n(x2 - cr)}`,
    `A${n(cr)} ${n(cr)} 0 0 1 ${n(x2)} ${n(y + cr)}`,
    `V${n(y2 - cr)}`,
    `A${n(cr)} ${n(cr)} 0 0 1 ${n(x2 - cr)} ${n(y2)}`,
    `H${n(x + cr)}`,
    `A${n(cr)} ${n(cr)} 0 0 1 ${n(x)} ${n(y2 - cr)}`,
    `V${n(y + cr)}`,
    `A${n(cr)} ${n(cr)} 0 0 1 ${n(x + cr)} ${n(y)}`,
    'Z',
  ].join('')
}

/** Rectangle with independent corner radii [tl, tr, br, bl] */
export function rectCorners(
  x: number,
  y: number,
  w: number,
  h: number,
  [tl, tr, br, bl]: [number, number, number, number],
): string {
  const x2 = x + w
  const y2 = y + h
  const parts: string[] = [`M${n(x + tl)} ${n(y)}`, `H${n(x2 - tr)}`]
  if (tr > 0) parts.push(`A${n(tr)} ${n(tr)} 0 0 1 ${n(x2)} ${n(y + tr)}`)
  parts.push(`V${n(y2 - br)}`)
  if (br > 0) parts.push(`A${n(br)} ${n(br)} 0 0 1 ${n(x2 - br)} ${n(y2)}`)
  parts.push(`H${n(x + bl)}`)
  if (bl > 0) parts.push(`A${n(bl)} ${n(bl)} 0 0 1 ${n(x)} ${n(y2 - bl)}`)
  parts.push(`V${n(y + tl)}`)
  if (tl > 0) parts.push(`A${n(tl)} ${n(tl)} 0 0 1 ${n(x + tl)} ${n(y)}`)
  parts.push('Z')
  return parts.join('')
}

/** Full stadium / pill rectangle */
export function pill(x: number, y: number, w: number, h: number): string {
  return rect(x, y, w, h, Math.min(w, h) / 2)
}

/** Exact circle path using 4 smooth cubic Bézier segments (max error < 0.001px, ultra-compact in PathKit) */
export function circle(cx: number, cy: number, r: number): string {
  return ellipse(cx, cy, r, r)
}

/** Exact ellipse path using 4 smooth cubic Bézier segments */
export function ellipse(cx: number, cy: number, rx: number, ry: number): string {
  const kx = rx * 0.55228475
  const ky = ry * 0.55228475
  return [
    `M${n(cx)} ${n(cy - ry)}`,
    `C${n(cx + kx)} ${n(cy - ry)} ${n(cx + rx)} ${n(cy - ky)} ${n(cx + rx)} ${n(cy)}`,
    `C${n(cx + rx)} ${n(cy + ky)} ${n(cx + kx)} ${n(cy + ry)} ${n(cx)} ${n(cy + ry)}`,
    `C${n(cx - kx)} ${n(cy + ry)} ${n(cx - rx)} ${n(cy + ky)} ${n(cx - rx)} ${n(cy)}`,
    `C${n(cx - rx)} ${n(cy - ky)} ${n(cx - kx)} ${n(cy - ry)} ${n(cx)} ${n(cy - ry)}`,
    'Z',
  ].join('')
}

/** Straight line segment */
export function line(x1: number, y1: number, x2: number, y2: number): string {
  return `M${n(x1)} ${n(y1)}L${n(x2)} ${n(y2)}`
}

/** Straight polyline or closed polygon */
export function poly(points: ReadonlyArray<readonly [number, number]>, closed = false): string {
  if (points.length === 0) return ''
  const [first, ...rest] = points
  const cmds = [`M${n(first![0])} ${n(first![1])}`, ...rest.map(([x, y]) => `L${n(x)} ${n(y)}`)]
  if (closed) cmds.push('Z')
  return cmds.join('')
}

/** Smooth rounded-corner polyline or polygon using quadratic corner arcs */
export function roundedPoly(
  points: ReadonlyArray<readonly [number, number]>,
  radius: number,
  closed = false,
): string {
  const len = points.length
  if (len < 2) return ''
  if (radius <= 0.01) return poly(points, closed)

  const cmds: string[] = []

  for (let i = 0; i < len; i++) {
    const curr = points[i]!
    const isCorner = closed || (i > 0 && i < len - 1)

    if (!isCorner) {
      cmds.push(i === 0 ? `M${n(curr[0])} ${n(curr[1])}` : `L${n(curr[0])} ${n(curr[1])}`)
      continue
    }

    const prev = points[(i - 1 + len) % len]!
    const next = points[(i + 1) % len]!

    const dx1 = prev[0] - curr[0]
    const dy1 = prev[1] - curr[1]
    const len1 = Math.hypot(dx1, dy1)

    const dx2 = next[0] - curr[0]
    const dy2 = next[1] - curr[1]
    const len2 = Math.hypot(dx2, dy2)

    const d = Math.min(radius, len1 * 0.45, len2 * 0.45)
    const p1x = curr[0] + (dx1 / len1) * d
    const p1y = curr[1] + (dy1 / len1) * d
    const p2x = curr[0] + (dx2 / len2) * d
    const p2y = curr[1] + (dy2 / len2) * d

    if (i === 0) {
      cmds.push(`M${n(p1x)} ${n(p1y)}`)
    } else {
      cmds.push(`L${n(p1x)} ${n(p1y)}`)
    }
    cmds.push(`Q${n(curr[0])} ${n(curr[1])} ${n(p2x)} ${n(p2y)}`)
  }

  if (closed) cmds.push('Z')
  return cmds.join('')
}

/** Circular arc from startDeg to endDeg (degrees, 0 = 3 o'clock, clockwise) */
export function arc(
  cx: number,
  cy: number,
  r: number,
  startDeg: number,
  endDeg: number,
): string {
  const s = (startDeg * Math.PI) / 180
  const e = (endDeg * Math.PI) / 180
  const x1 = cx + r * Math.cos(s)
  const y1 = cy + r * Math.sin(s)
  const x2 = cx + r * Math.cos(e)
  const y2 = cy + r * Math.sin(e)
  const sweep = endDeg >= startDeg ? 1 : 0
  const delta = Math.abs(endDeg - startDeg)
  const large = delta > 180 ? 1 : 0
  return `M${n(x1)} ${n(y1)}A${n(r)} ${n(r)} 0 ${large} ${sweep} ${n(x2)} ${n(y2)}`
}

/** Regular polygon centered at (cx, cy) with optional corner rounding */
export function regularPoly(
  cx: number,
  cy: number,
  r: number,
  sides: number,
  rotationDeg = -90,
  cornerRadius = 1.6,
): string {
  const pts: Array<[number, number]> = []
  for (let i = 0; i < sides; i++) {
    const deg = rotationDeg + (360 / sides) * i
    const rad = (deg * Math.PI) / 180
    pts.push([cx + r * Math.cos(rad), cy + r * Math.sin(rad)])
  }
  return roundedPoly(pts, cornerRadius, true)
}

/** Four identical concave quadrants around the axial tips of a sparkle. */
export function fourPointStar(cx: number, cy: number, radius: number): string {
  const inset = radius * 0.16
  return [
    `M${n(cx)} ${n(cy - radius)}`,
    `Q${n(cx + inset)} ${n(cy - inset)} ${n(cx + radius)} ${n(cy)}`,
    `Q${n(cx + inset)} ${n(cy + inset)} ${n(cx)} ${n(cy + radius)}`,
    `Q${n(cx - inset)} ${n(cy + inset)} ${n(cx - radius)} ${n(cy)}`,
    `Q${n(cx - inset)} ${n(cy - inset)} ${n(cx)} ${n(cy - radius)}Z`,
  ].join('')
}

/** Star polygon centered at (cx, cy) with sleek rounded tips */
export function starPoly(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  points = 5,
  cornerRadius = 0.75,
): string {
  const pts: Array<[number, number]> = []
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? outerR : innerR
    const rad = ((-90 + (180 / points) * i) * Math.PI) / 180
    pts.push([cx + r * Math.cos(rad), cy + r * Math.sin(rad)])
  }
  return roundedPoly(pts, cornerRadius, true)
}

/** Convert kebab-case icon name to PascalCase component name (e.g. "arrow-up-right" -> "ArrowUpRightIcon") */
export function toPascalIconName(name: string): string {
  const pascal = name
    .split('-')
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1))
    .join('')
  return `${pascal}Icon`
}

export function gear(
  cx: number,
  cy: number,
  radius: number,
  teeth: number,
  profile = { tip: 0.235, flank: 0.035, root: 0.74, rounding: 0.09 },
): string {
  const { tip, flank, root, rounding } = profile
  const shoulder = tip + flank
  const points: Array<[number, number]> = []
  const pitch = 360 / teeth
  for (let i = 0; i < teeth; i++) {
    const base = i * pitch - 90
    for (const [offset, depth] of [[-tip, 1], [tip, 1], [shoulder, root], [1 - shoulder, root]] as const) {
      const angle = (base + offset * pitch) * Math.PI / 180
      points.push([cx + radius * depth * Math.cos(angle), cy + radius * depth * Math.sin(angle)])
    }
  }
  return roundedPoly(points, radius * rounding, true)
}
