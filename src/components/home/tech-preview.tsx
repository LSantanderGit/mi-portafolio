'use client';

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useMotion } from "@/components/providers/motion-provider"
import GlassCard from "@/components/ui/glass-card"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import skills from "@/locales/skills.json"

// Get skills by category
const frontendSkills = skills.filter(s => s.category === "frontend").slice(0, 6)
const backendSkills = skills.filter(s => s.category === "backend").slice(0, 6)
const databaseSkills = skills.filter(s => s.category === "database").slice(0, 6)
const toolingSkills = skills.filter(s => s.category === "tooling").slice(0, 6)

type SkillIconProps = {
  skill: typeof skills[0]
}

function SkillIcon({ skill }: SkillIconProps) {
  const iconPath = `/assets/icons/${skill.icon}`
  
  return (
    <div className="group relative">
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-secondary/50 border border-border flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-foreground/20 group-hover:shadow-lg">
        <img 
          src={iconPath || "/placeholder.svg"} 
          alt={skill.name}
          className="w-7 h-7 md:w-8 md:h-8 object-contain"
        />
      </div>
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-foreground text-background text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
        {skill.name}
      </div>
    </div>
  )
}

type SkillCategoryProps = {
  title: string
  skills: typeof frontendSkills
  delay?: number
}

function SkillCategory({ title, skills: categorySkills, delay = 0 }: SkillCategoryProps) {
  const { animationsEnabled } = useMotion()
  const MotionDiv = animationsEnabled ? motion.div : "div"

  return (
    <MotionDiv
      {...(animationsEnabled && {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.5, delay },
        viewport: { once: true, amount: 0.3 }
      })}
      className="space-y-3"
    >
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {categorySkills.map((skill) => (
          <SkillIcon key={skill.id} skill={skill} />
        ))}
      </div>
    </MotionDiv>
  )
}

export default function TechPreview() {
  const { t } = useTranslation()
  const { animationsEnabled } = useMotion()
  const MotionDiv = animationsEnabled ? motion.div : "div"

  return (
    <section className="px-4 pb-16">
      <div className="w-full max-w-6xl mx-auto">
        <MotionDiv
          {...(animationsEnabled && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            viewport: { once: true, amount: 0.3 }
          })}
        >
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">
              {t("pages.tools.title.part1")}{t("pages.tools.title.part2")}
            </h2>
            <Link 
              to="/tools" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t("nav.tools.")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tech Grid */}
          <GlassCard className="p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <SkillCategory 
                title="Frontend" 
                skills={frontendSkills}
                delay={0.1}
              />
              <SkillCategory 
                title="Backend" 
                skills={backendSkills}
                delay={0.2}
              />
              <SkillCategory 
                title="Database" 
                skills={databaseSkills}
                delay={0.3}
              />
              <SkillCategory 
                title="Tools" 
                skills={toolingSkills}
                delay={0.4}
              />
            </div>
          </GlassCard>
        </MotionDiv>
      </div>
    </section>
  )
}
