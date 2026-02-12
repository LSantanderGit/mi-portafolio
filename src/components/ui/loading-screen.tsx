import { useTranslation } from "react-i18next"

export default function LoadingScreen() {
	const { t } = useTranslation()
	return (
		<div className="flex min-h-[40vh] items-center justify-center p-6">
			<div className="flex items-center gap-3">
				<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-foreground/70" />
				<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-foreground/70 [animation-delay:150ms]" />
				<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-foreground/70 [animation-delay:300ms]" />
				<span className="text-sm text-muted-foreground">{t("app.loading")}</span>
			</div>
		</div>
	);
}
