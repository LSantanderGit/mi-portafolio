'use client';

import React from "react"

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useMotion } from "@/components/providers/motion-provider"
import GlassCard from "@/components/ui/glass-card"
import { Link } from "react-router-dom"
import { ArrowRight, Mail, Github, Linkedin, MessageCircle } from "lucide-react"
import contacts from "@/locales/contacts.json"

const iconMap: Record<string, React.ReactNode> = {
  mail: <Mail className="w-5 h-5" />,
  github: <Github className="w-5 h-5" />,
  linkedin: <Linkedin className="w-5 h-5" />,
  whatsapp: <MessageCircle className="w-5 h-5" />,
  telegram: <MessageCircle className="w-5 h-5" />,
}

// Get main contact links
const mainContacts = contacts.contacts.filter(c => 
  ["email", "github", "linkedin", "whatsapp"].includes(c.id)
)

export default function ContactCTA() {
  const { t } = useTranslation()
  const { animationsEnabled } = useMotion()
  const MotionDiv = animationsEnabled ? motion.div : "div"

  return (
    <section className="px-4 pb-20">
      <div className="w-full max-w-6xl mx-auto">
        <MotionDiv
          {...(animationsEnabled && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            viewport: { once: true, amount: 0.3 }
          })}
        >
          <GlassCard className="relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-500/10 pointer-events-none" />
            
            <div className="relative p-8 md:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                {/* Text content */}
                <div className="flex-1 max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {t("pages.links.title.part1")} {t("pages.links.title.part2")}
                  </h2>
                  <p className="text-muted-foreground">
                    {t("pages.links.profile.description")}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Quick contact icons */}
                  <div className="flex items-center gap-2">
                    {mainContacts.map((contact) => (
                      <a
                        key={contact.id}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-secondary/50 border border-border text-foreground hover:bg-secondary hover:border-foreground/20 transition-all duration-300"
                        aria-label={contact.id}
                      >
                        {iconMap[contact.icon] || <Mail className="w-5 h-5" />}
                      </a>
                    ))}
                  </div>

                  {/* Main CTA */}
                  <Link
                    to="/links"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
                  >
                    {t("nav.links.")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </GlassCard>
        </MotionDiv>
      </div>
    </section>
  )
}
