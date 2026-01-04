"use client"

import * as SimpleIcons from "react-icons/si"
import type { WorkExperience } from "../../types"
import { MapPin, Laptop, Users, Building } from "lucide-react"

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
          {/* Empresa */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {experience.company}
          </h3>

          {/* Período */}
          <p className="text-sm text-muted-foreground">
            {formatPeriod(experience.period)}
          </p>

          {/* Ubicación + Modalidad */}
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

      {/* Tecnologías */}
      <div
        className={`flex flex-wrap gap-2 ${
          align === "left" ? "justify-start" : "justify-end"
        }`}
      >
        {experience.technologies.map((tech) => {
          const Icon =
            typeof tech.icon === "string"
              ? (SimpleIcons as any)[tech.icon]
              : tech.icon

          return (
            <span
              key={tech.label}
              className="
                flex items-center gap-2
                px-3 py-1
                text-xs font-medium
                rounded-lg
                bg-sky-100 dark:bg-sky-900/50
                text-sky-700 dark:text-sky-300
                border border-sky-200 dark:border-sky-800
              "
            >
              {Icon && <Icon className="text-base" />}
              {tech.label}
            </span>
          )
        })}
      </div>
    </div>
  )
}
