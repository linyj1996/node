let server = require('./start')
let router = require('./router')

server.start(router.route)