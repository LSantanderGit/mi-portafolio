import { BADGE_REGISTRY } from "./badge.registry"
import type { BadgeKey } from "./badge.types"

export function resolveBadges(keys: BadgeKey[]) {
  return keys
    .map((key) => BADGE_REGISTRY[key])
    .filter(Boolean)
}
