import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base rules for JavaScript/TypeScript/Vue files
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  // Set both browser and node as global environments
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  // Vue rules with exceptions for Nuxt-specific single-word component names
  {
    files: ["**/*.vue"],
    plugins: { vue: pluginVue },
    ...pluginVue.configs["flat/essential"],
    rules: {
      // Allow Nuxt core file names as single-word components (layouts & pages)
      "vue/multi-word-component-names": [
        "error",
        {
          ignores: [
            "default", // layout
            "error",   // layout/page
            "index",   // page
          ],
        },
      ],
    },
  },
  // Lint standard JSON files
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  // Lint JSON with comments
  {
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  // Lint Markdown files (e.g., documentation)
  {
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
]);
// This ESLint configuration is designed for a base application setup
// that includes JavaScript, Vue, JSON, and Markdown files.
// It sets up recommended rules for each file type, allows for single-word
// component names in Vue for Nuxt layouts and pages, and supports JSON with
// comments and Markdown linting.
// The configuration is modular, allowing for easy extension or modification
// as the application grows or changes.