<script setup lang="ts">
const emit = defineEmits<{
    (e: 'setPage', page: number): void;
}>();

const { totalPages, currentPage } = defineProps<{ totalPages: number, currentPage: number }>()


</script>
<template>
    <div class="flex justify-center my-10" v-if="totalPages > 1">
        <span v-for="page in totalPages" :key="page" @click="$emit('setPage', page)"
            :class="{ 'bg-primary text-white': currentPage === page, 'bg-gray-300 hover:bg-gray-400': currentPage !== page }"
            class="mx-1 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center duration-200">{{
                page
            }}</span>
    </div>
</template>