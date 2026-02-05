import type { BadgeKey } from "@/lib/badges/badge.types"

export type Project = {
  id: string
  title: string
  translationId: string
  images: string[]
  tech: BadgeKey[]
  color: {
    light: string
    dark: string
  }
}