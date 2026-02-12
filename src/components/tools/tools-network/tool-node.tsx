import { forwardRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { Node } from "./types"

type Props = {
  node: Node
  containerHeight: number
  isHovered: boolean
  isConnected: boolean
  dimmed: boolean
  onHover: (id: string | null) => void
}

const ToolNode = forwardRef<HTMLDivElement, Props>(function ToolNode(
  { node, containerHeight, isHovered, isConnected, dimmed, onHover },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      className="absolute"
      style={{
        left: node.x,
        top: node.y,
        transform: "translate(-50%, -50%)",
        zIndex: isHovered ? 20 : isConnected ? 10 : 1,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHovered ? 1.3 : isConnected ? 1.1 : 1,
        opacity: dimmed ? 0.3 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      <a
        href={node.link || undefined}
        target={node.link ? "_blank" : undefined}
        rel={node.link ? "noopener noreferrer" : undefined}
        className="group relative block"
        onMouseEnter={() => onHover(node.id)}
        onMouseLeave={() => onHover(null)}
        // si no hay link, no queremos “click vacío”
        onClick={(e) => {
          if (!node.link) e.preventDefault()
        }}
      >
        {/* Glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isHovered ? 2 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Circle */}
        <div
          className={[
            "relative flex h-14 w-14 items-center justify-center rounded-full border-2 transition-all duration-300",
            isHovered
              ? "border-primary bg-background shadow-lg shadow-primary/20"
              : "border-border bg-background/80 hover:border-primary/50",
          ].join(" ")}
        >
          <img
            src={"/assets/tools/" + (node.icon || "placeholder.svg")}
            alt={node.name}
            className="h-7 w-7 object-contain"
            loading="lazy"
			decoding="async"
          />
        </div>

        {/* Popover */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={[
                "absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-border bg-popover px-3 py-2 shadow-xl",
                node.y < containerHeight / 2 ? "top-full mt-3" : "bottom-full mb-3",
              ].join(" ")}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-popover-foreground">{node.name}</span>
                {node.link ? <ExternalLink className="h-3 w-3 text-muted-foreground" /> : null}
              </div>

              <div
                className={[
                  "absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-border bg-popover",
                  node.y < containerHeight / 2
                    ? "-top-1 border-l border-t"
                    : "-bottom-1 border-b border-r",
                ].join(" ")}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </a>
    </motion.div>
  )
})

export default ToolNode
