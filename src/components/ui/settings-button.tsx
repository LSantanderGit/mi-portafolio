import { useState } from "react"
import { Settings } from "lucide-react"
import { useTranslation } from "react-i18next"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./dialog"

import ThemeToggle from "./theme-toggle"
import LanguageSwitcher from "./language-switcher"
import MotionToggle from "./motion-toggle"

export default function SettingsButton() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      {/* Botón engranaje */}
      <button
        onClick={() => setOpen(true)}
        className="
          inline-flex items-center justify-center
          rounded-md p-2
          hover:bg-accent
          transition-colors
        "
        aria-label="Settings"
      >
        <Settings className="h-5 w-5" />
      </button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="
            sm:max-w-md
            backdrop-blur-md
            bg-background/90
            border border-border
            shadow-theme
          "
        >
          <DialogHeader>
            <DialogTitle>{t("nav.settings.")}</DialogTitle>
            <DialogDescription>
              {t("nav.settings.description")}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-4 pt-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <MotionToggle />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
