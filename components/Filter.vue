<script setup lang="ts">
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

const emit = defineEmits<{
    (e: 'update:filters', filterType: string, updatedOptions: string[]): void;
}>();

const handleFilterUpdate = (filterType: string, selectedOptions: string[]) => {
    emit('update:filters', filterType, selectedOptions);
};

const clearFilters = () => {
    const filterOptions = document.querySelectorAll('input[type="checkbox"]');
    filterOptions.forEach(option => (option as HTMLInputElement).checked = false);
    handleFilterUpdate('Grind option', []);
    handleFilterUpdate('Flavor profile', []);
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
            <FilterOption name="Grind option" :options="grindOptions" @update:selectedOptions="handleFilterUpdate" />
            <FilterOption name="Flavor profile" :options="flavorProfiles" @update:selectedOptions="handleFilterUpdate" />
        </div>
    </div>
</template>