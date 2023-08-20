<script lang="ts" setup>
import { useCounterStore } from '../store/index';

const page = ref(1)
const items = ref(Array(55))

const store = useCounterStore()

</script>

<template>
    <div>
        <h1>home page</h1>

        <p>{{ store.name }}</p>

        <UPagination
            v-model="page"
            :total="items.length"
            :ui="{
                wrapper: 'flex items-center gap-1',
                rounded: 'rounded-full min-w-[32px] justify-center',
            }"
            :prev-button="null"
            :next-button="{
                icon: 'i-heroicons-arrow-small-right-20-solid',
                color: 'primary',
                variant: 'outline',
            }"
        />
    </div>
</template>
