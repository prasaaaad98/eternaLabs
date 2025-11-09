"use client"

export default function TokenCardSkeleton() {
  return (
    <div className="w-full bg-[#020617] border border-zinc-800 rounded-2xl p-4 animate-pulse">
      <div className="flex gap-3 items-start mb-3">
        <div className="w-12 h-12 rounded-full bg-zinc-800" />
        <div className="flex-1">
          <div className="h-4 bg-zinc-800 rounded w-24 mb-2" />
          <div className="h-3 bg-zinc-800 rounded w-32 mb-2" />
          <div className="h-2 bg-zinc-800 rounded w-20" />
        </div>
      </div>

      <div className="my-3 h-px bg-zinc-800" />

      <div className="space-y-2">
        <div className="h-3 bg-zinc-800 rounded w-full" />
        <div className="h-3 bg-zinc-800 rounded w-3/4" />
        <div className="flex gap-1.5 mt-2">
          <div className="h-5 bg-zinc-800 rounded-full w-12" />
          <div className="h-5 bg-zinc-800 rounded-full w-12" />
          <div className="h-5 bg-zinc-800 rounded-full w-12" />
        </div>
      </div>

      <div className="mt-3 flex justify-between">
        <div className="h-4 bg-zinc-800 rounded w-12" />
        <div className="h-6 bg-zinc-800 rounded-full w-16" />
      </div>
    </div>
  )
}
