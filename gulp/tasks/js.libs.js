'use strict';

module.exports = function() {
    $.gulp.task('js:libs', function() {
        return $.gulp.src($.path.jsLibs)
            .pipe($.gp.concat('libs.js'))
            .pipe($.gp.uglyfly())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/js'))
    });
};
