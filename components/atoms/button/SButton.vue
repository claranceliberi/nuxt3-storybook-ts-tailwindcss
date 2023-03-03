import { ButtonProps } from './SButton.types';
<template>
    <button :class="styles">
        <slot />
    </button>
</template>

<script setup lang="ts">
import type { ButtonProps } from "./SButton.types"
import { computed } from "vue"

const props = withDefaults(defineProps<ButtonProps>(), {
    appearance: "primary",
    width: "content",
    rounded: "full",
})

const styles = computed(() => {
    let s = ""

    if (props.appearance == "primary") s += ` bg-primary text-white py-2 px-6`
    else if (props.appearance == "secondary") s += ` bg-white text-black py-2 px-6`
    else if (props.appearance == "text") s += ` `

    if (props.width == "full") s += ` w-full`

    if (props.rounded == "full") s += " rounded-full"
    else if (props.rounded == "md") s += " rounded-[5px]"

    return s
})
</script>
