import { Suspense, useEffect, useRef, useState } from "react"
import SectionFallback from "./section-fallback"

type Props = {
  children: React.ReactNode
  fallback?: React.ReactNode
  rootMargin?: string
}

export default function LazySection({
  children,
  fallback,
  rootMargin = "200px",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref}>
      {visible ? (
        <Suspense fallback={fallback ?? <SectionFallback />}>
          {children}
        </Suspense>
      ) : (
        fallback ?? <SectionFallback />
      )}
    </div>
  )
}
