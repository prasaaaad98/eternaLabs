"use client"

import type { TokenColumn } from "@/types/token"
import { Button } from "@/components/ui/button"
import { useAppDispatch, useAppState } from "@/store/context"

const ChevronDownIcon = () => (
  <svg className="w-3 h-3 ml-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

interface ColumnHeaderProps {
  column: TokenColumn
  count: number
}

const COLUMN_LABELS: Record<TokenColumn, string> = {
  NEW_PAIRS: "New Pairs",
  FINAL_STRETCH: "Final Stretch",
  MIGRATED: "Migrated",
}

export default function ColumnHeader({ column, count }: ColumnHeaderProps) {
  const dispatch = useAppDispatch()
  const state = useAppState()
  const sortBy = state.ui.sortByColumn[column]
  const sortDirection = state.ui.sortDirection[column]

  const handleSort = (newSortBy: "marketCap" | "volume" | "age") => {
    dispatch({
      type: "TOGGLE_COLUMN_SORT",
      payload: { column, sortBy: newSortBy },
    })
  }

  return (
    <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-zinc-800">
      <div className="flex items-center gap-2">
        <h3 className="font-semibold text-white text-sm">{COLUMN_LABELS[column]}</h3>
        <span className="text-xs text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded">{count}</span>
      </div>

      {/* Sort Controls */}
      <div className="flex items-center gap-1.5">
        <Button
          size="sm"
          variant={sortBy === "marketCap" ? "default" : "ghost"}
          onClick={() => handleSort("marketCap")}
          className={`h-6 text-xs ${
            sortBy === "marketCap"
              ? "bg-zinc-700 hover:bg-zinc-600 text-white"
              : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
          }`}
        >
          MC
          {sortBy === "marketCap" && (
            <ChevronDownIcon
              style={{
                transform: sortDirection === "asc" ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          )}
        </Button>

        <Button
          size="sm"
          variant={sortBy === "volume" ? "default" : "ghost"}
          onClick={() => handleSort("volume")}
          className={`h-6 text-xs ${
            sortBy === "volume"
              ? "bg-zinc-700 hover:bg-zinc-600 text-white"
              : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
          }`}
        >
          V
          {sortBy === "volume" && (
            <ChevronDownIcon
              style={{
                transform: sortDirection === "asc" ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          )}
        </Button>

        <Button
          size="sm"
          variant={sortBy === "age" ? "default" : "ghost"}
          onClick={() => handleSort("age")}
          className={`h-6 text-xs ${
            sortBy === "age"
              ? "bg-zinc-700 hover:bg-zinc-600 text-white"
              : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900"
          }`}
        >
          Age
          {sortBy === "age" && (
            <ChevronDownIcon
              style={{
                transform: sortDirection === "asc" ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          )}
        </Button>

        <Button size="sm" variant="ghost" className="h-6 text-xs text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900">
          <ChevronDownIcon />
        </Button>
      </div>
    </div>
  )
}
