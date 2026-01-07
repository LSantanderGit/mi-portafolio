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
		icon: "tailwind.svg",
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
		label: "php", 
		icon: "php.png", 
	},
	vue: { 
		label: "vue",
		icon: "vue.svg", 
	},
	scss: { 
		label: "scss", 
		icon: "scss.svg", 
	},
	flutter: { 
		label: "flutter", 
		icon: "flutter.svg", 
	},
	oracle: { 
		label: "oracle", 
		icon: "oracledb.png", 
	},
	postgresql: { 
		label: "postgresql", 
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
}
