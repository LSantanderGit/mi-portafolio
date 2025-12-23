import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative mt-24">
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
                  { label: t("footer.blog"), href: "/blog" },
                ]}
              />

              <FooterColumn
                title={t("footer.specifics")}
                links={[
                  { label: t("footer.uses"), href: "#" },
                  { label: t("footer.bucketList"), href: "#" },
                  { label: t("footer.guestBook"), href: "#" },
                ]}
              />

              <FooterColumn
                title={t("footer.more")}
                links={[
                  { label: t("footer.contact"), href: "/contact" },
                  { label: t("footer.links"), href: "#" },
                  { label: t("footer.rss"), href: "/rss" },
                ]}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 flex flex-col gap-6 border-t border-border/40 pt-6 md:flex-row md:items-center md:justify-between">

            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Lucas Matías Santander. {t("footer.rights")}
            </p>

            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-accent transition-colors">{t("footer.privacyPolicy")}</a>
              <a href="#" className="hover:text-accent transition-colors">{t("footer.termsOfUse")}</a>
            </div>

            <div className="flex gap-4 text-muted-foreground">
				<a href="https://github.com/LSantanderGit" aria-label="GitHub" className="hover:text-foreground transition-colors">
					<FaGithub className="h-5 w-5" />
				</a>
				<a href="https://www.linkedin.com/in/lucas-matias-santander/" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
					<FaLinkedin className="h-5 w-5" />
				</a>
				<a href="https://profile.indeed.com/p/lucasm-zibh1d0" aria-label="Indeed" className="hover:text-foreground transition-colors">
					<SiIndeed className="h-5 w-5" />
				</a>
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
