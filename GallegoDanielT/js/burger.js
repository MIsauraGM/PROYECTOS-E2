/* seleccionamos el icono de la hamburguesa para realizar el evento */
let menu = document.querySelector("#hamburguesa");
menu.addEventListener("click", menuHamburguesa);

/* Creamos e inicializamos variables que referencian al DOM. */

let header = document.querySelector("header");
let div = document.querySelector("#hamburguesa");
let icon = document.querySelector("#hamburguesa>img")

/* Con la siguiente función desplegamos el menú hamburguesa. Dentro de esta función 
** cambiamos las imagenes, quitamos y añadimos clases, eliminamos el evento "click" 
** para evitar posibles dobles pulsaciones, y, por último, eliminamos el menú y
** creamos de nuevo el evento. */

function menuHamburguesa(e) {
    if (!nav.isConnected) {
        div.insertAdjacentElement("beforebegin", nav); 
        icon.setAttribute("src", "images/xburger.jpg"); 
        nav.classList.toggle("esconder");
    } else {
        icon.setAttribute("src", "images/burger.png");
        nav.classList.toggle("esconder");
        
        menu.removeEventListener("click", menuHamburguesa);

        setTimeout(()=>{nav.remove();
                        menu.addEventListener("click", menuHamburguesa);}
                        , 1500);
    }
}

/* Almacenamos en variables las etiquetas "a" y "li", el atributo "href", y los nodos de texto. */

let txtA = "a";
let txtli = "li";
let txtLink = ["index.html", "misProyectos.html", "sobreMi.html", "contacto.html"];
let txtNode = ["Home",  "Mis Proyectos", "Sobre Mi", "Contacto"];

/* Creamos los elementos, dandoles sus respetivos atributos, 
** ya sean clases o IDs. */

let nav = document.createElement("nav");
nav.setAttribute("id", "burger-menu");
nav.setAttribute("class", "esconder");

let ul = document.createElement("ul");
ul.setAttribute("id", "enlaces-hamburguesa");

/* A través de el siguiente bucle FOR, y con el método "appendChild"
** vamos introduciendo unas estructuras dentro de otras, de manera jerarquica.
** Por último, introducimos la lista desorganizada dentro del navegador. */

for (const i in txtLink) {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", txtLink[i]);
    let text = document.createTextNode(txtNode[i]);
    a.appendChild(text);
    li.appendChild(a);
    ul.appendChild(li);
}

nav.appendChild(ul);
