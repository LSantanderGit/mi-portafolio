import type React from "react"
import BadgeGroup from "./badge-group"
import { resolveBadges } from "../../../lib/badges/badge.helpers"
import type { BadgeKey } from "../../../lib/badges/badge.types"

type Props = {
  keys: BadgeKey[]
  wrap?: boolean
} & Omit<React.ComponentProps<typeof BadgeGroup>, "badges">

export default function BadgeGroupFromKeys({ keys, ...props }: Props) {
  return <BadgeGroup badges={resolveBadges(keys)} {...props} />
}
