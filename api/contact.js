import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = request.body || {};

  if (!name || !email || !message) {
    return response.status(400).json({ error: 'Name, email, and message are required.' });
  }

  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.TO_EMAIL || 'ifadathamadi@gmail.com'],
      subject: `New contact message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return response.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Email send failed:', error);
    return response.status(500).json({ error: 'Failed to send your message. Please try again later.' });
  }
}
