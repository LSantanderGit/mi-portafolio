export default function TechSkeleton() {
  return (
    <section className="px-4 pb-16">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8 w-56 rounded-xl bg-secondary/40 animate-pulse" />
          <div className="h-6 w-24 rounded-xl bg-secondary/40 animate-pulse" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-40 rounded-2xl bg-secondary/40 animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
