<!--
 * @Author: 徐家俊 15151832830@163.com
 * @Date: 2024-12-02 11:11:06
 * @LastEditTime: 2024-12-09 17:10:26
 * @LastEditors: 徐家俊 15151832830@163.com
 * @Description: 
 * @FilePath: /my-nuxt/pages/index.vue
-->
<script setup lang="ts">

    const route = useRoute()
    const counter = ref(0)

const {data} = await useFetch('/api/hello')
const {data:serverRoute} = await useFetch('/hello')
</script>

<template>
  <div class="bg-blue-300">
    <h1>首页</h1>
  <NuxtLink to="/about">关于页面</NuxtLink>
    <div>
        Counter: {{ counter }}
        <button @click="counter++">+</button>
        <button @click="counter--">-</button>
    </div>
    <div>{{ data?.hello }}</div>
    <div>{{ serverRoute }}</div>
    <div>
        <h1>Nuxt Routing set up successfully!</h1>
        <p>Current route: {{ route.path }}</p>
        <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
    </div>
  </div>
</template>
