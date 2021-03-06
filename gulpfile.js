'use strict';

var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('inject', function () {
    var target = gulp.src('./index.html');
    var libsDir = './bower_components/';

    var Libs = gulp.src([
        libsDir + 'angular/angular.js',
        libsDir + 'angular-ui-router/release/angular-ui-router.js',
        libsDir + 'jquery/dist/jquery.min.js',
        libsDir + 'bootstrap/dist/js/bootstrap.js',
        libsDir + 'angular-local-storage/dist/angular-local-storage.js',
        './js/**/*.js',
        './css/**/*.css',
        libsDir + 'bootstrap/dist/css/bootstrap.css'
    ], {read: false});

    return target.pipe(inject(Libs))
        .pipe(gulp.dest('./'));
});
