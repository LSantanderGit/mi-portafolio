import clsx from "clsx"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useMotion } from "../../providers/motion-provider"
import Badge from "./badge"
import type { BadgeGroupProps } from "../../../lib/badges/badge.types"

const gapClasses = {
  sm: "gap-1.5",
  md: "gap-2",
  lg: "gap-3",
}

const alignClasses = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function BadgeGroup({
  badges,
  gap = "md",
  align = "start",
  className,
  wrap = true,
}: BadgeGroupProps & { wrap?: boolean }) {
  const { animationsEnabled } = useMotion()

  // 🔕 Sin animaciones
  if (!animationsEnabled) {
    return (
      <div
        className={clsx(
          "flex items-center",
          wrap ? "flex-wrap" : "flex-nowrap",
          gapClasses[gap],
          alignClasses[align],
          className
        )}
      >
        {badges.map((badge, index) => (
          <Badge key={index} {...badge} />
        ))}
      </div>
    )
  }

  // ✨ Con animaciones
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={clsx(
        "flex items-center",
        wrap ? "flex-wrap" : "flex-nowrap",
        gapClasses[gap],
        alignClasses[align],
        className
      )}
    >
      {badges.map((badge, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Badge {...badge} />
        </motion.div>
      ))}
    </motion.div>
  )
}
