// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@hebilicious/vue-query-nuxt",
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  tailwindcss: {
    cssPath: ['~/assets/css/main.css', { injectPosition: "first" }],
    configPath: 'tailwind.config.js',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})
