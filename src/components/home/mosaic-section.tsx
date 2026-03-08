'use client';

import React from "react"

import { FaLinkedin, FaGithub, FaPhone, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { Mail, ExternalLink } from "lucide-react";

import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import IconContainer from "@/components/ui/icon-container"
import LazyResource from "@/components/ui/lazy-resource"
import GlassCard from "@/components/ui/glass-card"
import { useMotion } from "@/components/providers/motion-provider"
import { Link } from "react-router-dom"
import { 
  Code2, 
  Briefcase, 
  Wrench, 
  MessageCircle,
  ArrowUpRight,
} from "lucide-react"
import { techStack } from "@/locales/tech-stacks"
import { resolveBadges } from "@/lib/badges/badge.helpers"
import BadgeGroup from "@/components/ui/badge/badge-group"
import Badge from "@/components/ui/badge/badge"

import contacts from "@/locales/contacts.json";

const topTechStack = techStack.slice(0, 6)
const resolvedBadges = resolveBadges(topTechStack)

type Project = {
  id: string
  title: string
  translationId: string
  images: string[]
  tech: string[]
  color: { light: string; dark: string }
}

type MosaicItemProps = {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  className?: string
  children?: React.ReactNode
  delay?: number
}

type IconType = React.ComponentType<{ className?: string }>

const iconMap: Record<string, IconType> = {
	phone: FaPhone,
	mail: Mail,
	whatsapp: FaWhatsapp,
	telegram: FaTelegram,
	github: FaGithub,
	linkedin: FaLinkedin,
	external: ExternalLink,
}

const loadProjects = async (): Promise<Project[]> => {
	const mod = await import("@/locales/projects.json")
	return mod.default as Project[]
}


function ProjectPreviewSkeleton() {
	return (
		<div className="mt-auto pt-4 flex-1 flex flex-col justify-end">
			<div className="h-[140px] md:h-[180px] rounded-xl bg-secondary/40 animate-pulse border border-border" />
		</div>
	)
}

function MosaicItem({ title, description, icon, href, className = "", children, delay = 0 }: MosaicItemProps) {
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
      className={className}
    >
      <Link to={href} className="block h-full group">
        <GlassCard className="h-full p-6 hover:border-foreground/20 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 rounded-xl bg-primary/10 text-foreground">
                {icon}
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Content */}
            <div className="flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{description}</p>
              {children}
            </div>
          </div>
        </GlassCard>
      </Link>
    </MotionDiv>
  )
}

export default function MosaicSection() {
  const { t } = useTranslation()

  return (
    <section className="px-4 pb-16">
      <div className="w-full max-w-6xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Projects - Large with project preview */}
			<MosaicItem
				title={t("nav.projects.")}
				description={t("nav.projects.description")}
				icon={<Code2 className="w-6 h-6" />}
				href="/projects"
				className="md:col-span-2 lg:row-span-2"
				delay={0.1}
			>
				<LazyResource<Project[]>
					cacheKey="projects.json"
					loader={loadProjects}
					fallback={<ProjectPreviewSkeleton />}
				>
					{(projects) => {
						const latestProject = projects[0]
						if (!latestProject){
							return <ProjectPreviewSkeleton />
						} 

						return (
							<div className="mt-auto pt-4 flex-1 flex flex-col justify-end">
								<div className="relative rounded-xl overflow-hidden border border-border bg-secondary/30 group-hover:border-foreground/20 transition-all">
									<img
										src={`/assets/projects/${latestProject.images[0]}`}
										alt={latestProject.title}
										className="w-full h-[140px] md:h-[180px] object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
										decoding="async"
										loading="lazy"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
									<div className="absolute bottom-3 left-3 right-3">
										<p className="text-sm font-medium text-foreground truncate">{latestProject.title}</p>
										<p className="text-xs text-muted-foreground truncate">
											{t(`pages.projects.project.${latestProject.translationId}.description`)}
										</p>
									</div>
								</div>
							</div>
						)
					}}
				</LazyResource>
			</MosaicItem>

          {/* About */}
          <MosaicItem
            title={t("nav.about.")}
            description={t("nav.about.description")}
            icon={<Briefcase className="w-6 h-6" />}
            href="/about"
            delay={0.2}
          >
			<div className="flex flex-col gap-2">
				{[0, 1, 2].map((index) => (
					<Badge
						key={index}
						label={t(`pages.home.about.Titles.${index}`)}
						size="sm"
						variant="outline"
						className="w-fit"
					/>
				))}
			</div>
          </MosaicItem>

          {/* Tools */}
          <MosaicItem
            title={t("nav.tools.")}
            description={t("nav.tools.description")}
            icon={<Wrench className="w-6 h-6" />}
            href="/tools"
            delay={0.3}
          >
            <div className="mt-2">
              <BadgeGroup 
                badges={resolvedBadges.slice(0, 4)} 
                gap="sm"
                wrap={true}
                size="sm"
              />
            </div>
          </MosaicItem>

          {/* Contact - Wide */}
          <MosaicItem
            title={t("nav.links.")}
            description={t("nav.links.description")}
            icon={<MessageCircle className="w-6 h-6" />}
            href="/links"
            className="md:col-span-2"
            delay={0.4}
          >
			<div className="flex items-center gap-3 mt-2">
				<div className="flex -space-x-2">
					{
						contacts.map((contact, i) => {
							const Icon = iconMap[contact.icon] || ExternalLink

							return(
								<div 
									key={contact.icon}
									className="w-8 h-8 rounded-full bg-secondary/80 border-2 border-background flex items-center justify-center"
									style={{ zIndex: 3 - i }}
								>
									<Icon className="w-4 h-4 text-foreground" />
								</div>
							)
						})
					}
				</div>
				<span className="text-xs text-muted-foreground">
					{t("pages.links.contacts.title")}
				</span>
			</div>
          </MosaicItem>
        </div>
      </div>
    </section>
  )
}
