/**
 * Boilerplate ES6 Sass App
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/osl-3.0.php
 *
 * @category   Listingslab
 * @package    boilerplate-es6-sass
 * @copyright  Copyright (c) 2017 Listingslab (http://listingslab.com)
 * @license    https://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author     Chris Dorward <listingslab@gmail.com>
 *
 * gulpfile.js
 * Handles transpiling of ES6 and Sass preprocessing
 *
 */

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const connect = require('gulp-connect');
const notify = require("gulp-notify");
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

const JSfileName = 'BetterCheckout.min.js';
const CSSfileName = 'BetterCheckout.min.css';

gulp.task('default',['init']);

// Watch src/js & src/scss directories for changes
gulp.task('init', ['js', 'css'], function() {
  gulp.watch('src/**/*.js', ['js']);
  gulp.watch('src/**/*.scss', ['css']);
});

// Transpile & minify JavaScript & copy to build/js/app.js with sourcemap
gulp.task('js', function(){
  return browserify({
    debug: true,
    entries: ['./src/js/Main.js'],
  })
    .transform(babelify.configure({
      presets: ['es2015'],
      sourceMapsAbsolute: true,
    }))
    .bundle()
    .on("error", notify.onError(function (error) {
      return "Error: " + error.message;
    }))
    .pipe(source(JSfileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./public/js'))
});

// Pre-process Sass into CSS3 & copy to build/css/ with a sourcemap
gulp.task('css', () => gulp.src('src/scss/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({source: 'styles.js'}))
  .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))
  .pipe(rename(CSSfileName))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('public/css'))
);
