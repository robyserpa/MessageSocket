

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
            isActive = true;
            soket.emit('User', $user.val());
            user = $user.val() +": ";
        }else{
            isActive = false
        }
    });

    $smsForm.on("submit", event => {
        event.preventDefault();
        if (isActive){
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