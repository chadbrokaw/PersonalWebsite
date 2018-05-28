'use strict';

//dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


//Convert SCSS to CSS

var SCSS_SRC = './src/Assets/SCSS/**/*.scss';
var SCSS_DEST = './src/Assets/CSS';

//Compile SCSS_SRC

gulp.task('compile_scss', function(){
  gulp.src(SCSS_SRC)
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(rename({ suffix: '.min'}))
  .pipe(changed(SCSS_DEST))
  .pipe(gulp.dest(SCSS_DEST));
});

//Detect changes in the SCSS folder
gulp.task('watch_SCSS', function(){
  gulp.watch(SCSS_SRC, ['compile_scss']);
});

//run task
gulp.task('default', ['watch_SCSS']);
