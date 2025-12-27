import type React from "react"
export type TechItem = {
  label: string
  icon?: React.ElementType
}

export type WorkModality = "onsite" | "remote" | "hybrid"

export type WorkExperience = {
  id: string
  company: string
  period: {
    start: string
    end: string
  }
  ubication: string
  modality: WorkModality
  description: string
  technologies: Array<{
    label: string
    icon?: React.ElementType | string
  }>
  logo?: string
}

