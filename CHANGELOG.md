# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- Future plans coming soon! ✨😉


## [0.3.2]

### Added
- **testing-app**
  - Added Vitest for unit and component testing
    - Sample test in `tests/unit/example.spec.ts`
    - `test:unit` and `test:unit:ui` scripts in `package.json`
  - Added Cypress for end-to-end (E2E) testing
    - Cypress config supports E2E tests in `tests/e2e/**/*.cy.{js,ts}`
    - Example E2E test in `tests/e2e/home.cy.js`
    - `test:e2e` (interactive) and `test:e2e:ci` (headless) scripts in `package.json`
    - Disabled Cypress `supportFile` for minimal setup
  - Added documentation on how to run unit and E2E tests in README

### Changed
- **testing-app**
  - Switched E2E testing from Playwright to Cypress for better compatibility with Vitest in monorepo/npm workspace environments
  - Updated instructions and scripts for Cypress-based E2E tests



---

## [0.3.1] - 2024-05-27

### Added

- supabase-app
  - E-Mail/OTP Auth, Google OAuth, Confirm Page, Navbar with user/logout,

### Changed

- assets - css - `main.css:`
  `css
        @import "@fontsource/inter/variables.css";
        `
  to
  `css
        @import "@fontsource/inter/index.css";
        ` -`.env.example` added supabase environment variables
- `nuxt.config.ts` deactivated automatic login redirect, because supabase redirected before tokens got set:
  ```ts
    supabase: {
        //? Deactivates the automatic login redirect
        redirect: false
    },
  ```
  - `middleware/auth.global.ts` enabled: handles routing and messaging for routes (explicit public routes)

---

## [0.3.2] - 2024-05-27

### Added

- `.env.example` for environment variable management in base-app
- Fontsource local font integration (GDPR compliant)
- Nuxt directory structure in base-app:
  - `assets/`
    - `css/`
      - `main.css`
  - `components/`
  - `composables/`
  - `layouts/`
    - empty `default.vue` layout
  - `middleware/`
  - `plugins/`
  - `public/`
  - `stores/`
  - `utils/`
  - `.gitkeep` in all empty directories

### Changed

- `eslint.config.js`
  - Modularized and improved
  - Added exceptions for Nuxt & Vue reserved single-word component names (`default`, `error`, `index`)
- base-app
  - Updated README (English, improved structure, .env and Fontsource documentation)
  - Added Changelog, Contributors & Contact sections
  - Nuxt config includes `~/assets/css/main.css` as global stylesheet

---

## [0.2.1] - 2024-05-27

### Changed

- base-app
  - README
    - English
    - Changelog
    - Contributors & Contact
- README
  - English from turbo init to nuxt_3-fullstack-dist

### Added

- CHANGELOG.md

---

## [0.2.0] - 2024-05-27

### Added

- base-app
  - German README
  - Prettier config as TypeScript file
  - Build & lint scripts

---

## [Unreleased]

### Added

- Initial Nuxt 3 base-app scaffold with Tailwind, Pinia, ESLint, Prettier

---
