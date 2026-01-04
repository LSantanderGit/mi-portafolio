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

  const [animationsEnabled, setAnimationsEnabled] = useState(
    !prefersReducedMotion
  )

  // sync con prefers-reduced-motion si cambia
  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimationsEnabled(false)
    }
  }, [prefersReducedMotion])

  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev)
  }

  return (
    <MotionContext.Provider
      value={{ animationsEnabled, toggleAnimations }}
    >
      {children}
    </MotionContext.Provider>
  )
}

export function useMotion() {
  const context = useContext(MotionContext)
  if (!context) {
    throw new Error("useMotion must be used within MotionProvider")
  }
  return context
}
