"use client"

import { useEffect, useState } from "react"

export function LavaLampBackground() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const bubbles = [
    {
      size: { base: 280, md: 400 },
      blur: 25,
      opacity: 0.8,
      animation: "animate-blob-1",
      delay: "0s",
      position: { top: "10%", left: "15%" },
      darkGradient:
        "radial-gradient(circle, rgba(255, 87, 34, 1) 0%, rgba(239, 68, 68, 0.8) 35%, rgba(220, 38, 38, 0.4) 65%, transparent 100%)",
      lightGradient:
        "radial-gradient(circle, rgba(251, 146, 60, 0.95) 0%, rgba(249, 115, 22, 0.75) 35%, rgba(234, 88, 12, 0.4) 65%, transparent 100%)",
    },
    {
      size: { base: 240, md: 350 },
      blur: 20,
      opacity: 0.75,
      animation: "animate-blob-2",
      delay: "2s",
      position: { top: "60%", right: "10%" },
      darkGradient:
        "radial-gradient(circle, rgba(234, 88, 12, 1) 0%, rgba(194, 65, 12, 0.75) 35%, rgba(154, 52, 18, 0.35) 65%, transparent 100%)",
      lightGradient:
        "radial-gradient(circle, rgba(255, 200, 87, 0.9) 0%, rgba(251, 191, 36, 0.7) 35%, rgba(245, 158, 11, 0.35) 65%, transparent 100%)",
    },
    {
      size: { base: 320, md: 450 },
      blur: 30,
      opacity: 0.7,
      animation: "animate-blob-3",
      delay: "4s",
      position: { top: "40%", left: "50%" },
      darkGradient:
        "radial-gradient(circle, rgba(251, 146, 60, 0.95) 0%, rgba(249, 115, 22, 0.75) 35%, rgba(234, 88, 12, 0.4) 65%, transparent 100%)",
      lightGradient:
        "radial-gradient(circle, rgba(252, 165, 165, 0.85) 0%, rgba(248, 113, 113, 0.65) 35%, rgba(239, 68, 68, 0.35) 65%, transparent 100%)",
    },
    {
      size: { base: 220, md: 320 },
      blur: 18,
      opacity: 0.8,
      animation: "animate-blob-4",
      delay: "1s",
      position: { bottom: "15%", right: "35%" },
      darkGradient:
        "radial-gradient(circle, rgba(220, 38, 38, 0.95) 0%, rgba(185, 28, 28, 0.75) 35%, rgba(153, 27, 27, 0.4) 65%, transparent 100%)",
      lightGradient:
        "radial-gradient(circle, rgba(254, 215, 170, 0.85) 0%, rgba(253, 186, 116, 0.65) 35%, rgba(251, 146, 60, 0.35) 65%, transparent 100%)",
    },
    {
      size: { base: 260, md: 380 },
      blur: 22,
      opacity: 0.72,
      animation: "animate-blob-5",
      delay: "3s",
      position: { top: "25%", right: "20%" },
      darkGradient:
        "radial-gradient(circle, rgba(239, 68, 68, 0.9) 0%, rgba(220, 38, 38, 0.7) 35%, rgba(185, 28, 28, 0.35) 65%, transparent 100%)",
      lightGradient:
        "radial-gradient(circle, rgba(254, 243, 199, 0.85) 0%, rgba(253, 224, 71, 0.65) 35%, rgba(250, 204, 21, 0.35) 65%, transparent 100%)",
    },
    {
      size: { base: 230, md: 340 },
      blur: 20,
      opacity: 0.68,
      animation: "animate-blob-6",
      delay: "5s",
      position: { bottom: "20%", left: "25%" },
      darkGradient:
        "radial-gradient(circle, rgba(249, 115, 22, 0.9) 0%, rgba(234, 88, 12, 0.7) 35%, rgba(194, 65, 12, 0.35) 65%, transparent 100%)",
      lightGradient:
        "radial-gradient(circle, rgba(254, 202, 202, 0.8) 0%, rgba(252, 165, 165, 0.6) 35%, rgba(248, 113, 113, 0.3) 65%, transparent 100%)",
    },
  ]

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${bubble.animation}`}
          style={{
            width: `${bubble.size.base}px`,
            height: `${bubble.size.base}px`,
            filter: `blur(${bubble.blur}px)`,
            opacity: bubble.opacity,
            background: isDark ? bubble.darkGradient : bubble.lightGradient,
            animationDelay: bubble.delay,
            ...bubble.position,
          }}
        />
      ))}
      <style>{`
        @media (min-width: 768px) {
          ${bubbles
            .map(
              (bubble, index) => `
            .${bubble.animation}:nth-child(${index + 1}) {
              width: ${bubble.size.md}px !important;
              height: ${bubble.size.md}px !important;
            }
          `,
            )
            .join("")}
        }
      `}</style>
    </div>
  )
}
