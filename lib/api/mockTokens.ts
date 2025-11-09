import type { Token, TokenColumn } from "@/types/token"

const MOCK_TOKENS: Record<TokenColumn, Token[]> = {
  NEW_PAIRS: [
    {
      id: "1",
      name: "SMILE",
      symbol: "Smile More",
      tagline: "Smile More",
      avatarUrl: "/smile-token.jpg",
      ageSeconds: 3,
      column: "NEW_PAIRS",
      marketCapUsd: 4410,
      volumeUsd: 3000,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 0.098, unit: "%", direction: "up", color: "green" },
        { id: "m2", label: "TX", value: 17, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "JJ",
      symbol: "Jewish Jugs",
      tagline: "Jewish Jugs",
      avatarUrl: "/jj-token.jpg",
      ageSeconds: 22,
      column: "NEW_PAIRS",
      marketCapUsd: 5130,
      volumeUsd: 380,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 0.03, unit: "%", direction: "up", color: "green" },
        { id: "m2", label: "TX", value: 4, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "3",
      name: "viper",
      symbol: "trimeresurus insularis",
      tagline: "trimeresurus insularis",
      avatarUrl: "/viper-token.jpg",
      ageSeconds: 5,
      column: "NEW_PAIRS",
      marketCapUsd: 4410,
      volumeUsd: 785,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 0.019, unit: "%", direction: "down", color: "red" },
        { id: "m2", label: "TX", value: 7, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  FINAL_STRETCH: [
    {
      id: "4",
      name: "El Jefe",
      symbol: "El Jefe Pequeno",
      tagline: "El Jefe Pequeno",
      avatarUrl: "/el-jefe-token.jpg",
      ageSeconds: 13,
      column: "FINAL_STRETCH",
      marketCapUsd: 26800,
      volumeUsd: 13000,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 0.05, unit: "%", direction: "up", color: "green" },
        { id: "m2", label: "TX", value: 203, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "5",
      name: "xAI",
      symbol: "xAI",
      tagline: "xAI",
      avatarUrl: "/xai-token.jpg",
      ageSeconds: 14,
      column: "FINAL_STRETCH",
      marketCapUsd: 4730,
      volumeUsd: 1000,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 0.02, unit: "%", direction: "down", color: "red" },
        { id: "m2", label: "TX", value: 203, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "6",
      name: "Experiment",
      symbol: "The Mushroom Experiment",
      tagline: "The Mushroom Experiment",
      avatarUrl: "/experiment-token.jpg",
      ageSeconds: 12,
      column: "FINAL_STRETCH",
      marketCapUsd: 328000,
      volumeUsd: 13000,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 0.05, unit: "%", direction: "down", color: "red" },
        { id: "m2", label: "TX", value: 20, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
  MIGRATED: [
    {
      id: "7",
      name: "TIMI",
      symbol: "MetaArenaGaming",
      tagline: "MetaArenaGaming",
      avatarUrl: "/timi-token.jpg",
      ageSeconds: 19,
      column: "MIGRATED",
      marketCapUsd: 2060000,
      volumeUsd: 37000,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 98, unit: "%", direction: "down", color: "red" },
        { id: "m2", label: "TX", value: 263, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "8",
      name: "ZEM",
      symbol: "Zero Effort Meme",
      tagline: "Zero Effort Meme",
      avatarUrl: "/zem-token.jpg",
      ageSeconds: 25,
      column: "MIGRATED",
      marketCapUsd: 14700,
      volumeUsd: 14000,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 0.5, unit: "%", direction: "up", color: "green" },
        { id: "m2", label: "TX", value: 38, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "9",
      name: "BALS",
      symbol: "Wiggy Bals",
      tagline: "Wiggy Bals",
      avatarUrl: "/bals-token.jpg",
      ageSeconds: 53,
      column: "MIGRATED",
      marketCapUsd: 505000,
      volumeUsd: 16000,
      actionLabel: "0 SOL",
      tags: ["MC", "DS"],
      metrics: [
        { id: "m1", label: "Change", value: 96, unit: "%", direction: "down", color: "red" },
        { id: "m2", label: "TX", value: 99, direction: "neutral" },
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ],
}

export async function fetchTokensByColumn(column: TokenColumn): Promise<Token[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 200))
  return MOCK_TOKENS[column] || []
}

export function getMockTokenById(id: string): Token | undefined {
  for (const column of Object.values(MOCK_TOKENS)) {
    const token = column.find((t) => t.id === id)
    if (token) return token
  }
  return undefined
}
