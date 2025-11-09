"use client"

import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"
import type { Token, UIState, TokenColumn, SortBy, SortDirection } from "@/types/token"

// Token State
export interface TokensState {
  byId: Record<string, Token>
  allIds: string[]
}

// Combined State
export interface AppState {
  tokens: TokensState
  ui: UIState
}

// Actions
export type AppAction =
  | { type: "SET_TOKENS"; payload: { tokens: Token[]; column: string } }
  | { type: "UPDATE_TOKEN_PRICE"; payload: { id: string; updates: Partial<Token> } }
  | { type: "SET_ACTIVE_PRESET"; payload: "0" | "P1" | "P2" | "P3" }
  | { type: "SET_DISPLAY_MODE"; payload: "compact" | "detailed" }
  | { type: "SET_SELECTED_TOKEN"; payload: string | null }
  | { type: "SET_SHOW_TOKEN_MODAL"; payload: boolean }
  | { type: "TOGGLE_COLUMN_SORT"; payload: { column: TokenColumn; sortBy: SortBy } }

const initialUIState: UIState = {
  activePreset: "0",
  displayMode: "compact",
  selectedTokenId: null,
  showTokenModal: false,
  columnSorts: {
    NEW_PAIRS: { sortBy: "age", direction: "desc" },
    FINAL_STRETCH: { sortBy: "marketCap", direction: "desc" },
    MIGRATED: { sortBy: "marketCap", direction: "desc" },
  },
  sortByColumn: {
    NEW_PAIRS: "age",
    FINAL_STRETCH: "marketCap",
    MIGRATED: "marketCap",
  },
  sortDirection: {
    NEW_PAIRS: "desc",
    FINAL_STRETCH: "desc",
    MIGRATED: "desc",
  },
}

const initialState: AppState = {
  tokens: { byId: {}, allIds: [] },
  ui: initialUIState,
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "SET_TOKENS": {
      const { tokens } = action.payload
      const newById = { ...state.tokens.byId }
      const newAllIds = [...state.tokens.allIds]

      tokens.forEach((token) => {
        newById[token.id] = token
        if (!newAllIds.includes(token.id)) {
          newAllIds.push(token.id)
        }
      })

      return {
        ...state,
        tokens: { byId: newById, allIds: newAllIds },
      }
    }

    case "UPDATE_TOKEN_PRICE": {
      const { id, updates } = action.payload
      return {
        ...state,
        tokens: {
          ...state.tokens,
          byId: {
            ...state.tokens.byId,
            [id]: state.tokens.byId[id] ? { ...state.tokens.byId[id], ...updates } : state.tokens.byId[id],
          },
        },
      }
    }

    case "SET_ACTIVE_PRESET":
      return {
        ...state,
        ui: { ...state.ui, activePreset: action.payload },
      }

    case "SET_DISPLAY_MODE":
      return {
        ...state,
        ui: { ...state.ui, displayMode: action.payload },
      }

    case "SET_SELECTED_TOKEN":
      return {
        ...state,
        ui: { ...state.ui, selectedTokenId: action.payload },
      }

    case "SET_SHOW_TOKEN_MODAL":
      return {
        ...state,
        ui: { ...state.ui, showTokenModal: action.payload },
      }

    case "TOGGLE_COLUMN_SORT": {
      const { column, sortBy } = action.payload
      const current = state.ui.sortDirection[column]

      let newDirection: SortDirection = "desc"
      if (state.ui.sortByColumn[column] !== sortBy) {
        newDirection = "desc"
      } else {
        if (current === "desc") {
          newDirection = "asc"
        } else if (current === "asc") {
          newDirection = "default"
        } else {
          newDirection = "desc"
        }
      }

      return {
        ...state,
        ui: {
          ...state.ui,
          sortByColumn: { ...state.ui.sortByColumn, [column]: sortBy },
          sortDirection: { ...state.ui.sortDirection, [column]: newDirection },
        },
      }
    }

    default:
      return state
  }
}

// Create Context
const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

// Provider Component
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

// Custom Hooks
export function useAppState() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppState must be used within AppProvider")
  }
  return context.state
}

export function useAppDispatch() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useAppDispatch must be used within AppProvider")
  }
  return context.dispatch
}
