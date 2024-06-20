# vite 性能优化描述

我们平时说的性能优化是在说什么东西？

- 开发时的构建速度优化：yarn dev/yarn start 敲下的一瞬间到呈现结果到底要占用多少时长

  - webpack 在这方面下的功夫是很重的：webpack4：cache-loader webpack5：cache loader 结果（如果两次构建代码没有产生变化 直接使用缓存 不调用 loader） thread-loader：开启多线程去构建
  - vite 是按需加载 所以我们不需要太关注这方面

- 页面性能指标：和我们怎么写代码有关

  - 首屏渲染时间：fcp（first content paint），（first content paint --> 页面中第一个渲染元素的时长）
    - 懒加载：需要我们写代码来实现
    - http 优化：协商缓存/强缓存
      - 强缓存：服务端给响应头追加一些字段(expires) 客户端会记住这些资源 在 expires（截止失效时间）没有到达之前 无论怎么刷新页面 都是不会再次请求的 而是从缓存中取
      - 协商缓存：是否使用缓存要跟后端商量一下 当服务端给我门打下协商缓存的标记时 客户端在下次请求资源时会发送一个协商请求给到服务端 服务端如果说需要变化 会响应具体的内容 如果没有变化 则会响应 304
  - 页面中最大一个元素的渲染时间：lcp （largest content paint）
  - ......

- js 逻辑：

  - 要注意副作用的清楚 组件是会频繁的挂载和卸载 如果我们在某一个组件中有计时器（settimeout） 在卸载的时候 不去清理计时器 在下次再次挂载的时候等于开了两个线程
  - 写法上的一个注意事项：requestAnimationFrame requestIdleCallback 卡浏览器帧率的 对浏览器渲染原理要有一定的认识 然后再对这方面优化
    - requestIdleCallback：传一个函数进入
    - 浏览器的帧率：目前浏览器大多是60Hz（60帧/s）16.6ms（1s = 1000ms 1000ms / 60帧 = 16.66ms/帧） 去更新一次（执行 js 逻辑 以及 重排 重绘...） 假设 js 的执行逻辑超过了 16.6ms 页面的重排就没时间了（如果页面卡 那一般是页面掉帧了）
    - concurrent mode ---> concurrent 可中断渲染 react
  - 防抖 节流 使用 lodash.js 工具库

  - 对作用域的控制

    ```js
    const arr = [1,2,3]
    // 作用域由近到远
    for(let i = 0;len = arr.length;i<len;i++){

    }
    //for(let i = 0;i<arr.length;i++){

    //}
    ```

- css

  - 关注继承属性：能继承的就不要重复写
  - 尽量避免太过于深的 css 嵌套

- 生产的优化：vite(rollup) webpack
  - 优化体积：压缩 treeshaking 图片压缩 cdn 加载 分包策略
