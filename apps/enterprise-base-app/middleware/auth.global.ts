export default defineNuxtRouteMiddleware((to, _from) => {
    // const user = useSupabaseUser()

    // // public accessible pages
    // const publicPages = ['/', '/login', '/register', '/about', '/imprint', '/privacy']

    // // Due to SSR, `user.value` is initially `undefined` → wait for it
    // if (user.value === undefined) return

    // // If the page is public, continue
    // if (publicPages.includes(to.path)) return

    // // If not logged in, redirect to the home page
    // if (!user.value) {
    //     // alert('Please sign in.')
    //     return navigateTo('/')
    // }

    const user = useSupabaseUser()
    const publicRouteNames = [
        'index',          // Home
        'login',          // Login
        'register',       // Register
        'about',          // About
        'imprint',        // Imprint
        'privacy'         // Privacy
    ]

    // Because of i18n pages are called "login___de" oder "login___en"
    const isPublic = publicRouteNames.some(name => (to.name || '').toString().startsWith(name))

    // Due to SSR, `user.value` is initially `undefined` → wait for it
    if (user.value === undefined) return

    // If the page is public, continue
    if (isPublic) return

    // If not logged in, redirect to the home page
    if (!user.value) {
        return navigateTo('/')
    }

})