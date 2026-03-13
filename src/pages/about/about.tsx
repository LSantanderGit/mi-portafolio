import { useTranslation } from "react-i18next"
import { lazy, Suspense } from "react"

import Reveal from "@/components/ui/reveal"
import LazySection from "@/components/ui/lazy-section"
import SectionFallback from "@/components/ui/section-fallback"
import usePageTitle from "@/hooks/use-page-title"
import WorkRoadmapSkeleton from "@/components/about/work/work-roadmap/work-roadmap-skeleton"


const HeroSection = lazy(() => import("@/components/about/about-hero"))
const DescriptionSection = lazy(() => import("@/components/about/about-description"))
const SkillGridSection = lazy(() => import("@/components/about/skills-grid/skills-grid"))
const WorkRoadmapSection = lazy(() => import("@/components/about/work/work-roadmap/work-roadmap"))

function About() {
  const { t } = useTranslation()

  usePageTitle(t("nav.about."))

  return (
    <>
      <Reveal delay={0.1}>
        <Suspense fallback={<SectionFallback rows={1} />}>
          <LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
            <HeroSection />
          </LazySection>
        </Suspense>
      </Reveal>

      <Reveal delay={0.2}>
        <Suspense fallback={<SectionFallback rows={1} />}>
          <LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
            <DescriptionSection />
          </LazySection>
        </Suspense>
      </Reveal>

      <Reveal delay={0.3}>
        <Suspense fallback={<SectionFallback rows={1} />}>
          <LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
            <SkillGridSection />
          </LazySection>
        </Suspense>
      </Reveal>

      <Reveal delay={0.4}>
        <Suspense fallback={<WorkRoadmapSkeleton />}>
          <LazySection fallback={<WorkRoadmapSkeleton />} rootMargin="300px">
            <WorkRoadmapSection />
          </LazySection>
        </Suspense>
      </Reveal>
    </>
  )
}

export default About