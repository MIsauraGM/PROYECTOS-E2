let navdiv = document.getElementById("navdiv")
    console.log(navdiv)
let navmenu = document.getElementsByClassName("navham")
    console.log(navmenu)
let caja = document.getElementById("interior")
let barraar = document.getElementById("navarriba")
let barracen = document.getElementById("navcentro")
let barraaba = document.getElementById("navabajo")
    navdiv.addEventListener("mouseover", ratonentra)
    navdiv.addEventListener("mouseout", ratonsale)
    navdiv.addEventListener("click", condicionalmenu)
    
   
    function ratonentra() {
        /* console.log(caja) */
      
        
       for (const barra of navmenu) {
           /* console.log(barra) */
           
           barra.style.border = "solid 2px"

       }
    }
    function ratonsale() {
      
        for (const barra of navmenu) {
           /* console.log(barra) */
           
           barra.style.border = "solid 0px"
           
       }
    }
    let abierto = false
    function condicionalmenu() {
        if (abierto) {
            cerrar()
        } else {
            abrir()
        }
    }
    function abrir() {
        barraar.style.transition = "3s"
        barracen.style.transition = "3s"
        barraaba.style.transition = "3s"
        barraar.style.transform = "rotate(10045deg)"
        barracen.style.transform = "rotate(10045deg)"
        barracen.style.opacity = "0"
        barraaba.style.transform = "rotate(10120deg)"
        crear()
        setTimeout(centrar, 4000)
        abierto = true
    }

    function centrar() {
        barraaba.style.transform = "translate(-0px, -2vw)"
        barraar.style.transform = "rotate(90deg)"
    }

    function cerrar() {
        barraar.style.transition = "2s"
        barracen.style.transition = "2s"
        barraaba.style.transition = "2s"
        barraar.style.transform = "rotate(0deg)"
        barracen.style.transform = "rotate(0deg)"
        barracen.style.opacity = "1"
        barraaba.style.transform = "rotate(0deg)"
        abierto = false
        eliminar()
    }
    let comprobar = true
    function crear() {

    let crea = document.createElement("div")
    crea.classList.add("divvisible")
    crea.setAttribute("id", "fuera" )

        

    let enlace1 = document.createElement("a")
    enlace1.setAttribute("href", "../html/cv.html" )
    enlace1.classList.add("enlacevisible")
    enlace1.textContent = "Curriculum"
    crea.appendChild(enlace1)

    let enlace2 = document.createElement("a")
    enlace2.setAttribute("href", "../html/informacion.html"  )
    enlace2.classList.add("enlacevisible")
    enlace2.textContent = "Informacion Personal"
    crea.appendChild(enlace2)
    

    let enlace3 = document.createElement("a")
    enlace3.setAttribute("href", "../html/lineadeltiempo.html" )
    enlace3.classList.add("enlacevisible")
    enlace3.textContent = "Linea del tiempo"
    crea.appendChild(enlace3)

    let enlace4 = document.createElement("a")
    enlace4.setAttribute("href", "../html/proyectos.html" )
    enlace4.classList.add("enlacevisible")
    enlace4.textContent = "Proyectos"
    crea.appendChild(enlace4)
    console.log(crea)
        
    if (comprobar) {
        navdiv.insertAdjacentElement("afterend" ,crea)
        setTimeout(animarenlaces, 1000)
        comprobar = false
    } else {
        let fuera = document.getElementById("fuera")
        animarenlaces2()
        setTimeout(function(){ fuera.remove(); }, 5000);
           
        comprobar = true
    }
    
}

    function animarenlaces() {
        let enlaceall = document.getElementsByClassName("enlacevisible")
        
        for (const enlace of enlaceall) {
            enlace.style.opacity = "1"
            enlace.style.transform = "translate(0vw, -7vh)"
        }
        
    }

    function animarenlaces2() {
        let enlaceall = document.getElementsByClassName("enlacevisible")
        
        for (const enlace of enlaceall) {
            enlace.style.display = "flex"
            enlace.style.opacity = "0"
            enlace.style.transform = "rotate(360deg)"
        }
        
    }
    
    function eliminar() {
        crear()
       
        
    }
    