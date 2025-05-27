# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- Future plans coming soon! ✨😉



---

## [0.3.0] - 2024-05-27

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