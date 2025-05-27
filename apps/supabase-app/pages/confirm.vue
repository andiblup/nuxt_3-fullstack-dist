<script setup lang="ts">
const user = useSupabaseUser()

// // If default supabase redirection is active, without custom middleware, redirects to the first protected page (or unprotected if wanted)
// watch(user, () => {
//   if (user.value) {
//       // Redirect to protected page
//       return navigateTo('/pageToLandAfterLoggedIn')
//   }
// }, { immediate: true })
</script>

<template>
  <div v-if="user">{{ user.email }}</div>
  <div v-if="!user">Waiting for login...</div>
</template>