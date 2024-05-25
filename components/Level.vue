<script setup lang="ts">
const props = defineProps({
    level: {
        type: Number,
        required: true,
        validator: (value: number) => value >= 0
    },
    max: {
        type: Number,
        default: 5,
        validator: (value: number) => value >= 0
    }
});

const dots = Array.from({ length: props.max }, (_, index) => index + 1);
</script>

<template>
    <div class="flex items-center space-x-1">
        <template v-for="dot in dots" :key="dot">
            <span class="h-3 w-3 rounded-full" :class="{ 'bg-primary': dot <= level, 'bg-gray-300': dot > level }"></span>
        </template>
    </div>
</template>
  
