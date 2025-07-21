// composables/useTheme.ts
import { watch, onMounted, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useThemeStore } from '~/stores/theme' // Importiere deinen Pinia Store

export function useTheme() {
  const store = useThemeStore()
  const { storedTheme, effectiveTheme, prefersDark } = storeToRefs(store) // prefersDark auch vom Store holen

  /* DOM-Side-Effect */
  const apply = (theme: string) => {
    if (!process.client) return
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    // Die 'dark' Klasse basierend auf dem Theme-Namen setzen
    root.classList.toggle('dark', theme.endsWith('-dark'))
  }

  // Initialisierung beim ersten Mount auf dem Client
  onMounted(() => {
    if (process.client) {
      // Überprüfe direkt localStorage, bevor Pinia/VueUse es liest
      const storedValue = localStorage.getItem('theme')
      if (storedValue && store.themeList.includes(storedValue as any)) {
        // Wenn ein gültiger Wert im localStorage ist, setze ihn im Store
        // Dies sollte useStorage dazu bringen, diesen Wert zu verwenden
        store.setTheme(storedValue as Theme) // Nutze die Store-Action
        apply(storedValue) // Wende es sofort an
      } else {
        // Wenn kein gültiger Wert oder nicht vorhanden, nutze Systempräferenz
        // und stelle sicher, dass storedTheme im Store undefined ist
        store.resetToSystem() // Setzt storedTheme.value = undefined
        apply(effectiveTheme.value) // Wende die Systempräferenz an
      }
    }
  })

  // Beobachte Änderungen des effektiven Themes und wende sie an
  watch(effectiveTheme, apply)

  /* v-model-Proxy für UI */
  const themeModel = computed<string>({
    get: () => storedTheme.value ?? 'system',
    set: (val) => {
      if (val === 'system') {
        store.resetToSystem()
      } else {
        store.setTheme(val as Theme)
      }
    },
  })

  return {
    themeModel, // 'system' | Theme
    availableThemes: store.themeList,
    effectiveTheme,
    setTheme: store.setTheme,
    resetToSystem: store.resetToSystem,
    toggleTheme: store.toggleTheme,
  }
}

