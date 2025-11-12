<script setup>
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore();
</script>

<template>
    <div>
        <p>Count: {{  counter.count }}</p>
        <p>Double: {{  counter.doubleCount }}</p>
        <button @click="counter.increment">加1</button>
    </div>
</template>