// 通过vite引入 defineConfig 函数
import { defineConfig } from "vite";
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";


// 通过策略模式替代if else 
const envResolves = {
    'build': () => {
        console.log('生产环境哦~~~');
        return Object.assign({}, viteBaseConfig, viteProdConfig)
    },
    'serve': () => {
        console.log('开发环境哦~~~');
        return Object.assign({}, viteBaseConfig, viteDevConfig)
    }
}


// 导出文件用该函数即可有提示
export default defineConfig((params) => {
    console.log('==>Get params', params);
    return envResolves[params.command]()
});


/**
 * 开发环境
 * ==>Get params {
  mode: 'development',
  command: 'serve',
  isSsrBuild: false,
  isPreview: false
}
 */


/**
 * 生产环境
 * ==>Get params {
  mode: 'production',
  command: 'build',
  isSsrBuild: false,
  isPreview: false
}
 */