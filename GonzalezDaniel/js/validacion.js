let formulario1 = document.forms[0];



/* evento al pulsar el boton del formulario */
document.getElementById("boton").addEventListener("click", validar);

/* evento al hace algun cambio en el formulario y llama a la funcion
habilitar, donde si se cumple las condiciones se habilita el texarea  */
formulario1.addEventListener("change", habilitar);



/* eventos del formulario para el input email */
document.getElementById("email").addEventListener("keypress", emailMay);
document.getElementById("email").addEventListener("blur", emailminusculas);
document.getElementById("email").addEventListener("blur", validaremail);

/* eventos para validar el campo nombre */
document.getElementById("nombre").addEventListener("keydown", validarnombre);
document.getElementById("nombre").addEventListener("blur", validarnombre); 

/* eventos para validar el apellido  */
document.getElementById("apellidos").addEventListener("keydown", validarapellido); 
document.getElementById("apellidos").addEventListener("blur", validarapellido); 

/* eventos para validar el apellido */
document.getElementById("telefono").addEventListener("keypress", validartelefono); 
document.getElementById("telefono").addEventListener("blur", validartelefono);

/* validar texarea  */
document.getElementById("area").addEventListener("input", validartextarea);
document.getElementById("area").addEventListener("blur", validartextarea);







/* validar formulario y mandar o parar en caso de faltar algun requisito */
function validar(e) {

  if (
    validarnombre() &&
    validarapellido() &&
    validartelefono() &&
    validaremail() &&
    validartextarea()
 
  ){   

    if(!confirm("Deseas mandar los datos del formulario")){
      e.preventDefault();
      console.log("el formulario no se ha mandado");
      return true;

    }else{

      return false;
    }
    
  } else {
    
    alert("Completa los campos correctamente.");
    return false;
  }
}



/* Habilitar el textarea cuando todos los campos anteriores no estén validados correctamente */
function habilitar(e) {

  if (validarnombre() && validarapellido() && validaremail() && validartelefono()) {

    console.log("texarea");
    document.getElementById("area").disabled = false;

  } else {

    document.getElementById("area").disabled = true;
  }
}

/* validar nombre */

function validarnombre(e) {

  let elemento = document.getElementById("nombre");
  elemento.setCustomValidity("");

  if (!elemento.checkValidity()) {

    textoError(elemento);
    error(elemento, "errornombre"); 
    /* elemento.reportValidity(); */
    return  false;

  } else {

    borrarerror(elemento, "errornombre");
    return true;
  }
  
}

/* validar apellido */

function validarapellido(e) {

  let elemento = document.getElementById("apellidos");
  elemento.setCustomValidity("");

  if (!elemento.checkValidity()) {

    textoError(elemento);
    error(elemento, "errorapellido");
    return false;

  } else {

    borrarerror(elemento, "errorapellido");
    return true;
  }
}

/* validar telefono  */

function validartelefono(e) {

  let elemento = document.getElementById("telefono");
  elemento.setCustomValidity("");
  console.log(!elemento.checkValidity());

  if (!elemento.checkValidity()) {

    textoError(elemento);
    error(elemento, "errortlf");
    return false;

  } else {

    borrarerror(elemento, "errortlf");
    return true;
  }
}

/* pasar a minusculas email en el caso que este activado bloq mayus */
function emailminusculas() {

  let str = document.getElementById("email").value;
  document.getElementById("email").value = str.toLowerCase();

}

/* validar email */
function validaremail(e) {

  let elemento = document.getElementById("email");
  console.log(!elemento.checkValidity());
  elemento.setCustomValidity("");

  if (!elemento.checkValidity()) {

    textoError(elemento);
    error(elemento, "erroremail");
    return false;

  } else {

    borrarerror(elemento, "erroremail");
    return true;
  }
}

/* avisar al usuario con un alert cuando pulse shift + una tecla del teclado */
function emailMay(e) {

  emailminusculas();

  if (e.shiftKey) {

    document.getElementById("erroremail").innerHTML =
      "No se permiten mayusculas";
    alert("No esta permitido mayusculas en le correo");

  } else {

    document.getElementById("erroremail").innerHTML = "";
  }
}

/* validar texarea */
function validartextarea(e) {
  
  let elemento = document.getElementById("area");
  
  if (!elemento.checkValidity()) {
   
    document.getElementById("mensajeTError").style.color = "red";
    if (elemento.validity.valueMissing) {

      document.getElementById("mensajeTError").innerHTML =
        "Debe de tener minimo 10 caracteres.";
        
    } else {

      error(elemento, "mensajeTError");
    }

    return false;

  } else {

    borrarerror(elemento, "mensajeTError");

    return true;
  }
}

/* mensaje error  */

function error(elemento, id) {
  
  document.getElementById(id).innerHTML = elemento.validationMessage;
  /* elemento.reportValidity(); */
}

/* borrar mensaje error  */
function borrarerror(elemento, mensaje) {

  document.getElementById(mensaje).innerHTML = "";
}

/* setCustomValidity, mensajesa personalizados */

function textoError(elemento) {
  
  if (elemento.validity.valueMissing){ //"true" si elemento es vacio y es "required"

    elemento.setCustomValidity( "El campo "+ elemento.id +" es obligatorio.");
    }
    
    if (elemento.validity.patternMismatch){ //"true" si elemento no coincide con patrón
    elemento.setCustomValidity( "Debe introducir " +elemento.id+ " con el formato correcto." );
    }
    
}