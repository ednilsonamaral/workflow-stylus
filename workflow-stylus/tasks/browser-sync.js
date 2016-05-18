module.exports = function (gulp, plugins, config) {
    plugins.browserSync = require('browser-sync').create();
    const reload = plugins.browserSync.reload;

    gulp.task('browser-sync', function() {
       plugins.browserSync.init({
          server: {
             baseDir: config.pugDestFolder
          }
       });

       plugins.watch(config.stylusSrcFolder + "/**/*.styl", ['stylus']);
       plugins.watch([config.pugDestFolder + "/**/*.html", config.pugDestFolder + "/index.html"]).on("change", reload);
    });
};
