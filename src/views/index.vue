<script setup>
import { useCounterStore } from '@/stores/counter'
import SvgIcon from '@/components/SvgIcon/index.vue'
const counter = useCounterStore();
</script>

<template>
    <div>
        <svg-icon name="vue" color="red" height="50px" width="50px"></svg-icon>
        <p>Count: {{  counter.count }}</p>
        <p>Double: {{  counter.doubleCount }}</p>
        <button @click="counter.increment">加1</button>

    </div>
</template>