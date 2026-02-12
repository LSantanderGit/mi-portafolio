"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import type { Tool } from "@/components/tools/tools-network"

type Props = {
  tools: Tool[]
}

type ToolItemProps = {
  tool: Tool
}

function ToolItem({ tool }: ToolItemProps) {
  const [isActive, setIsActive] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative"
    >
      {/* Card */}
      <div
        className="group relative cursor-pointer"
        onClick={() => setIsActive((v) => !v)}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {/* Glow */}
        <motion.div
          className="absolute inset-0 rounded-xl bg-primary/20 blur-xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isActive ? 1.5 : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Card container */}
        <div
          className={[
            "relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl",
            "border-2 transition-all duration-300",
            "bg-background/70 backdrop-blur-xl",
            isActive
              ? "border-primary shadow-lg shadow-primary/20"
              : "border-border hover:border-primary/50",
          ].join(" ")}
        >
          {/* ICON — cierra */}
          <div
            className="relative flex h-12 w-12 items-center justify-center"
            onClick={(e) => {
              e.stopPropagation()
              setIsActive(!isActive)
            }}
          >
            <img
              src={"/assets/tools/" + (tool.icon || "placeholder.svg")}
              alt={tool.name}
              className="h-10 w-10 object-contain"
              loading="lazy"
			  decoding="async"
            />
          </div>

          {/* TITLE — navega */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-1.5 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {tool.link ? (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    {tool.name}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ) : (
                  <span className="text-xs font-medium text-foreground">
                    {tool.name}
                  </span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}


export default function ToolsGrid({ tools }: Props) {
  // Group tools by category
  const groupedTools = useMemo(() => {
    const groups: Record<string, Tool[]> = {}
    tools.forEach((tool) => {
      if (!groups[tool.category]) {
        groups[tool.category] = []
      }
      groups[tool.category].push(tool)
    })
    return groups
  }, [tools])

  const categories = Object.keys(groupedTools)

  return (
    <div className="space-y-6">
      {categories.map((category, categoryIndex) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: categoryIndex * 0.1 }}
        >
          {/* Category header */}
          <div className="mb-3">
            <h4 className="text-sm font-medium text-primary">{category}</h4>
            <div className="mt-1 h-px w-full bg-gradient-to-r from-primary/50 to-transparent" />
          </div>

          {/* Tools grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {groupedTools[category].map((tool, toolIndex) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: categoryIndex * 0.1 + toolIndex * 0.05,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <ToolItem tool={tool} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
