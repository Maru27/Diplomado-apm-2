/*
* Dependencias
*/

var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    concatCss = require('gulp-concat-css');
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

//Construyo min los js sin importar orden
gulp.task('concat-files', function(){
    gulp.src('source/js/*.js')
        .pipe(concat('filesjs.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
})

//Organizo los archivos css en uno solo que se llama bundle
gulp.task('concat-css', function(){
    return gulp.src(['source/css/normalize.css', 'source/css/skeleton.css', 'source/css/styles.css'])
        .pipe(concatCss('bundle.css'))
        .pipe(gulp.dest('source/css/build'));
});

//Construyo min los css con orden y el de js
gulp.task('minify', ['concat-files','concat-css'], function(){
  return gulp.src('source/css/build/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('<dist></dist>/css/'));
});

