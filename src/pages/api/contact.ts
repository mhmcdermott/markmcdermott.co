import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      error: 'Please fill in all fields' 
    });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      message: 'Invalid email',
      error: 'Please provide a valid email address' 
    });
  }

  try {
    // Option 1: Send to a webhook (e.g., Discord, Slack, or Zapier)
    // This is the simplest approach without additional services
    
    // Option 2: Use Vercel's built-in email service (requires configuration)
    // You can use @vercel/email or integrate with SendGrid, Resend, etc.
    
    // For now, let's log the submission (you can see these in Vercel Functions logs)
    console.log('Contact form submission:', {
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });

    // If you have a Discord webhook, uncomment and add your webhook URL:
    /*
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `New contact form submission:\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`
        })
      });
    }
    */

    // If you want to use Resend (recommended for Vercel):
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@markmcdermott.co',
      to: 'mark@markmcdermott.me.uk',
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    */

    return res.status(200).json({ 
      message: 'Thank you for your message! I will get back to you soon.' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      message: 'Failed to send message',
      error: 'Something went wrong. Please try again later.' 
    });
  }
}