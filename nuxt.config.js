module.exports = {
  telemetry: false,
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8085
  },
  head: {
    title: 'Onboarding',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Roboto+Condensed:wght@400;700&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' }
    ]
  },
  css: ['@/assets/theme.scss'],
  plugins: ['@/plugins/vuelidate.js'],
  components: true,
  // buildModules: ['@nuxtjs/eslint-module'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/cloudinary',
    '@nuxtjs/axios'
  ],
  bootstrapVue: {
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    icons: true
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_SECRET,
    apiSecret: process.env.CLOUDINARY_KEY,
    useComponent: true
  },
  axios: {
    browserBaseURL: `//${process.env.BROWSER_URL}`
  },
  // googleAnalytics: {
  //   id: process.env.GA_PROPERTY,
  //   debug: {
  //     enabled: false,
  //     sendHitTask: true
  //   }
  // },
  build: {
    extend (config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient
          ? 'source-map'
          : 'inline-source-map'
      }
    }
  }
}
