import { createContext, useContext, useEffect, useState } from "react"

type MotionContextType = {
  animationsEnabled: boolean
  toggleAnimations: () => void
}

const MotionContext = createContext<MotionContextType | null>(null)

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  const [animationsEnabled, setAnimationsEnabled] = useState(!prefersReducedMotion)

  useEffect(() => {
    if (prefersReducedMotion) setAnimationsEnabled(false)
  }, [prefersReducedMotion])

  useEffect(() => {
    const root = document.documentElement
    if (!animationsEnabled) root.classList.add("no-motion")
    else root.classList.remove("no-motion")
  }, [animationsEnabled])

  const toggleAnimations = () => setAnimationsEnabled((prev) => !prev)

  return (
    <MotionContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotion() {
  const context = useContext(MotionContext)
  if (!context) throw new Error("useMotion must be used within MotionProvider")
  return context
}
