import type React from "react"
export type TechItem = {
  label: string
  icon?: React.ElementType
}

export type Project = {
  id: string
  title: string
  description: string
  images: string[]
  tech: string[]
  link?: string
  color: {
    light: string
    dark: string
  }
}
