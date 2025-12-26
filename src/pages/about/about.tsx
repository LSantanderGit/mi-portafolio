import { useTranslation } from "react-i18next";
import TechMarquee from "../../components/about/tech-marque";

function About() {
	const { t } = useTranslation();

	return (
		<>
			<section className="flex justify-center px-4 py-24">
				{/* Card principal */}
				<div
					className="
					relative
					w-full max-w-4xl
					overflow-hidden
					rounded-2xl
					border border-border
					bg-background/80
					backdrop-blur-xl
					shadow-xl
					"
				>
					{/* Fondo animado */}
					<div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
					<TechMarquee />
					</div>

					{/* Gradiente overlay */}
					<div
						className="
							absolute inset-0 z-0
							bg-gradient-to-br
							from-sky-500/10
							via-white/5
							to-sky-300/10
							dark:from-sky-400/10
							dark:via-black/10
							dark:to-sky-600/10
						"
					/>

					{/* Contenido */}
					<div className="relative z-10 flex flex-col items-center gap-6 px-8 py-20 text-center">
						
						{/* Título */}
						<h1
							className="
								text-sm
								font-semibold
								tracking-widest
								uppercase
								text-white
								drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]
							"
						>
							{t("pages.about.title")}
						</h1>
						<h2
							className="
								text-4xl md:text-5xl lg:text-6xl
								font-extrabold
								bg-[linear-gradient(90deg,#38bdf8_0%,#ffffff_25%,#fde68a_50%,#ffffff_75%,#38bdf8_100%)]
								bg-[length:300%_100%]
								bg-clip-text
								text-transparent
								animate-[gradient-move_12s_ease-in-out_infinite]
								drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]
							"
						>
							Lucas Matías Santander
						</h2>
					</div>
				</div>
			</section>
			<section className="flex justify-center px-4 pb-32">
				<div
					className="
						w-full max-w-4xl
						rounded-2xl
						border
						border-black/20
						dark:border-black
						bg-neutral-200
						dark:bg-neutral-900
						shadow-lg
					"
				>
					<div className="px-8 py-10 flex flex-col gap-4">
						<div className="flex flex-col gap-2 text-left">
							<h1
								className="
									text-sm
									font-semibold
									tracking-widest
									uppercase
									text-neutral-700
									dark:text-neutral-100
									drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]
								"
							>
								{t("pages.about.subtitle")}
							</h1>

							<h2
							className="
									text-3xl md:text-4xl
									font-extrabold
									bg-[linear-gradient(90deg,#8b5cf6_0%,#ec4899_25%,#ef4444_50%,#facc15_75%,#8b5cf6_100%)]
									bg-[length:300%_100%]
									bg-clip-text
									text-transparent
									animate-[gradient-flow_16s_ease-in-out_infinite]
								"
							>
								{t("pages.about.subtitle.profession")}
							</h2>
						</div>

					{/* Descripción (centrada) */}
					<p
						className="
							mt-2
							max-w-3xl
							mx-auto
							text-center
							text-base md:text-lg
							text-neutral-700
							dark:text-neutral-200
							leading-relaxed
						"
					>
						{t("pages.about.subtitle.description")}
					</p>
					</div>
				</div>
				</section>
		</>
	);
}

export default About;
