import { useTranslation } from "react-i18next"
import { lazy } from "react"

import Reveal from "@/components/ui/reveal"
import LazySection from "@/components/ui/lazy-section"
import SectionFallback from "@/components/ui/section-fallback"
import usePageTitle from "@/hooks/use-page-title"
import WorkRoadmapSkeleton from "@/components/about/work/work-roadmap/work-roadmap-skeleton"

function About() {
	const { t } = useTranslation()
	const HeroSection = lazy(() => import("@/components/about/about-hero"))
	const DescriptionSection = lazy(() => import("@/components/about/about-description"))
	const SkillGridSection = lazy(() => import("@/components/about/skills-grid/skills-grid"))
	const WorkRoadmapSection = lazy(() => import("@/components/about/work/work-roadmap/work-roadmap"))

	usePageTitle(t("nav.about."))

  return (
    <>
		<Reveal delay={0.1}>
			<LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
				<HeroSection />
			</LazySection>
		</Reveal>

		<Reveal delay={0.2}>
			<LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
				<DescriptionSection />
			</LazySection>
		</Reveal>
		<Reveal delay={0.3}>
			<LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
				<SkillGridSection />
			</LazySection>
		</Reveal>
		<Reveal delay={0.4}>
			<LazySection fallback={<WorkRoadmapSkeleton />} rootMargin="300px">
				<WorkRoadmapSection />
			</LazySection>
		</Reveal>
    </>
  )
}

export default About
