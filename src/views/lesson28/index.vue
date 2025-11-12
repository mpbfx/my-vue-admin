<template>
  <div>mock数据</div>
</template>

<script setup>
// import axios from 'axios'
// axios.get('api/user/info').then(res => {
//   console.log(res.data)
// })
import { getUserList } from '@/api/user' 
import { onMounted } from 'vue'

onMounted(async () => {
  const res = await getUserList();
  console.log(res);
})
</script>

<style>

</style>