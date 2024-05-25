<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <div class="flex items-center gap-6 text-white text-sm">
        <p>{{ name }}</p>
        <img src="https://thispersondoesnotexist.com/" class="w-12 h-12 rounded-full bg-white" />
    </div>
</template>