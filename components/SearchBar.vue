<script setup lang="ts">
let query = ref("")

const emit = defineEmits<{
    (e: 'search', query: string): void;
}>();


const onSearch = () => {
    emit('search', query.value);
};

</script>
<template>
    <div class="flex gap-2">
        <input type="search" name="search-input" placeholder="Starbuck product" id="" v-model="query"
            class="py-2 px-4 border rounded-full outline-none w-full">
        <input type="button" name="search-button" value="Search"
            class="bg-black text-white px-5 py-1 rounded-full cursor-pointer" @click="onSearch">
    </div>
</template>