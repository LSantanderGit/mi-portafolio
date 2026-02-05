export type BadgeProps = {
	label: string
	icon?: string // nombre del archivo en /public/assets/icons
	size?: "xs" | "sm" | "md" | "lg"
	variant?: "default" | "secondary" | "outline" | "code"
	className?: string
}

export type BadgeGroupProps = {
	badges: BadgeProps[]
	gap?: "xs" | "sm" | "md" | "lg"
	align?: "start" | "center" | "end"
	className?: string
}

export type BadgeKey =
  | "react"
  | "typescript"
  | "tailwind"
  | "node"
  | "backend"
  | "frontend"
  | "fullstack"
  | "php"
  | "vue"
  | "scss"
  | "flutter"
  | "oracle"
  | "postgresql"
  | "groovy"
  | "grails"
  | "javascript"
  | "angularjs"
  | "ionic"
  | "mysql"
  | "csharp"
  | "dotnet"
  | "git"
  | "linux"
  | "clean-code"
  | "solid"
  | "oop"
  | "design-patterns"
  | "problem-solving"
  | "debugging"
  | "refactoring"
  | "communication"
  | "teamwork"
  | "agile"
  | "scrum"
  | "Microsoft Office"
  | "Google Workspace"
  | "Tech Support"
  | "Video Editing"
  | "Customer Service"
  | "Networking"
  | "python"
  | "vite"
  | "java"

export type BadgeDefinition = {
  label: string
  icon?: string
  variant?: "default" | "secondary" | "outline" | "code"
}
