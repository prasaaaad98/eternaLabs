/**
 * Token types for Axiom Pulse UI
 */

export type TokenColumn = "NEW_PAIRS" | "FINAL_STRETCH" | "MIGRATED"

export interface TokenMetric {
  id: string
  label: string
  value: number
  unit?: "%" | "$" | "x" | "K" | "M"
  direction?: "up" | "down" | "neutral"
  color?: "green" | "red" | "blue" | "yellow"
}

export interface Token {
  id: string
  name: string
  symbol: string
  tagline: string
  avatarUrl: string
  ageSeconds: number
  column: TokenColumn
  marketCapUsd: number
  volumeUsd: number
  actionLabel: string
  tags: string[]
  metrics: TokenMetric[]
  createdAt: string
  updatedAt: string
}

export interface TokensState {
  byId: Record<string, Token>
  allIds: string[]
  livePriceUpdates: Record<string, Partial<Token>>
  lastUpdateTime: number
}

export type SortBy = "marketCap" | "volume" | "age"
export type SortDirection = "asc" | "desc" | "default"

export interface ColumnSort {
  sortBy: SortBy
  direction: SortDirection
}

export interface UIState {
  activePreset: "0" | "P1" | "P2" | "P3"
  displayMode: "compact" | "detailed"
  selectedTokenId: string | null
  showTokenModal: boolean
  columnSorts: Record<TokenColumn, ColumnSort>
  sortByColumn: Record<TokenColumn, SortBy>
  sortDirection: Record<TokenColumn, SortDirection>
}
