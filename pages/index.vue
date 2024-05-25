<script setup lang="ts">
import { getCoffeesUrl, type Coffee } from '~/data/coffee';

const { data: coffees, refresh } = await useFetch<Coffee[]>(
    getCoffeesUrl()
)

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
            <div class="flex gap-4">
                <div class="bg-red-300 flex flex-col w-3/12">
                    <div class="flex justify-between items-center">
                        <p>Filters</p>
                        <input type="button" value="Clear" class="border px-4 py-1 rounded-full">
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
                <div class="bg-red-300 flex flex-col w-9/12 gap-5">
                    <SearchBar @search="handleSearch" />
                    <div class="grid grid-cols-3 gap-2 bg-white" v-if="filteredCoffees.length">
                        <Card v-for="coffee in filteredCoffees" :key="coffee.id" :coffee="coffee" />
                    </div>
                    <div>Pagination</div>
                </div>
            </div>
        </Container>

    </main>
</template>