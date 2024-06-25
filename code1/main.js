//* 理解为动态导入
//* 如果没有加载/src/imageLoaders 文件 即没有改变promise状态 那么then方法永远不会执行
import('./src/imageLoaders').then(res => {
    console.log('==>Get res', res);
})

import './src/svgLoaders'


//* 按需引入即可即控制导入
import jsonFile from './src/assets/json/index.json'

//* 如果没有使用vite构建工具 那么json文件的导入 会以一个字符串的形式存在
//* tree shaking 遥树优化：打包工具会自动帮你移除那些你没用到的变量或者方法
console.log('==>Get jsonFile', jsonFile);   // {name: 'alice', age: '20'}




import './componentA.js'
import './componentB.js'
import './counter.js'

fetch('/api/users', {
    method: 'post'
}).then(res => {
    console.log('==>Get res', res);
})