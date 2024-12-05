const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('css/*.css') // Select all CSS files in the 'css' folder
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist')); // Save minified files to the 'dist' folder
});

const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

// Define the minify-css task
function minifyCssTask() {
    return gulp.src('css/*.css') // Source folder for CSS files
        .pipe(cleanCSS())       // Minify the CSS
        .pipe(gulp.dest('dist')); // Output folder for minified files
}

// Export the task for Gulp 4.0+
exports.minifyCss = minifyCssTask;


const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('css/*.css') // Ensure this path matches your files
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist'));
});
