export default defineNuxtConfig({
  modules: ['../src/module', '@pinia/nuxt', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  ssr: true,
  experimental: {
    componentIslands: true
  }
})
