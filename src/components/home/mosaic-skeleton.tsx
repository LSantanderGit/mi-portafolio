export default function MosaicSkeleton() {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-6xl grid gap-4 md:grid-cols-3">
        <div className="h-40 md:h-56 rounded-2xl bg-secondary/40 animate-pulse" />
        <div className="h-40 md:h-56 rounded-2xl bg-secondary/40 animate-pulse" />
        <div className="h-40 md:h-56 rounded-2xl bg-secondary/40 animate-pulse" />
      </div>
    </section>
  )
}
