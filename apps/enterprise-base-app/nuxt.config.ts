// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
    '@nuxtjs/i18n'
  ],
  supabase: {
    //? Deactivates the automatic login redirect
    redirect: false
  },
  i18n: {
    // for SEO and performance, set the base URL and locales
    // baseUrl: 'https://my-nuxt-app.com',
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en.json' },
      { code: 'de', iso: 'de-DE', name: 'Deutsch', file: 'de.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})