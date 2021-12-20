# Proyecto DIW - DWECL

## ÍNDICE   
1. [DESCRIPCIÓN](#id1)
2. [PROTOTIPO](#id2)
3. [MODIFICACIONES A LA GUÍA DE ESTILOS](#id3)
4. [RECURSOS](#id4)

## DESCRIPCIÓN<a name="id1"></a>
Para el proyecto, mi idea ha sido plasmar el portafolio en 4 páginas/secciones, muy sencillas y simples, con un estilo minimalista,
tal y como intenté plasmar en el prototipo Figma. Creo que este modelo provee de mucha accesibilidad al usuario para llegar
a cualquier parte del sitio web con un solo click. Visualmente, he optado por colores como el negro, en dos de sus tonalidades, 
el blanco, o algunos tonos de rojo, dotando así a la web de, a mi parecer, sencillez, claridad, y elegancia.

En cuanto a cada sección, y, ahora sí, entrando un poco más en detalle, el portfolio consta de 4 páginas como comenté anteriormente:

- Home: en el que encontramos un menú con todas las secciones del sitio, que aparecerá en todas las páginas. En el centro, con un pequeño borde de rojo, un texto de bienvenida y una presentación muy simple sobre mí, junto con un botón que invita a ojear mis proyectos. Y por último, un pie de página con un texto de agradecimiento al usuario por visitar mi web, dos listados de los colores y fuentes, respectivamente, que he usado en el proceso de creación del sitio, y otro mensaje animando al usuario a contactar conmigo, justo encima de un botón que nos redireccionaría a la sección contacto.

- Mis Proyectos: de nuevo vemos en la parte superior, el menú de navegación. La estrucutura de esta página se centra en la repetición de un patrón. Primero, el título de proyecto, una imagen a la izquierda y una descripción a la derecha. El siguiente sería al revés, mostrándose la descripción a la izquierda y la imagen a la derecha. También un botón que nos permitiría ver los testimonios de los clientes, con una estructura parecida (si el proyecto posee la imagen a la izquierda, en el apartado de testimonios aparecerán las citas a la izquierda y el vídeo a la derecha, en caso contrario, apareceran las citas a la derecha y el vídeo a la izquierda). Por último, un botón "Ver más" que nos permitiría ver más proyectos.

** NOTA ** El botón de "Ver más" no funciona, lo quise añadir porque lo puse en el Figma pero me causó bastantes problemas y no quisé quedarme estancado en él, aún así lo he dejado para mostrar como sería la idea. El plan sería darle una funcionalidad real para el siguiente trimestre una vez resueltas las dudas que tengo sobre como hacerlo funcionar. 

- Sobre mí: una vez más, tenemos el menú en la parte superior. Esta sección tiene una estructura similar a la anterior. Primero,
vemos una imagen mía con una descripción sobre mí más personal. Justo abajo, una pequeña línea temporal con 3 círculos que represetan mi trayectoria estudiantil/profesional, junto con unos textos más explicativos. 

** NOTA ** Esta es la sección que he elegido como "Responsive", una vez se supera el límite de anchura que he especificado, el logo desaparece, el tamaño del menú se ve reducido y la imagen se coloca encima del texto, ambos de forma centrada. También, los círculos se disponen en forma de columna, alineandose con sus respectivos textos, mostrandose un círculo justo al lado de un texto.

- Contacto: por última vez, encontramos el menú en la cabecera de la página. En la parte izquierda encontramos mi nombre completo junto con mi número de teléfono justo abajo, además de un pequeño texto incentivando a clickear en los 3 enlaces de mis redes sociales que aparecen posteriormente. Esta parte de la sección tiene una posición "Fixed", es decir, que nos "perseguirá" a medida que bajamos durante la página. Por otro lado, en la parte derecha, tenemos un formulario para escribirme directamente, compuesto dos inputs para el nombre completo y el correo electrónico respectivamente, y un textarea para el mensaje en sí, un botón para envíar el mensaje.

** EXTRA **

- Home (Tailwind): he intentado recrearla dentro de lo posible, si bien es cierto que he tenido muchos problemas en cuanto al comportamiento, creo que la pñagina visualmente es parecida. He usado los dos componentes que se requerían, aunque en esta página solo aparece uno, y he usando bastantes propiedades de Tailwind.

## PROTOTIPO<a name="id2"></a>
[Enlace Figma] https://www.figma.com/file/T4MGOlGlJpWEi3YD5GvGEb/PORTAFOLIO?node-id=0%3A1

## MODIFICACIONES A LA GUÍA DE ESTILOS<a name="id3"></a>
Las modificaciones son sobre todo de ubicación de los elementos, no hay nada excesivamente drástico a mi parecer. Una de ellas es por ejemplo, que el texto de bienvenida en la página "Home" no tenga un borde rojo, puesto que consideré que dificultaba un poco su percepción, y no contrastaba del todo bien con el fondo. También he decidido que no es necesario que el footer se vea únicamente haciendo scroll, puesto que habría demasiado espacio en blanco en tal caso.

En la sección, "Mis proyectos", he decidido poner el título de cada proyecto en el centro, por encima y entre la imagen y la descripción, aprovechando un poco más así el espacio en blanco que pudiese quedar.

Por otro lado, en la sección "Sobre mí", he decidido que mi trayectoria profesional solo se vería representada por círculos, sin una línea en medio, pues creo que es un cambio mínimo y que realmente tampoco aportaría mucho puesto que pienso que únicamente tal y como está representado ahora se entiende perfectamente.

La supuesta foto "personal", como habrás podido observar, es un personaje de dibujos animados, puesto que no tenía ninguna foto mía de calidad a mano, y pienso que no es realmente importante para esta entrega. Obviamente para próximas intentaré tener una foto con buena calidad propia.

En la sección "Contacto", he decidido eliminar los textos del lado izquierdo, haciendo que el contenido
de la parte izquierda suba y baje a medida que hacemos scrolls y así rellenar el contenido. 
La idea es no bombardear de información al usuario en esta sección. También he añadido un texto encima del formulario, con una conotación amigable, para mostrar algo de cercanía con el cliente.

## RECURSOS<a name="id4"></a>
[Listado de recursos usados]

- Wireframe: (https://wireframepro.mockflow.com/)
- Prototipo: (https://www.figma.com/)
- Colores: (https://coolors.co/) / (https://color.adobe.com/create/color-wheel)
- Botón mostrar testimonios: (https://codepen.io/sekane81/pen/XbEVYv)
- Menú Hamburguesa: (https://codepen.io/juneikerc/pen/QWyGORO?editors=1100)
- Fuentes: (https://fonts.google.com/)
- Can I use?: https://caniuse.com/
- Bootstrap: https://getbootstrap.com/
- Tailwind: https://tailwindcss.com/docs
- W3C CSS Validator: https://jigsaw.w3.org/css-validator/
- W3C HTML Validator: https://validator.w3.org/

[Listado de componentes Tailwind usados]

- Botones (Página Home en la rama diw-entrega-2-fw): https://tailwindcomponents.com/component/animated-buttons-pack
- Contador de palabras restantes en el formulario (contacto.html): https://tailwindcomponents.com/component/live-letters-counter-with-alpinejs