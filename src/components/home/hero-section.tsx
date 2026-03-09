'use client';

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useMotion } from "@/components/providers/motion-provider"
import GlassCard from "@/components/ui/glass-card"
import { ArrowRight, MapPin, DownloadIcon } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroSection() {
  const { t } = useTranslation()
  const { animationsEnabled } = useMotion()

  const MotionWrapper = animationsEnabled ? motion.div : "div"
  const MotionImage = animationsEnabled ? motion.img : "img"

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        <GlassCard className="relative p-0 overflow-hidden">
          {/* Grid layout for content and image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] md:min-h-[600px]">
            {/* Left side - Content */}
            <div className="relative z-10 flex flex-col justify-center p-8 md:p-12 lg:p-16 order-2 lg:order-1">
              <MotionWrapper
                {...(animationsEnabled && {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 }
                })}
              >
                {/* Greeting badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-border mb-6 w-fit">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-foreground/80">
                    {t("footer.available")}
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                  {t("pages.about.title")}
                </h1>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  <span className="animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] bg-clip-text text-transparent">
                    Lucas Santander
                  </span>
                </h2>

                {/* Role */}
                <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                  {t("pages.about.subtitle.profession")}
                </p>

                {/* Location */}
                <div className="flex items-center gap-2 text-muted-foreground mb-8">
                  	<MapPin className="w-4 h-4" />
                  	<span>{t("pages.links.profile.location")}</span>
                </div>

                {/* CTA Buttons */}
				<div className="flex flex-col gap-3">
					<a 
						href={`/assets/cv/${t("pages.home.hero.filename")}`} 
						download="Lucas_Matias_Santander_CV.pdf" 
						className="group relative inline-flex w-full items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
					>
						<span className="absolute inset-0 animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%]" />
						
						<span className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%]" />
						
						<span className="relative z-10 flex items-center gap-2">
							{t("pages.home.hero.download")}
							<DownloadIcon className="w-5 h-5 transition-transform group-hover:translate-y-0.5" />
						</span>
					</a>

					<div className="flex gap-3">
						<Link
							to="/links"
							className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
						>
							{t("nav.links.")}
							<ArrowRight className="w-4 h-4" />
						</Link>
						<Link
							to="/about"
							className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-background/50 text-foreground font-medium hover:bg-accent transition-colors"
						>
							{t("nav.about.")}
							<ArrowRight className="w-4 h-4" />
						</Link>
					</div>
				</div>
              </MotionWrapper>
            </div>

            {/* Right side - Image */}
            <div className="relative flex items-end justify-center lg:justify-end order-1 lg:order-2 overflow-hidden min-h-[300px] lg:min-h-0">
              {/* Gradient overlay behind image */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-transparent via-transparent to-background/80 z-10 pointer-events-none" />
              
              {/* Decorative glow */}
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-[100px] pointer-events-none" />
              
              {/* Profile Image - positioned to emerge from bottom-right corner */}
              <MotionImage
                src="/assets/profile2.png"
                alt="Lucas Santander"
                className="relative z-20 w-auto h-[350px] md:h-[450px] lg:h-[550px] object-contain object-bottom drop-shadow-2xl cursor-pointer"
                {...(animationsEnabled && {
                  initial: { 
                    scale: 0.8, 
                    opacity: 0,
                    x: 100,
                    y: 50
                  },
                  animate: { 
                    scale: 1, 
                    opacity: 1,
                    x: 0,
                    y: 0
                  },
                  whileHover: { 
                    scale: 1.08,
                    transition: { duration: 0.3, ease: "easeOut" }
                  },
                  transition: { 
                    duration: 0.8, 
                    ease: "easeOut",
                    delay: 0.2
                  }
                })}
              />
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
