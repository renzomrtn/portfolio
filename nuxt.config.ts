import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  
  css: [
    '~/assets/styles/main.css',
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],
  
  nitro: {
    preset: 'netlify',
  },
  
  app: {
    head: {
      title: 'Renzomrtn',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css'
        }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose',
        },
      ],
    },
  },
  
  compatibilityDate: '2025-11-12',
})