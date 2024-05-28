
const fs = require('fs')
const path = require('path')
const result = fs.readFileSync('./variable.css')
console.log('==>Get result', result, process.cwd(), __dirname);

// node端 读取文件或者操作文件 如果发现是相对路径 则会去使用process.cwd()来进行对应的拼接
// process.cwd() 获取当前node的执行目录
