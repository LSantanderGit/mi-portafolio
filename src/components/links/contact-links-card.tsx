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

import contacts from "@/locales/contacts.json"
import ContactLinkItem from "@/components/ui/contact-link-item"

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
        {contacts.map((contact) => {
          const Icon = iconMap[contact.icon] || ExternalLink

          return (
            <ContactLinkItem
              key={contact.id}
              id={contact.id}
              title={t(`pages.links.contacts.items.${contact.id}.title`)}
              description={t(`pages.links.contacts.items.${contact.id}.description`)}
              url={contact.url}
              icon={Icon}
            />
          )
        })}
      </div>
    </div>
  )
}
