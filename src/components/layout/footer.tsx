import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, ExternalLink } from "lucide-react";
import IconContainer from "@/components/ui/icon-container";
import contacts from "@/locales/contacts.json";

type IconType = React.ComponentType<{ className?: string }>

const iconMap: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,
  external: ExternalLink,
}

// Get main contact links (same as contact-cta)
const socialLinks = contacts.contacts.filter(c => 
  ["email", "github", "linkedin"].includes(c.id)
)

export default function Footer() {
  const { t } = useTranslation();

  return (
    // <footer className="relative mt-24">
    <footer>
      {/* Glow superior */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-accent/10 to-transparent" />

      {/* Separador */}
      <div className="h-px w-full bg-border/40" />

      <div className="bg-background/60 backdrop-blur-md">
        <div className="container mx-auto px-4 py-14">

          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

            {/* IDENTIDAD */}
            <div className="space-y-4">
              <div className="text-2xl font-bold tracking-tight">
                LMS
              </div>

              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                {t("footer.description")}
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-border/40 px-3 py-1 text-xs">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                {t("footer.available")}
              </div>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
              <FooterColumn
                title={t("footer.general")}
                links={[
                  { label: t("footer.home"), href: "/" },
                  { label: t("footer.about"), href: "/about" },
                  { label: t("footer.projects"), href: "/projects" },
                ]}
              />

              <FooterColumn
                title={t("footer.more")}
                links={[
					{ label: t("footer.links"), href: "/links" },
                  	{ label: t("footer.tools"), href: "/tools" },
                ]}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 flex flex-col gap-6 border-t border-border/40 pt-6 md:flex-row md:items-center md:justify-between">

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lucas Matías Santander. {t("footer.rights")}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((contact) => {
                const Icon = iconMap[contact.icon] || ExternalLink
                
                return (
                  <a
                    key={contact.id}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={contact.id}
                    className="group transition-all duration-300"
                  >
                    <IconContainer 
                      icon={Icon}
                      variant="static"
                      size="md"
                      className="text-muted-foreground group-hover:text-foreground group-hover:bg-primary/10"
                    />
                  </a>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
