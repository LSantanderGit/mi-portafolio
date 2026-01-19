import clsx from "clsx"
import { motion, type Variants } from "framer-motion"
import { useMotion } from "../../providers/motion-provider"
import Badge from "./badge"
import type { BadgeGroupProps } from "@/lib/badges/badge.types"

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
  visible: (direction: "left" | "right") => ({
    transition: {
      staggerChildren: 0.06,
      staggerDirection: direction === "left" ? 1 : -1,
      delayChildren: 0.05,
    },
  }),
}

const itemVariants: Variants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -6 : 6,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
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
  revealFrom = "left",
}: BadgeGroupProps & {
  wrap?: boolean
  revealFrom?: "left" | "right"
}) {
  const { animationsEnabled } = useMotion()

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

  return (
    <motion.div
      custom={revealFrom}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={clsx(
        "flex items-center",
        wrap ? "flex-wrap" : "flex-nowrap",
        gapClasses[gap],
        alignClasses[align],
        className
      )}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          custom={revealFrom}
          variants={itemVariants}
        >
          <Badge {...badge} />
        </motion.div>
      ))}
    </motion.div>
  )
}
