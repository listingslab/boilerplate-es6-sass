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
 * Handles transpiling ES6 and Sass preprocessing
 *
 */

const gulp = require('gulp');
const babelify = require('babelify');
const browserify = require('browserify');
const connect = require('gulp-connect');
const notify = require("gulp-notify");
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

gulp.task('default',['init']);

// Start watching src/js/ & src/scss files for changes
gulp.task('init', ['js'], function() {
    gulp.watch('src/*.js', ['js']);
});

// Transpile and minify ES6 JavaScript into ES5 with & copy to build/js with sourcemap
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
    .pipe(gulp.dest('./build/js'))
});