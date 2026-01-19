"use client"

import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import type { WorkExperience } from "../work-types"
import workData from "@/locales/work-experience.json"
import WorkExperienceCard from "../work-experience-card/work-experience-card"

export default function WorkRoadmap() {
  const { t } = useTranslation()
  const experiences = workData as WorkExperience[]

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [indicatorPosition, setIndicatorPosition] = useState(0)

  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<HTMLDivElement | null>(null)

  /* ---------------- Scroll logic ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return
      if (itemRefs.current.length === 0) return

      const viewportCenter = window.innerHeight / 2

      let closest: number | null = null
      let minDistance = Infinity

      itemRefs.current.forEach((ref, index) => {
        if (!ref) return

        const rect = ref.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const distance = Math.abs(center - viewportCenter)

        if (distance < minDistance) {
          minDistance = distance
          closest = index
        }
      })

      setActiveIndex(closest)

      if (
        closest !== null &&
        itemRefs.current[0] &&
        itemRefs.current[itemRefs.current.length - 1]
      ) {
        const first = itemRefs.current[0]!.getBoundingClientRect()
        const last =
          itemRefs.current[itemRefs.current.length - 1]!.getBoundingClientRect()
        const active = itemRefs.current[closest]!.getBoundingClientRect()

        const firstCenter = first.top + first.height / 2
        const lastCenter = last.top + last.height / 2
        const activeCenter = active.top + active.height / 2

        const total = lastCenter - firstCenter
        const current = activeCenter - firstCenter

        const pct = total !== 0 ? (current / total) * 100 : 0
        setIndicatorPosition(Math.min(100, Math.max(0, pct)))
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  /* ---------------- Helpers ---------------- */
  const formatPeriod = (period: { start: string; end: string }) => {
    const formatDate = (date: string) => {
      if (date === "present") return t("pages.about.experience.present")
      const [year, month] = date.split("-")
      return `${month}/${year}`
    }

    return `${formatDate(period.start)} - ${formatDate(period.end)}`
  }

  /* ---------------- Render ---------------- */
  return (
    <section className="flex justify-center px-4 pb-32">
      <div className="w-full max-w-4xl">
        <h2
          className="
            mb-12
            text-3xl md:text-4xl
            font-extrabold
            text-center
            bg-[linear-gradient(90deg,#8b5cf6_0%,#ec4899_25%,#ef4444_50%,#facc15_75%,#8b5cf6_100%)]
            bg-[length:300%_100%]
            bg-clip-text
            text-transparent
            animate-[gradient-flow_16s_ease-in-out_infinite]
          "
        >
          {t("pages.about.experience.title")}
        </h2>

        <div ref={timelineRef} className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-neutral-300 dark:bg-neutral-700" />
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-300 dark:bg-neutral-700" />

          <div
            className="
              hidden md:block absolute left-1/2 top-0 w-0.5 -translate-x-1/2
              bg-gradient-to-b from-sky-400 via-purple-500 to-pink-500
              z-10 transition-[height] duration-500 ease-out
            "
            style={{ height: `${indicatorPosition}%` }}
          />
          <div
            className="
              md:hidden absolute left-8 top-0 w-0.5
              bg-gradient-to-b from-sky-400 via-purple-500 to-pink-500
              z-10 transition-[height] duration-500 ease-out
            "
            style={{ height: `${indicatorPosition}%` }}
          />

          <div
            className="
              hidden md:flex absolute left-1/2 -translate-x-1/2
              w-20 h-20 rounded-full
              border-4 border-sky-400
              bg-background
              shadow-[0_0_30px_rgba(56,189,248,0.8)]
              dark:shadow-[0_0_30px_rgba(56,189,248,0.6)]
              items-center justify-center
              overflow-hidden
              z-20 transition-[top] duration-500 ease-out
            "
            style={{ top: `${indicatorPosition}%` }}
          >
            <img
              src="/assets/profile.png"
              alt="Position indicator"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="
              md:hidden absolute left-8 -translate-x-1/2
              w-16 h-16 rounded-full
              border-4 border-sky-400
              bg-background
              shadow-[0_0_30px_rgba(56,189,248,0.8)]
              dark:shadow-[0_0_30px_rgba(56,189,248,0.6)]
              flex items-center justify-center
              overflow-hidden
              z-20 transition-[top] duration-500 ease-out
            "
            style={{ top: `${indicatorPosition}%` }}
          >
            <img
              src="/assets/profile.png"
              alt="Position indicator"
              className="w-full h-full object-cover"
            />
          </div>

          {experiences.map((exp, index) => {
            const isActive = activeIndex === index
            const isEven = index % 2 === 0

            return (
              <div
                key={exp.id}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className="relative mb-16 md:mb-24"
              >
                <div className="hidden md:flex justify-center">
                  <div
                    className={`w-5/12 ${
                      isEven ? "text-right pr-8" : "order-2 text-left pl-8"
                    }`}
                  >
                    <WorkExperienceCard
                      experience={exp}
                      isActive={isActive}
                      align={isEven ? "left" : "right"}
                      formatPeriod={formatPeriod}
                      t={t}
                    />
                  </div>

                  <div className="w-2/12" />
                  <div className="w-5/12" />
                </div>

                <div className="md:hidden flex gap-6">
                  <div className="w-16" />
                  <WorkExperienceCard
                    experience={exp}
                    isActive={isActive}
					align={isEven ? "left" : "right"}
                    formatPeriod={formatPeriod}
                    t={t}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
