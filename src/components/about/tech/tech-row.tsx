"use client"

import { motion } from "framer-motion"
import type { BadgeKey } from "@/lib/badges/badge.types"
import BadgeGroupFromKeys from "@/components/ui/badge/badge-group.from-keys"

type Props = {
  items: BadgeKey[]
  direction?: "left" | "right"
  speed?: number
}

export default function TechRow({ items, direction = "left", speed = 40 }: Props) {
  const from = direction === "left" ? "0%" : "-50%"
  const to = direction === "left" ? "-50%" : "0%"

  const duplicatedItems = [...items, ...items]

  return (
    <div className="overflow-hidden">
      <motion.div
        className="py-2 flex w-max"
        initial={{ x: from }}
        animate={{ x: to }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        <BadgeGroupFromKeys
          keys={duplicatedItems}
          gap="md"
          wrap={false}
          revealFrom={direction === "left" ? "right" : "left"}
          className="flex w-max flex-nowrap"
        />
      </motion.div>
    </div>
  )
}

