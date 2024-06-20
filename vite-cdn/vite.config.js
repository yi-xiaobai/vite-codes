

import { defineConfig } from 'vite'
import cdn from 'vite-plugin-cdn-import'

export default defineConfig({
    plugins: [
        cdn({
            modules: [
                {
                    name: 'lodash',
                    var: "_",
                    path: "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
                }
            ]
        })
    ]
})