require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const formData = require('form-data');
const Mailgun = require('mailgun.js');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.NEXT_MAILGUN_API_KEY
});

app.post('/subscribe', async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send({ message: 'Name and email are required' });
  }

  try {
    const response = await mg.messages.create(process.env.NEXT_MAILGUN_DOMAIN, {
      from: `Excited User <mailgun@${process.env.NEXT_MAILGUN_DOMAIN}>`,
      to: [email],
      subject: "Subscription Confirmation",
      text: `Hello ${name}, thank you for subscribing!`,
      html: `<h1>Hello ${name}, thank you for subscribing!</h1>`
    });

    res.send({ message: 'Subscription successful', data: response });
  } catch (error) {
    res.status(500).send({ message: 'Error subscribing', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
