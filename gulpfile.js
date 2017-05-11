/*
    gulpfile.js
 */

const gulp          = require('gulp');
const browserSync   = require('browser-sync').create();

gulp.task('default',['serve']);

// Start static server + watch js/html files for changes
gulp.task('serve', function() {
    browserSync.init({
        server: './public'
    });
    gulp.watch('public/*.html').on('change', browserSync.reload);
});