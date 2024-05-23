import componentsBModule from './componentB.module.css'
console.log('==>Get componentsBModule', componentsBModule);

// 创建一个标签 div
const div = document.createElement('div')

// 插入到body中
document.body.appendChild(div)

div.className = componentsBModule.footer