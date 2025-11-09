"use client"

import { cn } from "@/lib/utils"

interface StatPillProps {
  label: string
  value: string | number
  color?: "green" | "red" | "blue" | "yellow" | "neutral"
  size?: "sm" | "md"
  className?: string
}

export default function StatPill({ label, value, color = "neutral", size = "sm", className }: StatPillProps) {
  const colorClasses = {
    green: "bg-emerald-900/40 text-emerald-400 border-emerald-700/50",
    red: "bg-red-900/40 text-red-400 border-red-700/50",
    blue: "bg-blue-900/40 text-blue-400 border-blue-700/50",
    yellow: "bg-yellow-900/40 text-yellow-400 border-yellow-700/50",
    neutral: "bg-zinc-900/40 text-zinc-400 border-zinc-700/50",
  }

  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors",
        colorClasses[color],
        sizeClasses[size],
        className,
      )}
    >
      <span className="opacity-70">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  )
}
