// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'services',
      meta: [
        { name: 'description', content: 'services layer' }
      ],
    }
  }
})
