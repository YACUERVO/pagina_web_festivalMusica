document.addEventListener('DOMContentLoaded', function() {
    ScrollNav();

    navegacionFija();

});

function navegacionFija() {
    const barra = document.querySelector('header')
        //registrar el intersection observer
    const observer = new IntersectionObserver(function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');

        }
    })

    //elemento a observar
    observer.observe(document.querySelector('.festival'));
}

function ScrollNav() {
    const enlaces = document.querySelectorAll('.navegacion__principal a');

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(evento) {
            evento.preventDefault();

            console.log(evento.target.attributes.href.value);
            //codigo para verificar a que le estoy dando clic

            const seccion = document.querySelector(evento.target.attributes.href.value);
            seccion.scrollIntoView({
                behavior: 'smooth',
            }); //dar salto directo a la siguiente seccion con js. Seccion se demora un timpo
        });
        //forEach si queremos recorrer en un arreglo solo sirve para interarcion pero no guarde ninguna operacion
    });



}
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
});
//El DOMContentLoadedevento se activa cuando el documento HTML inicial se ha cargado y analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los subcuadros terminen de cargarse. 


//definimos la funcion
function crearGaleria() {
    const galeria = document.querySelector('.galeria__imagenes');
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i; //para crear atributo
        //primero genero una imagen
        //para crear la estrucutra del html

        //añadir la funcion mostrar imagen para darle clik es bueno generar el evento
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('LI');
        lista.appendChild(imagen);
        //luego genero una lista para crear una lista de imagenen
        //para sacar la iamgen en el hmtl

        galeria.appendChild(lista);
        //luego genero la lista de imagenes
    }

}
//funcion para llamar imagenes en el html

//addEventListener() Registra un evento a un objeto en específico. El Objeto especifico puede ser un simple elemento en un archivo, el mismo  documento , una ventana

function mostrarImagen(e) {


    const id = parseInt(e.target.dataset.imagenId);
    //parseInt Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada. comprueba el primer argumento, una cadena, e intenta devolver un entero de la base especificada

    //generar la imagen
    const imagen1 = document.createElement('IMG');
    imagen1.src = `build/img/grande/${id}.webp`;

    console.log(imagen1);

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen1);
    overlay.classList.add('overlay');

    //boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('cerrar__imagen');

    //cuando se preciona se cierra la imagen
    cerrarImagen.onclick = function() {
            overlay.remove()
        }
        //cuando se da clic cerrar la imagen tambien por fuera de la imagen
    overlay.onclick = function() {
        overlay.remove()
    }

    overlay.appendChild(cerrarImagen);

    //mostrar en el hmtl
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar__body') //appenchild es para agregar as variable o el codigo en el html


}