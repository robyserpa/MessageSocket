module.exports = function (io) {
    io.on('connection', socket =>{
        socket.on('User', data => {
            console.log(data + ' se ha conectado')
            io.emit('Nuevo SMS', data + ' se ha conectado');
        });

        socket.on('Envia SMS', data => {
            console.log(data);
            io.emit('Nuevo SMS', data);
        });
    });
}