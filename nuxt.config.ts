// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
// @ts-ignore
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
