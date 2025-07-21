<!-- <script setup lang="ts">
import { useTheme } from '~/composables/useTheme';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select'; // Shadcn Select Komponenten
</script>

<template>
    <ClientOnly>
        <Select v-model="useTheme().currentTheme.value">
            <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Theme auswählen" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Themes</SelectLabel>
                    <SelectItem value="neutral">
                        Neutral (Light)
                    </SelectItem>
                    <SelectItem value="violet-light">
                        Violett (Light)
                    </SelectItem>
                    <SelectItem value="violet-dark">
                        Violett (Dark)
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </ClientOnly>
</template> -->

<script setup lang="ts">
import { useTheme } from '~/composables/useTheme';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select';
</script>

<template>
  <ClientOnly>
    <Select v-model="useTheme().currentTheme.value">
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Theme auswählen" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>
          <SelectItem value="neutral">
            Neutral (Light)
          </SelectItem>
          <SelectItem value="neutral-dark">
            Neutral (Dark)
          </SelectItem>
          <SelectItem value="violet-light">
            Violett (Light)
          </SelectItem>
          <SelectItem value="violet-dark">
            Violett (Dark)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </ClientOnly>
</template>