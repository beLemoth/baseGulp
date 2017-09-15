'use strict';

module.exports = function() {

    $.gulp.task('arch', function() {
       return $.gulp.src($.config.root+'**/**')
           .pipe($.gp.zip('build.zip'))
           .pipe($.gulp.dest('./'));
    });
};