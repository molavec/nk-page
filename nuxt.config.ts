import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss() as any],
  },

  css: ['~~/public/assets/css/main.css'],
  modules: ['@nuxtjs/i18n'],

  i18n: {
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'es', file: 'es.json', name: 'Español' },
      { code: 'pt', file: 'pt.json', name: 'Português' }
    ],
    defaultLocale: 'en',
    langDir: 'locales/',
    strategy: 'no_prefix'
  }
})