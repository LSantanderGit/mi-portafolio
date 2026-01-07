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
}: BadgeGroupProps) {
  return (
    <div
      className={clsx(
        "flex flex-wrap items-center",
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
