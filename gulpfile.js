const { series, src, dest, watch, parallet } = require('gulp'); //series para ejecutar tareas individuales, parallet para ejecutar tareas al mismo tiempo 
//watch para realizar un compiladro de codigo sass a codigo css
const sass = require('gulp-sass'); //para codificar de sass a css
const imagemin = require('gulp-imagemin'); //dependencia para minimizar el tamaño de las imagenes
const notify = require('gulp-notify');
const webp = require('gulp-webp'); //para que las imagenes se formatean a formato webp
//Funcion compila SASS
const concap = require('gulp-concat');
//para compilar js

//utlidades CSS
const autoprefixer = require('autoprefixer');
//prefijos en nuestro css
const postcss = require('gulp-postcss');
//procesamientos a nuestro css
const cssnano = require('cssnano');
//para optimizar y mejorar el css. escribir codiido de ultima generacion y mejoras en nuestro codigo
const sourcemaps = require('gulp-sourcemaps');
//mantiene la referecnia de que archivo esta para realizar una modificacion del css para verificar 

//utilidades js
const terser = require('gulp-terser-js');
//para minificar nuestro js y optimizarlo
const rename = require('gulp-rename');


const paths = {
        imagenes: 'src/img/**/*',
        //scss:'src/scss/**/*.scss''
        js: 'src/js/**/*.js'
    }
    //objeto para imagenes por si deseo modificar la ruta 

function css() {
    return src('src/scss/app.scss')
        .pipe(sourcemaps.init()) //iniciando el mapa
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        //escribimos nuestro mapa de nuestro mapa        
        .pipe(dest('./build/css'))
}

function minificarcss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
                //para comprimir el archivo css
        }))
        .pipe(dest('./build/css'))
        //para crear un archivo de css donde se va mostrar el codigo css
}

function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concap('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./build/js'))

}


function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin()) //para ejecutar el codigo pipe
        .pipe(dest('./build/img')) //importar lo que estamos ejecutando en gulp
        .pipe(notify({ massage: 'iamgen Minificada' })) //para notificar las imagenes que esta minificando
}

function versionwebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ massage: 'version webp lista' }))
}

function watchArchivos() {
    watch('src/scss/**/*.scss', css);
    //* = la carpeta actual
    //**/*  recorre todas las carpetas de la actual con esa extension
    //verifica los cambios que hay en la carpera y ejecuta el archivo a compilar css
    //wath para automatizar compilaciones
    //para que podamos ejecutar sin compilar
    watch(paths.js, javascript);
    //para que ejecute la funcion de javacrip siempre que guardemos 
}



exports.css = css;
exports.javascript = javascript;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;
exports.default = series(css, javascript, imagenes, versionwebp, watchArchivos);