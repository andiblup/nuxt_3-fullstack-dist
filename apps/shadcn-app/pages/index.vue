<template>
  <header class="bg-background sticky top-0 z-50 w-full shadow-md">
    <div class="container-wrapper 3xl:fixed:px-0 px-6 py-1">
      <div class="3xl:fixed:container flex h-[var(--header-height)] items-center gap-2 *:data-[slot=separator]:!h-4">

        <!-- Burger Menü Trigger (sichtbar auf kleinen Bildschirmen, versteckt auf großen) -->
        <Sheet>
          <SheetTrigger as-child>
            <button
              class="whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground px-4 py-2 has-[&>svg]:px-3 extend-touch-target h-8 touch-manipulation items-center justify-start gap-2.5 !p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 active:bg-transparent dark:hover:bg-transparent flex"
              type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-«Rmplb»"
              data-state="closed">
              <div class="relative flex h-8 w-4 items-center justify-center">
                <div class="relative size-4">
                  <span class="bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100 top-1"></span>
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
      </div>
    </div>
  </header>

  <!-- Content -->
  <div class="container-wrapper 3xl:fixed:px-0 px-6 py-4">
    <div class="3xl:fixed:container flex flex-col items-center justify-center gap-4">
      <h1 class="text-2xl font-bold">Welcome to the Shadcn App</h1>
      <p class="text-lg">This is a sample application using Shadcn UI components.</p>
      <!-- <div class="p-4"> -->
      <div class="flex justify-center w-full">
        <!-- <Card class="w-[350px]"> -->
        <!-- Card resizing -->
        <Card class="min-w-[250px] max-w-[300px] w-full">
          <!-- <Card class="md:w-1/3 lg:w-1/4 sm:w-1/3 "> -->
          <CardHeader>
            <CardTitle>Counter</CardTitle>
            <CardDescription>Click on increment to raise the counter by one and decrement to lower it by one.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label>Counter: {{ counter.count }}</Label>
          </CardContent>
          <CardFooter class="flex justify-between px-6 pb-6">
            <!-- <Button class="cursor-pointer" @click="counter.decrement" variant="outline">
          <CSRIcon icon="mdiMinus" />
        </Button>
        <Button class="cursor-pointer" @click="counter.increment">
          <CSRIcon icon="mdiPlus" />
        </Button> -->

            <ClientOnly>
              <Button class="cursor-pointer" @click="counter.decrement" variant="outline">
                <!-- <CSRIcon icon="mdiMinus" /> -->
                <MdiIcon icon="mdiMinus" />
              </Button>
              <Button class="cursor-pointer" @click="counter.increment">
                <!-- <CSRIcon icon="mdiPlus" /> -->
                <MdiIcon icon="mdiPlus" />
              </Button>
              <template #fallback>
                <!-- Fallback skeleton for both buttons -->
                <Skeleton class="h-8 w-8 rounded-md" />
                <Skeleton class="h-8 w-8 rounded-md" />
              </template>
            </ClientOnly>
          </CardFooter>
        </Card>
      </div>
      <div class="m-4"></div>



      <div class="">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      <div class="h-[200px]">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed
        diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </div>
      <div class="h-[200px]">
        ananas
      </div>
      <div class="">
        ananas
      </div>
      <div class="h-[200px]">
        ananas
      </div>
      <div class="h-[200px]">
        ananas
      </div>
      <div class="h-[200px]">
        ananas
      </div>
      <div class="h-[200px]">
        ananas
      </div>



      <!-- </div> -->


    </div>
  </div> <!-- End of Content -->
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import CSRIcon from '~/components/CSRIcon.vue'

const counter = useCounter()

// Add showDesc property and related methods
import { ref } from 'vue'
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
