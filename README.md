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

| Template     | Description                       | Features                              |
| ------------ | --------------------------------- | ------------------------------------- |
| base-app     | Minimal Nuxt 3 + Tailwind + Pinia | Linting, formatting, no extra modules |
| supabase-app | With Supabase auth & database     | base-app + Supabase + Auth            |
| shadcn-app   | With shadcn-nuxt UI kit           | base-app + shadcn-nuxt                |
| ...          | More coming soon!                 |                                       |

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

