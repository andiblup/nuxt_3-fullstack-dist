# nuxt\_3-fullstack-dist

> Modern, modular Nuxt 3 fullstack distribution system for building scalable web apps – with a clean base template and optional feature variants.

## 🏗️ What is this?

**nuxt\_3-fullstack-dist** is a monorepo providing a maintainable and extensible foundation for fullstack Nuxt 3 projects.
It features a minimal base app and optional, ready-to-use variants with popular features (e.g. Supabase, shadcn-nuxt, analytics, E2E, and more).

* **Mono-repo structure:** Each variant is an isolated, self-contained Nuxt app under `/apps`.
* **Clean starting point:** The base-app only includes Nuxt 3, Tailwind CSS, Pinia, ESLint, and Prettier.
* **No bloat:** All other features (auth, UI kits, analytics, etc.) are opt-in, via branch or template.

---

## 🗂️ Structure

```
.
├── apps/
│   ├── base-app/           # Minimal Nuxt 3 template (core only)
│   ├── supabase-app/       # Example: with Supabase & auth (WIP)
│   ├── shadcn-app/         # Example: with shadcn-nuxt (WIP)
│   └── ...                 # More variants or branches as needed
├── packages/               # (optional) Shared modules/libraries
├── turbo.json              # Turborepo configuration
├── package.json            # Monorepo root dependencies & scripts
├── CHANGELOG.md
├── LICENSE
└── README.md               # <--- You are here
```

---

## 🚀 Available Templates

| Template                | Features Included                                                                                 |
|-------------------------|--------------------------------------------------------------------------------------------------|
| base-app                | Nuxt 3, Tailwind CSS, Pinia, ESLint, Prettier, .env/.env.example, alias, Fontsource (local)     |
| supabase-app            | base-app + Supabase (DB, Auth, Realtime, Prisma)                                                 |
| shadcn-app              | base-app + shadcn-nuxt (UI Kit)                                                                  |
| daisy-headless-app      | base-app + daisyUI, HeadlessUI, Skelator                                                         |
| analytics-app           | base-app + SimpleAnalytics                                                                       |
| i18n-seo-app            | base-app + i18n + SEO Toolkit, Sitemap, Robots                                                   |
| charts-app              | base-app + Chart.js/vue-chartjs                                                                  |
| e2e-app                 | base-app + Playwright (E2E), Vitest (unit)                                                       |
| enterprise-shadcn-app   | **ALL** core & feature modules + shadcn-nuxt                                                     |
| enterprise-daisy-app    | **ALL** core & feature modules + daisyUI, HeadlessUI, Skelator                                   |

> See `/apps/<template>/README.md` for full details on each variant.

---

## 🛠️ Getting Started

Clone the repository and install dependencies in the base-app:

```bash
git clone https://github.com/andiblup/nuxt_3-fullstack-dist.git
cd nuxt_3-fullstack-dist/apps/base-app
npm install
npm run dev
```

You can use any app variant under `/apps/` as your project starting point, or create your own branch for a custom combination of features.

---

## ⚙️ Build/Config & Local Fonts
* **Environment Variables:**
Each app uses .env.example for configuration. Copy to .env and adjust values as needed.

* **Aliases:**
The aliases @ and ~ are available by default in Nuxt 3 for absolute imports.
Custom aliases can be added in nuxt.config.ts.

* **Fonts:**
Local fonts are provided via [Fontsource](https://fontsource.org/) to ensure GDPR compliance and no external requests.

---

## 📚 Documentation

* [Nuxt 3 Documentation](https://nuxt.com/docs/get-started/introduction)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [Pinia Documentation](https://pinia.vuejs.org/)
* [Supabase Documentation](https://supabase.com/docs)
* [shadcn-nuxt Documentation](https://ui.shadcn.com/docs/installation/nuxt)
* [Turborepo Docs](https://turbo.build/repo/docs)

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## 📧 Contact

For questions, suggestions, or contributions, please [open an issue or pull request](https://github.com/andiblup/nuxt_3-fullstack-dist/issues) on GitHub, or contact the maintainer directly via GitHub.

---

## 👤 Maintainer

* [andiblub](https://github.com/andiblub)

---

## 📜 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a full history of changes.

