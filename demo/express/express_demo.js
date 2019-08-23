let express=require('express')
let app=express()

app.get('/',function(request,response){
  response.send('Hello World')
})

let server=app.listen(8888,function(){
  let host=server.address().address
  let port=server.address().port
  console.log('应用实例，访问地址为http://%s:%s',host,port)
})
