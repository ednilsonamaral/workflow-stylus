module.exports = function (gulp, plugins, config) {
    plugins.browserSync = require('browser-sync').create();

    gulp.task('browser-sync', function() {
       plugins.browserSync.init({
          server: {
             baseDir: config.pugDestFolder
          }
       });

       gulp.watch(config.stylusSrcFolder + "/**/*.styl", ['stylus']);
       gulp.watch([config.pugDestFolder + "/**/*.html", config.pugDestFolder + "/index.html"]).on("change", plugins.browserSync.reload);
   });
};
