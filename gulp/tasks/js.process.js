'use strict';

module.exports = function() {
    $.gulp.task('js:process', function() {
        return $.gulp.src($.path.app)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.concat('app.js'))
            .pipe($.gp.uglyfly())
            .pipe($.gp.sourcemaps.write())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/js'))
    });
};