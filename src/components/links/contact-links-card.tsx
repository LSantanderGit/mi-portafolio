import { type ComponentType } from "react"
import { useTranslation } from "react-i18next"
import { ExternalLink, Mail } from "lucide-react"
import {
  FaPhone,
  FaWhatsapp,
  FaTelegram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa"

import contactsData from "@/locales/contacts.json"

/* =======================
   ICON MAP
======================= */

type IconType = ComponentType<{ className?: string }>

const iconMap: Record<string, IconType> = {
  phone: FaPhone,
  mail: Mail,
  whatsapp: FaWhatsapp,
  telegram: FaTelegram,
  github: FaGithub,
  linkedin: FaLinkedin,
  external: ExternalLink,
}

export default function ContactLinksCard() {
  const { t } = useTranslation()

  return (
    <div
      className="
        rounded-2xl
        border-2 border-border
        bg-background/80
        backdrop-blur-sm
        p-6
        shadow-md
        transition-all
        duration-300
      "
    >
      <h2 className="mb-4 text-xl font-bold text-foreground">
        {t("pages.links.contacts.title")}
      </h2>

      <div className="grid gap-3">
        {contactsData.contacts.map((contact) => {
          const Icon = iconMap[contact.icon] || ExternalLink

          return (
            <a
              key={contact.id}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex gap-4 rounded-xl
                border-2 border-border
                bg-background/70
                backdrop-blur-sm
                p-4
                transition-all
                hover:border-primary
                hover:shadow-md
              "
            >
              {/* Icon */}
              <div
                className="
                  flex h-10 w-10 items-center justify-center rounded-lg
                  border border-border
                  bg-background/70
                  text-foreground
                  group-hover:bg-primary
                  group-hover:text-primary-foreground
                  transition-colors
                "
              >
                <Icon className="h-5 w-5" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary">
                  {t(`pages.links.contacts.items.${contact.id}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(
                    `pages.links.contacts.items.${contact.id}.description`
                  )}
                </p>
              </div>

              {/* Arrow */}
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
