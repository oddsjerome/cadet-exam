<script setup lang="ts">

const props = defineProps<{
    value: string;
    isLeftIcon?: boolean;
    isRightIcon?: boolean;
    variable: "primary-filled" | "primary-outlined" | "secondary-filled" | "secondary-outlined";
    icon?: any;
    click: any;
}>();

const buttonClasses = computed(() => {
    let baseClasses = "border px-3 py-2 rounded-full flex items-center justify-center space-x-2";

    switch (props.variable) {
        case "primary-filled":
            baseClasses += " bg-primary text-white fill-white";
            break;
        case "primary-outlined":
            baseClasses += " border-primary text-primary fill-primary";
            break;
        case "secondary-filled":
            baseClasses += " bg-secondary text-white fill-white";
            break;
        case "secondary-outlined":
            baseClasses += " border-secondary text-secondary fill-secondary";
            break;
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


