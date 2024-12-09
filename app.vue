<!--
 * @Author: 徐家俊 15151832830@163.com
 * @Date: 2024-12-02 10:43:40
 * @LastEditTime: 2024-12-09 15:32:11
 * @LastEditors: 徐家俊 15151832830@163.com
 * @Description: 
 * @FilePath: /my-nuxt/app.vue
-->
<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
    .layout-enter-active,
    .layout-leave-active {
        transition: all 0.4s;
    }
    .layout-enter-from,
    .layout-leave-to {
        filter: grayscale(1);
    }

    .page-enter-active,
    .page-leave-active {
        transition: all 0.4s;
    }
    .page-enter-from,
    .page-leave-to {
        opacity: 0;
        filter: blur(1rem);
    }
</style>
