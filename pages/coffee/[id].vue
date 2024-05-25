<script setup lang="ts">
import { getCoffeeDetailUrl, type Coffee } from '~/data/coffee';

const id = useParam('id')
const { data: coffees } = await useFetch<Coffee[]>(getCoffeeDetailUrl(id));
const coffee: Ref<Coffee | undefined> = coffees.value !== null ? ref(coffees.value[0]) : ref();
console.log(coffee.value)
</script>

<template>
    <main>
        <template v-if="coffee">
            <Container>
                <div class="flex flex-col md:flex-row gap-4 py-10">
                    <div class="bg-primary w-full md:w-2/3 rounded-xl aspect-square flex justify-center items-center">
                        <img width="320px" :src="coffee.image_url" :alt="coffee.name" />
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
                                    <h3>Grind options</h3>
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