var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'))
    .pipe(livereload());  
});
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('*.scss', ['sass']);
});
gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(express.static(__dirname));
  app.listen(3000);
});
gulp.task('default', ['watch', 'sass', 'express']);
