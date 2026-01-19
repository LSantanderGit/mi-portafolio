import ProjectItem from "./project-item"
import rawProjects from "@/locales/projects.json"
import type { Project } from "./project-types"
const projects: Project[] = rawProjects.map((p) => ({
	...p,
	tech: p.tech as Project["tech"],
}))


export default function ProjectsTimeline() {
  return (
	<div className="relative">
		<div className="absolute left-1/2 top-0 h-full w-px bg-border -translate-x-1/2 hidden md:block" />

		<div className="space-y-24">
			{projects.map((project, index) => (
				<ProjectItem
					key={project.id}
					project={project}
					align={index % 2 === 0 ? "left" : "right"}
					delay={index * 0.15}
				/>
			))}
		</div>
	</div>
  )
}
