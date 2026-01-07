export type BadgeProps = {
	label: string
	icon?: string // nombre del archivo en /public/assets/icons
	size?: "sm" | "md" | "lg"
	variant?: "default" | "secondary" | "outline"
	className?: string
}

export type BadgeGroupProps = {
	badges: BadgeProps[]
	gap?: "sm" | "md" | "lg"
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

export type BadgeDefinition = {
  label: string
  icon?: string
  variant?: "default" | "secondary" | "outline"
}
