<script setup lang="ts">

const props = defineProps<{
    value: string;
    isLeftIcon?: boolean;
    isRightIcon?: boolean;
    variable: "Filled" | "Outlined";
    icon?: string;
    click: () => void;
}>();

const buttonClasses = computed(() => {
    let baseClasses = "border px-4 py-1 rounded-full cursor-pointer flex items-center justify-center space-x-2";
    if (props.variable === "Filled") {
        baseClasses += " bg-primary text-white";
    } else if (props.variable === "Outlined") {
        baseClasses += " border-blue-500 text-blue-500";
    }
    return baseClasses;
});
</script>

<template>
    <button :class="buttonClasses" @click="click">
        <template v-if="isLeftIcon">
            x </template>
        <span>{{ value }}</span>
        <template v-if="isRightIcon">
            x </template>
    </button>
</template>


