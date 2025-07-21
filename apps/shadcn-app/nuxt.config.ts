// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: ''
  },
  // shadcn: {
  //   /**
  //    * Prefix for all the imported component
  //    */
  //   prefix: '',
  //   /**
  //    * Directory that the component lives in.
  //    * @default "./components/ui"
  //    */
  //   componentDir: './components/ui',
  //   /**
  //    * Define the default theme and available themes.
  //    * The `default` theme will be applied if no theme is explicitly set.
  //    * The `themes` array lists all available themes.
  //    * Make sure 'neutral' is your default light theme and you add 'violet-light' and 'violet-dark'.
  //    */
  //   theme: {
  //     default: 'neutral', // Dein Standard-Theme (oft ein helles neutral)
  //     colorMode: 'light', // Standard-Farbmodus, kann später dynamisch geändert werden
  //     themes: ['neutral', 'violet-light', 'violet-dark'], // Füge deine neuen Themes hinzu
  //   },
  // },
  shadcn: {
    prefix: '',
    componentDir: './components/ui',
    theme: {
      default: 'neutral',
      colorMode: 'light', // Wichtig: Dies steuert, ob Shadcn die 'dark' Klasse hinzufügt.
      themes: ['neutral', 'neutral-dark', 'violet-light', 'violet-dark'],
    },
  },
  colorMode: {
    classSuffix: '' // Wichtig: @nuxtjs/color-mode fügt die Klasse 'dark' direkt hinzu.
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})