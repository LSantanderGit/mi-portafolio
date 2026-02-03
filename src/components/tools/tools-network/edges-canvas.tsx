"use client"

import { useEffect, useRef, useState } from "react"
import type { Edge } from "./types"

type Props = {
  edges: Edge[]
  centers: Record<string, { x: number; y: number }>
  width: number
  height: number
  hoveredNode: string | null
  className?: string
}

function isDarkMode() {
  // Tailwind dark mode por clase en <html>
  return document.documentElement.classList.contains("dark")
}

export default function EdgesCanvas({
  edges,
  centers,
  width,
  height,
  hoveredNode,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [dark, setDark] = useState<boolean>(false)

  // Detectar cambios de theme (cuando togglean la clase "dark")
  useEffect(() => {
    setDark(isDarkMode())

    const html = document.documentElement
    const mo = new MutationObserver(() => {
      setDark(isDarkMode())
    })

    mo.observe(html, { attributes: true, attributeFilter: ["class"] })
    return () => mo.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.max(1, window.devicePixelRatio || 1)

    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.clearRect(0, 0, width, height)

    const isEdgeActive = (e: Edge) => {
      if (!hoveredNode) return true
      return e.from === hoveredNode || e.to === hoveredNode
    }

    // 🎨 Paleta por theme (ajustala a gusto)
    const baseStroke = dark
      ? "rgba(255,255,255,0.9)"
      : "rgba(17,24,39,0.7)" // slate-900-ish
    const glowStroke = dark
      ? "rgba(255,255,255,1)"
      : "rgba(17,24,39,0.85)"
    const glowShadow = dark
      ? "rgba(255,255,255,0.75)"
      : "rgba(17,24,39,0.35)"

    // en light, conviene que la línea tenga un poco más de presencia
    const baseActiveAlpha = dark ? 0.35 : 0.28
    const baseInactiveAlpha = dark ? 0.12 : 0.08

    for (const e of edges) {
      const a = centers[e.from]
      const b = centers[e.to]
      if (!a || !b) continue

      const active = isEdgeActive(e)

      // línea base
      ctx.beginPath()
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.strokeStyle = baseStroke
      ctx.lineWidth = active ? 2 : 1
      ctx.globalAlpha = active ? baseActiveAlpha : baseInactiveAlpha
      ctx.stroke()

      // glow en hover
      if (active && hoveredNode) {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = glowStroke
        ctx.lineWidth = dark ? 6 : 5
        ctx.globalAlpha = dark ? 0.25 : 0.18
        ctx.shadowColor = glowShadow
        ctx.shadowBlur = dark ? 12 : 10
        ctx.stroke()
        ctx.restore()
      }
    }

    ctx.globalAlpha = 1
  }, [edges, centers, width, height, hoveredNode, dark])

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />
}
