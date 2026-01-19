"use client"

import { useMemo } from "react"
import TechRow from "./tech-row"
import { techStack } from "@/locales/tech-stacks"
import { shuffleArray } from "@/utils/shuffle"

const ITEMS_PER_ROW = 8
const NUMBER_OF_ROWS = 4

export default function TechMarquee() {
  const rowsData = useMemo(() => {
    return Array.from({ length: NUMBER_OF_ROWS }).map((_, i) => {
      const shuffled = shuffleArray([...techStack])
      const rowItems = shuffled.slice(0, ITEMS_PER_ROW)

      return {
        items: rowItems,
        direction: (i % 2 === 0 ? "left" : "right") as "left" | "right",
        speed: 30 + i * 4,
      }
    })
  }, [])

  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 px-6">
      {rowsData.map((row, i) => (
        <TechRow key={i} items={row.items} direction={row.direction} speed={row.speed} />
      ))}
    </div>
  )
}
