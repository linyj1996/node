let express=require('express')
let app=express()

app.get('/',function(request,response){
  console.log('主页GET请求')
  response.send('Hello Get')
})
app.post('/',function(request,response){
  console.log('主页POST请求')
  response.send('Hello Post')
})

app.delete('del_user',function(request,response){
  console.log('/del_user响应DELETE请求')
  response.send('删除页面')
})
app.get('/list_user',function(request,response){
  console.log('/list_user GET请求')
  response.send('用户列表页面')
})
app.get('/ab*cd', function(request,response) {   
  console.log("/ab*cd GET 请求");
  response.send('正则匹配');
})
let server=app.listen(8888,function(){
  let host=server.address().address
  let port=server.address().port
  console.log('应用实例，访问地址为http://%s%s',host,port)
})