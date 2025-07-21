// // composables/useTheme.ts
// import { ref, watch, onMounted } from 'vue';

// type Theme = 'neutral' | 'violet-light' | 'violet-dark';

// export function useTheme() {
//     // Initialisiere das Theme basierend auf localStorage oder Standardwert
//     const currentTheme = ref<Theme>(
//         (process.client && (localStorage.getItem('theme') as Theme)) || 'neutral'
//     );

//     // Beobachte Änderungen des Themes und wende die Klasse auf <html> an
//     watch(currentTheme, (newTheme) => {
//         if (process.client) {
//             document.documentElement.setAttribute('data-theme', newTheme);
//             // Entferne die 'dark' Klasse, wenn du dich auf data-theme verlässt
//             document.documentElement.classList.remove('dark');
//             // Füge 'dark' Klasse hinzu, wenn das Theme 'violet-dark' ist
//             if (newTheme === 'violet-dark') {
//                 document.documentElement.classList.add('dark');
//             }
//             localStorage.setItem('theme', newTheme);
//         }
//     }, { immediate: true }); // Führe watch sofort beim Laden aus

//     // Setze das Theme beim Laden der Seite basierend auf dem gespeicherten Wert
//     onMounted(() => {
//         if (process.client) {
//             const storedTheme = localStorage.getItem('theme') as Theme;
//             if (storedTheme) {
//                 currentTheme.value = storedTheme;
//             } else {
//                 // Setze Standard-Theme, falls noch keines gespeichert
//                 document.documentElement.setAttribute('data-theme', 'neutral');
//                 localStorage.setItem('theme', 'neutral');
//             }
//         }
//     });

//     const availableThemes: Theme[] = ['neutral', 'violet-light', 'violet-dark'];

//     return {
//         currentTheme,
//         availableThemes,
//     };
// }

// composables/useTheme.ts
import { ref, watch, onMounted } from 'vue';

// NEU: 'neutral-dark' zum Theme-Typ hinzugefügt
type Theme = 'neutral' | 'neutral-dark' | 'violet-light' | 'violet-dark';

export function useTheme() {
  // Initialisiere das Theme basierend auf localStorage oder Standardwert
  const currentTheme = ref<Theme>(
    (process.client && (localStorage.getItem('theme') as Theme)) || 'neutral'
  );

  // Funktion zum Anwenden des Themes und der 'dark'-Klasse
  const applyTheme = (theme: Theme) => {
    if (process.client) {
      document.documentElement.setAttribute('data-theme', theme);

      // Zuerst immer die 'dark' Klasse entfernen, um Konflikte zu vermeiden
      document.documentElement.classList.remove('dark');

      // Füge die 'dark' Klasse hinzu, wenn das Theme ein Dark-Theme ist
      // Hier liegt der Schlüssel: Füge 'dark' hinzu, wenn es neutral-dark ODER violet-dark ist
      if (theme === 'neutral-dark' || theme === 'violet-dark') {
        document.documentElement.classList.add('dark');
      }
      localStorage.setItem('theme', theme);
    }
  };

  // Beobachte Änderungen des Themes und wende die Klasse auf <html> an
  watch(currentTheme, (newTheme) => {
    applyTheme(newTheme);
  }, { immediate: true }); // Führe watch sofort beim Laden aus

  // Setze das Theme beim Laden der Seite basierend auf dem gespeicherten Wert
  onMounted(() => {
    if (process.client) {
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme) {
        // Wenn ein gespeichertes Theme existiert, wende es an
        currentTheme.value = storedTheme; // Dies löst den Watcher aus
      } else {
        // Setze Standard-Theme, falls noch keines gespeichert
        applyTheme('neutral'); // Standardmäßig 'neutral' anwenden
      }
    }
  });

  // NEU: 'neutral-dark' zur Liste der verfügbaren Themes hinzugefügt
  const availableThemes: Theme[] = ['neutral', 'neutral-dark', 'violet-light', 'violet-dark'];

  return {
    currentTheme,
    availableThemes,
  };
}