import clsx from "clsx"
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

export default function BadgeGroup({
  badges,
  gap = "md",
  align = "start",
  className,
  wrap = true,
}: BadgeGroupProps & { wrap?: boolean }) {
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
