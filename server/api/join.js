import mongoose from 'mongoose'
import nodemailer from 'nodemailer'

// const uri = 'mongodb+srv://admin:XP5bSXGijZt2275y@therig-cluster0.54eypo6.mongodb.net/?retryWrites=true&w=majority&appName=therig-Cluster0'

// Load environment variables from .env file
require('dotenv').config()

const uri = process.env.MONGODB_URI

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const CommentSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  comments: String
})

const Comment = mongoose.model('Comment', CommentSchema)

export default async (req, res) => {
  const { name, email, phone, comments } = req.body

  const newComment = new Comment({ name, email, phone, comments })
  await newComment.save()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_PORT === '465', // true for port 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  const mailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: 'Join the Waitlist Confirmation',
    text: `Thank you for joining the waitlist, ${name}!`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString())
    }
    res.status(200).send('Success')
  })
}
