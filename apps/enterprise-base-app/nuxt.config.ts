// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/main.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/supabase',
  ],
  supabase: {
    //? Deactivates the automatic login redirect
    redirect: false
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
