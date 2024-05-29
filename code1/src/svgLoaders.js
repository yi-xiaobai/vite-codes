
import svgUrl from '@assets/svg/2.svg?url'
import svgIcon from '@assets/svg/3.svg?raw'

console.log('==>Get svgIcon', svgIcon, svgUrl);



//*  第一种方法
// const img = document.createElement('img')
// img.src = svgIcon
// document.body.append(img)


//* 第二种方法
document.body.innerHTML = svgIcon

const svgElement = document.getElementsByTagName('svg')[0]
svgElement.onmouseenter = function () {
    console.log('enter', this.style);
    //* 改变背景色 用fill字段 而不是background
    this.style.fill = 'red'
}

svgElement.onmouseleave = function () {
    this.style.fill = ''
}

// console.log('==>Get svgs', svgs);