let express=require('express')
let path=require('path')
let app=express()
app.use(express.static('../../public'))
app.get('/',function(request,response){
  response.send('Hello World')
})
let server=app.listen(8888,function(){
})