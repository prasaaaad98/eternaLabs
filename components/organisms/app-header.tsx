"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const NAV_ITEMS = [
  { label: "Discover", href: "#" },
  { label: "Pulse", href: "#", active: true },
  { label: "Trackers", href: "#" },
  { label: "Perpetuals", href: "#" },
  { label: "Yield", href: "#" },
  { label: "Vision", href: "#" },
  { label: "Portfolio", href: "#" },
]

const ChevronDownIcon = () => (
  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
)

const StarIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const BellIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
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

const UserIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

export default function AppHeader() {
  return (
    <header className="border-b border-zinc-800 bg-[#030712] px-6 py-4">
      <div className="flex items-center justify-between gap-4">
        {/* Logo & Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-cyan-400 rounded flex items-center justify-center font-bold text-sm text-black">
              Δ
            </div>
            <span className="font-bold text-lg text-white">AXIOM Pro</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  item.active ? "text-cyan-400 font-medium" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-sm">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search by token or CA…"
              className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
            />
            <kbd className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-zinc-500 pointer-events-none">
              /
            </kbd>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Network Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
              >
                SOL
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
              <DropdownMenuItem className="text-zinc-300 cursor-pointer">SOL</DropdownMenuItem>
              <DropdownMenuItem className="text-zinc-300 cursor-pointer">ETH</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Deposit CTA */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4" size="sm">
            Deposit
          </Button>

          {/* Icons */}
          <button className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors">
            <StarIcon />
          </button>
          <button className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors">
            <BellIcon />
          </button>
          <button className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors">
            <SettingsIcon />
          </button>
          <button className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors">
            <UserIcon />
          </button>

          {/* Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-zinc-400 hover:text-zinc-200 transition-colors">
                <MenuIcon />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-800">
              <DropdownMenuItem className="text-zinc-300 cursor-pointer">Settings</DropdownMenuItem>
              <DropdownMenuItem className="text-zinc-300 cursor-pointer">Help</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
