const path = require('path')
const glob = require('glob')

var dynamicRoutes = getDynamicPaths({
  '/posts': 'posts/*.md'
})

function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      var filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'posts' })
        .map((filepath) => `${url}/${path.basename(filepath, '.md')}`)
    })
  )
}

export default {
  generate: {
    routes: dynamicRoutes
  },

  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/custom.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-highlight'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'posts'),
        loader: 'frontmatter-markdown-loader'
      })
    }
  },

  router: {
    linkActiveClass: 'active',
    extendRoutes(routes, resolve) {
      routes.push(
        {
          path: '/artwork',
          beforeEnter() {
            location.href = 'https://instagram.com/zackproser'
          }
        },
        {
          path: '/shop',
          beforeEnter() {
            location.href = 'https://art.zackproser.com'
          }
        },
        {
          path: '/github',
          beforeEnter() {
            location.href = 'https://github.com/zackproser'
          }
        },
        {
          path: '/resume',
          beforeEnter() {
            location.href = 'https://www.linkedin.com/in/zackproser'
          }
        },
        {
          path: '/codepen',
          beforeEnter() {
            location.href = 'https://codepen.io/zackproser'
          }
        }
      )
    }
  }
}
