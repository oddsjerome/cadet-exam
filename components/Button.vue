<script setup lang="ts">

const props = defineProps<{
    value: string;
    isLeftIcon?: boolean;
    isRightIcon?: boolean;
    variable: "Filled" | "Outlined";
    icon?: any;
    click: any;
}>();

const buttonClasses = computed(() => {
    let baseClasses = "border px-3 py-2 rounded-full flex items-center justify-center space-x-2";
    if (props.variable === "Filled") {
        baseClasses += " bg-primary text-white";
    } else if (props.variable === "Outlined") {
        baseClasses += " border-primary text-primary fill-primary";
    }
    return baseClasses;
});
</script>

<template>
    <button :class="buttonClasses" @click="click">
        <template v-if="isLeftIcon">
            <slot />
        </template>
        <span>{{ value }}</span>
        <template v-if="isRightIcon">
            <slot />
        </template>
    </button>
</template>


