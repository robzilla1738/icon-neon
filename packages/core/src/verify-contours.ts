import { Resvg } from '@resvg/resvg-js'

const side = 192
const minAlpha = 160
const maxArtifactArea = 32

export function tinyContours(svg: string): { specks: number; pinholes: number } {
  const { pixels } = new Resvg(svg, {
    fitTo: { mode: 'width', value: side },
    font: { loadSystemFonts: false },
  }).render()
  const visited = new Uint8Array(side * side)
  const queue = new Int32Array(visited.length)
  let specks = 0
  let pinholes = 0

  for (let seed = 0; seed < visited.length; seed++) {
    if (visited[seed]) continue
    const ink = pixels[4 * seed + 3]! >= minAlpha
    visited[seed] = 1
    queue[0] = seed
    let length = 1

    for (let index = 0; index < length; index++) {
      const pixel = queue[index]!
      const x = pixel % side
      const y = Math.floor(pixel / side)

      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (!dx && !dy) continue
          if (x + dx < 0 || x + dx >= side || y + dy < 0 || y + dy >= side) continue
          const neighbor = pixel + dx + side * dy
          if (visited[neighbor] || (pixels[4 * neighbor + 3]! >= minAlpha) !== ink) continue
          visited[neighbor] = 1
          queue[length++] = neighbor
        }
      }
    }

    // Half a square unit on the source grid is a speck at 24px.
    if (length > maxArtifactArea) continue
    if (ink) specks++
    else pinholes++
  }
  return { specks, pinholes }
}
