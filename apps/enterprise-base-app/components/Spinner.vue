<script setup lang="ts">
defineProps<{ size?: string }>()
</script>

<template>

    <div class="spinner">
        <MdiIcon icon="mdiLoading" />
    </div>

</template>

<style scoped>
.spinner {
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
    transform-origin: center;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>