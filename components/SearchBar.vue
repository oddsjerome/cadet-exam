<script setup lang="ts">
let query = ref("")

const emit = defineEmits<{
    (e: 'search', query: string): void;
}>();

watch(query, () => {
    if (query.value === "") {
        emit('search', query.value)
    }
});

</script>
<template>
    <div class="flex gap-2">
        <div class="flex items-center w-full">
            <label for="search-input" class="h-full border-y border-l rounded-l-full">
                <IconsSearch class="fill-black h-full w-10 pl-4" />
            </label>
            <input type="search" name="search-input" id="search-input" placeholder="Starbucks product" v-model="query"
                class="py-2 px-4 border-y border-r rounded-r-full outline-none w-full">
        </div>
        <Button value="Search" :isLeftIcon="true" variable="secondary-filled" :isDisabled="!query"
            :click="() => { $emit('search', query) }" />
    </div>
</template>