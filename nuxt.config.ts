// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  alias: {
    '@' : resolve(__dirname, "/"),
  },
  css: ['~/assets/css/main.css',],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  title: 'The Rig',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  }
})
