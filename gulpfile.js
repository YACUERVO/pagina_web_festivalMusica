const { series, parallel } = require('gulp');

function css(done) {
    console.log('Compilando....SASS');
    done();
    //para llamar funciones desde gulp
}

function javascript(done) {
    console.log('compilando javascript')
    done()
        //para llamar funciones desde gulp
}

function minificaHMTL(done) {
    console.log('minificando...')
    done()
        //para llamar funciones desde gulp
}

exports.css = css;
exports.javascript = javascript;
exports.tarea = parallel(css, javascript, minificaHMTL);