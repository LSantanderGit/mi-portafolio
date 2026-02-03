import { useTranslation } from "react-i18next"
import hardware from "@/locales/hardware.json"
import HardwareCard from "./hardware-card"
import GlassCard from "../ui/glass-card"

export default function HardwareSection() {
	const { t } = useTranslation()
	// Agrupa las tarjetas de hardware de 2 en 2
	const groupedHardware = []
	for (let i = 0; i < hardware.length; i += 2) {
		groupedHardware.push(hardware.slice(i, i + 2))
	}

  return (
    <>
		<GlassCard className="relative overflow-hidden p-6">
			{/* Header */}
			<div className="mb-4">
				<h3 className="text-lg font-semibold">{t("pages.tools.hardware.title")}</h3>
				<p className="text-sm text-muted-foreground">
					{t("pages.tools.hardware.description")}
				</p>
			</div>
			{/* Vista móvil: todas las tarjetas en una sola columna */}
			<div className="grid gap-6 grid-cols-1 md:hidden">
				{hardware.map((item) => (
				<HardwareCard
					key={item.id}
					type={item.type}
					name={item.name}
					image={item.image}
					specs={item.specs}
				/>
				))}
			</div>

			{/* Vista desktop: agrupadas de 2 en 2 */}
			<div className="hidden md:block space-y-6">
				{groupedHardware.map((group, index) => (
				<div 
					key={index} 
					className={`${
					group.length === 1 
						? "flex justify-center" 
						: "grid gap-6 grid-cols-2"
					}`}
				>
					{group.map((item) => (
					<div 
						key={item.id}
						className={group.length === 1 ? "w-full max-w-[calc(50%-0.75rem)]" : ""}
					>
						<HardwareCard
						type={item.type}
						name={item.name}
						image={item.image}
						specs={item.specs}
						/>
					</div>
					))}
				</div>
				))}
			</div>
		</GlassCard>
    </>
  )
}
