"use client"

import { useEffect } from "react"
import { useAppDispatch } from "@/store/context"
import { connectTokenSocket } from "@/lib/websocket/tokenSocket"

/**
 * Hook to enable live token price updates via mock WebSocket
 */
export function useLiveTokenUpdates() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    // Connect to WebSocket
    const cleanup = connectTokenSocket((update) => {
      dispatch({ type: "UPDATE_TOKEN_PRICE", payload: { id: update.id, updates: update } })
    })

    // Cleanup on unmount
    return cleanup
  }, [dispatch])
}
