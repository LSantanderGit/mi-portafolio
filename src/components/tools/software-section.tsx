import { ToolsNetwork } from "@/components/tools/tools-network"
import type { Tool } from "@/components/tools/tools-network"

import toolsData from "@/locales/tools.json"
import { useTranslation } from "react-i18next"
import GlassCard from "@/components/ui/glass-card"

export default function SoftwareSection() {
  	const tools = toolsData as Tool[]
  	const { t } = useTranslation()

	return (
		<>
			<GlassCard className="relative overflow-hidden p-6">
				{/* Header */}
				<div className="mb-4">
					<h3 className="text-lg font-semibold">{t("pages.tools.software.title")}</h3>
					<p className="text-sm text-muted-foreground">
						{t("pages.tools.software.description")}
					</p>
				</div>
				<ToolsNetwork tools={tools} />
			</GlassCard>
		</> 
	)
}
