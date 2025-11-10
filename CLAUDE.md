# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 application for "Nano Banana" - an AI image editing tool that allows users to transform images using text prompts. The project uses React 19, TypeScript, and Tailwind CSS with shadcn/ui components.

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables for theming
- **State Management**: React hooks (useState, useRef)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - React components including landing page sections and UI components
- `components/ui/` - shadcn/ui component library
- `lib/` - Utility functions (cn helper for className merging)
- `hooks/` - Custom React hooks (mobile detection, toast notifications)
- `styles/` - Global CSS and Tailwind configuration

### Key Components
- `components/hero.tsx` - Main landing page hero section with image editor toggle
- `components/image-upload.tsx` - Core image upload and editing interface
- `components/ui/` - Reusable UI components from shadcn/ui

### Configuration
- **TypeScript**: Configured with strict mode and Next.js plugin
- **Tailwind**: Uses CSS variables for theming with "new-york" style from shadcn/ui
- **Next.js**: Configured to ignore TypeScript build errors and use unoptimized images

### Component Patterns
- All components use TypeScript with proper type definitions
- Client components are marked with "use client" directive
- UI components follow shadcn/ui patterns with className merging via `cn()` utility
- State management uses React hooks pattern
- File uploads handled with FileReader API for client-side preview

### Styling Approach
- Tailwind CSS with semantic color variables (primary, secondary, background, foreground)
- Components use shadcn/ui design system with consistent spacing and typography
- Responsive design with mobile-first approach
- CSS variables enable theme customization