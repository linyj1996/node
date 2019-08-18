// // 读取
// let fs = require('fs')
// let data = ''
// // 创建可读流
// let readerStream = fs.createReadStream('input.txt')
// // 设置编码
// readerStream.setEncoding('UTF8')
// // 处理事件 data,end,error
// readerStream.on('data', function(chunk) {
//   data += chunk
// })
// readerStream.on('end', function() {
//   console.log(data)
// })
// readerStream.on('error', function(err) {
//   console.log(err.stack)
// })
// console.log('结束')

// // 写入
// let fs = require('fs')
// let data = '大帅哥是我'
// // 创建写入流
// let writerStream = fs.createWriteStream('output.txt')
// // 用utf8写入data
// writerStream.write(data, 'UTF8')
// // 标记文件末尾
// writerStream.end()
// // 处理流事件
// writerStream.on('finish', function() {
//   console.log('写入完成')
// })
// writerStream.on('error', function(err) {
//   console.log(err.stack)
// })
// console.log('结束')

// // 管道
// let fs = require('fs')
// let readerStream = fs.createReadStream('input.txt')
// let writerStream = fs.createWriteStream('output.txt')
// readerStream.pipe(writerStream)
// console.log('结束')

// 链式流
let fs = require('fs')
let zlib = require('zlib')
// 压缩
fs.createReadStream('input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'))
console.log('压缩完成')
// 解压
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input1.txt'))
console.log('解压完成')
