let events = require('events')
let eventEmitter = new events.EventEmitter()
let connectHandler = function connected() {
  console.log('连接成功')
  eventEmitter.emit('data_received')
}
eventEmitter.on('connection', connectHandler)
eventEmitter.on('data_received', () => {
  console.log('数据接收成功')
})
eventEmitter.emit('connection')
console.log('程序执行结束')
