# vite 分包策略

浏览器的缓存策略

静态资源---> 名字如果没变化 不会重新再去拿某个文件资源

hash：只要内容有一丁点变化 hash 字符串就会完全不同

平时我们的业务代码是不会经常变的

拿`lodash`来说 因为这个包很大 而我们可能只是使用其中一个方法或者几个方法 但是现在通过我们打包的话 每次都会将其打包进入文件中 导致最后生成的文件很大 所以可以利用`vite`中提供的分包策略来进行调整

分包就是把一些不会常规更新的文件 单独拎出来进行打包

在 ts 文件中使用 lodash 库加上`yarn add @types/lodash -D` 这个依赖是用来提示 lodash 语法用的 很方便

## 配置

在`vite.config.ts`中配置分包策略

```js
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    checker({
      // 开启typescrpt检查
      typescript: true,
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        // 针对于 node_modules中的包 本身无法改变 随意可以单独拎出来打包生成chunk
        // 减少文件体积 优化项目
        manualChunks: (id) => {
          console.log("==>Get id", id);
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
```

然后执行`yarn build`命令 即可看到产物中有一份针对于`node_modules`资源的文件 主文件的行数也大大减少

## 多页面模式

在`vite.config.ts`中配置分包策略

```js
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import path from "path";

export default defineConfig({
  plugins: [
    checker({
      // 开启typescrpt检查
      typescript: true,
    }),
  ],

  build: {
    rollupOptions: {
      // 多页面模式
      input: {
        main: path.resolve(__dirname, "./index.html"),
        product: path.resolve(__dirname, "./product.html"),
      },
      output: {
        // 针对于 node_modules中的包 本身无法改变 随意可以单独拎出来打包生成chunk
        // 减少文件体积 优化项目
        manualChunks: (id) => {
          console.log("==>Get id", id);
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
```
