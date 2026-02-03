import type { Edge, Node } from "./types"

export function generateRingEdges(nodes: Node[]): Edge[] {
  if (nodes.length < 2) return []

  const edges: Edge[] = []
  for (let i = 0; i < nodes.length; i++) {
    const from = nodes[i].id
    const to = nodes[(i + 1) % nodes.length].id
    edges.push({ from, to })
  }
  return edges
}
