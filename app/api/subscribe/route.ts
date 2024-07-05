// pages/api/subscribe.js or .ts
import type { NextApiRequest, NextApiResponse } from 'next';
const formData = require('form-data');
const Mailgun = require('mailgun.js');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Initialize Mailgun
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });

    const { name, email } = req.body;

    try {
      // Send email via Mailgun
      const msg = await mg.messages.create('sandbox-123.mailgun.org', {
        from: "Excited User <mailgun@sandbox62b5ce5d4c604184955ae54f083c2b1c.mailgun.org>",
        to: [email], // Use the email from the request
        subject: "Hello",
        text: `Hello ${name}, Testing some Mailgun awesomeness!`,
        html: `<h1>Hello ${name}, Testing some Mailgun awesomeness!</h1>`
      });

      console.log(msg);
      res.status(200).json({ message: 'Subscription successful!' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    // Method Not Allowed
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}