import type { BadgeDefinition, BadgeKey } from "./badge.types"

export const BADGE_REGISTRY: Record<BadgeKey, BadgeDefinition> = {
	react: {
		label: "React",
		icon: "react.svg",
	},
	typescript: {
		label: "TypeScript",
		icon: "typescript.png",
	},
	tailwind: {
		label: "Tailwind CSS",
		icon: "tailwind.png",
	},
	node: {
		label: "Node.js",
		icon: "node.svg",
	},
	frontend: {
		label: "Frontend",
		variant: "secondary",
	},
	backend: {
		label: "Backend",
		variant: "secondary",
	},
	fullstack: {
		label: "Full Stack",
		variant: "outline",
	},
	php: { 
		label: "PHP", 
		icon: "php.png", 
	},
	vue: { 
		label: "Vue",
		icon: "vue.svg", 
	},
	scss: { 
		label: "SCSS", 
		icon: "scss.svg", 
	},
	flutter: { 
		label: "Flutter", 
		icon: "flutter.svg", 
	},
	oracle: { 
		label: "Oracle", 
		icon: "oracledb.png", 
	},
	postgresql: { 
		label: "PostgreSQL", 
		icon: "postgresql.png", 
	},
	groovy: {
		label: "Groovy",
		icon: "groovy.svg",
	},
	grails: {
		label: "Grails",
		icon: "grails.svg",
	},
	javascript: {
		label: "JavaScript",
		icon: "javascript.svg",
	},
	angularjs: {
		label: "AngularJS",
		icon: "angular.svg",
	  },
	ionic: {
		label: "Ionic",
		icon: "ionic.svg",
	  },
	mysql: {
		label: "MySQL",
		icon: "mysql.svg",
	},
	csharp: {
		label: "C#",
		icon: "csharp.svg",
	},
	dotnet: {
		label: ".NET",
		icon: "net.png",
	},
	git: {
		label: "Git",
		icon: "git.svg",
	},
	linux: {
		label: "Linux",
		variant: "secondary",
	},
	"clean-code": {
		label: "Clean Code",
		variant: "outline",
	},
	solid: {
		label: "SOLID",
		variant: "outline",
	},
	oop: {
		label: "OOP",
		variant: "outline",
	},
	"design-patterns": {
		label: "Design Patterns",
		variant: "outline",
	},
	"problem-solving": {
		label: "Problem Solving",
		variant: "secondary",
	},
	debugging: {
		label: "Debugging",
		variant: "secondary",
	},
	refactoring: {
		label: "Refactoring",
		variant: "secondary",
	},
	communication: {
		label: "Communication",
		variant: "secondary",
	},
	teamwork: {
		label: "Teamwork",
		variant: "secondary",
	},
	agile: {
		label: "Agile",
		variant: "secondary",
	},
	scrum: {
		label: "Scrum",
		variant: "secondary",
	},
	"Microsoft Office": {
		label: "Microsoft Office",
		icon: "microsoft-office.png",
	},
	"Google Workspace": {
		label: "Google Workspace",
		icon: "google-workspace.png",
	},
	"Tech Support": {
		label: "Tech Support",
		variant: "outline",
	},
	"Video Editing": {
		label: "Video Editing",
		variant: "outline",
	},
	"Customer Service": {
		label: "Customer Service",
		variant: "secondary",
	},
	"Networking": {
		label: "Networking",
		variant: "secondary",
	},
	"python": {
		label: "Python",
		icon: "python.png",
	},

}
