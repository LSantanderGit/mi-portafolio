import { useTranslation } from "react-i18next"

import PageTitle from "@/components/ui/page-title"
import Reveal from "@/components/ui/reveal"
import ProjectsTimeline from "@/components/projects/project-timeline"
import usePageTitle from "@/hooks/use-page-title"

function Projects() {
  const { t } = useTranslation()

	usePageTitle(t("nav.projects."))

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
		<Reveal delay={0.1}>
			<PageTitle
				titleStart={t("pages.projects.title.part1")}
				titleEnd={t("pages.projects.title.part2")}
				description={t("pages.projects.description")}
			/>
		</Reveal>

		<ProjectsTimeline />
      </div>
    </div>
  )
}

export default Projects
