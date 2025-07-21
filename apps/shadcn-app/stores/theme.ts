// stores/theme.ts
// import { defineStore } from 'pinia'
// import { useStorage, usePreferredDark } from '@vueuse/core'
// import { computed } from 'vue'

// /* --- Konstanten --- */
// export const themeList = [
//   'neutral',
//   'neutral-dark',
//   'violet-light',
//   'violet-dark',
//   'green-light',
//   'green-dark',
// ] as const
// export type Theme = typeof themeList[number]

// /* System-Mapping */
// const mapSystem = (dark: boolean): Theme => (dark ? 'neutral-dark' : 'neutral')

// export const useThemeStore = defineStore('theme', () => {
//   /**
//    *  Persistiertes Theme.
//    *  - `undefined`  ⇒  Key fehlt  ⇒  System-Fallback
//    *  - Theme-String ⇒  immer benutzen
//    *  `writeDefaults:false` verhindert ein initiales Schreiben.
//    */
//   const storedTheme = useStorage<Theme | undefined>(
//     'theme',
//     undefined,
//     undefined,
//     { writeDefaults: false },
//   )

//   /* OS-Präferenz (reaktiv) */
//   const prefersDark = usePreferredDark()

//   /* Effektives Theme (reactive) */
//   const effectiveTheme = computed<Theme>(() =>
//     storedTheme.value ?? mapSystem(prefersDark.value),
//   )

//   /* --- Actions --- */
//   function setTheme(theme: Theme) {
//     if (themeList.includes(theme)) storedTheme.value = theme
//   }

//   /** Entfernt den Key → nächster Reload benutzt System-Mode */
//   function resetToSystem() {
//     storedTheme.value = undefined            // entfernt Key via VueUse
//   }

//   /** Rotation durch die Liste, schreibt immer ins Storage */
//   function toggleTheme(step = 1) {
//     const i = themeList.indexOf(effectiveTheme.value)
//     storedTheme.value = themeList[(i + step + themeList.length) % themeList.length]
//   }

//   return {
//     /* state */
//     storedTheme,       // Theme | undefined
//     effectiveTheme,    // Theme
//     prefersDark,

//     /* static */
//     themeList,

//     /* actions */
//     setTheme,
//     resetToSystem,
//     toggleTheme,
//   }
// })

// stores/theme.ts
import { defineStore } from 'pinia'
import { useStorage, usePreferredDark } from '@vueuse/core' // Stelle sicher, dass useStorage hier importiert wird
import { computed } from 'vue'

/* --- Konstanten --- */
export const themeList = [
  'neutral',
  'neutral-dark',
  'violet-light',
  'violet-dark',
  'green-light', // Hinzugefügt
  'green-dark',  // Hinzugefügt
] as const
export type Theme = typeof themeList[number]

/* System-Mapping */
const mapSystem = (dark: boolean): Theme => (dark ? 'neutral-dark' : 'neutral')

export const useThemeStore = defineStore('theme', () => {
  /**
   * Persistiertes Theme.
   * - `undefined`   ⇒   Key fehlt   ⇒   System-Fallback
   * - Theme-String  ⇒   immer benutzen
   * `writeDefaults:false` verhindert ein initiales Schreiben.
   */
  const storedTheme = useStorage<Theme | undefined>(
    'theme',
    undefined,
    undefined,
    { writeDefaults: false },
  )

  /* OS-Präferenz (reaktiv) */
  const prefersDark = usePreferredDark()

  /* Effektives Theme (reactive) */
  const effectiveTheme = computed<Theme>(() =>
    storedTheme.value ?? mapSystem(prefersDark.value),
  )

  /* --- Actions --- */
  function setTheme(theme: Theme) {
    if (themeList.includes(theme)) {
      storedTheme.value = theme
      // Optional: console.log(`[Store] Setting theme to: ${theme}, localStorage: ${localStorage.getItem('theme')}`);
    }
  }

  /** Entfernt den Key → nächster Reload benutzt System-Mode */
  function resetToSystem() {
    storedTheme.value = undefined // entfernt Key via VueUse
    // Optional: console.log(`[Store] Resetting to system, localStorage: ${localStorage.getItem('theme')}`);
  }

  /** Rotation durch die Liste, schreibt immer ins Storage */
  function toggleTheme(step = 1) {
    const i = themeList.indexOf(effectiveTheme.value)
    storedTheme.value = themeList[(i + step + themeList.length) % themeList.length]
  }

  return {
    /* state */
    storedTheme,    // Theme | undefined
    effectiveTheme,   // Theme
    prefersDark,

    /* static */
    themeList,

    /* actions */
    setTheme,
    resetToSystem,
    toggleTheme,
  }
})