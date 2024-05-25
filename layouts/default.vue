<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <nav class="bg-[#303030] py-4">
                <Container>
                    <div class="flex justify-between">
                        <img width="48px" src="../public/starbucks_logo_72px.png" alt="starbucks_logo" />
                        <div class="flex items-center gap-6 text-white text-sm">
                            <p>Jerome Tana</p>
                            <div class="w-12 h-12 rounded-full bg-white" />
                        </div>
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