<script setup lang="ts">
import type { Coffee } from '~/data/coffee';

const { coffee } = defineProps<{ coffee: Coffee }>()

</script>
<template>
    <NuxtLink class="" :to="`/coffee/${coffee.id}`">
        <div>
            <div class="bg-primary h-52 rounded-lg flex justify-center items-center">
                <img :src="coffee.image_url" :alt="coffee.name">
            </div>
            <div class="pt-2 h-36 flex flex-col justify-between">
                <div>
                    <h2 class="font-bold">{{ coffee.name }}</h2>
                    <Pill class="mt-2" :list="coffee.grind_option" />
                </div>
                <h3 class="text-gray-500">{{ coffee.price }}$</h3>
            </div>
        </div>
    </NuxtLink>
</template>