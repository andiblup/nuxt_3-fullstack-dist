export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()

    // public accessible pages
    const publicPages = ['/', '/login', '/register', '/about', '/imprint', '/privacy']

    // Due to SSR, `user.value` is initially `undefined` → wait for it
    if (user.value === undefined) return

    // If the page is public, continue
    if (publicPages.includes(to.path)) return

    // If not logged in, redirect to the home page
    if (!user.value) {
        alert('Please sign in.')
        return navigateTo('/')
    }
})