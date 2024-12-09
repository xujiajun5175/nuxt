<!--
 * @Author: 徐家俊 15151832830@163.com
 * @Date: 2024-12-09 15:10:37
 * @LastEditTime: 2024-12-09 17:06:54
 * @LastEditors: 徐家俊 15151832830@163.com
 * @Description: 
 * @FilePath: /my-nuxt/pages/about.vue
-->
<script setup lang="ts">
    import gsap from 'gsap'
    definePageMeta({
        layout: 'orange',
        layoutTransition:{
          mode: 'out-in', 
            name: 'custom-asd',
            onBeforeEnter(el) {
            },
            onEnter: (el, done) => {
              done()
            },        
            onAfterEnter: (el) => {
                var tl = gsap.timeline({ delay: 2 })
                //sequenced one-after-the-other
                tl.to('.box1', { duration: 2, rotation: -360 }).to('.box2', { duration: 1, x: -100, ease: 'elastic.out' }).to('.box3', { duration: 2, rotation: 360, x: 100, ease: 'expo.out' })
            },
        },
        pageTransition: {
        },
    })
</script>
<template>
    <div class="bg-red w-screen h-screen " >
        <h1>关于页面</h1>
        <NuxtLink to="/">home</NuxtLink>
        <div class="flex flex-col gap-4 self-center w-max m-auto">
            <div class="box h-80px w-80px box1 bg-green"></div>
            <div class="box h-80px w-80px box2 bg-orange"></div>
            <div class="box h-80px w-80px box3 bg-purple"></div>
        </div>
    </div>
</template>
<style lang="scss" scoped></style>
