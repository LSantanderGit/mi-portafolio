import { useTranslation } from "react-i18next"
import { lazy, Suspense } from "react"

import Reveal from "@/components/ui/reveal"
import usePageTitle from "@/hooks/use-page-title"
import PageTitle from "@/components/ui/page-title"
import SectionFallback from "@/components/ui/section-fallback"
import LazySection from "@/components/ui/lazy-section"

const HardwareSection = lazy(() => import("@/components/tools/hardware-section"))
const SoftwareSection = lazy(() => import("@/components/tools/software-section"))

function Tools() {
  const { t } = useTranslation()

  usePageTitle(t("nav.tools."))

  return (
    <div className="min-h-screen px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.1}>
          <PageTitle
            titleStart={t("pages.tools.title.part1")}
            titleEnd={t("pages.tools.title.part2")}
            description={t("pages.tools.description")}
          />
        </Reveal>

        <section className="mt-16">
          <Reveal delay={0.2}>
            <Suspense fallback={<SectionFallback rows={1} />}>
              <LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
                <HardwareSection />
              </LazySection>
            </Suspense>
          </Reveal>
        </section>

        <section className="mt-20">
          <Reveal delay={0.3}>
            <Suspense fallback={<SectionFallback rows={1} />}>
              <LazySection fallback={<SectionFallback rows={1} />} rootMargin="300px">
                <SoftwareSection />
              </LazySection>
            </Suspense>
          </Reveal>
        </section>
      </div>
    </div>
  )
}

export default Tools