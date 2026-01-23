import { type ComponentType } from "react"
import { clsx } from "clsx"

type IconContainerProps = {
  icon: ComponentType<{ className?: string }>
  className?: string
  iconClassName?: string
  variant?: "default" | "hover-primary" | "static"
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10", 
  lg: "h-12 w-12"
}

const iconSizeClasses = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6"
}

const variantClasses = {
  default: "bg-background/70 text-foreground border-border",
  "hover-primary": "bg-background/70 text-foreground border-border group-hover:bg-primary group-hover:text-primary-foreground",
  static: "bg-primary/10 text-foreground"
}

export default function IconContainer({ 
  icon: Icon, 
  className = "",
  iconClassName = "",
  variant = "default",
  size = "md"
}: IconContainerProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center rounded-lg border transition-colors",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Icon className={clsx(iconSizeClasses[size], iconClassName)} />
    </div>
  )
}
