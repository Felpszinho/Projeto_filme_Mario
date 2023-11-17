const gulp =require ('gulp');
const sass =require('gulp-sass')(require('sass'))
const imagemin = require('gulp-imagemin');
const uglify=require('gulp-uglify')

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}


function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyle:'compressed'}))
    .pipe(gulp.dest('./dist/css'))
}
function comprimeimage(){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}
function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
exports.default=gulp.parallel(styles, comprimeimage, scripts);

exports.watch=function(){
    gulp.watch('./src/styles/*scss',{ignoreInitial:false},gulp.series(styles))
    gulp.watch('./src/images/*/**',{ignoreInitial:false},gulp.series(comprimeimage))
    gulp.watch('./src/scripts/*.js',{ignoreInitial:false},gulp.series(scripts))
    

}