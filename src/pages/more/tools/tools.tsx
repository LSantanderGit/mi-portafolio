import { useTranslation } from "react-i18next"
import { lazy } from "react"

import Reveal from "@/components/ui/reveal"
import usePageTitle from "@/hooks/use-page-title"
import SectionFallback from "@/components/ui/section-fallback"
import LazySection from "@/components/ui/lazy-section"

function Tools() {
	const { t } = useTranslation()

	const PageTitle = lazy(() => import("@/components/ui/page-title"))
	const HardwareSection = lazy(() => import("@/components/tools/hardware-section"))
	const SoftwareSection = lazy(() => import("@/components/tools/software-section"))

	usePageTitle(t("nav.tools."))

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
						<LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
							<HardwareSection />
						</LazySection>
					</Reveal>
				</section>

				{/* SOFTWARE */}
				<section className="mt-20">
					<Reveal delay={0.3}>
						<LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
							<SoftwareSection />
						</LazySection>
					</Reveal>
				</section>
			</div>
		</div>
	)
}

export default Tools
