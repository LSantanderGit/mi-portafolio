import { useState } from "react";
import { Menu, Boxes, Link2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import NavMenu from "./nav-menu";
import MobileMenu from "./mobile-menu";
import SettingsButton from "@/components/ui/settings-button";

export default function Header() {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const routes = [
    { title: t("nav.home."), href: "/", description: t("nav.home.description") },
    { title: t("nav.projects."), href: "/projects", description: t("nav.projects.description") },
    { title: t("nav.about."), href: "/about", description: t("nav.about.description") },
  ];

  const moreRoutes = [
    {
      title: t("nav.tools."),
      description: t("nav.tools.description"),
      href: "/tools",
      icon: Boxes,
    },
    {
      title: t("nav.links."),
      description: t("nav.links.description"),
      href: "/links",
      icon: Link2,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">

          {/* Mobile */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-accent"
          >
            <Menu className="h-5 w-5" />
          </button>

          {/* Desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavMenu
              routes={routes}
              moreRoutes={moreRoutes}
              moreLabel={t("nav.more")}
            />
          </div>

          <SettingsButton />
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onOpenChange={setMobileOpen}
        routes={routes}
        moreRoutes={moreRoutes}
        title={t("nav.menu")}
      />
    </>
  );
}
