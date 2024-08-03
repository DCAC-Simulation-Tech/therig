// import { defineEventHandler, readBody } from 'h3'
// import nodemailer from 'nodemailer'

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event)

//   const { name, email, phone, comments } = body

//   const transporter = nodemailer.createTransport({
//     service: 'mail.therigvrarcade.com',
//     auth: {
//       user: 'admin@therigvrarcade.com',
//       pass: 'JoeBiden@2024'
//     }
//   })

//   const mailOptions = {
//     from: 'no-reply@therigvrarcade.com',
//     to: email,
//     subject: 'The RIG VR Arcade Waitlist Confirmation',
//     text: `Thank you for joining the waitlist, ${name}! We'll contact you soon.`
//   }

//   return new Promise((resolve, reject) => {
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         reject(error.toString())
//       }
//       resolve({
//         id: new Date().getTime(),
//         text: comments,
//         name: name
//       })
//     })
//   })
// })


import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, comments } = body

  const config = useRuntimeConfig()

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: parseInt(config.smtpPort, 10),
    secure: false, // Set to true if using port 465
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass
    }
  })

  const mailOptions = {
    from: config.smtpFrom,
    to: email,
    subject: 'VR Arcade Waitlist Confirmation',
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
