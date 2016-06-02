module.exports = function (gulp, plugins, config) {
    plugins.browserSync = require('browser-sync').create();
    const reload = plugins.browserSync.reload;

    gulp.task('pug', function() {
       return gulp.src(config.pugSrcFolder + '/**/*.pug')
          .pipe(plugins.pug())
          .pipe(gulp.dest(config.pugDestFolder))
          .pipe(reload({stream: true}));
    });
};
