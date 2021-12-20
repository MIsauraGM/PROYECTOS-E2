//JS para la actividad del formulario
const form = document.forms[0];

/**
 * funcion generadora para crear los validar con mensajes diferentes
 *  @param string Mensaje de error
 *  @returns function
 */
function crearValidador(mensajeError){
    function validar(){
        if(!this.checkValidity()){
            if(this.validity.valueMissing){
                this.setCustomValidity("Debes introducir un valor");
            }
            if (this.validity.patternMismatch){
                this.setCustomValidity(mensajeError);
                }
            this.reportValidity();
        }
        //para abilitar el text area una vez completado los otros tres
        //lo hago aqui por si el usuario decide completarlo en orden diferente
        if(form[0].checkValidity() && form[1].checkValidity() && form[2].checkValidity()){
            form[3].disabled = false;
        }
        borrarError();
        //al final por que si iba al principio se me quedaba el mensaje escribiendo
    }
    return validar;
}

/**
 * borra los mensajes de error para que no sigan reapareciendo en cada evento
 * @returns void
 */
function borrarError(){
    for(input of form){
        input.className = "";
        input.setCustomValidity("");
    }
}

//creando funciones para validar los distentos campos
var validar = crearValidador("Debe tener menos de 50 caracteres");
var validarEmail = crearValidador("El email introducido no es valido")
var validarTextArea = crearValidador("Este mensaje da igual por que no hay ninguna otra validacion exepto el require");
//primer y segundo input el del nombre y apellido
form[0].addEventListener('keydown',validar);
form[1].addEventListener('keydown',validar);

//tercer input el email con el check para ver si pulsas shift
form[2].addEventListener('focusout',validarEmail);
form[2].addEventListener('keypress',(e)=>{
    //otra forma seria comprovando con un if(/[A-Z]/.test(form[2].value))
    if(e.shiftKey){
        alert("no debes introducir mayuculas");
    }
});

form[3].disabled = true;
//he puesto keyup por ponerte otro evento pero el focus out lo veo mejor para este campo
form[3].addEventListener('keyup', validarTextArea);

