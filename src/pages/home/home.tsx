import { lazy, Suspense } from "react"

import LazySection from "@/components/ui/lazy-section"
import SectionFallback from "@/components/ui/section-fallback"
import MosaicSkeleton from "@/components/home/mosaic-skeleton"
import TechSkeleton from "@/components/home/tech-skeleton"
import Reveal from "@/components/ui/reveal"

import HeroSection from "@/components/home/hero-section"

const MosaicSection = lazy(() => import("@/components/home/mosaic-section"))
const ExperiencePreview = lazy(() => import("@/components/home/experience-preview"))
const TechPreview = lazy(() => import("@/components/home/tech-preview"))
const ContactCTA = lazy(() => import("@/components/home/contact-cta"))

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Reveal delay={0.1}>
        <HeroSection />
      </Reveal>

      <Reveal delay={0.2}>
        <Suspense fallback={<MosaicSkeleton />}>
          <LazySection fallback={<MosaicSkeleton />} rootMargin="300px">
            <MosaicSection />
          </LazySection>
        </Suspense>
      </Reveal>

      <Reveal delay={0.3}>
        <Suspense fallback={<SectionFallback rows={2} />}>
          <LazySection fallback={<SectionFallback rows={2} />} rootMargin="300px">
            <ExperiencePreview />
          </LazySection>
        </Suspense>
      </Reveal>

      <Reveal delay={0.4}>
        <Suspense fallback={<TechSkeleton />}>
          <LazySection fallback={<TechSkeleton />} rootMargin="300px">
            <TechPreview />
          </LazySection>
        </Suspense>
      </Reveal>

      <Reveal delay={0.5}>
        <Suspense fallback={<SectionFallback rows={1} />}>
          <LazySection fallback={<SectionFallback rows={1} />} rootMargin="400px">
            <ContactCTA />
          </LazySection>
        </Suspense>
      </Reveal>
    </main>
  )
}