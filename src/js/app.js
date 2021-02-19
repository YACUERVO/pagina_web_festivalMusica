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