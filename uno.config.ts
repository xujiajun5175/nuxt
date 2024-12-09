/*
 * @Author: 徐家俊 15151832830@163.com
 * @Date: 2024-12-09 17:05:17
 * @LastEditTime: 2024-12-09 17:06:47
 * @LastEditors: 徐家俊 15151832830@163.com
 * @Description:
 * @FilePath: /my-nuxt/uno.config.ts
 */
import { defineConfig, presetUno, presetAttributify } from 'unocss'
export default defineConfig({
    presets: [presetUno(), presetAttributify()],
})
