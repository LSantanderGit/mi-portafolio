'use client';

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useMotion } from "@/components/providers/motion-provider"
import GlassCard from "@/components/ui/glass-card"
import { Link } from "react-router-dom"
import { ArrowRight, Building2, Calendar } from "lucide-react"
import workExperience from "@/locales/work-experience.json"
import BadgeGroupFromKeys from "@/components/ui/badge/badge-group.from-keys"
import type { BadgeKey } from "@/lib/badges/badge.types"

// Get the most recent experience
const latestExperience = workExperience[0]

function formatPeriod(start: string, end: string, t: (key: string) => string) {
  const startDate = new Date(start)
  const startFormatted = startDate.toLocaleDateString("es-AR", { month: "short", year: "numeric" })
  
  if (end === "present") {
    return `${startFormatted} - ${t("pages.about.experience.present")}`
  }
  
  const endDate = new Date(end)
  const endFormatted = endDate.toLocaleDateString("es-AR", { month: "short", year: "numeric" })
  return `${startFormatted} - ${endFormatted}`
}

export default function ExperiencePreview() {
  const { t } = useTranslation()
  const { animationsEnabled } = useMotion()
  const MotionDiv = animationsEnabled ? motion.div : "div"

  return (
    <section className="px-4 pb-16">
      <div className="w-full max-w-6xl mx-auto">
        <MotionDiv
          {...(animationsEnabled && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            viewport: { once: true, amount: 0.3 }
          })}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {t("pages.about.experience.title")}
            </h2>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.about.")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Experience Card */}
          <GlassCard className="p-6 hover:border-foreground/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Company Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-secondary/50 overflow-hidden flex items-center justify-center border border-border">
                  <img 
                    src={latestExperience.logo || "/placeholder.svg"} 
                    alt={latestExperience.company}
                    className="w-12 h-12 md:w-14 md:h-14 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {latestExperience.company}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{latestExperience.ubication}</span>
                      <span className="text-muted-foreground/50">|</span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary/50 text-xs">
                        {t(`work.modality.${latestExperience.modality}`)}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {formatPeriod(latestExperience.period.start, latestExperience.period.end, t)}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {t(latestExperience.description)}
                </p>

                {/* Technologies using BadgeGroupFromKeys */}
                <BadgeGroupFromKeys
                  keys={latestExperience.technologies as BadgeKey[]}
                  align="start"
                  gap="sm"
                  wrap
                />
              </div>
            </div>
          </GlassCard>
        </MotionDiv>
      </div>
    </section>
  )
}
