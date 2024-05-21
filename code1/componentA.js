import componentsAModule from './componentA.module.css'
import componentAModuleLess from './componentA.module.less'
console.log('==>Get ', componentsAModule, componentAModuleLess);

// 创建一个标签 div
const div = document.createElement('div')

// 插入到body中
document.body.appendChild(div)

div.className = componentsAModule.footer