let http = require('http')
let querystring = require('querystring')
let util = require('util')
http.createServer(function (request, response) {
  let post = ''
  request.on('data', function (chunk) {
    post += chunk
  })
  request.on('end', function () {
    post = querystring.parse(post)
    response.end(util.inspect(post))
  })
}).listen(8888)