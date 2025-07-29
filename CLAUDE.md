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

## Dependency Management (CRITICAL - TAILWIND CSS v4 PROTECTION)

### Conservative Pinning Strategy
```json
{
  "react": "19.1.1",
  "react-dom": "19.1.1",
  "tailwindcss": "3.4.17"
}
```

### Known Problematic Dependencies - NEVER FORGET
- **Tailwind CSS v4**: BROKE THE ENTIRE BUILD IN JULY 2025
  - **Symptoms**: Module resolution errors, build failures
  - **Cause**: Beta version incompatible with Next.js
  - **Solution**: Emergency rollback to v3.4.17
  - **Prevention**: This dependency strategy was created specifically for this!

### Personal Website Specific Considerations
- **Notion API**: Blog functionality depends on stable client
- **Resend**: Contact form email delivery
- **Next-themes**: Dark/light mode toggle
- **SEO packages**: Meta tag generation

### Build Troubleshooting (Tailwind CSS v4 Emergency Procedures)
If you encounter build errors:
1. **Check for Tailwind CSS v4 first**: `npm list tailwindcss`
2. **Clear Next.js cache**: `rm -rf .next`
3. **Clear node_modules**: `rm -rf node_modules && npm install`
4. **Emergency rollback if v4 detected**:
   ```bash
   git checkout HEAD~1 -- package.json package-lock.json
   rm -rf .next node_modules
   npm install
   ```
5. **Test core features**: blog, contact form, theme toggle

### Personal Website Testing After Dependency Updates
Always test these core features:
- [ ] Homepage loads correctly
- [ ] Blog posts display (if using Notion CMS)
- [ ] Contact form submits successfully
- [ ] Dark/light theme toggle works
- [ ] All navigation functions
- [ ] SEO meta tags render
- [ ] Lighthouse scores remain 90+

### Emergency Commands (Saved the day in July 2025!)
```bash
# The exact commands that fixed the Tailwind CSS v4 crisis:
rm -rf .next                              # Clear Next.js cache
rm -rf node_modules && npm install        # Fresh install
npm run build                             # Test build
npm list tailwindcss                      # Check version
```