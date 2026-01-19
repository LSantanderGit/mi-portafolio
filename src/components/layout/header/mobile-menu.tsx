import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import type { RouteItem, MoreRouteItem } from "./types";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  routes: RouteItem[];
  moreRoutes: MoreRouteItem[];
  title: string;
};

export default function MobileMenu({
  open,
  onOpenChange,
  routes,
  moreRoutes,
  title,
}: Props) {
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-4">
          {[...routes, ...moreRoutes].map((route) => {
            const isActive = location.pathname === route.href;

            return (
              <Link
                key={route.href}
                to={route.href}
                onClick={() => onOpenChange(false)}
                className={`
                  px-3 py-2 rounded-md transition-colors
                  ${isActive ? "bg-accent/40" : "hover:text-accent"}
                `}
              >
                <div className="text-lg font-medium">{route.title}</div>
                <div className="text-sm text-muted-foreground">
                  {route.description}
                </div>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
