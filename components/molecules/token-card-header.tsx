"use client"

import type { Token } from "@/types/token"
import TokenAvatar from "@/components/atoms/token-avatar"
import TooltipIcon from "@/components/atoms/tooltip-icon"
import { formatAge } from "@/lib/utils/formatters"

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const ShareIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.684 13.342C9.589 12.938 10 12.502 10 12c0-.502-.411-.938-1.316-1.342m0 2.684a3 3 0 110-2.684m9.108-3.342c-.889.3-1.438.893-1.438 1.342 0 .502.561 1.042 1.438 1.342m0-2.684a3 3 0 010 2.684m0 0c.889-.3 1.438-.893 1.438-1.342 0-.502-.561-1.042-1.438-1.342"
    />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

interface TokenCardHeaderProps {
  token: Token
}

export default function TokenCardHeader({ token }: TokenCardHeaderProps) {
  return (
    <div className="flex gap-3 items-start">
      {/* Avatar */}
      <TokenAvatar src={token.avatarUrl} alt={token.name} size="md" />

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-semibold text-white text-sm truncate">{token.name}</h3>
            <p className="text-xs text-zinc-400 truncate">{token.tagline}</p>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-1 flex-shrink-0">
            <TooltipIcon content="View on Explorer">
              <button className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                <ExternalLinkIcon />
              </button>
            </TooltipIcon>
            <TooltipIcon content="Share">
              <button className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                <ShareIcon />
              </button>
            </TooltipIcon>
            <TooltipIcon content="Watch">
              <button className="p-1 text-zinc-500 hover:text-zinc-300 transition-colors">
                <EyeIcon />
              </button>
            </TooltipIcon>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
          <TooltipIcon content={`Listed ${formatAge(token.ageSeconds)} ago`}>
            <span className="text-yellow-500 font-medium cursor-help">{formatAge(token.ageSeconds)}</span>
          </TooltipIcon>
          <span className="opacity-50">•</span>
          <TooltipIcon content="View on X">
            <button className="hover:text-zinc-300 transition-colors cursor-pointer">X</button>
          </TooltipIcon>
          <span className="opacity-50">•</span>
          <TooltipIcon content="View charts">
            <button className="hover:text-zinc-300 transition-colors cursor-pointer">Q</button>
          </TooltipIcon>
          <span className="opacity-50">•</span>
          <span className="text-zinc-500">1 / 0 / 0</span>
        </div>
      </div>
    </div>
  )
}
