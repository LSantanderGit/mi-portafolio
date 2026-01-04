import { Switch } from "./switch"
import { useMotion } from "../providers/motion-provider"
import { useTranslation } from "react-i18next"

export default function MotionToggle() {
  const { animationsEnabled, toggleAnimations } = useMotion()
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        {t("settings.animations")}
      </span>
      <Switch
        checked={animationsEnabled}
        onCheckedChange={toggleAnimations}
      />
    </div>
  )
}
