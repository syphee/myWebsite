# React Refresher - Portfolio Website

## Overview
A Next.js 13 portfolio website for James Landicho, built with React, TypeScript, and Tailwind CSS. This is a personal portfolio site featuring sections for home, about, projects, achievements, interests, and contact.

## Project Architecture
- **Framework**: Next.js 13.5.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **UI Components**: Headless UI, Hero Icons

## Directory Structure
```
src/
  app/
    about/         - About page
    assets/        - Shared components (header, navDrawer, etc.)
    contactme/     - Contact page
    home/          - Home/landing page
    myachievements/- Achievements page
    myinterests/   - Interests page
    projects/      - Projects page
    layout.tsx     - Root layout
    page.tsx       - Root page (redirects to /home)
    globals.css    - Global styles
public/            - Static assets
```

## Development
- **Dev Server**: `npm run dev -- -p 5000 -H 0.0.0.0`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Port**: 5000

## Configuration
- `next.config.js` - Next.js config with redirects and headers for iframe compatibility
- `tailwind.config.ts` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration

## Recent Changes
- Feb 2026: Configured for Replit environment with port 5000 and iframe-compatible headers
