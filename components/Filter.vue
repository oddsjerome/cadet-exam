<script setup lang="ts">
import { useFilterStore } from '~/stores/useFilterStore';

const filterStore = useFilterStore();

const grindOptions = [
    { value: "Whole Bean" },
    { value: "Cafetiere" },
    { value: "Filter" },
    { value: "Espresso" },
    { value: "Pour Over" }
];

const flavorProfiles = [
    { value: "Dark Chocolate" },
    { value: "Black Cherry" },
    { value: "Citrus" },
    { value: "Toasted Nuts" },
    { value: "Caramel" },
    { value: "Cocoa" },
    { value: "Hazelnut" },
    { value: "Molasses" },
    { value: "Smooth" },
    { value: "Blueberry" },
    { value: "Almond" },
    { value: "Toffee" },
    { value: "Blackcurrant" },
    { value: "Coconut" },
    { value: "Spicy" },
    { value: "Earthy" },
    { value: "Cinnamon" },
    { value: "Clove" },
    { value: "Honey" },
    { value: "Chocolate" },
    { value: "Floral" },
    { value: "Vanilla" }
];

const clearFilters = () => {
    filterStore.clearFilters();
    const filterOptions = document.querySelectorAll('input[type="checkbox"]');
    filterOptions.forEach(
        (option) => ((option as HTMLInputElement).checked = false)
    );
};
</script>

<template>
    <div>
        <div class="flex justify-between items-center mb-10">
            <p class="text-lg font-semibold">Filters</p>
            <Button value="Clear" :isLeftIcon="true" variable="primary-outlined" :click="clearFilters">
                <icons-close />
            </Button>
        </div>
        <div>
            <FilterOption name="Grind option" :options="grindOptions" />
            <FilterOption name="Flavor profile" :options="flavorProfiles" />
        </div>
    </div>
</template>
