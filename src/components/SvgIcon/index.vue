<template>
    <div>
        <svg :style="{ width, height }">
            <use :xlink:href="`#icon-${name}`" :fill="color"></use>
        </svg>
    </div>
</template>

<script setup>
defineProps({
    name :String,
    color: {
        type: String,
        default: ''
    },
    width:{
        type:String,
        default: '16px'
    },
    height:{
        type:String,
        default: '16px'
    }
})
</script>

