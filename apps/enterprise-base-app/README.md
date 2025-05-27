# nuxt_3-fullstack-dist / base-app

Minimal, extensible starting point for modern fullstack Nuxt 3 projects.

## 🚀 Included

- Nuxt 3
- Tailwind CSS (via @nuxtjs/tailwindcss)
- Pinia (state management)
- ESLint (JS, JSON, Markdown, Vue)
- Prettier (formatting, with TypeScript config)
* **Supabase** (auth, real-time, database)
* Example login/logout and session handling
* Example `.env.example` file for Supabase configuration
* **Vitest** (unit/component testing)
* **Cypress** (end-to-end testing)
* Example test suites for both frameworks
* Cypress configured for custom test folder (`tests/e2e/`)
- **Recommended:** VS Code with [Volar Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 🚫 **Not included**

- Database/Backend
- UI kits (shadcn-nuxt, daisyUI, HeadlessUI, Skeleton Loader, etc.)
- Analytics (e.g., SimpleAnalytics)
- Internationalization (i18n), SEO modules
- Additional Nuxt modules

> You can add these features in separate branches or app templates!

## 🛠️ Quickstart

```bash
cd apps/enterprise-base-app
cp .env.example .env
npm install
npm run dev
```


## 🔑 Supabase Setup

* Create a project at [supabase.com](https://supabase.com/)
* Get your project URL and anon/public API key from your Supabase dashboard
* Add these to your `.env` file as described in `.env.example`

### 🧑‍💻 Example Features

* Email-based authentication with OTP magic link
* OAuth (Google login)
* Protected routes (middleware, layouts)
* Session-aware navigation bar


### 🧪 Testing

* **Unit/Component tests (Vitest):**

  ```bash
  npm run test:unit     # runs Vitest in the terminal
  # or interactive UI:
  npm run test:unit:ui  # opens Vitest UI in browser
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
For more information on Nuxt 3, Tailwind CSS, and other included technologies, refer to their official documentation:
- [Nuxt 3 Documentation](https://nuxt.com/docs/get-started/introduction)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/index.html)
- [Supabase Docs](https://supabase.com/docs)
* [Vitest Docs](https://vitest.dev/)
* [Cypress Docs](https://docs.cypress.io/)

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](../../LICENSE) file for details.

## 📧 Contact
For questions or contributions, please open an issue or pull request on the [GitHub repository](https://github.com/andiblup/nuxt_3-fullstack-dist) or contact the maintainer via email.

## 👥 Contributors

- [andiblub](https://github.com/andiblup) (creator & maintainer)
- _Your name here? Open a PR!_

## 📜 Changelog
For a detailed list of changes, please refer to the [CHANGELOG](../../CHANGELOG.md) file.


