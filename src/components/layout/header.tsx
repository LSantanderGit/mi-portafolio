import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, Boxes, Link2 } from "lucide-react";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
  	NavigationMenuContent,
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
  const [moreOpen, setMoreOpen] = useState(false);

	const routes = [
		{ title: t("nav.home"), href: "/", description: t("nav.home.description") },
		{ title: t("nav.projects"), href: "/projects", description: t("nav.projects.description") },
		{ title: t("nav.about"), href: "/about", description: t("nav.about.description") },
	];

  	const moreRoutes = [
		{
			title: t("nav.tools"),
			description: t("nav.tools.description"),
			href: "/tools",
			icon: Boxes,
		},
		{
			title: t("nav.links"),
			description: t("nav.links.description"),
			href: "/links",
			icon: Link2,
		},
	];

	const isMoreRouteActive = moreRoutes.some((r) =>
		location.pathname.startsWith(r.href)
	);
	const activeGlow =
	moreOpen || isMoreRouteActive
		? "more"
    : location.pathname;

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
						<NavigationMenuItem key={route.href} className="relative group/item">
							{activeGlow === route.href && (
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

								{/* Tooltip con descripción */}
								<div className="
									absolute top-full left-1/2 -translate-x-1/2 mt-2
									opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible
									transition-all duration-200 delay-100
									pointer-events-none
									z-50
								">
									<div className="
										px-3 py-2 rounded-lg
										bg-popover text-popover-foreground
										border border-border
										shadow-lg backdrop-blur-md
										text-sm whitespace-nowrap
									">
										{route.description}
										{/* Arrow */}
										<div className="
											absolute -top-1 left-1/2 -translate-x-1/2
											w-2 h-2
											rotate-45
											bg-popover border-l border-t border-border
										" />
									</div>
								</div>
							</NavigationMenuItem>
							);
					})}
					<NavigationMenuItem className="relative">
						{activeGlow === "more" && (
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
						<NavigationMenuTrigger
							onMouseEnter={() => setMoreOpen(true)}
							onMouseLeave={() => setMoreOpen(false)}
							onFocus={() => setMoreOpen(true)}
							onBlur={() => setMoreOpen(false)}
							className="
								px-4 py-1.5 rounded-full
								text-sm font-medium
								transition-colors
								hover:text-foreground
								data-[state=open]:bg-accent/40
							"
						>
							{t("nav.more") ?? "More"}
						</NavigationMenuTrigger>


						<NavigationMenuContent
							onMouseEnter={() => setMoreOpen(true)}
							onMouseLeave={() => setMoreOpen(false)}
						>
							<div
								className="
									mt-3
									w-80
									rounded-2xl
									bg-popover/90
									backdrop-blur-md
									shadow-xl
									p-2
									flex flex-col gap-2
								"
							>
							{moreRoutes.map((item) => (
								<NavigationMenuLink asChild key={item.href}>
								<Link
									to={item.href}
									className="
										group flex items-start gap-3
										rounded-xl p-3
										border border-border/60
										hover:border-border
										hover:bg-accent/30
										transition-colors
									"
								>
									<item.icon className="h-5 w-5 mt-0.5 text-muted-foreground group-hover:text-foreground" />

									<div>
									<div className="text-sm font-medium">
										{item.title}
									</div>
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
                    transition-colors
                    ${
                      isActive
                        ? "text-accent-foreground bg-accent/40 rounded-md px-3 py-2"
                        : "hover:text-accent px-3 py-2"
                    }
                  `}
                >
                  <div className="text-lg font-medium">{route.title}</div>
                  <div className="text-sm text-muted-foreground">{route.description}</div>
                </Link>
              );
            })}
			{moreRoutes.map((item) => (
				<Link
				key={item.href}
				to={item.href}
				onClick={() => setMobileOpen(false)}
				className="hover:text-accent px-3 py-2 transition-colors"
				>
				<div className="text-lg font-medium">{item.title}</div>
				<div className="text-sm text-muted-foreground">
					{item.description}
				</div>
				</Link>
			))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
