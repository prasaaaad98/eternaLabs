"use client"

import Image from "next/image"

interface TokenAvatarProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
}

export default function TokenAvatar({ src, alt, size = "md" }: TokenAvatarProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-zinc-800 flex-shrink-0`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={size === "lg" ? 64 : size === "md" ? 48 : 32}
        height={size === "lg" ? 64 : size === "md" ? 48 : 32}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
