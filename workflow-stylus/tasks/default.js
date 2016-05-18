module.exports = function (gulp, plugins, config) {
    gulp.task('default', function() {
        gulp.start('js-compile');
        gulp.start('imagemin');
        gulp.start('watch');
        gulp.start('browser-sync');
    });
};
