const Koa = require('koa')  // 必须使用commonjs 不能使用esmodule
const app = new Koa()

const fs = require('fs')
const path = require('path')




app.use(async (ctx, next) => {
    console.log('==>Get ctx.request', ctx.request);
    console.log('==>Get ctx.response', ctx.response);

    if (ctx.request.url === '/') {
        const fileContent = await fs.promises.readFile(path.join(__dirname, './index.html'))
        console.log('==>Get 输出', fileContent.toString());
        // 设置响应类型
        ctx.set('Content-Type', 'text/html')
        ctx.body = fileContent
    }


    if (ctx.request.url === '/main.js') {
        const mainContent = await fs.promises.readFile(path.join(__dirname, './main.js'))
        // 设置响应类型
        ctx.set('Content-Type', 'application/x-javascript')
        ctx.body = mainContent
    }


    if (ctx.request.url === '/App.vue') {
        const mainVueContent = await fs.promises.readFile(path.join(__dirname, './App.vue'))
        // Vue文件会做一个字符串替换

        // 浏览器和服务器 文件都是字符串
        // 设置响应类型
        ctx.set('Content-Type', 'application/x-javascript')
        ctx.body = mainVueContent

    }
})


app.listen(5174, () => {
    console.log('node 服务启动了');
})