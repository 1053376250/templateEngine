const gulp = require('gulp');
const ts = require("gulp-typescript");
const tsProject = ts.createProject('tsconfig.json');
//编译ts
//
gulp.task('default', function() {
    gulp.src('src/index.ts').pipe(tsProject()).pipe(gulp.dest('dist/'));
});