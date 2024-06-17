import './src/imageLoaders'

import './src/svgLoaders'


//* 按需引入即可即控制导入
import jsonFile from './src/assets/json/index.json'

//* 如果没有使用vite构建工具 那么json文件的导入 会以一个字符串的形式存在
//* tree shaking 遥树优化：打包工具会自动帮你移除那些你没用到的变量或者方法
console.log('==>Get jsonFile', jsonFile);   // {name: 'alice', age: '20'}



fetch('/api/users', {
    method: 'post'
}).then(res => {
    console.log('==>Get res', res);
})