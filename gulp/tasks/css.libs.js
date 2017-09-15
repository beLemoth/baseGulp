'use strict';

module.exports = function() {
    $.gulp.task('css:libs', function() {
        return $.gulp.src($.path.cssLibs)
            .pipe($.gp.concatCss('libs.css'))
            .pipe($.gp.csso())
            .pipe($.gp.rename({
                suffix: '.min'
            }))
            .pipe($.gulp.dest($.config.root + '/assets/css'))
    })
};
