import { type ComponentType } from "react"
import { useTranslation } from "react-i18next"
import { Mail, ExternalLink, MapPin } from "lucide-react"
import { FaPhone, FaWhatsapp, FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa"
import contactsData from "../../../locales/contacts.json"
import ContactForm from "../../../components/links/contact-form"

/* =======================
   ICON MAP
======================= */

type IconType = ComponentType<{ className?: string }>

const iconMap: Record<string, IconType> = {
	phone: FaPhone,
	mail: Mail,
	whatsapp: FaWhatsapp,
	telegram: FaTelegram,
	external: ExternalLink,
	github: FaGithub,
	linkedin: FaLinkedin,
}

/* =======================
   PAGE
======================= */

function Links() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* ================= TITLE ================= */}
        <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
          <span className="text-foreground">
            {t("pages.links.title.part1")}{" "}
          </span>
          <span className="animate-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t("pages.links.title.part2")}
          </span>
        </h1>

        {/* ================= TOP GRID ================= */}
        <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
          {/* -------- PROFILE -------- */}
          <div className="h-fit rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex flex-col items-center gap-4">
              <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-border">
                <img
                  src="/professional-developer-avatar.png"
                  alt={t("pages.links.profile.imageAlt")}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-2xl font-bold text-foreground">
                Lucas Matías Santander
              </h2>

              <div className="flex flex-wrap justify-center gap-2">
                {(t("pages.links.profile.tags", { returnObjects: true }) as string[]).map(
  					(tag, index) => (
						<span
							key={index}
							className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
						>
							{tag}
						</span>
					)
                )}
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">
                  {t("pages.links.profile.location")}
                </span>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                {t("pages.links.profile.description")}
              </p>
            </div>
          </div>

          {/* -------- CONTACT LINKS -------- */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
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
                    className="group flex gap-4 rounded-lg border border-border bg-background p-4 transition-all hover:border-primary hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>

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

                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
		<div className="mt-10">
        	<ContactForm />
		</div>
      </div>
    </div>
  )
}

export default Links
