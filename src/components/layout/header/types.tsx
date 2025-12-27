import type { LucideIcon } from "lucide-react";

export type RouteItem = {
  title: string;
  href: string;
  description: string;
};

export type MoreRouteItem = RouteItem & {
  icon: LucideIcon;
};
