const txtUID = document.querySelector("#txtUID");
const txtMensaje = document.querySelector("#txtMensaje");
const listaUsuarios = document.querySelector("#listaUsuarios");
const chatsBody = document.querySelector("#chatsBody");
const private = document.querySelector("#private");

socket.on('usuarios-activos', payload => {
    let usersHTML = '';
    payload.forEach(element => {
        
    });
})