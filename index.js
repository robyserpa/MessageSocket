const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

require('./socket')(io);

app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('entra');
    // res.send('hi')
});

server.listen(3000, () =>{
    console.log("Servidor Inicado");
});