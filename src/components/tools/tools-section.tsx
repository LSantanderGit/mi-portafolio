import { ToolsNetwork } from "@/components/tools/tools-network"
import type { Tool } from "@/components/tools/tools-network"

import toolsData from "@/locales/tools.json"

export default function ToolsSection() {
  const tools = toolsData as Tool[]

  return <ToolsNetwork tools={tools} />
}
