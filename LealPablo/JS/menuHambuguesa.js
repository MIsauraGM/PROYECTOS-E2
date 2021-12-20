/**
 * En el main tambien use en su momento los metodos de crear elemento en el dom para
 * generar las burbujas por si se quiere ver pero no sabia sobre los metodos para
 * la manipulacion de classes ni atributos. Ademas de que es javascript para
 * que simplemente hice para que se viera mejor la pagina y no para la evaluacion 
/

/**
 * coge un elemento y una referencia y te inserta links con la clase circle
 * @return void
 */
function addLink(element, href){
    let a = document.createElement('a');
    a.setAttribute('href', href);
    let div = document.createElement('div');
    div.classList.add('circle');
    a.appendChild(div);
    element.appendChild(a);
}

var timeout;//varible para el timeout de remover el menu
/**
 * cambia las classes de los menus de navegacion para aparezca y desaparezca
 * @returns void
 */
function toggleMenu() {
    if(this.classList.contains('is-active')){
        /*tengo que hacerlo por separado en cada caso para que se muestres
        la animacion de salida en este caso y la de entrada en el else */
        navlist.classList.toggle('is_active');
        timeout = setTimeout(()=>navlist.remove(),1000);
    }
    else{
        clearTimeout(timeout);//para que si lo pulsas repetidamente muy rapido no te lo borre
        menu.insertAdjacentElement('afterend', navlist);
        //le pongo un dealay muy chico por que sino aparece ya en el lado del tiron
        setTimeout(()=>navlist.classList.toggle("is_active"), 10);

        //funcion del main para darle el efecto de quedarse pulsado
        addActiveDisplay(document.getElementById('creado').querySelectorAll('.circle'));
        /*hago un get id y despues el query selector para coger solo los del creado y no los del
        original ta que tienen las mismas clases*/
    }
  this.classList.toggle('is-active');
}

var menu = document.querySelector('#hamburguesa');

//añadimos la funcion al evento click del menu hamburguesa
menu.addEventListener('click', toggleMenu);

//creo el nav y añado todos sus elementos hijos
let navlist = document.createElement('div');
navlist.classList.add('sidenav');
navlist.setAttribute('id','creado');
addLink(navlist, '#');
addLink(navlist, '#proyectos');
addLink(navlist, '#testimonio');
addLink(navlist, '#estudios');
addLink(navlist, '#mas');


