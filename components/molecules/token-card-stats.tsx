"use client"

import type { Token } from "@/types/token"
import StatPill from "@/components/atoms/stat-pill"
import { formatCurrency } from "@/lib/utils/formatters"

interface TokenCardStatsProps {
  token: Token
}

export default function TokenCardStats({ token }: TokenCardStatsProps) {
  return (
    <div className="space-y-2">
      {/* Market Cap & Volume */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-xs text-zinc-500">MC</p>
          <p className="font-semibold text-sm text-white">{formatCurrency(token.marketCapUsd)}</p>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <p className="text-xs text-zinc-500">V</p>
          <p className="font-semibold text-sm text-white">{formatCurrency(token.volumeUsd)}</p>
        </div>
      </div>

      {/* F: Ratio and TX */}
      <div className="flex items-center gap-2 text-xs pt-1 border-t border-zinc-800">
        <div>
          <span className="text-zinc-500">F</span>
          <span className="text-zinc-400 ml-1">{token.metrics[0]?.value?.toFixed(3) || "0"}</span>
        </div>
        <span className="opacity-50">TX</span>
        <span className="text-zinc-400">{token.metrics[1]?.value || 0}</span>
      </div>

      {/* Metrics Pills */}
      <div className="flex flex-wrap gap-1.5 pt-2">
        {token.metrics.map((metric) => (
          <StatPill
            key={metric.id}
            label={metric.direction === "up" ? "📈" : metric.direction === "down" ? "📉" : "•"}
            value={`${metric.value}${metric.unit || ""}`}
            color={metric.color || "neutral"}
            size="sm"
          />
        ))}
      </div>
    </div>
  )
}
