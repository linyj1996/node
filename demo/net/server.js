let net =require('net')
let server=net.createServer(function(connection){
  console.log('client connected')
  connection.on('end',function(){
    console.log('客户端关闭连接')
  })
  connection.write('Hello World!\r\n')
  connection.pipe(connection)
})
server.listen(8888,function(){
  console.log('server is listening')
})