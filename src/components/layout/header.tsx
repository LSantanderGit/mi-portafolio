import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "../ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

import useIsMobile from "../../hooks/use-mobile";
import SettingsButton from "../ui/settings-button";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const routes = [
    { title: t("nav.home"), href: "/" },
    { title: t("nav.projects"), href: "/projects" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* MOBILE: HAMBURGER */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* DESKTOP: NAV PILL */}
          <div className="hidden md:flex flex-1 justify-center">
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
					{routes.map((route) => {
						const isActive = location.pathname === route.href;
						return (
						<NavigationMenuItem key={route.href} className="relative">
							{isActive && (
								<motion.div
									layoutId="nav-glow"
									transition={{ type: "spring", stiffness: 500, damping: 30 }}
									className="
									absolute inset-0
									rounded-full
									bg-accent/40
									backdrop-blur-md
									shadow-[0_0_20px_rgba(255,255,255,0.25)]
									dark:shadow-[0_0_20px_rgba(255,255,255,0.15)]
									-z-10
									"
								/>
								)}

								<NavigationMenuLink asChild>
								<Link
									to={route.href}
									className="
									relative z-10
									px-4 py-1.5 rounded-full
									text-sm font-medium
									transition-colors
									hover:text-foreground
									"
								>
									{route.title}
								</Link>
								</NavigationMenuLink>
							</NavigationMenuItem>
							);
					})}
				</NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* SETTINGS */}
          <SettingsButton />
        </div>
      </header>

      {/* ================= MOBILE SHEET ================= */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-72">
          <SheetHeader>
            <SheetTitle>{t("nav.menu") ?? "Menu"}</SheetTitle>
          </SheetHeader>

          <nav className="mt-6 flex flex-col gap-4">
            {routes.map((route) => {
              const isActive = location.pathname === route.href;

              return (
                <Link
                  key={route.href}
                  to={route.href}
                  onClick={() => setMobileOpen(false)}
                  className={`
                    text-lg font-medium
                    transition-colors
                    ${
                      isActive
                        ? "text-accent-foreground bg-accent/40 rounded-md px-3 py-2"
                        : "hover:text-accent"
                    }
                  `}
                >
                  {route.title}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
