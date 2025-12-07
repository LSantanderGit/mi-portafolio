import { Outlet } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./components/ui/navigation-menu";

import ThemeToggle from "./components/ui/theme-toggle";
import useIsMobile from "./hooks/use-mobile";

const routes = [
  { title: "Home", href: "/", description: "Bienvenido a mi portafolio." },
  { title: "Projects", href: "/projects", description: "Explora mis proyectos." },
];

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="bg-background text-foreground shadow-theme">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <NavigationMenu viewport={useIsMobile()}>
            <NavigationMenuList className="flex-wrap">
              {routes.map((route) => (
                <NavigationMenuItem key={route.title}>
                  <NavigationMenuLink href={route.href}>
                    {route.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <ThemeToggle />
        </div>
      </header>

      <main className="flex-3 grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="bg-background text-foreground py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Lucas Matías Santander. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default Layout;
