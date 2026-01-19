import tools from "@/locales/tools.json"
import GlassCard from "@/components/ui/glass-card"

export default function ToolsSection() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {tools.map((group) => (
        <GlassCard key={group.id} className="p-5">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {group.category}
          </h3>

          <div className="space-y-3">
            {group.items.map((tool) => (
              <div
                key={tool.id}
                className="
                  group flex items-center gap-3
                  rounded-lg p-3
                  bg-secondary/30
                  transition-colors
                  hover:bg-secondary/50
                "
              >
                <div
                  className="
                    flex h-10 w-10 items-center justify-center
                    rounded-lg bg-foreground/10
                    transition-transform
                    group-hover:scale-110
                  "
                >
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="h-6 w-6 object-contain"
                    loading="lazy"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium">{tool.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  )
}
