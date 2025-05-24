# Mark McDermott - Personal Website

My personal website built with Next.js, TypeScript, and Notion as a headless CMS.

![screenshot](screenshots/screenshot.png)

## Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Notion API](https://developers.notion.com/) - for blog content management
- [Tailwind CSS](https://tailwindcss.com) - for styling
- [Vercel OG](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) - for dynamic social images
- [Next Themes](https://github.com/pacocoursey/next-themes) - for dark mode
- [Framer Motion](https://www.framer.com/motion/) - for animations

## Features

- 📝 Blog powered by Notion CMS
- 🌓 Dark/light mode
- 📱 Fully responsive
- 🚀 Fast page loads with static generation
- 🔍 SEO optimized with comprehensive meta tags
- 📊 Analytics with Vercel
- 🖼️ Dynamic OG images with fallback support
- 🐦 Twitter card integration
- 📡 RSS feed
- 🎨 Visual category icons for media sections
- 📧 Contact form with email delivery via Resend

## Running Locally

### Prerequisites

1. Node.js 18+ and npm
2. A Notion account with a database for blog posts
3. Environment variables (see below)

### Environment Variables

Create a `.env.local` file with:

```bash
NEXT_PUBLIC_URL=http://localhost:3000
NOTION_TOKEN=your_notion_integration_token
NOTION_DATABASE_ID=your_notion_database_id
RESEND_API_KEY=your_resend_api_key # For contact form emails
```

### Notion Database Setup

Your Notion database needs these properties:
- `title` (title)
- `description` (text)
- `slug` (text) - for URL paths
- `published` (checkbox)
- `publishedAt` (date)
- `hashtags` (multi-select)
- `inProgress` (checkbox)
- `cover` (files & media) - optional

### Installation

```bash
# Clone the repository
git clone https://github.com/mhmcdermott/markmcdermott.co.git
cd markmcdermott.co

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript type checking
npm run format       # Format code with Prettier
```

## Project Structure

```
├── public/           # Static assets
│   └── og-default.svg # Fallback OG image
├── src/
│   ├── components/   # React components
│   ├── data/         # Static data (bio, work history, etc.)
│   ├── images/       # Image assets
│   │   ├── life/     # Personal photos
│   │   ├── logos/    # Company logos
│   │   └── media/    # Media category icons
│   ├── lib/          # Utility functions and APIs
│   ├── pages/        # Next.js pages
│   └── styles/       # Global styles
├── .github/          # GitHub Actions workflows
└── CLAUDE.md         # AI assistant context
```

## Deployment

The site is automatically deployed to Vercel on push to the `master` branch.

## License

[MIT](LICENSE)

## Acknowledgments

This website was originally forked from [Bartosz Jarocki's personal website](https://github.com/BartoszJarocki/jarocki.me) and heavily customized.