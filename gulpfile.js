const gulp = require('gulp')
const purge = require('gulp-css-purge')
const server = require('gulp-server-io')
const stylus = require('gulp-stylus')
const __stylename = './src/styles/**/*.styl'

gulp.task('server', () => {
    return gulp.src('./').pipe(server({ development: true, open: false }))
})

gulp.task('custom', () => {
    return gulp.src('./src/styles/custom.styl')
        .pipe(stylus())
        .pipe(purge({
            trim : true,
            verbose: true,
            css_output: './dist/custom.min.css'
        }))
})

gulp.task('styles', () => {
    return gulp.src('./src/styles/main.styl')
        .pipe(stylus())
        .pipe(purge({
            trim : false,
            verbose: false,
            trim_whitespace: false,
            trim_breaklines: false,
            css_output: './dist/inception.min.css'
        }))
})

gulp.task('default', ['server'], () => {
    gulp.watch([__stylename], ['styles', 'custom'])
 })