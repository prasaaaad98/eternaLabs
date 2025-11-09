"use client"

import AppHeader from "@/components/organisms/app-header"
import PulseToolbar from "@/components/organisms/pulse-toolbar"
import BottomStatusBar from "@/components/organisms/bottom-status-bar"
import TokenColumns from "@/components/organisms/token-columns"
import TokenDetailModal from "@/components/organisms/token-detail-modal"

export default function PulseShell() {
  return (
    <div className="flex flex-col h-screen bg-[#030712]">
      {/* Header */}
      <AppHeader />

      {/* Toolbar */}
      <PulseToolbar />

      {/* Main Content */}
      <main className="flex-1 overflow-hidden">
        <TokenColumns />
      </main>

      {/* Bottom Status Bar */}
      <BottomStatusBar />

      {/* Modals */}
      <TokenDetailModal />
    </div>
  )
}
