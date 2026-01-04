import { useTranslation } from "react-i18next"

import PageTitle from "../../../components/ui/page-title"

import ProfileCard from "../../../components/links/profile-card"
import ContactLinksCard from "../../../components/links/contact-links-card"
import ContactForm from "../../../components/links/contact-form"

function Links() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* TITLE */}
        <PageTitle
          titleStart={t("pages.links.title.part1")}
          titleEnd={t("pages.links.title.part2")}
          description={t("pages.links.description")}
        />

        {/* TOP GRID */}
        <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
          <ProfileCard />
          <ContactLinksCard />
        </div>

        {/* FORM */}
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Links
