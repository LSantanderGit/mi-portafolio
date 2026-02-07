import { useTranslation } from "react-i18next"

import AboutHero from "@/components/about/about-hero"
import AboutDescription from "@/components/about/about-description"
import SkillsGrid from "@/components/about/skills-grid/skills-grid"
import WorkRoadmap from "@/components/about/work/work-roadmap/work-roadmap"
import Reveal from "@/components/ui/reveal"
import usePageTitle from "@/hooks/use-page-title"

function About() {
	const { t } = useTranslation()

	usePageTitle(t("nav.about."))

  return (
    <>
		<Reveal delay={0.1}>
			<AboutHero />
		</Reveal>
		<Reveal delay={0.2}>
			<AboutDescription />
		</Reveal>
		<Reveal delay={0.3}>
			<SkillsGrid />
		</Reveal>
		<Reveal delay={0.4}>
			<WorkRoadmap />
		</Reveal>
    </>
  )
}

export default About
