import { defineConfig } from "vite";


export default defineConfig({
    optimizeDeps: {
        exclude: [],    // 指定的数组中不进行依赖预构建
    },
    css: { // 对css的行为进行配置

        // 对css的模块化默认行为进行配置
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
            globalModulePaths: ['./componentB.module.css']
        },

        // key + value
        // key代表预处理器的名
        preprocessorOptions: {
            less: {
                // 针对于100px / 2 计算等操作
                math: 'always',
                globalVars: {// 全局变量
                    mainColor: 'red'
                }
            },
            // 还有sass
        },

        // 说白了 文件对应的css文件索引
        devSourcemap: true
    }
})