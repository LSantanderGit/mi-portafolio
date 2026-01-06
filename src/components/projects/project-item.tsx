import Reveal from "../ui/reveal"
import ProjectCarousel from "./project-carousel"
import ProjectHoverFx from "./project-hover-fx"
import { cn } from "../../lib/utils"
import type { Project } from "../../types"

type Props = {
  project: Project
  align: "left" | "right"
  delay: number
}

export default function ProjectItem({ project, align, delay }: Props) {
  const isLeft = align === "left"

  return (
    <Reveal delay={delay}>
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-8 md:items-start">
        {/* CARD */}
        <div
          className={cn(
            "relative flex order-1",
            isLeft
              ? "md:order-2 md:justify-start"
              : "md:order-1 md:justify-end"
          )}
        >
          <ProjectHoverFx
            glowColor="rgba(56,189,248,0.35)"
            className="project-glow rounded-2xl w-full max-w-xl mx-auto md:mx-0"
          >
            <div
              className={cn(
                "group relative overflow-hidden rounded-2xl border backdrop-blur-xl",
                "transition-shadow duration-500 hover:shadow-2xl",
                `bg-gradient-to-br ${project.color.light} dark:${project.color.dark}`
              )}
            >
              <ProjectCarousel images={project.images} />

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  flex items-end
                  bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  p-4
                  pointer-events-none
                "
              >
                <p className="text-sm text-white">
                  {project.description}
                </p>
              </div>
            </div>
          </ProjectHoverFx>
        </div>

        {/* TEXTO */}
        <div
          className={cn(
            "space-y-4 max-w-md order-2 text-left",
            isLeft
              ? "md:order-1 md:ml-auto md:text-right"
              : "md:order-2 md:mr-auto md:text-left"
          )}
        >
          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="text-muted-foreground">
            {project.description}
          </p>

          <div
            className={cn(
              "flex flex-wrap gap-2",
              isLeft ? "md:justify-end" : "md:justify-start"
            )}
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border px-3 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
