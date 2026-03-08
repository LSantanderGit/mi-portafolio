import { useTranslation } from "react-i18next"
import { lazy } from "react"

import Reveal from "@/components/ui/reveal"
import LazySection from "@/components/ui/lazy-section"
import SectionFallback from "@/components/ui/section-fallback"

import usePageTitle from "@/hooks/use-page-title"

function Links() {
	const { t } = useTranslation()
	const PageTitleSection = lazy(() => import("@/components/ui/page-title"))
	const ProfileCard = lazy(() => import("@/components/links/profile-card"))
	const ContactLinksCard = lazy(() => import("@/components/links/contact-links-card"))

	usePageTitle(t("nav.links."))

	return (
		<div className="min-h-screen px-4 py-12 md:py-16">
			<div className="mx-auto max-w-6xl">
				<Reveal delay={0.1}>
					<LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
						<PageTitleSection
							titleStart={t("pages.links.title.part1")}
							titleEnd={t("pages.links.title.part2")}
							description={t("pages.links.description")}
						/>
					</LazySection>
				</Reveal>

				<Reveal delay={0.2}>
					<LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
						<div className="grid gap-6 lg:grid-cols-[350px_1fr]">
							<ProfileCard />
							<ContactLinksCard />
						</div>
					</LazySection>
				</Reveal>
			</div>
		</div>
	)
}

export default Links
