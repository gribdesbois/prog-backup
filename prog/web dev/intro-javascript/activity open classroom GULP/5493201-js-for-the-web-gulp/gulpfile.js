const gulp = require('gulp');
const jshint = require('gulp-jshint');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const runSequence = require('gulp4-run-sequence');
const { series, parallel } = require('gulp');
const browserSync = require('browser-sync').create(); //live reload



gulp.task('processHTML', () => {
  return  gulp.src('*.html')
	.pipe(gulp.dest('dist'));
});


gulp.task('processJS', () => {
   return gulp.src('*.js')
      .pipe(jshint({
          esversion:8
      }))
      .pipe(jshint.reporter('default'))
      .pipe(babel({
          presets : ['@babel/preset-env']
      }))
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
  });

  gulp.task('babelPolyfill', () => {
    return gulp.src('node_modules/babel-polyfill/browser.js', { allowEmpty: true })
      .pipe(gulp.dest('dist/node_modules/babel-polyfill'));
  });

  gulp.task('browserSync', () => {
    browserSync.init({
      server: './dist',
      port: 8080,
      ui: {
        port: 8081
      }
    });
  });

  gulp.task('watch', parallel('browserSync'), () => {
    gulp.watch('*.js', parallel('processJS', browserSync.reload));
    gulp.watch('*.html', parallel('processHTML', browserSync.reload));

    /*gulp.watch('dist/*.js', series(browserSync.reload));
    gulp.watch('dist/*.html', series(browserSync.reload));*/
  });

  gulp.task('default', (callback) => {
    runSequence(['processHTML', 'processJS', 'babelPolyfill'], 'watch', callback);
  });
  

  