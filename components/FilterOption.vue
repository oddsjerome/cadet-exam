<script setup lang="ts">
defineProps<{
    name: string,
    options: { value: string }[]
}>();

const isVisible = ref(true);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
};
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
                        class="form-checkbox h-4 w-4 text-primary rounded" />
                    <label :for="option.value" class="text-gray-500 text-sm">{{ option.value }}</label>
                </li>
            </ul>
        </transition>
    </div>
</template>
  
 