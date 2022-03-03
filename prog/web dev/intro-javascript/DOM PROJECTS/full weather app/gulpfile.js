const gulp = require('gulp');

const browserSync = require('browser-sync').create();

function watch() {
    browserSync.init({
        server: {
            baseDir: './',
            https: true

        }
        
    });
    gulp.watch('./**/*.css').on('change', browserSync.reload);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
    gulp.watch('./**/*.js').on('change', browserSync.reload);
}


exports.watch = watch;