const pkg = require('./package')
const axios = require("axios");

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'cs',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    title: 'Investiční konference',
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap', rel: 'stylesheet' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/components' },
    { src: '~/plugins/filters' },
    { src: '~/plugins/vue-burger-menu', mode: 'client' },
    { src: '~/plugins/vue-scrollto' },
    { src: '~/plugins/vue-lazyload' },
    { src: '~/plugins/vue-js-modal' },
    { src: '~/plugins/vue2-google-maps', mode: 'client' },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    ['storyblok-nuxt', { accessToken: 'uHtbq0xGpEUMmkz9jkriDwtt', cacheProvider: 'memory' }],
    ['@nuxtjs/google-analytics', { id: 'UA-135348022-1' }]
  ],

  generate: {
    routes: function () {
      return axios.get(
        "https://api.storyblok.com/v1/cdn/stories?version=published&token=Z2bAdH0VpQPS4xehcmXnJQtt&cv=" +
        Math.floor(Date.now() / 1e3)
      )
        .then(res => {
          const blogPosts = res.data.stories.map(bp => bp.full_slug);
          return [
            '/',
            ...blogPosts
          ]
        });
    }
  },

  /*
  ** Router middleware
  */
  router: {
    // middleware: 'setCacheVersion'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      transpile: [/^vue2-google-maps($|\/)/]
    }
  }
}
