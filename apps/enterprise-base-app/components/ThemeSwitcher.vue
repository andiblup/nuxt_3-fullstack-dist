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
          <SelectItem value="green-light">
            Green (Light)
          </SelectItem>
          <SelectItem value="green-dark">
            Green (Dark)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </ClientOnly>
</template> -->

<!-- <script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

const {
  themeModel,            // Proxy für v-model
  availableThemes,
  userTheme,
  resetThemeToSystem,
} = useTheme()

// UI-Helfer: Label-Mapping
const themeLabel = (t: string) => {
  switch (t) {
    case 'neutral': return 'Neutral (Light)'
    case 'neutral-dark': return 'Neutral (Dark)'
    case 'violet-light': return 'Violett (Light)'
    case 'violet-dark': return 'Violett (Dark)'
    case 'green-light': return 'Green (Light)'
    case 'green-dark': return 'Green (Dark)'
    default: return t
  }
}
</script>

<template>
  <ClientOnly>
    <Select v-model="themeModel.value">
      <SelectTrigger class="w-[220px]">
        <SelectValue
          placeholder="Theme auswählen"
          :defaultValue="themeModel.value"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>

          <SelectItem value="__system" @select="resetThemeToSystem()">
            Reset to System Theme
          </SelectItem>

          <SelectItem
            v-for="theme in availableThemes"
            :key="theme"
            :value="theme"
          >
            {{ themeLabel(theme) }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </ClientOnly>
</template> -->


<!-- <script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import {
    Select, SelectContent, SelectGroup, SelectItem,
    SelectLabel, SelectTrigger, SelectValue,
} from '~/components/ui/select'

const { themeModel, availableThemes } = useTheme()
</script>

<template>
    <ClientOnly>
        <Select v-model="themeModel">
            <SelectTrigger class="w-[220px]">
                <SelectValue placeholder="Theme auswählen" />
            </SelectTrigger>

            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Themes</SelectLabel>

                    <SelectItem value="system">System (Neutral)</SelectItem>

                    <SelectItem v-for="t in availableThemes" :key="t" :value="t">
                        {{ t }}
                    </SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </ClientOnly>
</template> -->

<!-- components/ThemeSwitcher -->
<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'
import {
    Select, SelectContent, SelectGroup, SelectItem,
    SelectLabel, SelectTrigger, SelectValue,
} from '~/components/ui/select'


// Props for width customization, default value is '180px'

const props = defineProps<{
    width?: string | number
}>()
const width = props.width || '180px'

const { themeModel, availableThemes } = useTheme()
</script>

<template>
    <div class="">
        <ClientOnly>
            <Select v-model="themeModel">
                <SelectTrigger :class="`w-[${width}]`">
                    <SelectValue placeholder="Theme auswählen" />
                </SelectTrigger>

                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Themes</SelectLabel>

                        <!-- System = Key fehlt -->
                        <SelectItem value="system">System (Neutral)</SelectItem>

                        <!-- Persistierbare Themes -->
                        <SelectItem v-for="t in availableThemes" :key="t" :value="t">
                            {{ t }}
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </ClientOnly>
    </div>
</template>
