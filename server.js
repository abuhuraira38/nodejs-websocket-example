var express = require('express')
var ws = require('./ws')

var app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ws.html');
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})
