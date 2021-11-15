$(function (){
    const soket = io(); 

    const $userForm = $("#user-form");
    const $user = $("#user");

    const $smsForm = $("#message-form");
    const $sms = $("#message");
    const $chat = $('#chat');

    var user = ""
    var isActive = false;

    $userForm.on("submit", event => {
        event.preventDefault();
        if ($user.val() != ""){
            soket.emit('User', $user.val());
            user = $user.val() +": ";
        }
    });

    soket.on('User aceptado', userActive => {
        if(userActive && $user.val()+": " == user){
            $user.val(user + " Conectado");
        }
        if(!userActive && $user.val()+": " == user){
            $user.val(user + " Ya esta en uso");
        }
        isActive = userActive;
    });

    $smsForm.on("submit", event => {
        event.preventDefault();
        if (
            isActive && $user.val() != $user.val() +": Ya esta en uso" &&
            $user.val() != "Ingresar usuario" && $user.val() != "" && user != ""
        ){
            if ($sms.val() != ""){
                soket.emit('Envia SMS', user + $sms.val());
                $sms.val('');
            }
        }else{
            $user.val("Ingresar usuario")
        }
    });

    soket.on('Nuevo SMS', data => {
        $chat.append(data + '<br/>');
    });

});