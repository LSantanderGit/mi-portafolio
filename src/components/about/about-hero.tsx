import { useTranslation } from "react-i18next"
import TechMarquee from "./tech/tech-marque"

export default function AboutHero() {
  const { t } = useTranslation()

  return (
    <section className="flex justify-center px-4 py-24">
      {/* Card principal */}
      <div
        className="
          relative
          w-full max-w-4xl
          overflow-hidden
          rounded-2xl
          border border-border
          bg-background/80
          backdrop-blur-xl
          shadow-xl
        "
      >
        {/* Fondo animado */}
        <div className="absolute inset-0 z-0  blur-[1px] pointer-events-none">
          <TechMarquee />
        </div>

        {/* Gradiente overlay */}
        <div
          className="
            absolute inset-0 z-[1]
            bg-gradient-to-br
            from-sky-500/15
            via-white/40
            to-sky-300/15
            dark:from-sky-400/15
            dark:via-black/50
            dark:to-sky-600/15
          "
        />

        {/* Contenido */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-8 py-20 text-center">
          {/* Título with dynamic shadow */}
          <h1
            className="
              text-sm
              font-semibold
              tracking-widest
              uppercase
              text-foreground
              hero-title-shadow
            "
          >
            {t("pages.about.title")}
          </h1>

          <h2
            className="
              text-4xl md:text-5xl lg:text-6xl
              font-extrabold
              bg-[linear-gradient(90deg,#8b5cf6_0%,#ec4899_25%,#ef4444_50%,#facc15_75%,#8b5cf6_100%)]
              bg-[length:300%_100%]
              bg-clip-text
              text-transparent
              animate-gradient-move
              hero-name-glow
            "
          >
            Lucas Matías Santander
          </h2>
        </div>
      </div>
    </section>
  )
}
