// 阻塞代码
// let fs = require('fs')
// let data = fs.readFileSync('input.txt')
// console.log(data.toString())
// console.log('结束')

// // 非阻塞代码
// let fs = require('fs')
// fs.readFile('input.txt', (err, data) => {
//   if (err) return console.error(err)
//   console.log(data.toString())
// })
// console.log('结束')

let Hello = require('./hello')
let hello = new Hello()
hello.setName('linyj')
hello.sayHello()