//variables
let navegacion = document.getElementById("panelNav");
let menuHamburguesa = document.getElementById("hamburguesa");
let menu = document.getElementById("menu");
let btop = document.getElementById("barraTop");
let bbottom = document.getElementById("barraBottom");
let bmid = document.getElementById("barraMid");

//eventos
document.getElementById("hamburguesa").addEventListener("click", mostrarMenu);
window.addEventListener("load", abrirMenu);
window.addEventListener("resize", abrirMenu);

//funciones
function abrirMenu() {
  console.log("abrirMenu");

  if (window.innerWidth < 768) {
    navegacion.style.display = "none";
    menuHamburguesa.style.display = "flex";
  } else {
    navegacion.style.display = "flex";
    menuHamburguesa.style.display = "none";
    menu.style.transform = "translate(-100%)";
    verBurguer();
  }
}

function verBurguer() {
  console.log("verBurguer");

  btop.style.transform = "";
  bbottom.style.transform = "";
  bmid.style.opacity = "100";
}

function verCerrar() {
  console.log("verCerrar");

  btop.style.transform = "translateY(140%) rotate(45deg)";
  bbottom.style.transform = "translateY(-140%) rotate(135deg)";
  bmid.style.opacity = "0";
}

/*
    <div id="menu">
      <a href="#inicio" class="menuItem">Inicio</a>
      <a href="#sobre" class="menuItem">Sobre mi</a>
      <a href="#proyectos" class="menuItem">Proyectos</a>
      <a href="#testimonios" class="menuItem">Testimonios</a>
      <a href="#contacto" class="menuItem">Contacto</a>
    </div>
*/

let div = document.createElement("div");
div.setAttribute("id", "menu");

let a1 = document.createElement("a");
a1.setAttribute("href", "#inicio");
a1.setAttribute("class", "menuItem");
a1.textContent = "Inicio";

let a2 = document.createElement("a");
a2.setAttribute("href", "#sobre");
a2.setAttribute("class", "menuItem");
a2.textContent = "Sobre mi";

let a3 = document.createElement("a");
a3.setAttribute("href", "#proyectos");
a3.setAttribute("class", "menuItem");
a3.textContent = "Proyectos";

let a4 = document.createElement("a");
a4.setAttribute("href", "#testimonios");
a4.setAttribute("class", "menuItem");
a4.textContent = "Testimonios";

let a5 = document.createElement("a");
a5.setAttribute("href", "#contacto");
a5.setAttribute("class", "menuItem");
a5.textContent = "Contacto";

div.appendChild(a1);
div.appendChild(a2);
div.appendChild(a3);
div.appendChild(a4);
div.appendChild(a5);

function mostrarMenu() {
  if (div.isConnected) {
    div.remove();
    verBurguer();
  } else {
    verCerrar();
    menuHamburguesa.insertAdjacentElement("afterend", div);
  }
}
