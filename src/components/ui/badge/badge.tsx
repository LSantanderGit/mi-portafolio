import clsx from "clsx"
import type { BadgeProps } from "@/lib/badges/badge.types"

const sizeClasses = {
  xs: "h-5 px-1.5 text-xs gap-1",
  sm: "h-6 px-2 text-xs gap-1",
  md: "h-8 px-3 text-sm gap-2",
  lg: "h-10 px-4 text-base gap-2.5",
}

const variantClasses = {
	default:
		"bg-primary/10 text-primary border border-primary/20",
	secondary:
		"bg-muted text-muted-foreground border border-border",
	outline:
		"bg-transparent text-foreground border border-border",
	code: `
		bg-background/70
		border border-border
		backdrop-blur-md
		shadow-sm
		text-foreground
	`,
}

export default function Badge({
  label,
  icon,
  size = "md",
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center rounded-full font-medium whitespace-nowrap",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {icon && (
        <img
          src={`/assets/icons/${icon}`}
          alt=""
          className="h-4 w-4 shrink-0"
          loading="lazy"
		  decoding="async"
        />
      )}

      <span className={clsx(!icon && "mx-auto")}>
        {label}
      </span>
    </div>
  )
}
