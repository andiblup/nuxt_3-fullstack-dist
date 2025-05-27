# nuxt\_3-fullstack-dist / i18n-app

Extensible Nuxt 3 starter with built-in internationalization (i18n) and language switching.

## 🚀 Included

* Nuxt 3
* Tailwind CSS (via @nuxtjs/tailwindcss)
* Pinia (state management)
* ESLint (JS, JSON, Markdown, Vue)
* Prettier (formatting, with TypeScript config)
* **Nuxt i18n** (with per-page lazy-loaded translations)
* Language switcher in NavBar with active style
* **Recommended:** VS Code with [Volar Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## ✨ Features (compared to base-app)

* 🔤 Full multi-language support with localized routes (e.g. `/`, `/de`, `/de/login`)
* 🗂️ JSON-based, per-page translation files in `/i18n/locales/{page}/{lang}.json`
* 🖱️ One-click language switching, active language clearly highlighted
* 🛠️ Ready for further internationalization (SEO, lazy loading, SSR)

## 🚫 **Not included**

* Authentication (e.g., Supabase)
* Database/Backend
* UI kits (shadcn-nuxt, daisyUI, HeadlessUI, Skeleton Loader, etc.)
* Analytics (e.g., SimpleAnalytics)
* End-to-End testing (e.g., Playwright, Cypress)
* Additional Nuxt modules

> You can add these features in separate branches or app templates!

## 🛠️ Quickstart

```bash
cd apps/i18n-app
npm install
npm run dev
```

## 🌍 Language Structure & Usage

* All translations live in `i18n/locales/` and are lazy-loaded
* Example: `i18n/locales/login/en.json`, `i18n/locales/login/de.json`
* Add new pages or languages by creating new JSON files following this convention
* Language switcher auto-generates from the Nuxt i18n config

## 🏁 How to Switch Language

* Click any language button or link in the NavBar
* All route navigation (via `NuxtLink`) uses locale-aware helpers (`localePath`, `switchLocalePath`)
* Active language is visually underlined for clarity
* The language selection persists between pages via cookie

## 📦 Build

```bash
npm run build
```

## 📖 Documentation

* [Nuxt 3 Documentation](https://nuxt.com/docs/get-started/introduction)
* [Nuxt i18n Documentation](https://i18n.nuxtjs.org/)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Pinia Documentation](https://pinia.vuejs.org/)
* [ESLint Documentation](https://eslint.org/docs/latest/)
* [Prettier Documentation](https://prettier.io/docs/en/index.html)

## 📝 Example NavBar usage

```vue
<script setup>
const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <nav>
    <NuxtLink
      v-for="loc in locales"
      :key="loc.code"
      :to="switchLocalePath(loc.code)"
      :class="[
        'font-bold text-blue-400 px-2 mx-1',
        loc.code === locale ? 'border-b-2 border-red-400' : ''
      ]"
    >
      {{ loc.name }}
    </NuxtLink>
  </nav>
</template>
```

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.

## 📧 Contact

For questions or contributions, please open an issue or pull request on the [GitHub repository](https://github.com/andiblup/nuxt_3-fullstack-dist) or contact the maintainer via email.

## 👥 Contributors

* [andiblub](https://github.com/andiblup) (creator & maintainer)
* *Your name here? Open a PR!*

## 📜 Changelog

For a detailed list of changes, please refer to the [CHANGELOG](../../CHANGELOG.md) file.
