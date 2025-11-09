# Axiom Pro Pulse - Token Discovery UI Clone

A pixel-perfect clone of Axiom Pro's **Pulse** token discovery dashboard, built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Redux Toolkit**, and **React Query**.

## Overview

This project recreates the sophisticated trading-terminal-style UI from Axiom Pro's Pulse feature, featuring:

- **Three Dynamic Columns**: New Pairs, Final Stretch, and Migrated tokens
- **Live Price Updates**: Mock WebSocket for real-time market cap and volume changes
- **Interactive Sorting**: Per-column sorting by Market Cap, Volume, or Age
- **Token Detail Modal**: Click any token to view comprehensive metrics
- **Dark Trading UI**: Professional dark theme optimized for trading terminals
- **Responsive Design**: Fully responsive from mobile (320px) to desktop
- **Smooth Interactions**: Hover effects, tooltips, and polished transitions

## Architecture

### Folder Structure

\`\`\`
app/
├── layout.tsx              # Root layout with fonts and metadata
├── page.tsx               # Main Pulse page with Redux Provider
└── globals.css            # Tailwind config & design tokens

components/
├── atoms/                 # Reusable UI primitives
│   ├── stat-pill.tsx
│   ├── token-avatar.tsx
│   ├── tooltip-icon.tsx
│   ├── token-card-skeleton.tsx
│   └── token-avatar.tsx
├── molecules/             # Composed components
│   ├── token-card.tsx
│   ├── token-card-header.tsx
│   ├── token-card-stats.tsx
│   ├── token-column.tsx
│   └── column-header.tsx
└── organisms/             # Full features/sections
    ├── pulse-shell.tsx
    ├── app-header.tsx
    ├── pulse-toolbar.tsx
    ├── bottom-status-bar.tsx
    ├── token-columns.tsx
    └── token-detail-modal.tsx

lib/
├── api/
│   └── mockTokens.ts      # Mock token data & API
├── websocket/
│   └── tokenSocket.ts     # WebSocket simulation
└── utils/
    └── formatters.ts      # Currency, percent, date formatting

store/
├── index.ts               # Redux store configuration
├── hooks.ts               # Typed useDispatch/useSelector
└── slices/
    ├── tokensSlice.ts     # Token data management
    └── uiSlice.ts         # UI state (sorting, modals, presets)

hooks/
└── useLiveTokenUpdates.ts # Hook to enable live price updates

types/
└── token.ts               # TypeScript type definitions

public/
└── *-token.jpg            # Token avatars
\`\`\`

### State Management

**Redux Toolkit** manages:
- `tokensSlice`: Token data, live price updates
- `uiSlice`: Active preset, display mode, sorting state, modal visibility

**React Query** handles:
- Data fetching for each column
- Caching and stale-while-revalidate behavior
- Independent loading states per column

## Key Features

### 1. Token Cards
Each card displays:
- Token avatar, name, and tagline
- Age (time since listing)
- Market cap and volume
- Key metrics with color-coded indicators
- Quick action links (explorer, share, watch)
- Trade button with wallet connection stub

### 2. Sorting
Per-column sorting toggles:
- **Market Cap**: Sort by market capitalization
- **Volume**: Sort by 24h trading volume
- **Age**: Sort by time since token listing
- **Directions**: Asc → Desc → Default

### 3. Live Updates
Mock WebSocket (`lib/websocket/tokenSocket.ts`):
- Updates 2-4 random tokens every 2-3 seconds
- Realistic market cap/volume deltas (±2-6%)
- Smooth color transitions for metric changes
- Subscriber pattern for clean connection management

### 4. User Interactions
- **Token Modal**: Click card → detailed view
- **Tooltips**: Hover on icons for descriptions
- **Dropdowns**: Network selector, display mode, region
- **Preset Buttons**: Quick filter switching (0, P1, P2, P3)

### 5. Responsive Design
- **Desktop (1024px+)**: Three columns side-by-side
- **Tablet (768px)**: Two columns per row
- **Mobile (320px+)**: Vertical column stacking
- Horizontal scroll for overflow on small screens

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + Flexbox
- **State**: Redux Toolkit + React Query
- **UI Components**: shadcn/ui + Radix UI primitives
- **Utilities**: Custom formatters for currency/dates

## Setup & Development

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)

### Installation

\`\`\`bash
# Clone the repo
git clone <repo-url>
cd axiom-pulse

# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Open browser
# http://localhost:3000
\`\`\`

### Build for Production

\`\`\`bash
pnpm build
pnpm start
\`\`\`

## Performance Optimizations

- **Component Memoization**: `React.memo` on pure components
- **Selector Memoization**: Redux selectors cached
- **Dynamic Sorting**: Memoized sort calculations per column
- **Lazy Loading**: Skeleton states during data fetch
- **Custom Scrollbar**: Lightweight scrollbar styling
- **No Layout Shift**: Fixed card heights prevent CLS

## Browser Support

- Chrome/Brave (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Modern browsers with ES2020+ support required.

## Accessibility

- ✓ Semantic HTML elements
- ✓ ARIA roles and labels on interactive elements
- ✓ Keyboard navigation (Tab, Enter)
- ✓ Focus styles on all interactive elements
- ✓ Color contrast meets WCAG AA standards
- ✓ Tooltips for icon-only buttons

## Future Enhancements

- [ ] Real WebSocket integration (Birdeye API)
- [ ] Advanced filtering (price ranges, age ranges)
- [ ] Chart integration (TradingView Lightweight)
- [ ] User watchlist with persistence
- [ ] Dark/light theme toggle
- [ ] Custom column layouts
- [ ] Export to CSV functionality
- [ ] Performance metrics dashboard

## Notes

- Token avatars are placeholder images
- Mock API returns static data (can be replaced with real API)
- WebSocket updates are simulated with `setInterval`
- Modal actions (Trade, Share, etc.) are stubs ready for implementation

## License

MIT License - See LICENSE file for details

---

**Built with ❤️ using v0.app**
