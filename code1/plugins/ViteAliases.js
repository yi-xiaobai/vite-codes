
const fs = require('fs')
const path = require('path')



function diffDirAndFile(dirs, prefix) {
    const result = {}

    dirs.forEach(item => {
        const filePath = path.resolve(__dirname, '../src', item)
        const current = fs.statSync(filePath)
        // 目录
        if (current.isDirectory()) {
            result[`${prefix}${item}`] = filePath
        }
    })
    return result
}




function getTotalDir(prefix) {
    const filePath = path.resolve(__dirname, "..", "./src")
    const dirs = fs.readdirSync(filePath)
    // console.log('==>Get dirs', dirs);
    return diffDirAndFile(dirs, prefix)
}




export function ViteAliases(params = {}) {
    console.log('load ViteAliases');
    return {
        name: 'my-custon-vite-alias',
        config(config, env) {
            // console.log('==>Get config', config, env);
            params.prefix = params.prefix || '@'
            return {
                resolve: {
                    alias: getTotalDir(params.prefix)
                }
            }
        }
    }
}