// src/components/tools/tools-network/types.ts

export type Tool = {
  id: string
  name: string
  icon: string
  link: string
  category: string
}

export type Node = Tool & {
  x: number
  y: number
}

export type Edge = {
  from: string
  to: string
}