import { useTranslation } from "react-i18next"

import HeroSection from "@/components/home/hero-section"
import MosaicSection from "@/components/home/mosaic-section"
import ExperiencePreview from "@/components/home/experience-preview"
import TechPreview from "@/components/home/tech-preview"
import ContactCTA from "@/components/home/contact-cta"
import Reveal from "@/components/ui/reveal"
import usePageTitle from "@/hooks/use-page-title"

function Home() {
  const { t } = useTranslation()

  usePageTitle(t("nav.home."))

  return (
    <main className="relative min-h-screen overflow-hidden">
      <Reveal delay={0.1}>
        <HeroSection />
      </Reveal>
      
      <Reveal delay={0.2}>
        <MosaicSection />
      </Reveal>
      
      <Reveal delay={0.3}>
        <ExperiencePreview />
      </Reveal>
      
      <Reveal delay={0.4}>
        <TechPreview />
      </Reveal>
      
      <Reveal delay={0.5}>
        <ContactCTA />
      </Reveal>
    </main>
  )
}

export default Home
