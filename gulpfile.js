const { series, src, dest, watch, parallet } = require('gulp'); //series para ejecutar tareas individuales, parallet para ejecutar tareas al mismo tiempo 
//watch para realizar un compiladro de codigo sass a codigo css
const sass = require('gulp-sass'); //para codificar de sass a css
const imagemin = require('gulp-imagemin'); //dependencia para minimizar el tamaño de las imagenes
const notify = require('gulp-notify');
const webp = require('gulp-webp'); //para que las imagenes se formatean a formato webp
//Funcion compila SASS
const paths = {
        imagenes: 'src/img/**/*',
        //scss:'src/scss/**/*.scss''
    }
    //objeto para imagenes por si deseo modificar la ruta 
function css() {
    return src('src/scss/app.scss')
        .pipe(sass())
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
}



exports.css = css;
exports.minificarcss = minificarcss;
exports.imagenes = imagenes;

exports.watchArchivos = watchArchivos;

exports.default = series(css, imagenes, versionwebp, watchArchivos);