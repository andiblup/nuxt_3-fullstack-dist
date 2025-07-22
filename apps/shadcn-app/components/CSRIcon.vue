<template>
    <ClientOnly >
        <MdiIcon :icon="icon" :size="size" />
    </ClientOnly>
</template>


<script lang="ts" setup>


defineProps<{
    icon: string,
    size?: string
}>()

</script>