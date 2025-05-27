<script setup>
const counter = useCounter()

const { locales, setLocale, } = useI18n()

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

//! THE OLD WAY DOES WORK, BUT THE NEW WAY IS LITTLE BETTER FOR SEO AND OTHER RESAONS
</script>

<template>
  <div class="p-8 bg-gray-100 rounded-xl shadow text-xl">
    <h1 class="font-bold text-3xl mb-4">{{ $t('welcome') }}</h1>
    <p>{{ $t('counter') }}: {{ counter.count }}</p>
    <div class="flex  items-center justify-between">
      <button class="mt-4 px-4 py-2 bg-blue-500 text-white rounded" @click="counter.increment">
        {{ $t('increment') }}
      </button>
      <!--! Make sure to route with dynamic lang routes if using lang tag in URL -->
      <NuxtLink :to="localePath('test')" class="font-bold text-red-400 border-b-2 border-red-400">
        {{ $t('goToTest') }}
        Test
      </NuxtLink>
      <!-- <NuxtLink :class="loc.code === locale ? 'border-b-2 border-red-400' : ''"
      class="font-bold text-blue-400 " v-for="loc in locales" :key="loc.code" :to="switchLocalePath(loc.code)"
        :aria-current="loc.code === locale ? 'page' : null">
        {{ loc.name }}
      </NuxtLink> -->
      <NuxtLink v-for="loc in locales" :key="loc.code" :to="switchLocalePath(loc.code)" :class="[
        'font-bold text-blue-400 px-2',
        loc.code === locale ? 'border-b-2 border-red-400' : ''
      ]" :aria-current="loc.code === locale ? 'page' : null">
        {{ loc.name }}
      </NuxtLink>
    </div>
  </div>
</template>
