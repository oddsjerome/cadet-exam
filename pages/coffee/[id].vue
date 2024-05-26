<script setup lang="ts">
import { type Coffee } from '~/data/coffee';

const id = useParam('id')

const config = useRuntimeConfig();

const { data: coffees } = await useFetch<Coffee[]>(config.public.apiBase + `/${id}`);
const coffee: Ref<Coffee | undefined> = coffees.value !== null ? ref(coffees.value[0]) : ref();

const currentImage = ref(coffee.value?.image_url)

const selectImage = (imageUrl: string) => {
    currentImage.value = imageUrl;
};

</script>

<template>
    <main>
        <template v-if="coffee">
            <Container>
                <div class="flex flex-col md:flex-row gap-4 py-10">
                    <div class="w-full md:w-2/3 flex flex-col gap-4">
                        <div class="bg-primary rounded-xl aspect-square flex justify-center items-center">
                            <div class="relative">
                                <img width="320px" v-if="typeof coffee.image_url === 'string'"
                                    :src="(currentImage as string)" :alt="coffee.name" />
                            </div>
                        </div>
                        <div v-if="Array.isArray(coffee.image_url)"
                            class="flex justify-center flex-wrap space-x-2 px-4 pb-4 ">
                            <template v-for="(imageUrl, index) in coffee.image_url" :key="index">
                                <img width="80px" :src="imageUrl" :alt="coffee.name" @click="selectImage(imageUrl)"
                                    class="cursor-pointer bg-primary border border-gray-300 rounded-lg" />
                            </template>
                        </div>
                    </div>
                    <div class="flex flex-col gap-8 md:p-0">
                        <div class="flex flex-col gap-4">
                            <h1 class="text-2xl">
                                {{ coffee.name }}
                            </h1>
                            <Pill :list="coffee.grind_option" />
                            <p class="text-gray-500">{{ coffee.description }}</p>
                        </div>

                        <div>
                            <h2 class="text-lg pb-5">Coffee Profile</h2>
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <h3>Flavor profile</h3>
                                    <h4 class="text-gray-500">{{ coffee.flavor_profile.toString().replaceAll(",", ", ") }}
                                    </h4>
                                </div>
                                <div>
                                    <h3>Roasts level</h3>
                                    <Level :level="coffee.roast_level" />
                                </div>
                                <div>
                                    <h3>Weight</h3>
                                    <h4 class="text-gray-500">{{ coffee.weight }} g</h4>
                                </div>
                                <div>
                                    <h3>Region</h3>
                                    <h4 class="text-gray-500">{{ coffee.region }}</h4>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 class="text-lg">Price</h2>
                            <h3 class="text-gray-500">{{ coffee.price }}$</h3>
                        </div>
                    </div>
                </div>
            </Container>
        </template>
    </main>
</template>