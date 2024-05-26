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

const selectedGrindOptions = ref<string[]>([]);
const selectedFlavorProfiles = ref<string[]>([]);

const emit = defineEmits<{
    (e: 'update:filters', grindOptions: string[], flavorProfiles: string[]): void;
}>();

const handleFilterUpdate = (filterType: string, selectedOptions: string[]) => {
    if (filterType === 'Grind option') {
        selectedGrindOptions.value = selectedOptions;
    } else if (filterType === 'Flavor profile') {
        console.log("มายาง");

        selectedFlavorProfiles.value = selectedOptions;
    }
};

const clearFilters = () => {
    selectedGrindOptions.value = [];
    selectedFlavorProfiles.value = [];
};

watch([selectedGrindOptions, selectedFlavorProfiles], () => {
    emit('update:filters', selectedGrindOptions.value, selectedFlavorProfiles.value);
});

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
            <FilterOption name="Grind option" :options="grindOptions" :selectedOptions="selectedGrindOptions"
                @update:selectedOptions="handleFilterUpdate" />
            <FilterOption name="Flavor profile" :options="flavorProfiles" :selectedOptions="selectedFlavorProfiles"
                @update:selectedOptions="handleFilterUpdate" />
        </div>
    </div>
</template>