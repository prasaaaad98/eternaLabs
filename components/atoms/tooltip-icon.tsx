"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import type { ReactNode } from "react"

interface TooltipIconProps {
  children: ReactNode
  content: string
}

export default function TooltipIcon({ children, content }: TooltipIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-zinc-800 border-zinc-700 text-zinc-100 text-xs">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
