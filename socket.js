var users = [];
var userActive = true;
module.exports = function (io) {
    io.on('connection', socket =>{
        socket.on('User', user => {
            users.forEach(u => {
                if (user === u){
                    userActive = false;
                }
            });

            if (userActive){
                users.push(user);
                console.log(user + ' se ha conectado');
                io.emit('Nuevo SMS', user + ' se ha conectado');
                io.emit('User aceptado', userActive);
            }else{
                io.emit('User aceptado', userActive);
            }
            userActive = true;
        });

        socket.on('Envia SMS', data => {
            console.log(data);
            io.emit('Nuevo SMS', data);
        });
    });
}