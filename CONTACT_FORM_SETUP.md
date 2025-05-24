# Contact Form Email Setup

The contact form is now set up with a Vercel serverless function. To receive emails, choose one of these options:

## Option 1: Discord/Slack Webhook (Easiest - Free)
1. Create a webhook in your Discord server or Slack workspace
2. Add to Vercel environment variables:
   ```
   DISCORD_WEBHOOK_URL=your_webhook_url_here
   ```
3. Uncomment the Discord webhook code in `/api/contact.ts`

## Option 2: Resend (Recommended for Email - Free tier available)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install: `npm install resend`
4. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=your_api_key_here
   ```
5. Uncomment the Resend code in `/api/contact.ts`

## Option 3: SendGrid (More complex - Free tier available)
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Verify your domain
3. Get API key
4. Install: `npm install @sendgrid/mail`
5. Update `/api/contact.ts` with SendGrid code

## Option 4: Vercel Email (Preview)
Vercel is working on native email support. Check their docs for updates.

## Current Setup
The form currently:
- Validates all fields
- Sends data to `/api/contact`
- Logs submissions to Vercel Functions logs
- Shows success/error messages to users

To view form submissions without email:
1. Go to Vercel Dashboard
2. Navigate to Functions tab
3. Check logs for `/api/contact`