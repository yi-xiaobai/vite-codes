const fs = require('fs')
const path = require('path')

// 自定义vite-mock-plugins
export function ViteMockPlugins(params = {}) {
    return {
        name: 'configure-server',
        configureServer(server) {

            const mockStat = fs.statSync('mock')
            // 检测mock是文件还是文件夹
            const isDirectory = mockStat.isDirectory()
            let mockResult = []
            if (isDirectory) {
                // 获取当前目录下的mock/index文件数据
                mockResult = require(path.join(process.cwd(), 'mock/index'))
            }
            // console.log('==>Get mockResult', mockResult);
            server.middlewares.use((req, res, next) => {
                // 自定义请求处理...

                // 查找和url相匹配的结果
                const matchItem = mockResult.find(item => item.url === req.url)
                console.log('==>Get matchItem', matchItem);
                if (matchItem) {
                    // 防止乱码 设置Content-Type格式
                    res.setHeader('Content-Type', "application/json")
                    const responseData = matchItem.response(req)
                    res.end(JSON.stringify(responseData))
                } else {
                    next()
                }
            })
        }
    }
}