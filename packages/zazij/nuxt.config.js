
export default {
  components: [{ path: '~/components/', prefix: 'v' }],
  /*
  ** Headers of the page
  */
  head: {
    title: 'Přidej se ke Klubu!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: `@/plugins/components.js` },
    { src: `@/plugins/unicon.js` },
    { src: `@/plugins/velocity.js`, mode: 'client' },
  ],
  buildModules: ['@nuxtjs/tailwindcss'],
}
