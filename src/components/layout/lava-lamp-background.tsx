const bubbles = [
  {
    base: 220,
    md: 340,
    blurBase: 14,
    blurMd: 22,
    opacity: 0.72,
    animation: "blob-1",
    delay: "0s",
    style: { top: "10%", left: "15%" },
    className: "",
	dark: "radial-gradient(circle, rgba(255,87,34,1) 0%, rgba(239,68,68,.75) 35%, rgba(220,38,38,.30) 65%, transparent 100%)",
    light: "radial-gradient(circle, rgba(251,146,60,.95) 0%, rgba(249,115,22,.70) 35%, rgba(234,88,12,.28) 65%, transparent 100%)",
  },
  {
    base: 200,
    md: 320,
    blurBase: 12,
    blurMd: 20,
    opacity: 0.68,
    animation: "blob-2",
    delay: "1.5s",
    style: { top: "60%", right: "10%" },
    className: "",
    dark: "radial-gradient(circle, rgba(234,88,12,1) 0%, rgba(194,65,12,.70) 35%, rgba(154,52,18,.28) 65%, transparent 100%)",
    light: "radial-gradient(circle, rgba(255,200,87,.9) 0%, rgba(251,191,36,.65) 35%, rgba(245,158,11,.28) 65%, transparent 100%)",
  },
  {
    base: 240,
    md: 380,
    blurBase: 16,
    blurMd: 24,
    opacity: 0.62,
    animation: "blob-3",
    delay: "3s",
    style: { top: "40%", left: "50%" },
    className: "",
    dark: "radial-gradient(circle, rgba(251,146,60,.95) 0%, rgba(249,115,22,.70) 35%, rgba(234,88,12,.30) 65%, transparent 100%)",
    light: "radial-gradient(circle, rgba(252,165,165,.85) 0%, rgba(248,113,113,.60) 35%, rgba(239,68,68,.28) 65%, transparent 100%)",
  },

  // ✅ Solo desktop (se ocultan en mobile)
  {
    base: 190,
    md: 320,
    blurBase: 12,
    blurMd: 20,
    opacity: 0.6,
    animation: "blob-4",
    delay: "0.8s",
    style: { bottom: "15%", right: "35%" },
    className: "hidden md:block",
    dark: "radial-gradient(circle, rgba(220,38,38,.95) 0%, rgba(185,28,28,.70) 35%, rgba(153,27,27,.28) 65%, transparent 100%)",
    light: "radial-gradient(circle, rgba(254,215,170,.85) 0%, rgba(253,186,116,.60) 35%, rgba(251,146,60,.28) 65%, transparent 100%)",
  },
  {
    base: 210,
    md: 360,
    blurBase: 14,
    blurMd: 22,
    opacity: 0.58,
    animation: "blob-5",
    delay: "2.6s",
    style: { top: "25%", right: "20%" },
    className: "hidden md:block",
    dark: "radial-gradient(circle, rgba(239,68,68,.90) 0%, rgba(220,38,38,.65) 35%, rgba(185,28,28,.26) 65%, transparent 100%)",
    light: "radial-gradient(circle, rgba(254,243,199,.85) 0%, rgba(253,224,71,.60) 35%, rgba(250,204,21,.26) 65%, transparent 100%)",
  },
  {
    base: 200,
    md: 340,
    blurBase: 12,
    blurMd: 20,
    opacity: 0.56,
    animation: "blob-6",
    delay: "4.2s",
    style: { bottom: "20%", left: "25%" },
    className: "hidden md:block",
    dark: "radial-gradient(circle, rgba(249,115,22,.90) 0%, rgba(234,88,12,.65) 35%, rgba(194,65,12,.26) 65%, transparent 100%)",
    light: "radial-gradient(circle, rgba(254,202,202,.80) 0%, rgba(252,165,165,.55) 35%, rgba(248,113,113,.24) 65%, transparent 100%)",
  },
] as const

export function LavaLampBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none [contain:paint]" aria-hidden="true">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className={`lava-blob absolute rounded-full ${b.className ?? ""}`}
          style={{
            width: `${b.base}px`,
            height: `${b.base}px`,
            opacity: b.opacity,
            filter: `blur(${b.blurBase}px)`,
            animationDelay: b.delay,
            ...b.style,
            ["--lava-gradient-light" as any]: b.light,
            ["--lava-gradient-dark" as any]: b.dark,
          }}
          data-anim={b.animation}
        />
      ))}
    </div>
  )
}
