import { useTranslation } from "react-i18next"
import { MapPin } from "lucide-react"

export default function ProfileCard() {
  const { t } = useTranslation()

  return (
    <div
      className="
        h-fit
        rounded-2xl
        border-2 border-border
        bg-background/80
        backdrop-blur-sm
        p-6
        shadow-md
        transition-all
        duration-300
      "
    >
      <div className="flex flex-col items-center gap-4">
        {/* Avatar */}
        <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-border">
          <img
            src="/assets/profile.png"
            alt={t("pages.links.profile.imageAlt")}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Nombre */}
        <h2 className="text-2xl font-bold text-foreground text-center">
          Lucas Matías Santander
        </h2>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-2">
          {(t("pages.links.profile.tags", { returnObjects: true }) as string[]).map(
            (tag, index) => (
              <span
                key={index}
                className="
                  rounded-full
                  border border-border
                  bg-background/70
                  px-3 py-1
                  text-sm font-medium
                  text-foreground
                "
              >
                {tag}
              </span>
            )
          )}
        </div>

        {/* Ubicación */}
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">
            {t("pages.links.profile.location")}
          </span>
        </div>

        {/* Descripción */}
        <p className="text-center text-sm leading-relaxed text-foreground/80">
          {t("pages.links.profile.description")}
        </p>
      </div>
    </div>
  )
}
