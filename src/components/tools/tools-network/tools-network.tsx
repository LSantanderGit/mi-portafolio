"use client"

import {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import type { Tool, Node, Edge } from "./types"
import { layoutRandomNonOverlapping } from "./layout"
import { generateRingEdges } from "./edges"

import ToolNode from "./tool-node"
import EdgesCanvas from "./edges-canvas"
import GlassCard from "@/components/ui/glass-card"

type Props = {
  tools: Tool[]
  height?: number
}

export default function ToolsNetwork({ tools, height = 420 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  /** refs reales de cada nodo */
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map())

  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [width, setWidth] = useState(900)

  /** centros reales (px) relativos al contenedor */
  const [centers, setCenters] = useState<
    Record<string, { x: number; y: number }>
  >({})

  /* medir ancho real del contenedor */
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const ro = new ResizeObserver((entries) => {
      const rect = entries[0]?.contentRect
      if (rect?.width) setWidth(rect.width)
    })

    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const seedRef = useRef(Date.now())

  /* layout lógico (solo para posicionar nodos) */
const nodes: Node[] = useMemo(() => {
  return layoutRandomNonOverlapping(tools, {
    width,
    height,
    nodeSize: 56,
    padding: 56,        // más lejos del borde
    minDistance: 112,   // evita overlap incluso con scale
    spread: 0.92,       // empuja bordes
    forceExtremes: 2,
    extremesInset: 18,
    seed: seedRef.current,
  })
}, [tools, width, height])

  /* edges lógicos (ring) */
  const edges: Edge[] = useMemo(() => {
    return generateRingEdges(nodes)
  }, [nodes])

  /* medir posiciones reales renderizadas */
  useLayoutEffect(() => {
    const container = containerRef.current
    if (!container) return

    const containerRect = container.getBoundingClientRect()
    const next: Record<string, { x: number; y: number }> = {}

    nodes.forEach((n) => {
      const el = nodeRefs.current.get(n.id)
      if (!el) return

      const r = el.getBoundingClientRect()

      next[n.id] = {
        x: r.left - containerRect.left + r.width / 2,
        y: r.top - containerRect.top + r.height / 2,
      }
    })

    setCenters(next)
  }, [nodes, width, height])

  /* helpers visuales */
  const isNodeConnected = (id: string) =>
    !hoveredNode || hoveredNode === id

  return (
    <GlassCard className="relative overflow-hidden p-6">
      {/* Header */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Software</h3>
        <p className="text-sm text-muted-foreground">
          Hover sobre un nodo para resaltarlo.
        </p>
      </div>

      {/* MAP */}
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl border border-border bg-background/40"
        style={{ height }}
      >
        {/* fondo grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        </div>

        {/* EDGES (canvas) */}
        <EdgesCanvas
          edges={edges}
          centers={centers}
          width={width}
          height={height}
          hoveredNode={hoveredNode}
          className="pointer-events-none absolute inset-0"
        />

        {/* NODES */}
        {nodes.map((node) => {
          const isHovered = hoveredNode === node.id
          const isConnected = isNodeConnected(node.id)
          const dimmed = Boolean(hoveredNode && !isConnected)

          return (
            <ToolNode
              key={node.id}
              ref={(el) => {
                if (el) nodeRefs.current.set(node.id, el)
              }}
              node={node}
              containerHeight={height}
              isHovered={isHovered}
              isConnected={isConnected}
              dimmed={dimmed}
              onHover={setHoveredNode}
            />
          )
        })}
      </div>
    </GlassCard>
  )
}
