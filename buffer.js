// // 创建BUffer实例
// let buffer1 = new Buffer(10)
// let buffer2 = new Buffer([10, 20, 30, 40])
// let buffer3 = new Buffer('qwerty', 'utf-8')

// // 写入缓冲区,返回实际写入的大小
// let length = buffer1.write(string)

// // 读取缓冲区数据，按指定编码返回
// let data = buffer1.toString()

let buf = new Buffer(26)
for (let i = 0; i < 26; i++) {
  buf[i] = i + 97
}
console.log(buf.toString('ascii'))
console.log(buf.toString('ascii', 0, 5))
console.log(buf.toString('utf8', 0, 8))
console.log(buf.toString(undefined, 0, 8)) //默认utf8

// // 转化为JSON
// buf.toJSON()

let buf1 = new Buffer('qwerty')
let bufJson = buf1.toJSON()
console.log(bufJson)

// // 合并缓冲区
// Buffer.concat()

let buf2 = new Buffer('qwerty')
let buf3 = new Buffer('asdfgh')
let buf4 = Buffer.concat([buf2, buf3])
console.log(buf4.toString())

// // 缓冲区比较，字符顺序依次比较
// buf.compare(otherBuf)
var buffer1 = new Buffer('BBC')
var buffer2 = new Buffer('ABD')
var result = buffer1.compare(buffer2)

if (result < 0) {
  console.log(buffer1 + ' 在 ' + buffer2 + '之前')
} else if (result == 0) {
  console.log(buffer1 + ' 与 ' + buffer2 + '相同')
} else {
  console.log(buffer1 + ' 在 ' + buffer2 + '之后')
}

// // 缓冲区拷贝
// buf.copy(targetbuf)

// // 缓冲区裁剪，返回一个新的缓冲区，和旧缓冲区指向同一块内存，只是位置不同
// buf.slice()
