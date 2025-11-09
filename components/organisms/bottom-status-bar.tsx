"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const ChevronDownIcon = () => (
  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

export default function BottomStatusBar() {
  return (
    <div className="border-t border-zinc-800 bg-[#030712] px-6 py-3">
      <div className="flex items-center justify-between gap-4 text-xs">
        {/* Left: Preset & Status */}
        <div className="flex items-center gap-3">
          <span className="text-zinc-500">PRESET 1</span>
          <div className="h-4 w-px bg-zinc-800" />

          {/* Badge */}
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-zinc-400">Connection is stable</span>
          </div>
        </div>

        {/* Right: Stats & Region */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-zinc-400">
            <span className="bg-zinc-900 px-2 py-1 rounded text-xs">$102.7K</span>
            <span className="bg-zinc-900 px-2 py-1 rounded text-xs">$3389</span>
            <span className="bg-zinc-900 px-2 py-1 rounded text-xs">$157.63</span>
          </div>

          <div className="h-4 w-px bg-zinc-800" />

          {/* Region Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:bg-zinc-900 h-6">
                GLOBAL
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
              <DropdownMenuItem className="text-zinc-300 cursor-pointer text-xs">GLOBAL</DropdownMenuItem>
              <DropdownMenuItem className="text-zinc-300 cursor-pointer text-xs">US</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
