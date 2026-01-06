import { useRef } from "react"
import { cn } from "../../lib/utils"

type Props = {
  children: React.ReactNode
  glowColor?: string // ej: "rgba(56,189,248,0.35)"
  className?: string
}

export default function ProjectHoverFx({
  children,
  glowColor = "rgba(255,255,255,0.25)",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6

    ref.current.style.setProperty("--x", `${x}px`)
    ref.current.style.setProperty("--y", `${y}px`)
    ref.current.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.02)
    `
  }

  const reset = () => {
    if (!ref.current) return
    ref.current.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        ["--glow-color" as any]: glowColor,
      }}
      className={cn(
        "relative transition-transform duration-300 will-change-transform",
        "hover:z-10",
        "before:pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  )
}
