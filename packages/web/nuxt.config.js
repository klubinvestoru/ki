export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  mode: 'spa', // todo

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Káičko',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/strapi'],
  strapi: {
    // Options
  },
  googleFonts: {
    families: {
      'Inter': [400, 500, 700],
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
