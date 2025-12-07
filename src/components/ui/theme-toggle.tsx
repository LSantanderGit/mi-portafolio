import { Toggle } from "./toggle";
import { useTheme } from "../theme-provider";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      variant="outline"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </Toggle>
  );
}

export default ThemeToggle;