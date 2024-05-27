<script setup lang="ts">
import { useFilterStore } from '~/stores/useFilterStore';

const props = defineProps<{
    name: string,
    options: { value: string }[]
}>();

const filterStore = useFilterStore();
const { selectedGrindOptions, selectedFlavorProfiles } = storeToRefs(filterStore)

const selectedOptions = ref<string[]>([]);

const toggleOption = (value: string) => {
    const index = selectedOptions.value.indexOf(value);
    if (index > -1) {
        selectedOptions.value.splice(index, 1);
    } else {
        selectedOptions.value.push(value);
    }
    if (props.name === 'Grind option') {
        filterStore.setGrindOptions([...selectedOptions.value]);
    } else if (props.name === 'Flavor profile') {
        filterStore.setFlavorProfiles([...selectedOptions.value]);
    }
};

const isVisible = ref(true);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};

watch(() => {
    if (props.name === 'Grind option') {
        return selectedGrindOptions;
    } else if (props.name === 'Flavor profile') {
        return selectedFlavorProfiles;
    }
}, (newOptions) => {
    if (newOptions) {
        console.log("add new option");
        selectedOptions.value = [...newOptions.value];
    } else {
        console.log("remove");
        selectedOptions.value = [];
    }
});
</script>

<template>
    <div class="mb-8">
        <button @click="toggleVisibility" class="w-full text-start focus:outline-none flex justify-between ">
            <h2 class="pb-2">{{ name }}</h2>
            <icons-arrow-drop-down v-if="isVisible" class="fill-gray-500 rotate-180" />
            <icons-arrow-drop-down v-else class="fill-gray-500" />
        </button>
        <hr class="mb-4">
        <transition name="fade">
            <ul :class="isVisible ? 'hidden' : 'grid grid-cols-3 md:flex md:flex-col space-y-2 flex-wrap'">
                <li v-for="(option, index) in options" :key="index" class="flex items-center py-1 px-2 space-x-1">
                    <input :value="option.value" :id="option.value" type="checkbox"
                        class="form-checkbox h-4 w-4 text-primary rounded" :checked="selectedOptions.includes(option.value)"
                        @change="toggleOption(option.value)" />
                    <label :for="option.value" class="text-gray-500 text-sm">{{ option.value }}</label>
                </li>
            </ul>
        </transition>
    </div>
</template>
