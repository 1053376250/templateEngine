const gulp = require('gulp');
const ts = require("gulp-typescript");
const tsProject = ts.createProject('tsconfig.json');

var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
//编译ts
//
gulp.task('default', function() {
    return gulp.src('src/**/*.ts').pipe(tsProject()).pipe(gulp.dest('dist/'));
});

gulp.task('test', function() {

    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/index.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("dist"));
});