import { defineConfig } from "vite";
import { ViteAliases } from "./plugins/ViteAliases";
import { CreateHtmlPlugins } from "./plugins/CreateHtmlPlugins";
import { createHtmlPlugin } from 'vite-plugin-html'
import { viteMockServe } from 'vite-plugin-mock'
import { ViteMockPlugins } from "./plugins/ViteMockPlugins";

const path = require('path')
const postcssGlobalData = require('@csstools/postcss-global-data')
const postcssPresetEnv = require('postcss-preset-env')


export default defineConfig({
    plugins: [
        ViteAliases({}),
        createHtmlPlugin({
            inject: {
                data: {
                    title: 'vite 启动'
                },
                tags: [
                    {
                        injectTo: 'body',
                        tag: 'div',
                        attrs: {
                            id: 'tag'
                        }
                    }
                ]
            }
        }),
        // CreateHtmlPlugins({
        //     inject: {
        //         data: {
        //             title: '自定义的html-plugins'
        //         }
        //     }
        // }),
        // viteMockServe({

        // })
        ViteMockPlugins()
    ],
    optimizeDeps: {
        exclude: [],    // 指定的数组中不进行依赖预构建
    },
    // resolve: {
    //     alias: {
    //         '@': path.resolve(__dirname, './src'),
    //         '@assets': path.resolve(__dirname, './src/assets'),
    //     }
    // },
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
        devSourcemap: true,

        postcss: {
            plugins: [
                postcssGlobalData({
                    files: [
                        path.resolve(__dirname, './variable.css')
                    ]
                }),
                postcssPresetEnv({
                    // importFrom: path.resolve(__dirname, './variable.css')   // 让postcss知道 有一些全局变量它需要知道
                })
            ]
        }
    },

    build: {    //* 构建生产产物的一些配置策略
        rollupOptions: {
            output: {
                assetFileNames: '[hash]-[name].[ext]'   //* 静态资源生产环境重命名
            }
        },
        assetsInlineLimit: 4096000, //* 小于此阈值的导入或引用资源将内联为 base64 编码  避免额外的http请求
        outDir: 'dist',    //* 输出的的文件名
        assetsDir: 'assets' //* 静态资源存放文件名
    }
})