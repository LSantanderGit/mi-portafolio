import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "../../ui/navigation-menu";

import useIsMobile from "../../../hooks/use-mobile";
import type { RouteItem, MoreRouteItem } from "./types";

type Props = {
  routes: RouteItem[];
  moreRoutes: MoreRouteItem[];
  moreLabel: string;
};

export default function NavMenu({ routes, moreRoutes, moreLabel }: Props) {
  const location = useLocation();
  const [moreOpen, setMoreOpen] = useState(false);

  const isMoreRouteActive = moreRoutes.some((r) =>
    location.pathname.startsWith(r.href)
  );

  const activeGlow =
    moreOpen || isMoreRouteActive ? "more" : location.pathname;

  return (
    <nav
      className="
        pointer-events-auto
        flex items-center gap-2 px-6 py-2
        rounded-full
        bg-background/60
        backdrop-blur-md
        border border-border/40
        shadow-lg
      "
    >
      <NavigationMenu viewport={useIsMobile()}>
        <NavigationMenuList className="relative flex items-center gap-2">
          {routes.map((route) => (
            <NavigationMenuItem key={route.href} className="relative group/item">
              {activeGlow === route.href && (
                <motion.div
                  layoutId="nav-glow"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="
                    absolute inset-0 rounded-full
                    bg-accent/40 backdrop-blur-md
                    shadow-[0_0_20px_rgba(255,255,255,0.25)]
                    dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                    -z-10
                  "
                />
              )}

              <NavigationMenuLink asChild>
                <Link
                  to={route.href}
                  className="px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {route.title}
                </Link>
              </NavigationMenuLink>

              {/* Tooltip */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible
                transition-all duration-200 delay-100 pointer-events-none z-50"
              >
                <div className="px-3 py-2 rounded-lg bg-popover border shadow-lg text-sm whitespace-nowrap">
                  {route.description}
                </div>
              </div>
            </NavigationMenuItem>
          ))}

          {/* MORE */}
          <NavigationMenuItem className="relative">
            {activeGlow === "more" && (
              <motion.div
                layoutId="nav-glow"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="
                  absolute inset-0 rounded-full
                  bg-accent/40 backdrop-blur-md
                  shadow-[0_0_20px_rgba(255,255,255,0.25)]
                  dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]
                  -z-10
                "
              />
            )}

            <NavigationMenuTrigger
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
              className="px-4 py-1.5 rounded-full text-sm font-medium"
            >
              {moreLabel}
            </NavigationMenuTrigger>

            <NavigationMenuContent
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <div className="mt-3 w-80 rounded-2xl bg-popover/90 backdrop-blur-md shadow-xl p-2 flex flex-col gap-2">
                {moreRoutes.map((item) => (
                  <NavigationMenuLink asChild key={item.href}>
                    <Link
                      to={item.href}
                      className="group flex gap-3 rounded-xl p-3 border hover:bg-accent/30"
                    >
                      <item.icon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                      <div>
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
