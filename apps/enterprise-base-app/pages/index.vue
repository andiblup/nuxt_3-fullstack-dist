<template>


  <div class="container-wrapper 3xl:fixed:px-0 px-6 py-4">
    <div class="3xl:fixed:container flex flex-col items-center justify-center gap-4">
      <h1 class="text-2xl font-bold">Welcome to the Shadcn App</h1>
      <p class="text-lg">This is a sample application using Shadcn UI components.</p>
      <!-- <div class="p-4"> -->
      <div class="flex justify-center w-full">
        <!-- <Card class="w-[350px]"> -->
        <!-- Card resizing -->
        <ContextMenu>
          <ContextMenuTrigger class="">

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

                <ClientOnly>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button class="cursor-pointer" @click="counter.decrement" variant="outline">
                          <!-- <CSRIcon icon="mdiMinus" /> -->
                          <MdiIcon icon="mdiMinus" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to decrement</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>


                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger as-child>
                        <Button class="cursor-pointer" @click="counter.increment">
                          <!-- <CSRIcon icon="mdiPlus" /> -->
                          <MdiIcon icon="mdiPlus" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to increment</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <template #fallback>
                    <!-- Fallback skeleton for both buttons -->
                    <Skeleton class="h-8 w-8 rounded-md" />
                    <Skeleton class="h-8 w-8 rounded-md" />
                  </template>
                </ClientOnly>
              </CardFooter>
            </Card>

          </ContextMenuTrigger>
          <ContextMenuContent class="w-64">
            <ContextMenuItem inset @click="counter.increment">
              Increment
            </ContextMenuItem>
            <ContextMenuItem inset @click="counter.decrement">
              Decrement
            </ContextMenuItem>
            <ContextMenuItem inset @click="counter.reset">
              Reset Counter
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Close Browser
              <ContextMenuShortcut>Alt+F4</ContextMenuShortcut>
            </ContextMenuItem>

          </ContextMenuContent>
        </ContextMenu>

      </div>
      <div class="m-4"></div>


      <div class="w-full flex justify-center">

      </div>

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
  </div>
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import { Input } from '@/components/ui/input'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

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