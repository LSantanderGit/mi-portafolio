import { useTranslation } from "react-i18next"

import PageTitle from "@/components/ui/page-title"
import Reveal from "@/components/ui/reveal"

import ProfileCard from "@/components/links/profile-card"
import ContactLinksCard from "@/components/links/contact-links-card"
import ContactForm from "@/components/links/contact-form"
import usePageTitle from "@/hooks/use-page-title"

function Links() {
  const { t } = useTranslation()

	usePageTitle(t("nav.links."))

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* TITLE */}
		<Reveal delay={0.1}>
			<PageTitle
				titleStart={t("pages.links.title.part1")}
				titleEnd={t("pages.links.title.part2")}
				description={t("pages.links.description")}
			/>
		</Reveal>

        {/* TOP GRID */}
        <Reveal delay={0.2}>
			<div className="grid gap-6 lg:grid-cols-[350px_1fr]">
				<ProfileCard />
				<ContactLinksCard />
			</div>
		</Reveal>
      </div>
    </div>
  )
}

export default Links
