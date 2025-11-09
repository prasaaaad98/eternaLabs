/**
 * Mock WebSocket connection for simulating real-time token price updates
 */

import type { Token } from "@/types/token"
import { getMockTokenById } from "@/lib/api/mockTokens"

export type OnTokenUpdate = (token: Partial<Token> & { id: string }) => void

let updateInterval: NodeJS.Timeout | null = null
const subscribers: Set<OnTokenUpdate> = new Set()
let isConnected = false

/**
 * Connect to the mock WebSocket and receive price updates
 */
export function connectTokenSocket(onMessage: OnTokenUpdate): () => void {
  if (!isConnected) {
    isConnected = true
    startPriceUpdates()
  }

  subscribers.add(onMessage)

  // Return cleanup function
  return () => {
    subscribers.delete(onMessage)
    if (subscribers.size === 0 && updateInterval) {
      clearInterval(updateInterval)
      updateInterval = null
      isConnected = false
    }
  }
}

/**
 * Simulate real-time price updates
 */
function startPriceUpdates() {
  // Update every 2-3 seconds
  updateInterval = setInterval(
    () => {
      // Get 2-4 random tokens to update
      const allTokens = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

      const tokensToUpdate = allTokens.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * 3) + 2)

      tokensToUpdate.forEach((tokenId) => {
        const token = getMockTokenById(tokenId)
        if (!token) return

        // Simulate small price movements (±2%)
        const marketCapDelta = (Math.random() - 0.5) * token.marketCapUsd * 0.04
        const volumeDelta = (Math.random() - 0.5) * token.volumeUsd * 0.06

        // Update metrics
        const newMetrics = token.metrics.map((m) => ({
          ...m,
          value: m.id === "m1" ? m.value + (Math.random() - 0.5) * 0.1 : m.value + (Math.random() - 0.5) * 3,
        }))

        const update: Partial<Token> & { id: string } = {
          id: tokenId,
          marketCapUsd: Math.max(100, token.marketCapUsd + marketCapDelta),
          volumeUsd: Math.max(10, token.volumeUsd + volumeDelta),
          metrics: newMetrics,
          updatedAt: new Date().toISOString(),
        }

        // Broadcast to all subscribers
        subscribers.forEach((callback) => {
          callback(update)
        })
      })
    },
    2000 + Math.random() * 1000,
  )
}

/**
 * Disconnect from mock WebSocket
 */
export function disconnectTokenSocket() {
  subscribers.clear()
  if (updateInterval) {
    clearInterval(updateInterval)
    updateInterval = null
  }
  isConnected = false
}
