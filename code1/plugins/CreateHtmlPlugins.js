


export function CreateHtmlPlugins(params = {}) {
    console.log('load createHtmlPlugins');
    return {
        name: 'my-create-html-plugins',
        // transformIndexHtml(html, ctx) {
        //     console.log(111);
        //     console.log('==>Get html', html);
        //     // return html.replace(
        //     //     /<title>(.*?)<\/title>/,
        //     //     `<title>Title replaced!</title>`
        //     // )
        //     return html.replace(/<%= title %>/g,params.inject.data.title)
        // }
        transformIndexHtml: {
            // 执行顺序
            order: 'pre',
            // 处理的回调函数
            handler: (html, ctx) => {
                console.log('==>Get html', html);
                return html.replace(/<%= title %>/g, params.inject.data.title)
            }
        }
    }
}
