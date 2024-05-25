<script setup lang="ts"></script>

<template>
    <nav class="bg-[#303030] p-4">
        <Container>
            <div class="flex justify-between">
                <div class="w-5 h-5 bg-white"></div>
                <div class="w-5 h-5 bg-white"></div>
            </div>
        </Container>
    </nav>
    <div class="min-h-screen">
        <slot />
    </div>

    <footer class="bg-[#303030] p-2 flex justify-between text-white text-xs">
        <p>©2024 Coffee Concepts Retail Co.,Ltd. All rights</p>
        <p>Starbucks Thailand</p>
    </footer>
</template>