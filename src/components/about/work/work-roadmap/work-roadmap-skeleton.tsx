export default function WorkRoadmapSkeleton() {
  const items = Array.from({ length: 4 })

  return (
    <section className="flex justify-center px-4 pb-32">
      <div className="w-full max-w-4xl">
        {/* Title */}
        <div className="mb-12 flex justify-center">
          <div className="h-10 w-72 md:w-96 rounded-2xl bg-secondary/40 animate-pulse" />
        </div>

        <div className="relative">
          {/* Timeline base line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-neutral-300/70 dark:bg-neutral-700/70" />
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-300/70 dark:bg-neutral-700/70" />

          {/* Progress line (fake) */}
          <div className="hidden md:block absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-secondary/40 animate-pulse z-10 h-[55%]" />
          <div className="md:hidden absolute left-8 top-0 w-0.5 bg-secondary/40 animate-pulse z-10 h-[55%]" />

          {/* Floating indicator (fake) */}
          <div
            className="
              hidden md:flex absolute left-1/2 -translate-x-1/2
              w-20 h-20 rounded-full border-4 border-secondary/60
              bg-background shadow-md items-center justify-center overflow-hidden z-20
            "
            style={{ top: "55%" }}
          >
            <div className="w-full h-full bg-secondary/40 animate-pulse" />
          </div>

          <div
            className="
              md:hidden absolute left-8 -translate-x-1/2
              w-16 h-16 rounded-full border-4 border-secondary/60
              bg-background shadow-md flex items-center justify-center overflow-hidden z-20
            "
            style={{ top: "55%" }}
          >
            <div className="w-full h-full bg-secondary/40 animate-pulse" />
          </div>

          {/* Items */}
          <div className="pt-2">
            {items.map((_, index) => {
              const isEven = index % 2 === 0

              return (
                <div key={index} className="relative mb-16 md:mb-24">
                  {/* Desktop: alternating layout */}
                  <div className="hidden md:flex justify-center">
                    <div
                      className={`w-5/12 ${
                        isEven ? "text-right pr-8" : "order-2 text-left pl-8"
                      }`}
                    >
                      <SkeletonCard align={isEven ? "left" : "right"} />
                    </div>

                    <div className="w-2/12" />
                    <div className="w-5/12" />
                  </div>

                  {/* Mobile: stacked layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="w-16" />
                    <div className="flex-1">
                      <SkeletonCard align="left" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function SkeletonCard({ align }: { align: "left" | "right" }) {
  const textAlign = align === "left" ? "items-start" : "items-end"

  return (
    <div className="rounded-2xl border-2 border-border bg-background/80 p-6 backdrop-blur-sm">
      {/* Header row */}
      <div className="flex gap-4 mb-4">
        {/* Logo */}
        <div className="w-16 h-16 rounded-xl bg-secondary/40 animate-pulse border-2 border-border flex-shrink-0" />

        {/* Title + meta */}
        <div className={`flex-1 flex flex-col ${textAlign}`}>
          <div className="h-6 w-40 md:w-52 rounded-xl bg-secondary/40 animate-pulse" />
          <div className="mt-2 h-4 w-28 rounded-xl bg-secondary/40 animate-pulse" />

          <div className={`mt-3 flex flex-col gap-2 ${textAlign}`}>
            <div className="h-4 w-32 rounded-xl bg-secondary/40 animate-pulse" />
            <div className="h-4 w-24 rounded-xl bg-secondary/40 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full rounded-xl bg-secondary/40 animate-pulse" />
        <div className="h-4 w-[92%] rounded-xl bg-secondary/40 animate-pulse" />
        <div className="h-4 w-[70%] rounded-xl bg-secondary/40 animate-pulse" />
      </div>

      {/* Badges */}
      <div className={`flex flex-wrap gap-2 ${align === "left" ? "justify-start" : "justify-end"}`}>
        {Array.from({ length: 6 }).map((__, i) => (
          <div
            key={i}
            className="h-7 w-20 rounded-full bg-secondary/40 animate-pulse"
          />
        ))}
      </div>
    </div>
  )
}