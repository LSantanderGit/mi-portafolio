import { cn } from "@/lib/utils"
import type { ReactNode, HTMLAttributes } from "react"

type Props = {
  children: ReactNode
  className?: string
} & HTMLAttributes<HTMLDivElement>

export default function GlassCard({
  children,
  className,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={cn(
        "relative overflow-hidden rounded-2xl",
        "border border-border",
        "bg-background/70 backdrop-blur-xl",
        "shadow-lg transition-all",
        className
      )}
    >
      {children}
    </div>
  )
}
