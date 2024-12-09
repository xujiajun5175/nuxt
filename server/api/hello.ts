/*
 * @Author: 徐家俊 15151832830@163.com
 * @Date: 2024-12-09 17:08:08
 * @LastEditTime: 2024-12-09 17:09:13
 * @LastEditors: 徐家俊 15151832830@163.com
 * @Description:
 * @FilePath: /my-nuxt/server/api/hello.ts
 */

export default defineEventHandler((_) => {
    return { hello: 'world' }
})
