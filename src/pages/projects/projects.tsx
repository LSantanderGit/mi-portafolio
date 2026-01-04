import { useTranslation } from "react-i18next"
import PageTitle from "../../components/ui/page-title"

function Projects() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <PageTitle
          titleStart={t("pages.projects.title.part1")}
          titleEnd={t("pages.projects.title.part2")}
          description={t("pages.projects.description")}
        />
      </div>
    </div>
  )
}

export default Projects
