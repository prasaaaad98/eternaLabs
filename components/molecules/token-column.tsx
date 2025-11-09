"use client"

import { useEffect, useState } from "react"
import type { TokenColumn as TokenColumnType, Token } from "@/types/token"
import TokenCard from "@/components/molecules/token-card"
import ColumnHeader from "@/components/molecules/column-header"
import TokenCardSkeleton from "@/components/atoms/token-card-skeleton"
import { useAppDispatch, useAppState } from "@/store/context"
import { fetchTokensByColumn } from "@/lib/api/mockTokens"

interface TokenColumnProps {
  column: TokenColumnType
}

export default function TokenColumn({ column }: TokenColumnProps) {
  const dispatch = useAppDispatch()
  const state = useAppState()
  const { byId } = state.tokens
  const { sortByColumn, sortDirection } = state.ui
  const [isLoading, setIsLoading] = useState(true)

  // Fetch tokens
  useEffect(() => {
    setIsLoading(true)
    fetchTokensByColumn(column)
      .then((tokens) => {
        if (tokens.length > 0) {
          dispatch({ type: "SET_TOKENS", payload: { tokens, column } })
        }
        setIsLoading(false)
      })
      .catch(() => setIsLoading(false))
  }, [column, dispatch])

  // Get column tokens
  const columnTokens: Token[] = []
  Object.values(byId).forEach((token) => {
    if (token && token.column === column) {
      columnTokens.push(token)
    }
  })

  // Sort tokens
  const sortedTokens = [...columnTokens].sort((a, b) => {
    const sortBy = sortByColumn[column]
    const direction = sortDirection[column]

    let aVal = 0
    let bVal = 0

    if (sortBy === "marketCap") {
      aVal = a.marketCapUsd
      bVal = b.marketCapUsd
    } else if (sortBy === "volume") {
      aVal = a.volumeUsd
      bVal = b.volumeUsd
    } else if (sortBy === "age") {
      aVal = a.ageSeconds
      bVal = b.ageSeconds
    }

    if (direction === "asc") return aVal - bVal
    if (direction === "desc") return bVal - aVal
    return 0
  })

  return (
    <div className="h-full flex flex-col">
      <ColumnHeader column={column} count={sortedTokens.length} />

      {/* Token List */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, i) => <TokenCardSkeleton key={i} />)
        ) : sortedTokens.length > 0 ? (
          sortedTokens.map((token) => <TokenCard key={token.id} token={token} />)
        ) : (
          <div className="text-center py-8 text-zinc-500">
            <p className="text-sm">No tokens available</p>
          </div>
        )}
      </div>
    </div>
  )
}
