"use client"

import type { Token } from "@/types/token"
import { Button } from "@/components/ui/button"
import TokenCardHeader from "@/components/molecules/token-card-header"
import TokenCardStats from "@/components/molecules/token-card-stats"
import { useAppDispatch } from "@/store/context"
import React, { useEffect, useState } from "react"

interface TokenCardProps {
  token: Token
}

const TokenCardComponent = ({ token }: TokenCardProps) => {
  const dispatch = useAppDispatch()
  const [highlightField, setHighlightField] = useState<string | null>(null)

  // Highlight when metrics change
  useEffect(() => {
    setHighlightField("metrics")
    const timer = setTimeout(() => setHighlightField(null), 500)
    return () => clearTimeout(timer)
  }, [token.metrics])

  const handleCardClick = () => {
    dispatch({ type: "SET_SELECTED_TOKEN", payload: token.id })
    dispatch({ type: "SET_SHOW_TOKEN_MODAL", payload: true })
  }

  return (
    <button
      onClick={handleCardClick}
      className="w-full text-left group relative bg-[#020617] border border-zinc-800 rounded-2xl p-4 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-900/20"
    >
      {/* Header with Avatar & Info */}
      <TokenCardHeader token={token} />

      {/* Divider */}
      <div className="my-3 h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800" />

      {/* Stats Section */}
      <div className={`transition-all duration-300 ${highlightField === "metrics" ? "opacity-100" : "opacity-100"}`}>
        <TokenCardStats token={token} />
      </div>

      {/* Action Button */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-1">
          {token.tags.map((tag) => (
            <span key={tag} className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Button
          className="bg-blue-900/40 hover:bg-blue-900/60 text-blue-300 border border-blue-700/50 rounded-full px-3 py-1 h-auto text-xs font-medium transition-colors"
          variant="outline"
          size="sm"
        >
          {token.actionLabel}
        </Button>
      </div>
    </button>
  )
}

export default React.memo(TokenCardComponent)
