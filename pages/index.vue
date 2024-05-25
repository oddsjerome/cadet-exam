<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useFetch } from '#app';
import { type Coffee, getCoffeesUrl } from '~/data/coffee';

const { data: coffees, refresh } = await useFetch<Coffee[]>(getCoffeesUrl());
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 12;

const filteredCoffees = computed(() => {
    if (!searchQuery.value) {
        return coffees.value || [];
    }
    return (coffees.value || []).filter(coffee =>
        coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

const paginatedCoffees = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredCoffees.value.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(filteredCoffees.value.length / itemsPerPage);
});

const setPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const handleSearch = (query: string) => {
    searchQuery.value = query;
};

watch(searchQuery, () => {
    refresh();
});
</script>

<template>
    <main>
        <Banner />
        <Container>
            <div class="flex flex-col md:flex-row gap-4 pt-16">
                <div class="flex flex-col w-3/12">
                    <Filter />
                </div>
                <div class="flex flex-col w-full md:w-9/12 gap-5">
                    <SearchBar @search="handleSearch" />
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 bg-white" v-if="paginatedCoffees.length">
                        <CoffeeCard v-for="coffee in paginatedCoffees" :key="coffee.id" :coffee="coffee" />
                    </div>
                    <div class="flex justify-center mt-4" v-if="totalPages > 1">
                        <span v-for="page in totalPages" :key="page" @click="setPage(page)"
                            :class="{ 'bg-green-800 text-white': currentPage === page, 'bg-gray-300': currentPage !== page }"
                            class="mx-1 w-10 h-10 rounded-full cursor-pointer flex justify-center items-center">{{ page
                            }}</span>
                    </div>
                </div>
            </div>
        </Container>
    </main>
</template>
