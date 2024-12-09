// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    modules: [
      '@pinia/nuxt',
      '@unocss/nuxt',
      '@vueuse/nuxt',
      '@nuxthub/core',
    ],
    devtools: { enabled: true, vscode: {} },
})