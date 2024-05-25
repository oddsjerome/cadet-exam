<script setup lang="ts">
</script>
<template>
    <div>
        <div class="flex justify-between items-center">
            <p>Filters</p>
            <Button value="Clear" :isLeftIcon="true" variable="Outlined" icon="" :click="() => { }" />
        </div>
        <div>
            <div>
                <h2>Category</h2>
                <hr>
            </div>
            <div>
                <h2>Roast</h2>
                <hr>
            </div>
            <div>
                <h2>Caffeine
                    <hr>
                </h2>
            </div>
        </div>
    </div>
</template>