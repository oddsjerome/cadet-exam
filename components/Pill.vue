<script setup lang="ts">
defineProps<{ list: string[] }>()

</script>
<template>
    <div class="flex gap-1 flex-wrap">
        <h3 v-for="item in list" :key="item" class="bg-secondary text-white text-xs py-1 px-2 rounded-full inline">
            {{ item }}</h3>
    </div>
</template>