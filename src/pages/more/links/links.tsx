import { useTranslation } from "react-i18next"

import ProfileCard from "../../../components/links/profile-card"
import ContactLinksCard from "../../../components/links/contact-links-card"
import ContactForm from "../../../components/links/contact-form"

function Links() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* TITLE */}
        <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          <span className="text-foreground">
            {t("pages.links.title.part1")}{" "}
          </span>
          <span className="animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t("pages.links.title.part2")}
          </span>
        </h1>

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
