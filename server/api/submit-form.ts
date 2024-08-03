import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, phone, comments } = body

  const transporter = nodemailer.createTransport({
    service: 'mail.therigvrarcade.com',
    auth: {
      user: 'admin@therigvrarcade.com',
      pass: 'JoeBiden@2024'
    }
  })

  const mailOptions = {
    from: 'no-reply@therigvrarcade.com',
    to: email,
    subject: 'The RIG VR Arcade Waitlist Confirmation',
    text: `Thank you for joining the waitlist, ${name}! We'll contact you soon.`
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error.toString())
      }
      resolve({
        id: new Date().getTime(),
        text: comments,
        name: name
      })
    })
  })
})
