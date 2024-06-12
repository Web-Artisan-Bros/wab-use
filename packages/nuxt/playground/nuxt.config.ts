export default defineNuxtConfig({
  modules: ['../src/module', '@pinia/nuxt'],
  devtools: { enabled: true },
  ssr: true,
  experimental: {
    componentIslands: true
  }
})
