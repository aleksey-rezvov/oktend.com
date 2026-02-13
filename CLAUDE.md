# Claude Code Guide: oktend.com

## Purpose

OKTEND company website. Static site with Next.js 14 App Router, Framer Motion animations, ready for static hosting.

## Quick Reference

**For detailed information, read [README.md](README.md) first.**

## Tech Stack

- **Framework**: Next.js 14 (App Router, Static Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: pnpm
- **Deployment**: Static export to `out/` (GitHub Pages, Netlify, Vercel)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page
│   ├── not-found.tsx   # 404 page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation
│   ├── Hero.tsx        # Hero with typewriter effect
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects distribution
│   ├── Team.tsx        # Team with flip cards
│   ├── Technologies.tsx # Tech stack
│   ├── Principles.tsx  # Company principles
│   ├── Pricing.tsx     # Pricing options
│   ├── Footer.tsx      # Footer with contacts
│   └── ui/             # Reusable UI components
public/
├── img/                # Images
└── fonts/              # Font files
```

## Key Workflows

### Development

```bash
pnpm install     # Install dependencies
pnpm dev         # Start dev server (localhost:3000)
pnpm build       # Build static export to out/
```

### Deployment

After `pnpm build`, deploy the `out/` directory to:
- GitHub Pages (push to `gh-pages` branch or use Actions)
- Netlify (drag & drop or git integration)
- Vercel (automatic detection)

## Component Architecture

- **Header**: Sticky navigation with smooth scroll anchors
- **Hero**: Animated typewriter effect (Framer Motion)
- **Team**: Interactive flip cards with team member info
- **Projects**: Distribution visualization with statistics
- **Technologies**: Tech stack with hover effects
- **Pricing**: Three-tier pricing cards
- **Footer**: Contact information and links

## Information Hierarchy

```
README.md        ← DETAILED DOCUMENTATION (read first)
       ↓
CLAUDE.md        ← THIS FILE (quick reference for LLM)
```

## Development Guidelines

- **Node version**: Requires Node.js 18+
- **Animation performance**: Use Framer Motion's `layoutId` for smooth transitions
- **Static export**: All pages MUST be statically exportable (no server-side rendering)
- **Images**: Place in `public/img/`, reference as `/img/filename.ext`
- **Styling**: Use Tailwind utility classes, avoid custom CSS unless necessary

## Model Selection Strategy

### Planning Tasks (Use Opus 4.6)

- Redesigning site sections or layout
- Planning new animations or interactions
- Content structure decisions
- Adding new components or features

### Implementation Tasks (Use Sonnet 4.5)

- Component development and refactoring
- Styling updates (Tailwind classes)
- Framer Motion animation tweaks
- Bug fixes and debugging
- Content updates (text, images)

## External Resources

- **Workspace context**: See `../operative/.cursor/rules/000-workspace-structure.mdc`
- **LLM writing style**: See `../foreachpartners.com/.cursor/rules/common/302-llm-oriented-writing.mdc`
- **Company**: OKTEND © 2017-2026
