import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/api/contact', (req, res) => {
  const subject = `${req.body.subject}${req.body.email}${req.body.name}`;
  const message = `${req.body.message}`;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: process.env.NODEMAILER_RECEIVER,
    subject,
    text: message,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
      res.redirect('/');
    }
  });
});

export default router;
