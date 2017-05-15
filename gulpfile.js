/*
    gulpfile.js
 */

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const browserSync = require('browser-sync').create();
const connect = require('gulp-connect');
const notify = require("gulp-notify");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

gulp.task('default',['serve']);

// Start static server + watch js/css/html files for changes
gulp.task('serve', ['js'], function() {
    browserSync.init({
        server: './public'
    });
    gulp.watch('public/*.html').on('change', browserSync.reload);
    gulp.watch('public/css/*.css').on('change', browserSync.reload);
    gulp.watch('src/*.js', ['js']);
});

// Transpile ES6 JavaScript into ES5 & auto-inject into browsers
gulp.task('js', function(){
  return browserify({
    debug: true,
    entries: ['./src/main.js'],
  })
    .transform(babelify.configure({
      presets: ['es2015'],
      sourceMapsAbsolute: true,
    }))
    .bundle()
    .on("error", notify.onError(function (error) {
      return "Error: " + error.message;
    }))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream())
});
