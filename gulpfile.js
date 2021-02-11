const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');

//Funcion compila SASS

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
        //para crear un archivo de css
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
exports.watchArchivos = watchArchivos;