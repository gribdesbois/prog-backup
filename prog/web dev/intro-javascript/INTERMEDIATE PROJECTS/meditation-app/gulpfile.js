const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scss into css

function style() {
    //1. where is my scss files
    return gulp.src('./**/*.scss')
    //2. pass that file through sass compiler
        .pipe(sass().on('error', sass.logError))
    //3. WHERE  do i save the compiled css?
        .pipe(gulp.dest('./'))
    //4. stream changes to all browser
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
            https : true
        }
    });
    gulp.watch('./**/*.scss', style);
    gulp.watch('./**/*.css').on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;