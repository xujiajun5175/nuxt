<!--
 * @Author: 徐家俊 15151832830@163.com
 * @Date: 2024-12-09 14:50:06
 * @LastEditTime: 2024-12-09 15:37:14
 * @LastEditors: 徐家俊 15151832830@163.com
 * @Description: 
 * @FilePath: /my-nuxt/layouts/default.vue
-->
<script setup lang="ts"></script>
<template>
    <div>
        <AppHeader> </AppHeader>
        <slot></slot>
        <AppFooter></AppFooter>
    </div>
</template>
