import { type ComponentType } from "react"
import { ExternalLink } from "lucide-react"
import IconContainer from "@/components/ui/icon-container"

type ContactLinkItemProps = {
  id: string
  title: string
  description: string
  url: string
  icon: ComponentType<{ className?: string }>
  className?: string
}

export default function ContactLinkItem({
  id,
  title,
  description,
  url,
  icon,
  className = ""
}: ContactLinkItemProps) {
  return (
    <a
      key={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group flex gap-4 rounded-xl
        border-2 border-border
        bg-background/70
        backdrop-blur-sm
        p-4
        transition-all
        hover:border-primary
        hover:shadow-md
        ${className}
      `}
    >
      {/* Icon */}
      <IconContainer 
        icon={icon}
        variant="hover-primary"
        size="md"
      />

      {/* Text */}
      <div className="flex-1">
        <h3 className="font-semibold text-foreground group-hover:text-primary">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      {/* Arrow */}
      <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
    </a>
  )
}
