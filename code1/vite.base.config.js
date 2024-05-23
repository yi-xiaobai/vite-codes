import { defineConfig } from "vite";


export default defineConfig({
    optimizeDeps: {
        exclude: [],    // 指定的数组中不进行依赖预构建
    },
    css: {
        modules: {
            localsConvention: 'camelCase',
            // 是否开启模块化
            scopeBehaviour: 'local',
            /**
             * name：文件名称
             * hash：生成的hash值
             * local：当前类名
             * ext：文件后缀
             */
            // generateScopedName: '[name]_[hash:hex:5]_[local]',
            // generateScopedName: '[name]__[local]___[hash:base64:5]',
            // generateScopedName: (name, filename, css) => {
            //     console.log('==>Get 11', name, filename, css);
            //     return ''
            // },
            hashPrefix: "hello",
            // globalModulePaths: ['./componentB.module.css']
        }
    }
})