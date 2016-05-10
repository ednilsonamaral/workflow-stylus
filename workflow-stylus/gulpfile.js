'use strict';

//dev dependencies
const gulp = require('gulp'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync'),
      stylus = require('gulp-stylus'),
      uglify = require('gulp-uglify'),
      concat = require('gulp-concat'),
      prefixer = require('autoprefixer-stylus'),
      imagemin = require('gulp-imagemin'),
      watch = require('gulp-watch'),
      rename = require('gulp-rename'),
      cleanCSS = require('gulp-clean-css'),
      pug = require('gulp-pug'),
      nib = require('nib')
      cp = require('child_process');

//browser-sync tasks
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '_public/'
        }
    });

    gulp.watch("_source/css/**/*.styl", ['stylus']);
    gulp.watch("_source/img/**/*.{jpg,png,gif}", ['imagemin']);
    gulp.watch("_source/**/*.html").on('change', browserSync.reload);
});
