<!-- <script setup>
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

 -->



<template>
  <header class="bg-background sticky top-0 z-50 w-full shadow-md">
    <div class="container-wrapper 3xl:fixed:px-0 px-6 py-1">
      <div class="3xl:fixed:container flex h-[var(--header-height)] items-center gap-2 *:data-[slot=separator]:!h-4">


        <NuxtLink :to="localePath('index')" class="font-bold text-red-400">Home</NuxtLink>
        <NuxtLink :to="localePath('confirm')">Confirm</NuxtLink>


        <NuxtLink v-for="loc in locales" :key="loc.code" :to="switchLocalePath(loc.code)">
          {{ loc.name }}
        </NuxtLink>


        <NuxtLink :to="localePath('login')" v-if="!user">Login</NuxtLink>
        <span v-if="user" class="ml-auto flex items-center gap-2">
          <span class="text-gray-700">{{ user.email }}</span>
          <button @click="signOut"
            class="bg-red-400 text-white rounded px-3 py-1 font-bold hover:bg-red-500 transition">
            Logout
          </button>
        </span>


        <Dialog>

          <!-- Burger Menü Trigger (sichtbar auf kleinen Bildschirmen, versteckt auf großen) -->
          <Sheet>
            <SheetTrigger as-child>
              <button
                class="whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground px-4 py-2 has-[&>svg]:px-3 extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent flex"
                type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«Rmplb»"
                data-state="closed">
                <div class="relative flex h-8 w-4 items-center justify-center">
                  <div class="relative size-4">
                    <span
                      class="bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 top-1"></span>
                    <span
                      class="bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 top-2.5"></span>
                  </div>
                  <span class="sr-only">Toggle Menu</span>
                </div>
                <span class="flex h-8 items-center text-lg leading-none font-medium">Menu</span>
              </button>
            </SheetTrigger>

            <!-- Inhalt des Burger Menüs (das Seitenmenü) -->
            <SheetContent side="left" class="w-[250px] sm:w-[300px] flex flex-col gap-1">
              <SheetHeader class="p-3">
                <SheetTitle>
                  <button
                    class="whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground px-4 py-2 has-[&>svg]:px-3 extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent flex"
                    type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«Rmplb»"
                    data-state="closed">
                    <div class="relative flex h-8 w-4 items-center justify-center">
                      <div class="relative size-4">
                        <span
                          class="bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 top-1"></span>
                        <span
                          class="bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 top-2.5"></span>
                      </div>
                      <span class="sr-only">Toggle Menu</span>
                    </div>
                    <span class="flex h-8 items-center text-lg leading-none font-medium">Menu</span>
                  </button>
                </SheetTitle>
                <SheetDescription v-if="showDesc">
                  <div class="flex flex-col gap-2">
                    <p>This is a description for the menu.</p>
                    <div class="flex justify-center gap-2">
                      <Button variant="ghost" @click="toggleDesc">Disable desc</Button>
                      <Button variant="outline" @click="timeoutDesc">Timeout desc</Button>
                    </div>
                  </div>
                  <!-- und sie geht ganz lange weil ich sachen testen muss und deswegen viel text
                hineinschreiben muss dabei muss ich das spacing beachten und bei mir fliegt eine fliege und sie nervt
                mich summ summ -->
                </SheetDescription>
              </SheetHeader>

              <div class="flex flex-col gap-8 overflow-auto px-6 pt-3 pb-6 border-t border-border">
                <div class="flex flex-col gap-4">
                  <div class="text-muted-foreground text-sm font-medium">
                    Getting started
                  </div>
                  <div class="flex flex-col gap-3">
                    <div v-for="component in components" :key="component.title">
                      <a :href="component.href" target="_blank" rel="noopener noreferrer"
                        class="h-max block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">
                          {{ component.title }}
                        </div>
                        <p class="line-clamp-3 text-sm leading-snug text-muted-foreground">
                          {{ component.description }}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-4 border-t border-border pt-3">
                  <div class="text-muted-foreground text-sm font-medium">
                    Theme
                  </div>
                  <div class="flex flex-col gap-3">
                    <ClientOnly>
                      <ThemeSwitcher width="180px" />
                      <template #fallback>
                        <Skeleton class="w-[180px] h-8 rounded-md"></Skeleton>
                      </template>
                    </ClientOnly>
                  </div>
                </div>

                <div class="flex flex-col gap-4 border-t border-border pt-3">
                  <div class="text-muted-foreground text-sm font-medium">
                    Getting started
                  </div>
                  <div class="flex flex-col gap-3">
                    <div v-for="component in components" :key="component.title">
                      <a :href="component.href" target="_blank" rel="noopener noreferrer"
                        class="h-max block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">
                          {{ component.title }}
                        </div>
                        <p class="line-clamp-3 text-sm leading-snug text-muted-foreground">
                          {{ component.description }}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="flex flex-col gap-4 border-t border-border pt-3">
                  <div class="text-muted-foreground text-sm font-medium">
                    Getting started
                  </div>
                  <div class="flex flex-col gap-3">
                    <div v-for="component in components" :key="component.title">
                      <a :href="component.href" target="_blank" rel="noopener noreferrer"
                        class="h-max block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                        <div class="text-sm font-medium leading-none">
                          {{ component.title }}
                        </div>
                        <p class="line-clamp-3 text-sm leading-snug text-muted-foreground">
                          {{ component.description }}
                        </p>
                      </a>
                    </div>
                  </div>
                </div>


              </div>

              <SheetFooter>

                <Card class="p-2 gap-2">
                  <CardHeader class="flex items-center gap-3" v-if="user">
                    <CardTitle>
                      <Avatar>
                        <AvatarImage :src="user.user_metadata.picture || 'https://github.com/unovue.png'"
                          alt="@unovue" />
                        <AvatarFallback>{{
                          (() => {
                            const fullName = user.user_metadata.full_name;
                            if (!fullName) return '';
                            const parts = fullName.split(' ');
                            let initials = '';
                            if (parts.length > 1) {
                              initials += parts[0].charAt(0);
                            }
                            initials += parts[parts.length - 1].charAt(0);
                            return initials.toUpperCase();
                          })()
                        }}</AvatarFallback>
                      </Avatar>


                    </CardTitle>
                    <CardDescription class="flex items-center">
                      {{ user.email }}
                    </CardDescription>
                  </CardHeader>
                  <CardHeader class="flex justify-center items-center gap-3" v-else>
                    <CardDescription class="flex items-center">
                      Guest
                    </CardDescription>
                  </CardHeader>
                  <!-- <CardContent>
                  <p>Here are Informations about your profile</p>
                </CardContent> -->
                </Card>

              </SheetFooter>
            </SheetContent>

          </Sheet>

          <!-- Desktop Navigation -->
          <div class="ml-auto items-center gap-2 hidden lg:flex md:flex-1 md:justify-end">

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <!-- Hier könntest du align="end" erneut versuchen, aber die Breiten sind oft das Problem -->
                    <ul class="grid w-[300px] gap-3 p-4">
                      <li v-for="component in components" :key="component.title">
                        <NavigationMenuLink as-child>
                          <a :href="component.href" target="_blank" rel="noopener noreferrer"
                            class="h-max block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div class="text-sm font-medium leading-none">
                              {{ component.title }}
                            </div>
                            <p class="line-clamp-3 text-sm leading-snug text-muted-foreground">
                              {{ component.description }}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div data-orientation="vertical" role="none" data-slot="separator"
              class="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px">
            </div>

            <ClientOnly>
              <ThemeSwitcher />
              <template #fallback>
                <Skeleton class="w-[180px] h-8 rounded-md"></Skeleton>
              </template>
            </ClientOnly>

          </div>


          <!-- <ClientOnly>
            <Select>
              <SelectTrigger>

                <MdiIcon icon="mdiTranslate" class="h-4 w-4 text-muted-foreground" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Languages</SelectLabel>

                  <SelectItem v-for="loc in locales" :key="loc.code" :value="loc.code" :selected="loc.code === locale">
                    <NuxtLink :key="loc.code" :to="switchLocalePath(loc.code)">
                      {{ loc.code }}
                    </NuxtLink>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <template #fallback>
              <Skeleton class="w-[90px] h-8 rounded-md"></Skeleton>
            </template>
          </ClientOnly> -->

          <ClientOnly>
            <Select v-model="locale" @update:model-value="onLocaleChange">
              <SelectTrigger>
                <!-- TODO: Remember Suspense, Advanced CSR Skeleton -->
                <Suspense>
                  <template #default>
                    <LazyMdiIcon icon="mdiTranslate" class="h-4 w-4 text-muted-foreground" />
                  </template>
                  <template #fallback>
                    <Skeleton class="w-4 h-4 rounded-full" />
                  </template>
                </Suspense>
                <SelectValue />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>{{ $t('language') }}</SelectLabel>

                  <SelectItem v-for="loc in locales" :key="loc.code" :value="loc.code">
                    <!-- <NuxtLink :to="switchLocalePath(loc.code)">{{ loc.code }}</NuxtLink> -->
                    {{ loc.code }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <template #fallback>
              <Skeleton class="w-[90px] h-8 rounded-md" />
            </template>
          </ClientOnly>


          <div class="">
            <!-- <NuxtLink :to="localePath('login')" v-if="!user">Login</NuxtLink> -->
            <HoverCard v-if="user">
              <ClientOnly>
                <HoverCardTrigger as-child>
                  <Button variant="ghost" class="w-10 h-10 rounded-full">
                    <Avatar>
                      <AvatarImage :src="user.user_metadata.picture" alt="@unovue" />
                      <AvatarFallback class="w-[32px] h-[32px] rounded-full"></AvatarFallback>
                    </Avatar>
                  </Button>
                </HoverCardTrigger>
                <template #fallback>
                  <Skeleton class="w-[32px] h-[32px] rounded-full"></Skeleton>
                </template>
              </ClientOnly>
              <HoverCardContent class="w-80">
                <div class="flex justify-between items-center space-x-4">

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <DialogTrigger as-child class="cursor-pointer">
                          <Avatar>
                            <AvatarImage :src="user.user_metadata.picture" />

                            <AvatarFallback>{{
                              (() => {
                                const fullName = user.user_metadata.full_name;
                                if (!fullName) return '';
                                const parts = fullName.split(' ');
                                let initials = '';
                                if (parts.length > 0 && parts[0]) {
                                  initials += parts[0].charAt(0);
                                }
                                if (parts.length > 1 && parts[parts.length - 1]) {
                                  initials += parts[parts.length - 1].charAt(0);
                                }
                                return initials.toUpperCase();
                              })()
                            }}</AvatarFallback>

                          </Avatar>
                        </DialogTrigger>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Edit Profile</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div class="space-y-1">
                    <h4 class="text-sm font-semibold">
                      {{ user.email }}
                    </h4>
                    <p class="text-sm" v-if="user.user_metadata.full_name">
                      {{ user.user_metadata.full_name }}
                      <!-- Crucial information about your profile or maybe session. -->
                    </p>
                    <p class="text-sm" v-if="!user.user_metadata.full_name">
                      <!-- {{ user }} -->
                      Crucial information about your profile or maybe session.
                    </p>



                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>


            <Dialog v-else>
              <ClientOnly>
                <DialogTrigger as-child>
                  <Button variant="outline">
                    Login
                  </Button>
                </DialogTrigger>
                <template #fallback>
                  <Skeleton class="w-[70px] h-8 rounded-md"></Skeleton>
                </template>
              </ClientOnly>
              <DialogContent>

                <Tabs default-value="account" class="p-2">
                  <TabsList class="grid w-full grid-cols-2">
                    <TabsTrigger value="Sign in">
                      Sign in
                    </TabsTrigger>
                    <TabsTrigger value="Sign up">
                      Sign up
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="Sign in">
                    <div class="lg:p-8">
                      <div class="mx-auto flex w-full flex-col justify-center space-y-6">
                        <div class="flex flex-col space-y-2 text-center">
                          <h1 class="text-2xl font-semibold tracking-tight"> Login your account </h1>
                          <p class="text-sm text-muted-foreground"> Enter your email and password below to login to
                            your account
                          </p>
                        </div>
                        <div class="grid gap-6">
                          <form @submit.prevent="loginWithMail">
                            <div class="grid gap-2">
                              <div class="grid gap-1">
                                <input
                                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                  id="email" placeholder="name@example.com" type="email" auto-capitalize="none"
                                  auto-complete="email" auto-correct="off" v-model="email">
                              </div>
                              <div class="grid gap-1">
                                <input
                                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                  id="password" placeholder="••••••••" type="password" auto-capitalize="none"
                                  auto-complete="current-password" auto-correct="off" v-model="password">
                              </div>
                              <button type="submit"
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"><!---->
                                Sign in with Email </button>
                            </div>
                          </form>
                          <div class="relative">
                            <div class="absolute inset-0 flex items-center"><span class="w-full border-t"></span>
                            </div>
                            <div class="relative flex justify-center text-xs uppercase"><span
                                class="bg-background px-2 text-muted-foreground"> Or continue with </span></div>
                          </div>
                          <!-- <button
                              class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                              type="button">
                              <MdiIcon icon="mdiGithub" /> GitHub
                            </button> -->
                          <button @click="loginWithGoogle"
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                            type="button">
                            <MdiIcon icon="mdiGoogle" /> Google
                          </button>
                        </div>
                        <p class="px-8 text-center text-sm text-muted-foreground"> By clicking continue, you agree to
                          our
                          <a href="/terms" class="underline underline-offset-4 hover:text-primary"> Terms of Service
                          </a>
                          and
                          <a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="Sign up">
                    <div class="lg:p-8">
                      <div class="mx-auto flex w-full flex-col justify-center space-y-6">
                        <div class="flex flex-col space-y-2 text-center">
                          <h1 class="text-2xl font-semibold tracking-tight"> Create your account </h1>
                          <p class="text-sm text-muted-foreground"> Enter your email and password below to create a
                            new account
                          </p>
                        </div>
                        <div class="grid gap-6">
                          <form>
                            <div class="grid gap-2">
                              <div class="grid gap-1">
                                <Label for="email"
                                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</Label>
                                <input
                                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                  id="email" placeholder="name@example.com" type="email" auto-capitalize="none"
                                  auto-complete="email" auto-correct="off">
                              </div>
                              <div class="grid gap-1">
                                <Label for="password"
                                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</Label>
                                <input
                                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                  id="password" placeholder="••••••••" type="password" auto-capitalize="none"
                                  auto-complete="current-password" auto-correct="off">
                              </div>
                              <div class="grid gap-1">
                                <Label for="confirm-password"
                                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Confirm
                                  Password</Label>
                                <input
                                  class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                  id="confirm-password" placeholder="••••••••" type="password" auto-capitalize="none"
                                  auto-complete="current-password" auto-correct="off">
                              </div>
                              <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"><!---->
                                Sign up with Email </button>
                            </div>
                          </form>

                        </div>
                        <p class="px-8 text-center text-sm text-muted-foreground"> By clicking continue, you agree to
                          our
                          <a href="/terms" class="underline underline-offset-4 hover:text-primary"> Terms of Service
                          </a>
                          and
                          <a href="/privacy" class="underline underline-offset-4 hover:text-primary"> Privacy Policy
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                </Tabs>

              </DialogContent>
            </Dialog>

          </div>

          <DialogContent class="flex justify-center items-center">
            <Tabs default-value="account" class="w-[400px]">
              <TabsList class="grid w-full grid-cols-3">
                <TabsTrigger value="account">
                  Account
                </TabsTrigger>
                <TabsTrigger value="password">
                  Password
                </TabsTrigger>
                <TabsTrigger value="mail">
                  Email
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when you're done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent class="space-y-2">
                    <div class="space-y-1">
                      <Label for="name">Full Name</Label>
                      <Input id="name" />
                    </div>
                    <div class="space-y-1">
                      <Label for="picture">Profile Picture</Label>
                      <Input id="picture" type="file" placeholder="Upload your profile picture" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="password">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent class="space-y-2">
                    <div class="space-y-1">
                      <Label for="current">Current password</Label>
                      <Input id="current" type="password" placeholder="••••••••" />
                    </div>
                    <div class="space-y-1">
                      <Label for="new">New password</Label>
                      <Input id="new" type="password" placeholder="••••••••" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="mail">
                <Card>
                  <CardHeader>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>
                      Change your email address here. After saving, you'll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent class="space-y-2">
                    <div class="space-y-1">
                      <Label for="current">Current email</Label>
                      <Input id="current" type="email" :default-value="user?.email" />
                    </div>
                    <div class="space-y-1">
                      <Label for="new">New email</Label>
                      <Input id="new" type="email" placeholder="mail@domain.tld" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save email</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      </div>
    </div>

  </header>



</template>


<script lang="ts" setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// const { locales, locale, setLocale } = useI18n()

const { locales, setLocale, locale } = useI18n()

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const onLocaleChange = (code: any) => {
  if (!code || (code !== 'en' && code !== 'de')) return;

  if (code !== locale) {
    setLocale(code);
    navigateTo(localePath(code));
  }
  else {
    console.log('Locale is already set to:', code);
  }
}

const email = ref('')
const password = ref('')
const confirm_password = ref('')

const loginWithMail = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (error) console.error('Login error:', error)
  else navigateTo('/')
}

const signInWithOtp = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: email.value,
    // password: password.value,
    // options: {
    //   emailRedirectTo: 'http://localhost:3000/confirm',
    // }
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

const signOut = async () => {
  await supabase.auth.signOut()
  navigateTo('/')
}

const showDesc = ref(true)
function toggleDesc() {
  showDesc.value = !showDesc.value
}

function timeoutDesc() {
  showDesc.value = false
  setTimeout(() => {
    showDesc.value = true
  }, 2000)
}

const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Nuxt module shadcn',
    href: 'https://nuxt.com/modules/shadcn',
    description:
      'A Nuxt module for integrating Shadcn UI components into your Nuxt application.',
  },
  {
    title: 'Documentation',
    href: 'https://www.shadcn-vue.com/',
    description:
      'Explore the documentation to learn more about Shadcn Vue components and how to use them effectively.',
  },
  {
    title: 'Demo App',
    href: 'https://ui.shadcn.com/',
    description:
      'Explore the demo app to see Shadcn components in action and how to use them effectively. It\'s an example app showcasing the capabilities of Shadcn components in React but should still show it\'s capabilities in Vue.',
  },

];
</script>