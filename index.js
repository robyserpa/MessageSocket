const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

require('./socket')(io);

app.use(express.static('public'))

server.listen(9000, () =>{
    console.log("Servidor Inicado");
});