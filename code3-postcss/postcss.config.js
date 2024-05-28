
// 类似于过滤器
// 预设环境包含很多的插件
// 语法降级 --> postcss-low-level
// 编译插件 --> postcss-compiler

// 预设就是帮你一次性把这一系列的插件都装上了
// 做语法的编译 less语法 sass语法（语法嵌套、函数、变量） postcss的插件


const postcssPresetEnv = require('postcss-preset-env')
module.exports = {
    plugins: [postcssPresetEnv()]
}