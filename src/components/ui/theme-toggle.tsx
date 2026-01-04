import { Toggle } from "./toggle"
import { useTheme } from "../theme-provider"
import { Sun, Moon } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {t("settings.theme")}
      </span>

      <Toggle
        pressed={theme === "dark"}
        onPressedChange={toggleTheme}
        aria-label={t("settings.theme")}
        variant="outline"
      >
        {theme === "dark" ? <Sun /> : <Moon />}
      </Toggle>
    </div>
  )
}
