<script setup lang="ts">
import type { Coffee } from '~/data/coffee';

const { coffee } = defineProps<{ coffee: Coffee }>()

</script>
<template>
    <NuxtLink class="" :to="`/coffee/${coffee.id}`">
        <div class="border">
            <img class="bg-gray-300 h-52" :src="coffee.image_url" alt="image">
            <div class="pt-4">
                <h2>{{ coffee.name }}</h2>
                <div class="flex gap-1">
                    <h3 v-for="profile in coffee.flavor_profile" :key="profile"
                        class="bg-black text-white text-xs py-1 px-2 rounded-full inline-flex">{{ profile }}</h3>
                </div>

                <h3>{{ coffee.price }}</h3>
            </div>
        </div>
    </NuxtLink>
</template>