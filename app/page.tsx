"use client"

import { AppProvider } from "@/store/context"
import PulseShell from "@/components/organisms/pulse-shell"

export default function Home() {
  return (
    <AppProvider>
      <PulseShell />
    </AppProvider>
  )
}
