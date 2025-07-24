<!-- app.vue -->
<script setup lang="ts">
import Spinner from '~/components/Spinner.vue'
const loading = ref(false)
const nuxtApp = useNuxtApp()
nuxtApp.hook('page:loading:start', () => { loading.value = true })
nuxtApp.hook('page:loading:end', () => { loading.value = false })
</script>

<template>
    <NuxtLayout>

      <NuxtPage />
    </NuxtLayout>
      <transition name="fade">
    <div v-if="loading" class="fixed inset-0 z-50 grid place-items-center bg-black/40">
      <Spinner class="h-10 w-10 text-white" />
    </div>
  </transition>
</template>