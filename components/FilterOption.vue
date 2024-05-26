<script setup lang="ts">
const props = defineProps<{
    name: string,
    options: { value: string }[]
}>();

const selectedOptions = ref<string[]>([]);

const emit = defineEmits<{
    (e: 'update:selectedOptions', name: string, value: string[]): void;
}>();

const toggleOption = (value: string) => {
    const index = selectedOptions.value.indexOf(value);
    if (index > -1) {
        selectedOptions.value.splice(index, 1);
    } else {
        selectedOptions.value.push(value);
    }
    emit('update:selectedOptions', props.name, selectedOptions.value);
};

const isVisible = ref(true);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};

watch(() => selectedOptions.value, () => {
    emit('update:selectedOptions', props.name, selectedOptions.value);
});
</script>

<template>
    <div class="mb-8">
        <button @click="toggleVisibility" class="w-full text-start focus:outline-none">
            <h2 class="pb-2">{{ name }}</h2>
        </button>
        <hr class="mb-4">
        <transition name="fade">
            <ul v-if="isVisible" class="grid grid-cols-3 md:flex md:flex-col space-y-2 flex-wrap">
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
