// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    '@' : resolve(__dirname, "/"),
  },
  app: {
    head: {
      title: 'The RIG VR Arcade Gaming Centre in Bengaluru - Join the Waitlist Now!',
      titleTemplate: '%s | The RIG VR Arcade',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Experience the ultimate VR gaming in Bengaluru. Join the waitlist for our new The RIG VR arcade gaming centre today!' },
        { name: 'keywords', content: 'VR gaming, virtual reality, arcade, gaming centre, Bengaluru, Bangalore' },
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: 'DCAC and Simulation Tech' }
      ],
      link: [
        { rel: 'canonical', href: 'https://www.therigvrarcade.com' }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The RIG VR Arcade",
            "description": "Experience the ultimate VR gaming in Bengaluru. Join the waitlist for our new The RIG VR arcade gaming centre today!",
            "address": {
              "@type": "125/2, 3rd Floor, Byrathi Main Road, Hennur Main Rd, Post, Kothanur, Bengaluru, Karnataka 560077",
              "addressLocality": "Bengaluru",
              "addressRegion": "KA",
              "addressCountry": "IN"
            },
            "url": "https://www.therigvrarcade.com",
            "telephone": "+91 8080737737"
          }
        }
      ],
    },
    theme: {
      dark: true,
      colors: {
        primary: '#FF6800',
      }
    }
  },
  css: ['~/assets/css/main.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
