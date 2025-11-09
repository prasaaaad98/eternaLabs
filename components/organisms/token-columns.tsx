"use client"

import type { TokenColumn as TokenColumnType } from "@/types/token"
import TokenColumn from "@/components/molecules/token-column"
import { useLiveTokenUpdates } from "@/hooks/useLiveTokenUpdates"

const COLUMNS: TokenColumnType[] = ["NEW_PAIRS", "FINAL_STRETCH", "MIGRATED"]

export default function TokenColumns() {
  // Enable live updates
  useLiveTokenUpdates()

  return (
    <div className="h-full flex gap-4 overflow-x-auto p-6 bg-gradient-to-br from-[#030712] to-[#020617]">
      {COLUMNS.map((column) => (
        <div key={column} className="flex-1 min-w-[350px]">
          <TokenColumn column={column} />
        </div>
      ))}
    </div>
  )
}
