export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",
  // mode: 'spa', // todo

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Klub investorů",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: `~/plugins/unicon.js`, mode: "client" },
    { src: `~/plugins/velocity.js`, mode: "client" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [{ path: "~/components", prefix: "v", pathPrefix: false }],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/tailwindcss"],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/google-fonts",
    "@nuxtjs/strapi",
    "@nuxtjs/markdownit",
    "@nuxtjs/gtm"
  ],
  strapi: {
    // Options
    url: process.env.STRAPI_URL
  },
  gtm: {
    id: process.env.GTM_WEB
  },
  googleFonts: {
    families: {
      Inter: [400, 500, 700]
    }
  },
  markdownit: {
    runtime: true // Support `$md()`
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // https://dev.to/lukeocodes/make-nuxt-js-go-brrrrrrrr-30-minute-to-1-minute-builds-on-netlify-f6e
    html: {
      minify: {
        minifyCSS: false,
        minifyJS: false
      }
    }
  }
};
