import { useTranslation } from "react-i18next"

import PageTitle from "../../../components/ui/page-title"
import Reveal from "../../../components/ui/reveal"
import HardwareSection from "../../../components/tools/hardware-section"
import ToolsSection from "../../../components/tools/tools-section"

function Tools() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
		{/* TITLE */}
        <Reveal delay={0.1}>
          <PageTitle
            titleStart={t("pages.tools.title.part1")}
            titleEnd={t("pages.tools.title.part2")}
            description={t("pages.tools.description")}
          />
        </Reveal>

        {/* HARDWARE */}
        <section className="mt-16">
          <Reveal delay={0.2}>
            <h2 className="mb-8 text-2xl font-semibold">Hardware</h2>
            <HardwareSection />
          </Reveal>
        </section>

        {/* SOFTWARE */}
        <section className="mt-20">
          <Reveal delay={0.3}>
            <h2 className="mb-8 text-2xl font-semibold">Software</h2>
            <ToolsSection />
          </Reveal>
        </section>
      </div>
    </div>
  )
}

export default Tools
