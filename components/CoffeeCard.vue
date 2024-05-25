<script setup lang="ts">
import type { Coffee } from '~/data/coffee';

const { coffee } = defineProps<{ coffee: Coffee }>()

</script>
<template>
    <NuxtLink class="" :to="`/coffee/${coffee.id}`">
        <div>
            <div class="bg-gray-300 h-52 rounded-md">
                <img :src="coffee.image_url" :alt="coffee.name">
            </div>
            <div class="pt-2">
                <h2>{{ coffee.name }}</h2>
                <Pill class="mt-2" :list="coffee.grind_option" />
                <h3 class="pt-10 text-gray-500">{{ coffee.price }}$</h3>
            </div>
        </div>
    </NuxtLink>
</template>