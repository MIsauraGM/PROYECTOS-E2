const patrones = {
  nombre: "Introduzca al menos un nombre. Max: 2 nombres",
  apellidos: "Introduzca al menos un apellido. Max: 2 apellidos",
  email: "Formado válido: xxx@yyy.zzz",
};

//variables
let inputs = document.getElementsByTagName("input");
let enviar = document.getElementById("enviar");
let formulario = document.getElementById("form");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let email = document.getElementById("email");
let text = document.getElementById("text");
let todoValido = 0;
text.disabled = true;

//eventos
nombre.addEventListener("blur", validarInput);
apellidos.addEventListener("blur", validarInput);
email.addEventListener("blur", validarInput);
email.addEventListener("keypress", noMayusculas);
enviar.addEventListener("click", validarForm);
enviar.addEventListener("click", validarText);

//funciones
function validarInput(e) {
  borrarError(this);

  if (this.checkValidity()) {
    todoValido++;
    if (inputs.length === todoValido) {
      siText();
      todoValido = 0;
    }
    return true;
  } else {
    siError(this);
    if (this.validity.valueMissing) {
      this.setCustomValidity(`El campo ${this.name} es obligatorio.`);
      this.reportValidity();
    } else {
      this.setCustomValidity(
        `Utiliza un formato que coincida. ${patrones[this.id]}.`
      );
      this.reportValidity();
    }
    e.preventDefault();
    return false;
  }
}

function validarForm() {
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].checkValidity()) {
      if (inputs[i].validity.valueMissing) {
        inputs[i].setCustomValidity(
          `El campo ${inputs[i].name} es obligatorio.`
        );
        inputs[i].reportValidity();
      } else {
        inputs[i].setCustomValidity(
          `Utiliza un formato que coincida. ${patrones[inputs[i].id]}.`
        );
        inputs[i].reportValidity();
      }
      return false;
    }
  }
  return true;
}

function siError(elemento) {
  elemento.className = "error";
}

function borrarError(elemento) {
  elemento.className = "";
  elemento.setCustomValidity("");
}

const digitos = [
  "Digit0",
  "Digit1",
  "Digit2",
  "Digit3",
  "Digit4",
  "Digit5",
  "Digit6",
  "Digit7",
  "Digit8",
  "Digit9",
  "Slash",
];

function noMayusculas(e) {
  if (e.getModifierState("CapsLock") || e.shiftKey) {
    if (!digitos.includes(e.code)) {
      alert("No se permite el uso de mayusculas.");
      e.preventDefault();
    }
  }
}

function siText(e) {
  text.disabled = false;
}

function validarText(e) {
  if (!text.checkValidity()) {
    if (text.validity.valueMissing) {
      text.setCustomValidity("Por favor, déjame tus comentarios.");
    } else {
      text.setCustomValidity("");
    }
    return true;
  }
}
