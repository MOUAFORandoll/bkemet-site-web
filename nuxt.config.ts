// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  site: {
    url: 'https://bkemet.com',
    name: 'KEMET Group',
    description: 'Votre pont logistique avec le monde - Excellence en transport et voyages.',
    defaultLocale: 'fr',
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'KEMET Group | Logistique & Voyage',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
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




