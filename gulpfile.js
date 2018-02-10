var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', function() {
	gulp.src('css/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('sass-tomat', function() {
	gulp.src('css/sass/skins/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('css/skins'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false
	})
});

gulp.task('watch', ['browser-sync'], function() {
	gulp.watch('css/sass/*.sass', ['sass']);
	gulp.watch('css/sass/skins/*.sass', ['sass-tomat']);
	gulp.watch('index.html', browserSync.reload);
	gulp.watch('js/*.js', browserSync.reload);
})