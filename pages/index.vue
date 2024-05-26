<script setup lang="ts">
import { type Coffee } from '~/data/coffee';

const config = useRuntimeConfig();

const { data: coffees, refresh } = await useFetch<Coffee[]>(config.public.apiBase);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 12;

const filterStore = useFilterStore() 
const {selectedGrindOptions, selectedFlavorProfiles} = storeToRefs(filterStore)

const filteredCoffees = computed(() => {
    return (coffees.value || []).filter(coffee => {
        const matchesSearch = !searchQuery.value || coffee.name.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesGrind = !selectedGrindOptions.value.length || selectedGrindOptions.value.every(option => coffee.grind_option.includes(option));
        const matchesFlavor = !selectedFlavorProfiles.value.length || selectedFlavorProfiles.value.every(profile => coffee.flavor_profile.includes(profile));
        return matchesSearch && matchesGrind && matchesFlavor;
    });
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

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
    }
};

const handleSearch = (query: string) => {
    searchQuery.value = query;
};

const handleFilterUpdate = (filterType: string, updatedOptions: string[]) => {
    if (filterType === "Grind option") {
        selectedGrindOptions.value = updatedOptions;
    } else if (filterType === "Flavor profile") {
        selectedFlavorProfiles.value = updatedOptions;
    }
    currentPage.value = 1;
};

watch(searchQuery, () => {
    refresh();
    currentPage.value = 1;
});
</script>

<template>
    <main>
        <Banner />
        <Container>
            <div class="flex flex-col md:flex-row gap-4 pt-16">
                <div class="flex flex-col w-full md:w-3/12">
                    <Filter @update:filters="handleFilterUpdate" />
                </div>
                <div class="flex flex-col w-full md:w-9/12 gap-5">
                    <SearchBar @search="handleSearch" />
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 bg-white" v-if="paginatedCoffees.length">
                        <CoffeeCard v-for="coffee in paginatedCoffees" :key="coffee.id" :coffee="coffee" />
                    </div>
                    <div v-else class="text-center py-32">
                        <p class="text-gray-500">No item found.</p>
                    </div>
                    <Pagination :totalPages="totalPages" :currentPage="currentPage" @setPage="setPage"
                        @nextPage="nextPage" />
                </div>
            </div>
        </Container>
    </main>
</template>
