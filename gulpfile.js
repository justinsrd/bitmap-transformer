'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');

gulp.task('default', ['msg', 'stylish lint'],
  function() {});
//add 'test with nyan' to the array above after the mocha tests
//at test.js exist

gulp.task('msg', function() {
  return gutil.log('...starting Gulp!');
});

// ACTIVATE THIS AFTER TEST.JS EXISTS
// gulp.task('test with nyan', function() {
//   return gulp.src('test/*test.js')
//              .pipe(mocha({reporter: 'nyan'}));
// });

gulp.task('stylish lint', function() {
  return gulp.src('*.js')
             .pipe(jshint())
             .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch((['*.js', 'test/*.js'], ['stylish-lint']));
});
