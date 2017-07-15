/* File: gulpfile.js */


/** author Shihab PM ( UI Developer )
 *  Loading the main app module with the dependent modules 
 */

// grab our gulp packages
const gulp = require('gulp'), //importing GULP module
      webserver = require('gulp-webserver'), // module to run a webserver
      autoprefixer = require('gulp-autoprefixer');


 // Create a server task
        gulp.task('webserver', function () {
            gulp.src('./')
                .pipe(webserver({
                    port: 8056,
                    livereload: false,
                    directoryListing: false,
                    open: true
                }));
        });

  // create a task to autoprefix SASS compiled css 
        gulp.task('cssPrefixer', function () {
            gulp.src('css/src/main.css')
                .pipe(autoprefixer())
                .pipe(gulp.dest('css/'));

        });// bundle all task that goes into watch 
        gulp.task('watch', function () {
       
            gulp.watch('css/src/main.css',['cssPrefixer']);
           
        
        });


gulp.task('default', ['webserver', 'cssPrefixer', 'watch']);