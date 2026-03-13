import { useTranslation } from "react-i18next"
import { lazy, Suspense } from "react"

import Reveal from "@/components/ui/reveal"
import LazySection from "@/components/ui/lazy-section"
import SectionFallback from "@/components/ui/section-fallback"
import usePageTitle from "@/hooks/use-page-title"

import PageTitle from "@/components/ui/page-title"

const ProfileCard = lazy(() => import("@/components/links/profile-card"))
const ContactLinksCard = lazy(() => import("@/components/links/contact-links-card"))

function Links() {
  const { t } = useTranslation()

  usePageTitle(t("nav.links."))

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.1}>
			<PageTitle
				titleStart={t("pages.links.title.part1")}
				titleEnd={t("pages.links.title.part2")}
				description={t("pages.links.description")}
			/>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
            <Suspense fallback={<SectionFallback rows={1} />}>
              <LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
                <ProfileCard />
              </LazySection>
            </Suspense>

            <Suspense fallback={<SectionFallback rows={1} />}>
              <LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
                <ContactLinksCard />
              </LazySection>
            </Suspense>
          </div>
        </Reveal>
      </div>
    </div>
  )
}

export default Links