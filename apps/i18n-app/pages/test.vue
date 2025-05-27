<script setup>

const { locales, setLocale, } = useI18n()

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <div class="flex flex-col items-center justify-center p-8 bg-gray-100 rounded-xl shadow text-xl">
        <NuxtLink v-for="loc in locales" :key="loc.code" :to="switchLocalePath(loc.code)"
            :aria-current="loc.code === locale ? 'page' : null">
            {{ loc.name }}
        </NuxtLink>
        <NuxtLink :to="localePath('index')" class="font-bold text-red-400">
            {{ $t('backHome') }}
        </NuxtLink>
    </div>

</template>