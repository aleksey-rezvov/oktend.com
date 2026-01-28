# oktend.com

Company website built with Next.js 14 (Static Site Generation), TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **pnpm** - Package manager

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (install with `npm install -g pnpm`)

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
```

This generates a static export in the `out/` directory that can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

### Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Main page
│   ├── not-found.tsx    # 404 page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section with typewriter
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects distribution
│   ├── Team.tsx         # Team with flip cards
│   ├── Technologies.tsx # Technology stack
│   ├── Principles.tsx   # Company principles
│   ├── Pricing.tsx      # Pricing options
│   ├── Footer.tsx       # Footer with contacts
│   └── ui/              # Reusable UI components
public/
├── img/                 # Images
└── fonts/               # Font files
```

## Deployment

The site is configured for static export. After running `pnpm build`, deploy the `out/` directory to your hosting provider.

For GitHub Pages, you can use GitHub Actions or deploy manually by pushing the `out/` directory to the `gh-pages` branch.

## License

Copyright © 2017-2026 OKTEND
