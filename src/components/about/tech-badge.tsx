import type { TechItem } from "../../types";

export default function TechBadge({ label, icon: Icon }: TechItem) {
  return (
    <div
      className="
        flex items-center gap-2
        whitespace-nowrap
        rounded-xl
        border border-border
        bg-background/70
        px-4 py-2
        text-sm font-medium
        text-foreground
        backdrop-blur-md
        shadow-sm
      "
    >
      {Icon && <Icon className="text-lg text-sky-400" />}

      <span className="text-muted-foreground">&lt;</span>
      {label}
      <span className="text-muted-foreground">/&gt;</span>
    </div>
  );
}
