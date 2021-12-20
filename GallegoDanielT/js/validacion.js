// Almacenamos en una variable el formulario tomandolo a través de su identificador.

let formulario1 = document.getElementById("form1");

/* TODOS LOS EVENTOS */

// Pulsar el botón de "Enviar"
document.getElementById("boton").addEventListener("click", validar);

// Validar el campo "Nombre"
document.getElementById("nombre").addEventListener("keydown", valNombre);
document.getElementById("nombre").addEventListener("blur", valNombre);


// Validar el campo "Apellidos"
document.getElementById("apellidos").addEventListener("keydown", valApellido); 
document.getElementById("apellidos").addEventListener("blur", valApellido);

// Validar el campo "Correo electrónico" + Comprobación de mayúsculas
document.getElementById("correo").addEventListener("keypress", correoShift);
document.getElementById("correo").addEventListener("blur", valCorreo);

// Validar el campo "¡Escribe tu mensaje!" (area de texto) + Comprobación de contenido
document.getElementById("txtArea").addEventListener("input", valTxtArea);
document.getElementById("txtArea").addEventListener("blur", valTxtArea);

// Llamar a la función "habilitarArea" cuando se produzca algun cambio
formulario1.addEventListener("change", habilitarArea);


/* TODAS LAS FUNCIONES */

/* Comprobamos que todos los campos han sido correctamente validados y cumplen los requisitos 
** antes de que la información sea enviada. Nos muestra un confirm, que en caso de ser rechazado
** evita que el proceso continue. */

function validar(e) {
  if (valNombre() && valApellido() && valCorreo() && valTxtArea()){
      if(!confirm("¿Deseas enviar los datos introducidos en el formulario?")){
        e.preventDefault();
        console.log("El usuario eligió 'Cancelar'. El formulario no ha sido enviado.");
        return true;
    } else{
        return false;
      }    
  }   else {    
        alert("Complete los campos correctamente e inténtelo de nuevo.");
        return false;
      }
}

/* Comprobamos que todos los campos salvo el area de texto cumplen los requisitos, y a partir de ahí habilitamos
** dicha area de texto si todo está correcto. */

function habilitarArea(e) {
  if (valNombre() && valApellido() && valCorreo()) {
    console.log("Estamos habilitando el area de texto.");
    document.getElementById("txtArea").disabled = false;
  } else {
    document.getElementById("txtArea").disabled = true;
  }
}

/* Validamos el campo "Nombre". Si no cumple los requisitos mostramos un error, 
** si los cumple borraríamos los posibles errores que hubieran aparecido con anterioridad. */

function valNombre(e) {
  let elemento = document.getElementById("nombre");

  elemento.setCustomValidity("");

  if (!elemento.checkValidity()) {
    textoError(elemento);
    error(elemento, "errNombre"); 
    return  false;
} else {
    borrarError(elemento, "errNombre");
    return true;
  }  
}

/* Validamos el campo "Apellidos". Si no cumple los requisitos mostramos un error, 
** si los cumple borraríamos los posibles errores que hubieran aparecido con anterioridad. */

function valApellido(e) {
  let elemento = document.getElementById("apellidos");

  elemento.setCustomValidity("");

  if (!elemento.checkValidity()) {
    textoError(elemento);
    error(elemento, "errApellido");
    return false;
} else {
    borrarError(elemento, "errApellido");
    return true;
  }
}

/* Validamos el campo "Correo eletrónico". Si no cumple los requisitos mostramos un error, 
** si los cumple borraríamos los posibles errores que hubieran aparecido con anterioridad. */
function valCorreo(e) {
  let elemento = document.getElementById("correo");

  console.log(!elemento.checkValidity());

  elemento.setCustomValidity("");

  if (!elemento.checkValidity()) {
    textoError(elemento);
    error(elemento, "errEmail");
    return false;
} else {
    borrarError(elemento, "errEmail");
    return true;
  }
}

/* Validamos el area de texto "¡Escribe un mensaje!". Si no cumple los requisitos mostramos un error, 
** si los cumple borraríamos los posibles errores que hubieran aparecido con anterioridad. */

function valTxtArea(e) {      
  let elemento = document.getElementById("txtArea");
  
  if (!elemento.checkValidity()) {   
    document.getElementById("errTextA");
    if (elemento.validity.valueMissing) {
      document.getElementById("errTextA").innerHTML = "Error. El area de texto ha de contener al menos 10 caracteres.";        
    } else {
      error(elemento, "errTextA");
    }
    return false;
} else {
    borrarError(elemento, "errTextA");
    return true;
  }
}


/* Mostramos un alert si el usuario escribe en el campo "Correo electrónico" 
** manteniendo la tecla "Shift" pulsada. */

function valorCorreo() {
  let cadCorreo = document.getElementById("correo").value;
}

function correoShift(e) {
  valorCorreo();
  if (e.shiftKey) {
    document.getElementById("errEmail").innerHTML = "Error. Las mayúsculas no están permitidas.";
    alert("No se permiten el uso de mayúsculas. Intétenlo de nuevo.");
  } else {
    document.getElementById("errEmail").innerHTML = "";
  }
}

/* Funciones para crear el mensaje de error y para borrarlo respectivamente. */

function error(elemento, id) {  
  document.getElementById(id).innerHTML = elemento.validationMessage;
}

function borrarError(elemento, mensaje) {
  document.getElementById(mensaje).innerHTML = "";
}

/* Función con "setCustomValidity" para crear mensajes de error personalizados. */

// Comprobamos que el campo existe en el primer "If".
// Comprobamos que el campo coincide con el patrón especificado en el segundo "If".

function textoError(elemento) {  
  if (elemento.validity.valueMissing){ 
    elemento.setCustomValidity( "Error. El campo "+ elemento.id +" es obligatorio.");
  }

  if (elemento.validity.patternMismatch) {
    elemento.setCustomValidity( "Debe introducir " + elemento.id + " con el formato correcto.");
  }    
}