module.exports = function (gulp, plugins, config) {
    gulp.task('pug', function() {
       return gulp.src(config.pugSrcFolder + '/**/*.pug')
          .pipe(plugins.pug())
          .pipe(gulp.dest(config.pugDestFolder));
    });
};
