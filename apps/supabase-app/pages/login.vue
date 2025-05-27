<template>
  <div class="mt-10 max-w-md mx-auto p-4">
    <h1 class="text-5xl font-bold mb-7 text-center">
      Login
    </h1>

    <input v-model="email" type="email" placeholder="E-Mail-Adresse"
      class="w-full mb-4 p-3 border rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400" />

    <button @click="signInWithOtp"
      class="w-full bg-red-400 p-3 rounded text-white font-bold mb-4 hover:bg-red-500 transition">
      Sign In with E-Mail
    </button>

    <div class="text-center mb-4 text-gray-500">oder</div>

    <button @click="loginWithGoogle"
      class="w-full bg-red-400 p-3 rounded text-white font-bold hover:bg-red-500 transition">
      Login with Google
    </button>
  </div>
</template>

<script setup>

const supabase = useSupabaseClient()

const email = ref('')
const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    options: {
      emailRedirectTo: 'http://localhost:3000/confirm',
    }
  })
  if (error) console.log(error)
}
const loginWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
  navigateTo('/');
  if (error) console.error('Login error:', error)
}

</script>

<style></style>