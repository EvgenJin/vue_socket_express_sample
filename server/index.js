const 
  app = require('express')();
  server = require('http').createServer(app),
  socketIO = require('socket.io'),
  io = require('socket.io')(server),
  config = require('./config.js')
;
app.use(require('express').static('../dist'));

io.on('connection', (client) => {
  console.log('client connected')
  client.on('test',(cat) => {
    io.sockets.emit('test','from client')
    client.emit('test','from server')
  })
})

server.listen(config.port,config.host,() => 
  console.log('Socket ready on'+config.host+' port:'+config.port)
);

io.on('connection', function (socket) {
    console.log('A client is connected!');   
});
