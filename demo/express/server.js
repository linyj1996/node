let express=require('express')
let app=express()

app.use(express.static('../../public'))
app.get('index.html',function(request,response){
  response.sendFile(__dirname+'/'+'index.html')
})

app.get('/process_get',function(request,response){
  res={
    firstName:request.query.firstName,
    lastName:request.query.lastName
  }
  console.log(res)
  response.send(JSON.stringify(res))
})

let server=app.listen(8888)