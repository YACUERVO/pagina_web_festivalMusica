document.addEventListener('DOMContendLoades', function() {
    ScrollNav()
});

function ScrollNav() {
    const enlaces = document.querySelectorAll('.navegacion__principal a');

    enlaces.forEach(function(enlaces) {
        console.log(enlaces)
    })



};