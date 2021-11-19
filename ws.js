// Minimal amount of secure websocket server
var fs = require('fs')

// read ssl certificate
var privateKey = fs.readFileSync('./key.pem', 'utf8')
var certificate = fs.readFileSync('./cert.pem', 'utf8')
var passphrase="";
var credentials = { key: privateKey, cert: certificate, passphrase: '12345' }
var https = require('https')

//pass in your credentials to create an https server
var httpsServer = https.createServer(credentials)
httpsServer.listen(3000)

var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({
  server: httpsServer
})

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  setInterval(
    () => ws.send(`${new Date()}`),
    1000
  )
})
