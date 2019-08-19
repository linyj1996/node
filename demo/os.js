let os = require('os')
// cpu字节顺序
console.log('endianness ' + os.endianness)

// 操作系统名
console.log('type ' + os.type)

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.")

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.")