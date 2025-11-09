"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useAppDispatch, useAppState } from "@/store/context"

const ChevronDownIcon = () => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

const SettingsIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

export default function PulseToolbar() {
  const dispatch = useAppDispatch()
  const state = useAppState()

  return (
    <div className="border-b border-zinc-800 bg-[#030712] px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Title */}
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-white">Pulse</h2>
          <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-xs font-bold text-black">
            ✦
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2">
          {/* Display Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-zinc-300 hover:bg-zinc-900">
                Display
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
              <DropdownMenuItem
                className="text-zinc-300 cursor-pointer"
                onClick={() => dispatch({ type: "SET_DISPLAY_MODE", payload: "compact" })}
              >
                Compact
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-zinc-300 cursor-pointer"
                onClick={() => dispatch({ type: "SET_DISPLAY_MODE", payload: "detailed" })}
              >
                Detailed
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings */}
          <button className="p-2 text-zinc-400 hover:bg-zinc-900 rounded transition-colors">
            <SettingsIcon />
          </button>

          {/* Preset Buttons */}
          <div className="flex gap-1 ml-4 border-l border-zinc-800 pl-4">
            {(["0", "P1", "P2", "P3"] as const).map((preset) => (
              <Button
                key={preset}
                variant={state.ui.activePreset === preset ? "default" : "ghost"}
                size="sm"
                onClick={() => dispatch({ type: "SET_ACTIVE_PRESET", payload: preset })}
                className={
                  state.ui.activePreset === preset
                    ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                    : "text-zinc-400 hover:bg-zinc-900"
                }
              >
                {preset}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
