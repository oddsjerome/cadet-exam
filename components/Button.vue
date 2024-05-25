<script setup lang="ts">

const props = defineProps<{
    value: string;
    isLeftIcon?: boolean;
    isRightIcon?: boolean;
    variable: "Filled" | "Outlined";
    icon?: string;
    click: any;
}>();

const buttonClasses = computed(() => {
    let baseClasses = "border px-4 py-1 rounded-full cursor-pointer flex items-center justify-center space-x-2";
    if (props.variable === "Filled") {
        baseClasses += " bg-secondary text-white";
    } else if (props.variable === "Outlined") {
        baseClasses += " border-primary text-primary";
    }
    return baseClasses;
});
</script>

<template>
    <button :class="buttonClasses" @click="click">
        <template v-if="isLeftIcon">
        </template>
        <span>{{ value }}</span>
        <template v-if="isRightIcon">
        </template>
    </button>
</template>


