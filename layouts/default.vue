<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <nav class="bg-[#303030] p-4">
                <Container>
                    <div class="flex justify-between">
                        <div class="w-5 h-5 bg-white"></div>
                        <div class="w-5 h-5 bg-white"></div>
                    </div>
                </Container>
            </nav>

            <slot />
        </div>
        <footer class="bg-[#303030] p-2 text-xs text-white">
            <Container>
                <div class="flex justify-between">
                    <p>©2024 Coffee Concepts Retail Co.,Ltd. All rights</p>
                    <p>Starbucks Thailand</p>
                </div>
            </Container>
        </footer>
    </div>
</template>