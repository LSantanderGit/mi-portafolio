"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

import GlassCard from "../../components/ui/glass-card"

type Spec = {
  label: string
  value: string
}

type Props = {
  name: string
  type: string
  image: string
  specs: Spec[]
}

export default function HardwareCard({ name, type, image, specs }: Props) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <GlassCard
      className="group aspect-[4/3] cursor-pointer"
      onClick={() => setOpen((v) => !v)}
    >
      {/* IMAGE */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <img
          src={image}
          alt={name}
          className={`
            max-h-full max-w-full object-contain
            transition-all duration-500
            group-hover:scale-110 group-hover:blur-sm group-hover:opacity-30
            ${open ? "scale-110 blur-sm opacity-30" : ""}
          `}
        />
      </div>

      {/* DEFAULT LABEL */}
      <div
        className={`
          absolute bottom-0 inset-x-0 p-4
          bg-gradient-to-t from-background/80 to-transparent
          transition-opacity duration-300
          group-hover:opacity-0
          ${open ? "opacity-0" : "opacity-100"}
        `}
      >
        <p className="text-xs uppercase tracking-wider text-muted-foreground">
          {type}
        </p>
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>

      {/* SPECS OVERLAY */}
      <div
        className={`
          absolute inset-0 p-6
          flex flex-col justify-center
          opacity-0 translate-y-4
          transition-all duration-500
          group-hover:opacity-100 group-hover:translate-y-0
          ${open ? "opacity-100 translate-y-0" : ""}
        `}
      >
        <div className="mb-4">
          <p className="text-xs uppercase tracking-wider text-primary">
            {type}
          </p>
          <h3 className="text-xl font-bold">{name}</h3>
        </div>

        <div className="space-y-2">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex justify-between border-b border-border/30 py-1.5 last:border-0"
            >
              <span className="text-sm text-muted-foreground">
                {spec.label}
              </span>
              <span className="text-sm font-medium">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE HINT */}
      <div className="absolute top-3 right-3 md:hidden text-xs text-muted-foreground">
        	{t("tools.hardware.touchHint")}
      </div>
    </GlassCard>
  )
}
