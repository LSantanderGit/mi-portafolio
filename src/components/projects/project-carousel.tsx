import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

type Props = {
  images: string[]
  autoPlayInterval?: number
}

export default function ProjectCarousel({
  images,
  autoPlayInterval = 4000,
}: Props) {
  const [index, setIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const total = images.length

  const goTo = (i: number) => {
    setIndex((i + total) % total)
  }

  const next = () => goTo(index + 1)
  const prev = () => goTo(index - 1)

  /* ---------------- AUTO PLAY ---------------- */
  useEffect(() => {
    if (isHovering || total <= 1) return

    const id = setInterval(next, autoPlayInterval)
    return () => clearInterval(id)
  }, [index, isHovering, autoPlayInterval, total])

  /* ---------------- SWIPE ---------------- */
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    )
      return

    const delta = touchStartX.current - touchEndX.current

    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev()
    }

    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <div
      className="relative aspect-video overflow-hidden rounded-2xl"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={"/assets/projects/" + src}
            alt=""
            className="h-full w-full flex-shrink-0 object-cover"
            draggable={false}
          />
        ))}
      </div>

      {/* Left Arrow */}
      {total > 1 && (
        <button
          onClick={prev}
          className="
            absolute left-3 top-1/2 z-20
            -translate-y-1/2
            rounded-full bg-black/40 p-2
            text-white
            opacity-0 group-hover:opacity-100
            transition
            hover:bg-black/60
          "
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {total > 1 && (
        <button
          onClick={next}
          className="
            absolute right-3 top-1/2 z-20
            -translate-y-1/2
            rounded-full bg-black/40 p-2
            text-white
            opacity-0 group-hover:opacity-100
            transition
            hover:bg-black/60
          "
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      )}

      {/* Dots */}
      <div
        className="
          absolute bottom-3 left-1/2 z-20
          flex -translate-x-1/2 gap-2
        "
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "h-2 w-2 rounded-full transition",
              "hover:scale-125",
              i === index ? "bg-white" : "bg-white/40"
            )}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
