<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useFetch } from '#app';
import { type Coffee, getCoffeesUrl } from '~/data/coffee';

const { data: coffees, refresh } = await useFetch<Coffee[]>(getCoffeesUrl());

const searchQuery = ref('');
const filteredCoffees = computed(() => {
    if (!searchQuery.value) {
        return coffees.value || [];
    }
    return (coffees.value || []).filter(coffee =>
        coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});

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
                    <div class="flex justify-between items-center">
                        <p>Filters</p>
                        <input type="button" value="Clear" class="border px-4 py-1 rounded-full cursor-pointer">
                    </div>
                    <div>
                        <div>
                            <h2>Category</h2>
                            <hr>
                        </div>
                        <div>
                            <h2>Roast</h2>
                            <hr>
                        </div>
                        <div>
                            <h2>Caffeine
                                <hr>
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col w-full md:w-9/12 gap-5">
                    <SearchBar @search="handleSearch" />
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 bg-white" v-if="filteredCoffees.length">
                        <CoffeeCard v-for="coffee in filteredCoffees" :key="coffee.id" :coffee="coffee" />
                    </div>
                    <div>Pagination</div>
                </div>
            </div>
        </Container>

    </main>
</template>