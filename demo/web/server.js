let http = require('http')
let fs = require('fs')
let url = require('url')

http
  .createServer(function(request, response) {
    let pathname = url.parse(request.url).pathname
    console.log('Request for ' + pathname + ' received')
    fs.readFile(pathname.substr(1), function(err, data) {
      if (err) {
        console.error(err)
        response.writeHead(404, { 'Content-type': 'text/plain' })
      } else {
        response.writeHead(200, { 'Content-type': 'text.plain' })
        response.write(data.toString())
      }
      response.end()
    })
  })
  .listen(8888)
console.log('Server running at http://127.0.01:8888/')
