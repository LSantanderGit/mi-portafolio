import type { BadgeKey } from "@/lib/badges/badge.types"

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
  technologies: BadgeKey[]
  logo?: string
}