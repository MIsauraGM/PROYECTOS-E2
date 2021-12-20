let formulario = document.getElementById("formulario")
let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let mensaje = document.getElementById("mensaje")
let enviar = document.getElementById("enviar")
let mensajeError = document.getElementById("error")

console.log(nombre)
mensaje.disabled = true;

enviar.addEventListener("click", validar)
nombre.addEventListener("focusout", checkNombre)
apellido.addEventListener("focusout", checkApellido)
email.addEventListener("focusout", checkEmail)
email.addEventListener("keypress", (e) => {
    if(e.shiftKey) {
        alert("No se aceptan mayusculas")
    }
})

function validar(e) {
    if (checkNombre() && checkApellido() && checkEmail() && checkMensaje() && confirm("¿Quieres enviar el mensahe?")) {
        e.preventDefault() 
        return true
    } else {
        e.preventDefault() 
        return false
    }
}

function error(elemento) {
    mensajeError.innerHTML = elemento.validationMessage
}

function borrarError() {
    for (let i of formulario) {
        i.setCustomValidity("")
        mensajeError.innerHTML = i.validationMessage
    }
}

function checkNombre() {
    borrarError()
    if (!nombre.checkValidity()) {
        if (nombre.validity.valueMissing) {
            nombre.setCustomValidity("Tienes que introducir un nombre")
        } 
        nombre.reportValidity()
        error(nombre)
        return false
    } else {
        activarTextarea()
        return true
        console.log("nombre valido")
    }
}

function checkApellido() {
    borrarError()
    if (!apellido.checkValidity()) {
        if (apellido.validity.valueMissing) {
            apellido.setCustomValidity("Tienes que introducir un apellido")
        } 
        apellido.reportValidity()
        error(apellido)
        return false
    } else {
        activarTextarea()
        return true
        console.log("apellido valido")
    }
}

function checkEmail() {
    borrarError()
    if (!email.checkValidity()) {
        if (email.validity.valueMissing) {
            email.setCustomValidity("Tienes que introducir un email")
        } 
        if (email.validity.patternMismatch) {
            
            email.setCustomValidity("El formato del email no es correcto")
        }
        email.reportValidity()
        error(email)
        return false
    } else {
        activarTextarea()
        return true
        console.log("email valido")
    }
}

function checkMensaje() {
    borrarError()
    if (!mensaje.checkValidity()) {
        if (mensaje.validity.valueMissing) {
            mensaje.setCustomValidity("Tienes que introducir un mensaje")
        } 
        mensaje.reportValidity()
        error(mensaje)
        return false
    } else {
        activarTextarea()
        return true
        console.log("mensaje valido")
    }
}

function activarTextarea() {
    if (nombre.checkValidity() && apellido.checkValidity() && email.checkValidity()) {
        mensaje.disabled = false
        console.log("textarea activado")
    } else {
        mensaje.disabled = true
        console.log("textarea desactivado")
    }
}

