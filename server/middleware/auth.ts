/*
 * @Author: 徐家俊 15151832830@163.com
 * @Date: 2024-12-09 17:16:43
 * @LastEditTime: 2024-12-10 11:31:34
 * @LastEditors: 徐家俊 15151832830@163.com
 * @Description:
 * @FilePath: /my-nuxt/server/middleware/auth.ts
 */
export default defineEventHandler((event) => {
    event.context.auth = { user: 123 }
})
