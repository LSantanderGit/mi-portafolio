// src/components/tools/tools-network/layout.ts
import type { Tool, Node } from "./types"

type LayoutOptions = {
  width: number
  height: number

  /** distancia mínima entre centros */
  minDistance?: number

  /** padding visual */
  padding?: number

  /** tamaño del nodo (px) */
  nodeSize?: number

  /** 0..1, empuja hacia bordes (1 = más borde) */
  spread?: number

  maxTries?: number
  seed?: number

  /** forzar N nodos a extremos */
  forceExtremes?: number

  /** inset extra desde borde (además del padding real) */
  extremesInset?: number
}

/** RNG determinístico */
function mulberry32(seed: number) {
  let a = seed >>> 0
  return function () {
    a += 0x6d2b79f5
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function pickUniqueIndices(n: number, k: number, rand: () => number) {
  const picked = new Set<number>()
  const kk = Math.min(k, n)
  while (picked.size < kk) picked.add(Math.floor(rand() * n))
  return Array.from(picked)
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

export function layoutRandomNonOverlapping(
  tools: Tool[],
  opts: LayoutOptions,
): Node[] {
  const {
    width,
    height,
    minDistance = 110,
    padding = 44,
    nodeSize = 56,
    spread = 0.9,
    maxTries = 20000,
    seed = Date.now(),
    forceExtremes = 2,
    extremesInset = 12,
  } = opts

  const rand = mulberry32(seed)

  const nodeRadius = nodeSize / 2
  const safePadding = padding + nodeRadius

  // ✅ límites reales del canvas (usa TODO el rectángulo)
  const safeMinX = safePadding
  const safeMaxX = Math.max(safePadding, width - safePadding)
  const safeMinY = safePadding
  const safeMaxY = Math.max(safePadding, height - safePadding)

  const placed: Node[] = []
  const minDist2 = minDistance * minDistance

  const isValid = (x: number, y: number) => {
    // bounds rectangulares
    if (x < safeMinX || x > safeMaxX) return false
    if (y < safeMinY || y > safeMaxY) return false

    for (const p of placed) {
      const dx = x - p.x
      const dy = y - p.y
      if (dx * dx + dy * dy < minDist2) return false
    }
    return true
  }

  /**
   * sample rectangular con bias a bordes:
   * - elegimos si el punto será "cerca de borde" (prob = spread)
   * - si no, cae uniforme
   */
  const samplePoint = () => {
    const edgeMode = rand() < spread

    if (!edgeMode) {
      return {
        x: safeMinX + rand() * (safeMaxX - safeMinX),
        y: safeMinY + rand() * (safeMaxY - safeMinY),
      }
    }

    // borde-biased: elegimos un borde y “empujamos” cerca
    const edge = Math.floor(rand() * 4) // 0 L,1 R,2 T,3 B
    const inset = extremesInset + rand() * 30 // randomiza un poco el "cerca"
    const xMin = safeMinX
    const xMax = safeMaxX
    const yMin = safeMinY
    const yMax = safeMaxY

    switch (edge) {
      case 0: // left
        return { x: xMin + inset, y: yMin + rand() * (yMax - yMin) }
      case 1: // right
        return { x: xMax - inset, y: yMin + rand() * (yMax - yMin) }
      case 2: // top
        return { x: xMin + rand() * (xMax - xMin), y: yMin + inset }
      default: // bottom
        return { x: xMin + rand() * (xMax - xMin), y: yMax - inset }
    }
  }

  // ✅ 1) Forzar nodos en extremos reales (sin círculo)
  const forcedIndices = pickUniqueIndices(tools.length, forceExtremes, rand)
  const forcedEdges = pickUniqueIndices(4, forceExtremes, rand)

  const extremes = [
    () => ({ x: safeMinX + extremesInset, y: safeMinY + rand() * (safeMaxY - safeMinY) }), // left
    () => ({ x: safeMaxX - extremesInset, y: safeMinY + rand() * (safeMaxY - safeMinY) }), // right
    () => ({ x: safeMinX + rand() * (safeMaxX - safeMinX), y: safeMinY + extremesInset }), // top
    () => ({ x: safeMinX + rand() * (safeMaxX - safeMinX), y: safeMaxY - extremesInset }), // bottom
  ]

  for (let i = 0; i < forcedIndices.length; i++) {
    const tool = tools[forcedIndices[i]]
    const edgeFn = extremes[forcedEdges[i]]

    let ok = false
    for (let t = 0; t < 400 && !ok; t++) {
      const p = edgeFn()
      if (!isValid(p.x, p.y)) continue
      placed.push({ ...tool, x: p.x, y: p.y })
      ok = true
    }
    // si no entra, no lo colocamos acá; lo hará el flujo normal
  }

  // tools restantes
  const placedIds = new Set(placed.map((p) => p.id))
  const remaining = tools.filter((t) => !placedIds.has(t.id))

  // ✅ 2) Colocar resto con sampling + no overlap
  let tries = 0
  for (const tool of remaining) {
    let found = false
    while (tries < maxTries && !found) {
      const p = samplePoint()
      tries++

      if (isValid(p.x, p.y)) {
        placed.push({ ...tool, x: p.x, y: p.y })
        found = true
      }
    }

    // fallback: “grid jitter” (si se complica por densidad)
    if (!found) {
      const cols = Math.max(1, Math.floor((safeMaxX - safeMinX) / minDistance))
      const rows = Math.max(1, Math.floor((safeMaxY - safeMinY) / minDistance))
      const idx = placed.length

      const col = idx % cols
      const row = Math.floor(idx / cols) % rows

      const gx = safeMinX + (col + 0.5) * ((safeMaxX - safeMinX) / cols)
      const gy = safeMinY + (row + 0.5) * ((safeMaxY - safeMinY) / rows)

      // pequeño jitter
      const jx = (rand() - 0.5) * 20
      const jy = (rand() - 0.5) * 20

      placed.push({
        ...tool,
        x: clamp(gx + jx, safeMinX, safeMaxX),
        y: clamp(gy + jy, safeMinY, safeMaxY),
      })
    }
  }

  return placed
}
