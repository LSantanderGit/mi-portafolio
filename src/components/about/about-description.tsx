import { useTranslation } from "react-i18next"

export default function AboutDescription() {
  const { t } = useTranslation()

  return (
    <section className="flex justify-center px-4 pb-32">
      <div
        className="
          rounded-2xl
          border-2
          p-6 sm:p-8
          backdrop-blur-sm
          bg-background/80
          border-border
          shadow-md
          transition-all
          duration-300
          w-full
          max-w-4xl
        "
      >
        <div className="flex flex-col gap-4">
          {/* Títulos */}
          <div className="flex flex-col gap-2 text-left">
            <h1
              className="
                text-xs sm:text-sm
                font-semibold
                tracking-widest
                uppercase
                text-muted-foreground
              "
            >
              {t("pages.about.subtitle.")}
            </h1>

            <h2
              className="
                text-3xl sm:text-4xl
                font-extrabold
                bg-[linear-gradient(90deg,#8b5cf6_0%,#ec4899_25%,#ef4444_50%,#facc15_75%,#8b5cf6_100%)]
                bg-[length:300%_100%]
                bg-clip-text
                text-transparent
                animate-[gradient-flow_16s_ease-in-out_infinite]
              "
            >
              {t("pages.about.subtitle.profession")}
            </h2>
          </div>

          {/* Descripción */}
          <p
            className="
              mt-2
              max-w-3xl
              mx-auto
              text-center
              text-sm sm:text-base md:text-lg
              leading-relaxed
              text-foreground/80
            "
          >
            {t("pages.about.subtitle.description")}
          </p>
        </div>
      </div>
    </section>
  )
}
