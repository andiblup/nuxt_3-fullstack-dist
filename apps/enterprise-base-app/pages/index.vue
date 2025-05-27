<script setup>
const counter = useCounter()



</script>

<template>
  <div class="p-8 bg-gray-100 rounded-xl shadow text-xl">
    {{ locales }}
    <h1 class="font-bold text-3xl mb-4">{{ $t('welcome') }}</h1>
    <p>{{ $t('counter') }}: {{ counter.count }}</p>
    <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded" @click="counter.increment">
      {{ $t('increment') }}
    </button>

  </div>
</template>
