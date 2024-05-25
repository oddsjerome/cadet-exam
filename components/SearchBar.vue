<script setup lang="ts">
let query = ref("")

const emit = defineEmits<{
    (e: 'search', query: string): void;
}>();

</script>
<template>
    <div class="flex gap-2">
        <input type="search" name="search-input" placeholder="Starbuck product" id="" v-model="query"
            class="py-2 px-4 border rounded-full outline-none w-full">
        <Button value="Search" :isLeftIcon="true" variable="Filled" icon="" :click="$emit('search', query)" />

    </div>
</template>