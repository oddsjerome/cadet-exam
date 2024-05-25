<script setup lang="ts">
defineProps<{
    name: string,
    options: { value: string }[]
}>();
</script>

<template>
    <div class="mb-8">
        <h2 class="mb-2">{{ name }}</h2>
        <hr class="mb-4">
        <ul class="grid grid-cols-3 md:flex md:flex-col space-y-2 flex-wrap">
            <li v-for="(option, index) in options" :key="index" class="flex items-center py-1 px-2 space-x-1">
                <input :value="option.value" :id="option.value" type="checkbox"
                    class="form-checkbox h-5 w-5 text-primary rounded" />
                <label :for="option.value" class="text-gray-500">{{ option.value }}</label>
            </li>
        </ul>
    </div>
</template>
  
 