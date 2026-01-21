// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/main.css'],
  googleFonts: {
    families: {
      'Playfair+Display': [400, 700, 900],
      'Plus+Jakarta+Sans': [300, 400, 500, 600, 700]
    },
    display: 'swap'
  }
})



