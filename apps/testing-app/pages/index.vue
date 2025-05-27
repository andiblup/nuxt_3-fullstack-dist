<template>
  <div class="p-8 bg-gray-100 rounded-xl shadow text-xl">
    <h1 class="font-bold text-3xl mb-4">Welcome to your Fullstack Distro 🚀</h1>
    <p>Count: {{ counter.count }}</p>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded" @click="counter.increment">
      Increment
    </button>
  </div>
</template>

<script setup>
const counter = useCounter()

// definePageMeta({
//   title: 'Welcome',
// })
useHead({
  title: 'Welcome',
});
</script>
