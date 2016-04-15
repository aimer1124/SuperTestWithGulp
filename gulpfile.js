var gulp = require('gulp');
var mocha = require('gulp-mocha');


gulp.task('master', function() {
	require('./config/endpoints')('master');
	runTest();
});

gulp.task('branch', function() {
	require('./config/endpoints')('branch');
	runTest();
});

function runTest() {
	return gulp
		.src(['test/test-demo.js'], { read: false})
		.pipe(mocha({
			reporter: 'spec',
			globals: {
				should: require('should')
			}
		}));
}
