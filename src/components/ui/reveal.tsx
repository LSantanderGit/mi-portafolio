import { motion } from "framer-motion"
import { useMotion } from "../providers/motion-provider"

type RevealProps = {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: RevealProps) {
  const { animationsEnabled } = useMotion()

  if (!animationsEnabled) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
