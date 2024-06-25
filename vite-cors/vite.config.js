import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        proxy: {
            "/api": {   // 需要被代理的路径
                target: "https://www.360.com",  // 目标请求地址
                changeOrigin: true, // 是否转换源
                rewrite: path => path.replace(/^\/api/, '') // 将api 替换成 空字符串
            }
        }
    }
})