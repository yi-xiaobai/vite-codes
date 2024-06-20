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
      input: {
        main: path.resolve(__dirname, "./index.html"),
        product: path.resolve(__dirname, "./product.html"),
      },
      output: {
        // 针对于 node_modules中的包 本身无法改变 随意可以单独拎出来打包生成chunk
        // 减少文件体积 优化项目
        // manualChunks: (id) => {
        //   console.log("==>Get id", id);
        //   if (id.includes("node_modules")) {
        //     return "vendor";
        //   }
        // },
        manualChunks: {
          lodash: ["lodash"],
        },
        //* 上述例子中，即使你只是使用 import get from 'lodash/get' 形式引入，Rollup 也会将 lodash 的所有模块放到一个自定义 chunk 中
      },
    },
  },
});
