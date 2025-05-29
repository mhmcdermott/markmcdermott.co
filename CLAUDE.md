# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Development Commands

```bash
# Development
npm run dev          # Start Next.js development server

# Build & Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm run format       # Format code with Prettier

# After build
npm run postbuild    # Generates sitemap (runs automatically after build)
```

## Environment Setup

Required environment variables (create `.env.local`):
- `NEXT_PUBLIC_URL` - Base URL for canonical links and OG images
- `NOTION_TOKEN` - Notion API authentication token
- `NOTION_DATABASE_ID` - ID of the Notion database containing blog posts

## High-Level Architecture

### Content Management
The site uses **Notion as a headless CMS** for blog posts/notes. The Notion database supports these properties:

**Core Fields** (Original):
- `id`, `created_time`, `last_edited_time`, `cover`
- `hashtags` (multi-select), `title`, `description`, `slug`
- `publishedAt` (date), `inProgress` (checkbox)
- `contentStatus` (select) - Draft/In Review/Ready to Publish/Published/Archived

**SEO Fields** (Enhanced):
- `seoTitle` (rich text) - SEO-optimized title for search engines
- `metaDescription` (rich text) - Meta description for search results
- `excerpt` (rich text) - Short snippet for social sharing

**Content Metrics** (Enhanced):
- `readingTime` (number) - Estimated reading time in minutes
- `wordCount` (number) - Total word count of the post

The `notesApi` (src/lib/notesApi.ts) handles all Notion interactions, including:
- Fetching posts with pagination
- Transforming Notion blocks to renderable content
- Image optimization with plaiceholder for blur placeholders

### Routing Structure
- `/` - Homepage with latest posts and resume
- `/notes` - All blog posts
- `/notes/[slug]` - Individual blog post
- `/tags/[tag]` - Posts filtered by tag
- `/about` - Extended bio
- `/work` - Work history
- `/media` - Podcasts, conferences, videos
- `/api/og` - Dynamic OG image generation
- `/api/rss.xml` - RSS feed

### Key Data Sources
All personal/professional data is centralized in `src/data/lifeApi.tsx`:
- Personal info (Name, About, AboutExtended)
- Work history and projects (MyCurrentProjects, Work)
- Social media links (SocialMedia)
- Quotes collection (Quotes)
- Media appearances (Tools object with podcasts, conferences, videos)

### Image Management
- Travel/personal photos in `src/images/travel/`
- Company logos in `src/images/logos/`
- All images must be imported and exported from `src/images/travel/index.ts`
- Next.js Image component used throughout for optimization

### Styling Approach
- Tailwind CSS for all styling
- Dark/light theme support via next-themes
- Custom theme colors defined in tailwind.config.js
- Prose styling for blog content via @tailwindcss/typography

### SEO & Social
- Dynamic OG images generated via Vercel OG (api/og.tsx)
- NextSEO for meta tags management
- Sitemap generation with next-sitemap
- RSS feed generation at /api/rss.xml

### Key Technical Decisions
- Static generation with ISR (10 second revalidation) for blog posts
- Framer Motion for page transitions and animations
- All external links open in new tabs via ExternalLink component
- Blog redirects: `/blog/*` → `/notes/*` (permanent)