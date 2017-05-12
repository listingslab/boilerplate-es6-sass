/*
    gulpfile.js
 */

const gulp          = require('gulp');
const babelify      = require('babelify');
const browserSync   = require('browser-sync').create();
const connect       = require('gulp-connect');
const browserify    = require('browserify');
const source        = require('vinyl-source-stream');

gulp.task('default',['serve']);

// Start static server + watch js/css/html files for changes
gulp.task('serve', ['js'], function() {
    browserSync.init({
        server: './public'
    });
    gulp.watch('src/*.js', ['js']);
    gulp.watch('public/*.html').on('change', browserSync.reload);
    gulp.watch('public/css/*.css').on('change', browserSync.reload);
});


// Transpile ES6 JavaScript into ES5 & auto-inject into browsers
gulp.task('js', function(){
  return browserify({
    entries: ['./src/main.js']
  })
    .transform(babelify.configure({
      presets : ['es2015']
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream());
});