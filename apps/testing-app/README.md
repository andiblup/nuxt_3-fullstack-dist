# nuxt\_3-fullstack-dist / testing-app

Minimal Nuxt 3 starter including integrated unit/component and E2E testing with Vitest & Cypress.

## 🚀 Included

* Nuxt 3
* Tailwind CSS (via @nuxtjs/tailwindcss)
* Pinia (state management)
* ESLint (JS, JSON, Markdown, Vue)
* Prettier (formatting, with TypeScript config)
* **Vitest** (unit/component testing)
* **Cypress** (end-to-end testing)
* Example test suites for both frameworks
* Cypress configured for custom test folder (`tests/e2e/`)
* **Recommended:** VS Code with [Volar Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 🚫 **Not included**

* Authentication (e.g., Supabase)
* UI kits (shadcn-nuxt, daisyUI, HeadlessUI, Skeleton Loader, etc.)
* Analytics (e.g., SimpleAnalytics)
* Internationalization (i18n), SEO modules
* Additional Nuxt modules

> You can add these features in separate branches or app templates!

## 🛠️ Quickstart

```bash
cd apps/testing-app
npm install
npm run dev
```

### 🧪 Testing

* **Unit/Component tests (Vitest):**

  ```bash
  npm run test:unit
  # or interactive UI:
  npm run test:unit:ui
  ```
* **End-to-End tests (Cypress):**

  ```bash
  npm run test:e2e        # opens Cypress UI
  npm run test:e2e:ci     # runs Cypress headless (CI)
  ```

## 📦 Build

```bash
npm run build
```

## 📖 Documentation

* [Nuxt 3 Docs](https://nuxt.com/docs/get-started/introduction)
* [Vitest Docs](https://vitest.dev/)
* [Cypress Docs](https://docs.cypress.io/)
* [Tailwind CSS Docs](https://tailwindcss.com/docs)
* [Pinia Docs](https://pinia.vuejs.org/)
* [ESLint Docs](https://eslint.org/docs/latest/)
* [Prettier Docs](https://prettier.io/docs/en/index.html)

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.

## 📧 Contact
For questions or contributions, please open an issue or pull request on the [GitHub repository](https://github.com/andiblup/nuxt_3-fullstack-dist) or contact the maintainer via email.

## 👥 Contributors

- [andiblub](https://github.com/andiblup) (creator & maintainer)
- _Your name here? Open a PR!_

## 📜 Changelog
For a detailed list of changes, please refer to the [CHANGELOG](../../CHANGELOG.md) file.


