

import pic from '@assets/images/1.jpeg?url'


/**
 * ?url 显式 URL 引入
 * ?raw 将资源引入为字符串
 * ?worker or ?sharedworker 导入为 web worker
 */
console.log('==>Get pic', pic);
console.log('==>Get import.meta.url', import.meta.url);

const img = document.createElement('img')
img.src = pic

document.body.append(img)