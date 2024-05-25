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
        <ul class="space-y-2">
            <li v-for="(option, index) in options" :key="index" class="flex items-center">
                <input :value="option.value" :id="option.value" type="checkbox"
                    class="form-checkbox h-5 w-5 text-primary rounded" />
                <label :for="option.value" class="ml-2 text-gray-500">{{ option.value }}</label>
            </li>
        </ul>
    </div>
</template>
  
 