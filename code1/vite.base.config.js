import { defineConfig } from "vite";


export default defineConfig({
    optimizeDeps: {
        exclude: [],    // 指定的数组中不进行依赖预构建
    },
})