<script setup lang="ts">
const emit = defineEmits<{
    (e: 'setPage', page: number): void;
    (e: 'nextPage'): void;
}>();

const { totalPages, currentPage } = defineProps<{ totalPages: number, currentPage: number }>()


</script>
<template>
    <div class="flex justify-center my-10" v-if="totalPages > 1">
        <span v-for="page in totalPages" :key="page" @click="$emit('setPage', page)"
            :class="{ 'bg-primary text-white': currentPage === page, ' hover:bg-gray-200': currentPage !== page }"
            class="mx-1 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center duration-200">{{
                page
            }}</span>
        <span
            class="hover:bg-gray-200 mx-1 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center duration-200"
            @click="$emit('nextPage')">></span>
    </div>
</template>