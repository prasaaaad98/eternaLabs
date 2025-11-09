"use client"

import { useAppDispatch, useAppState } from "@/store/context"
import { getMockTokenById } from "@/lib/api/mockTokens"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import TokenAvatar from "@/components/atoms/token-avatar"
import StatPill from "@/components/atoms/stat-pill"
import { formatCurrency, formatAge } from "@/lib/utils/formatters"
import { Button } from "@/components/ui/button"

const XIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const ShareIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C9.589 12.938 10 12.502 10 12c0-.502-.411-.938-1.316-1.342m0 2.684a3 3 0 110-2.684m9.108-3.342c-.889.3-1.438.893-1.438 1.342 0 .502.561 1.042 1.438 1.342m0-2.684a3 3 0 010 2.684m0 0c.889-.3 1.438-.893 1.438-1.342 0-.502-.561-1.042-1.438-1.342"
    />
  </svg>
)

const CopyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
)

export default function TokenDetailModal() {
  const dispatch = useAppDispatch()
  const state = useAppState()
  const { showTokenModal, selectedTokenId } = state.ui

  const token = selectedTokenId ? getMockTokenById(selectedTokenId) : null

  if (!token) {
    return null
  }

  const handleClose = () => {
    dispatch({ type: "SET_SHOW_TOKEN_MODAL", payload: false })
  }

  return (
    <Dialog open={showTokenModal} onOpenChange={handleClose}>
      <DialogContent className="max-w-md bg-[#020617] border-zinc-800 text-white">
        <DialogHeader className="relative">
          <button
            onClick={handleClose}
            className="absolute right-0 top-0 p-2 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <XIcon />
          </button>
          <DialogTitle className="text-lg font-semibold">Token Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Avatar & Info */}
          <div className="flex gap-4 items-start">
            <TokenAvatar src={token.avatarUrl} alt={token.name} size="lg" />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">{token.name}</h2>
              <p className="text-sm text-zinc-400 mb-3">{token.tagline}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Market Cap</p>
                  <p className="font-semibold text-white">{formatCurrency(token.marketCapUsd)}</p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Volume</p>
                  <p className="font-semibold text-white">{formatCurrency(token.volumeUsd)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-800" />

          {/* Detailed Metrics */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold text-zinc-400 uppercase">Metrics</h3>
            {token.metrics.map((metric) => (
              <div key={metric.id} className="flex items-center justify-between p-2 bg-zinc-900/50 rounded-lg">
                <span className="text-sm text-zinc-400">{metric.label}</span>
                <StatPill
                  label=""
                  value={`${metric.value.toFixed(metric.unit === "%" ? 2 : 1)}${metric.unit || ""}`}
                  color={metric.color}
                  size="sm"
                />
              </div>
            ))}
          </div>

          {/* Token Info */}
          <div className="space-y-2 pt-2 border-t border-zinc-800">
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Age</span>
              <span className="text-white font-medium">{formatAge(token.ageSeconds)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-zinc-400">Created</span>
              <span className="text-white font-medium">{new Date(token.createdAt).toLocaleString()}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white" size="sm">
              Trade
            </Button>
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800" size="sm">
              <ShareIcon />
            </Button>
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800" size="sm">
              <ExternalLinkIcon />
            </Button>
            <Button variant="outline" className="bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800" size="sm">
              <CopyIcon />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
