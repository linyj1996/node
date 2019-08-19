let fs = require('fs')
// 读取文件
// fs.readFile('input.txt', function (err, data) {
//   if (err) {
//     return console.error(err)
//   }

//   console.log('异步读取：' + data.toString())
// })
// let data = fs.readFileSync('input.txt')
// console.log('同步读取：', data.toString())

// console.log('结束')

// 打开文件
// console.log('打开文件')
// fs.open('input.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('文件打开成功')
// })

// // 获取文件信息
// fs.stat('input.txt', function (err, stats) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log(stats)
//   console.log('读取文件信息成功')
//   console.log('是否为文件？' + stats.isFile())
//   console.log('是否为目录？' + stats.isDirectory())
// })

// // 写入文件
// fs.writeFile('input.txt', '我生病了', function (err) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('写入成功')
//   fs.readFile('input.txt', function (err, data) {

//     if (err) {
//       return console.error(err)
//     }
//     console.log('异步读取文件数据：' + data.toString())
//   })
// })

// // 读取文件
// let buf = new Buffer(1024)
// fs.open('input.txt', 'r+', function (err, fd) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('文件打开成功')
//   console.log('准备读取文件')
//   fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
//     if (err) {
//       console.error(err)
//     }
//     console.log(bytes + ' 字节被读取')
//     if (bytes > 0) {
//       console.log(buf.slice(0, bytes).toString())
//     }
//     // 关闭文件
//     fs.close(fs,function(err){
//       if(err){
//         console.error(err)
//       }
//       console.log('文件关闭成功')
//     })
//   })
// })

let buf = new Buffer(1024)
fs.open('input.txt', 'r+', function (err, fd) {
  if (err) {
    console.error(err)
  }
  console.log('文件打开成功')
  console.log('截取10字节')
  fs.ftruncate(fd, 10, function (err) {
    if (err) {
      console.log(err)
    }
    console.log('文件截取成功')
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
      if (err) {
        console.error(err)
      }
      if (bytes > 0) {
        console.log(buf.slice(0, bytes).toString())
      }
      fs.close(fd, function (err) {
        if (err) {
          console.log(err)
        }
        console.log('文件关闭成功')
      })
    })
  })
})

// // 删除文件
// fs.unlink()
// // 创建目录
// fs.mkdir()
// // 读取目录
// fs.readdir()
// // 删除目录
// fs.rmdir()