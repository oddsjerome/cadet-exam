<script setup lang="ts"></script>

<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div>
            <Navbar />
            <slot />
        </div>
        <Footer />
    </div>
</template>