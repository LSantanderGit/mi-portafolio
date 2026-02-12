type Props = {
  titleWidth?: string
  rows?: number
  minHeight?: string
}

export default function SectionFallback({
  titleWidth = "w-48",
  rows = 2,
  minHeight = "min-h-[240px]",
}: Props) {
  return (
    <section className={`px-4 py-12 ${minHeight}`}>
      <div className="mx-auto max-w-6xl space-y-6">
        <div
          className={`h-7 ${titleWidth} rounded-xl bg-secondary/40 animate-pulse`}
        />

        <div className="space-y-3">
          {Array.from({ length: rows }).map((_, i) => (
            <div
              key={i}
              className="h-5 rounded-lg bg-secondary/40 animate-pulse"
            />
          ))}
        </div>

        <div className="h-40 rounded-2xl bg-secondary/40 animate-pulse" />
      </div>
    </section>
  )
}
