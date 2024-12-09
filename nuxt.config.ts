// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: { name: 'layout', mode: 'out-in' },
    },
    compatibilityDate: '2024-11-01',
    modules: ['@pinia/nuxt', '@unocss/nuxt', '@vueuse/nuxt', '@nuxthub/core'],
    devtools: { enabled: true, vscode: {} },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
        },
    },
})
