import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

  // Validate field lengths to prevent abuse
  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ 
      message: 'Input too long',
      error: 'Please keep your inputs within reasonable limits' 
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

  // Sanitize inputs to prevent XSS
  const sanitizeHtml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  };

  const sanitizedName = sanitizeHtml(name);
  const sanitizedMessage = sanitizeHtml(message);

  try {
    // Log the submission (without sensitive data)
    console.log('Contact form submission:', {
      name: sanitizedName,
      emailDomain: email.split('@')[1], // Only log domain for privacy
      messageLength: message.length,
      timestamp: new Date().toISOString()
    });

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <noreply@contact.markmcdermott.me.uk>',
      to: ['mark@markmcdermott.me.uk'],
      subject: `Contact form submission from ${sanitizedName}`,
      text: `You have a new contact form submission:

Name: ${sanitizedName}
Email: ${email}

Message:
${message}

---
Sent from markmcdermott.co contact form`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${sanitizeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Sent from markmcdermott.co contact form</p>
      `,
      replyTo: email,
    });

    console.log('Email sent successfully:', data);

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