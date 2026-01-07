"use client"

import { MapPin, Laptop, Users, Building } from "lucide-react"
import type { WorkExperience } from "../work-types"
import BadgeGroupFromKeys from "../../../ui/badge/badge-group.from-keys"

const modalityIconMap = {
  onsite: Building,
  remote: Laptop,
  hybrid: Users,
}

type Props = {
  experience: WorkExperience
  isActive: boolean
  align: "left" | "right"
  formatPeriod: (period: { start: string; end: string }) => string
  t: (key: string) => string
}

export default function WorkExperienceCard({
  experience,
  isActive,
  align,
  formatPeriod,
  t,
}: Props) {
  const ModalityIcon = modalityIconMap[experience.modality]

  const textAlign = align === "left" ? "text-left" : "text-right"
  const metaAlign =
    align === "left"
      ? "items-start text-left"
      : "items-end text-right"

  return (
    <div
      className={`
        rounded-2xl border-2 p-6 backdrop-blur-sm transition-all duration-300
        ${
          isActive
            ? "border-sky-400 bg-sky-50/50 dark:bg-sky-950/30 shadow-lg"
            : "border-border bg-background/80"
        }
      `}
    >
      <div className="flex gap-4 mb-4">
        {/* Logo */}
        <img
          src={experience.logo || "/placeholder.svg"}
          alt={experience.company}
          className="w-17 h-17 rounded-xl object-cover border-2 border-border flex-shrink-0"
        />

        {/* Contenido */}
        <div className={`flex-1 ${textAlign}`}>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {experience.company}
          </h3>

          <p className="text-sm text-muted-foreground">
            {formatPeriod(experience.period)}
          </p>

          <div
            className={`mt-1 flex flex-col gap-1 text-xs text-muted-foreground ${metaAlign}`}
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              {experience.ubication}
            </span>

            <span className="inline-flex items-center gap-1.5">
              <ModalityIcon className="h-3.5 w-3.5" />
              {t(`work.modality.${experience.modality}`)}
            </span>
          </div>
        </div>
      </div>

      {/* Descripción */}
      <p
        className={`text-sm md:text-base text-foreground/80 mb-4 leading-relaxed ${textAlign}`}
      >
        {t(experience.description)}
      </p>

      {/* Tecnologías → badges */}
      <BadgeGroupFromKeys
        keys={experience.technologies}
        align={align === "left" ? "start" : "end"}
        gap="sm"
      />
    </div>
  )
}
