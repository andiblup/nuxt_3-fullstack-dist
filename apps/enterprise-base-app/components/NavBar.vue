<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// const { locales, locale, setLocale } = useI18n()

const { locales, setLocale, } = useI18n()

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const signOut = async () => {
  await supabase.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <div>
    <nav class="bg-gray-100 p-3 flex items-center gap-4 shadow mb-6 rounded-2xl max-w-3xl mx-auto mt-6">
      <NuxtLink :to="localePath('index')" class="font-bold text-red-400">Home</NuxtLink>
      <NuxtLink :to="localePath('confirm')">Confirm</NuxtLink>


      <NuxtLink v-for="loc in locales" :key="loc.code" :to="switchLocalePath(loc.code)"
        :aria-current="loc.code === locale ? 'page' : null">
        {{ loc.name }}
      </NuxtLink>


      <NuxtLink :to="localePath('login')" v-if="!user">Login</NuxtLink>
      <span v-if="user" class="ml-auto flex items-center gap-2">
        <span class="text-gray-700">{{ user.email }}</span>
        <button @click="signOut" class="bg-red-400 text-white rounded px-3 py-1 font-bold hover:bg-red-500 transition">
          Logout
        </button>
      </span>
    </nav>
  </div>
</template>