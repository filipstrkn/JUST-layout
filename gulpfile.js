const gulp = require('gulp')
const purge = require('gulp-css-purge')
const server = require('gulp-server-io')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const __stylename = './src/styles/**/*.styl'










/*
|--------------------------------------------------------------------------
| Testing server
|--------------------------------------------------------------------------
*/
gulp.task('server', () => {
    return gulp.src('./').pipe(server({ development: true, open: false }))
})










/*
|--------------------------------------------------------------------------
| Styles
|--------------------------------------------------------------------------
| just build the styles
| > npm run build
|--------------------------------------------------------------------------
*/
gulp.task('styles', () => {
    return gulp.src('./src/styles/main.styl')
        .pipe(stylus())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(purge({
            trim : true,
            shorten: true,
            css_output: './css/just-layout.min.css'
        }))
})











/*
|--------------------------------------------------------------------------
| Run server and watch for changes
|--------------------------------------------------------------------------
| simply hook '/dist/just-layout.min.css' into your html file
| and run the server
| > npm start
|--------------------------------------------------------------------------
*/
gulp.task('default', ['server'], () => {
    gulp.watch([__stylename], ['styles', 'custom'])
 })