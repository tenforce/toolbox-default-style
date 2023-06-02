'use strict';

var gulp = require('gulp');

function MoveFilesToDist() {
  return gulp
      .src([
        "./src/def*/**"])
      .pipe(gulp.dest("./dist-lib/"))
}

gulp.task('default', gulp.series(MoveFilesToDist));
