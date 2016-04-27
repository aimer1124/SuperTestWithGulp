# SuperTestWithGulp
Use [Gulp](http://gulpjs.com/) to run [SuperTest](https://github.com/visionmedia/supertest) API testing scripts

# Preview

## You just need to  clone this repo,that's all.

# Run
* Install node_module

```
npm install
```

* With command `gulp master`,you can see the result:

```
[15:28:55] Using gulpfile ~/Downloads/SuperTestWithGulp/gulpfile.js
[15:28:55] Starting 'master'...
[15:28:55] Finished 'master' after 24 ms
You are in master


  Test Demo.
    ✓ Visit http://aimer1124.github.io/ (775ms)


  1 passing (779ms)

```
* With command `gulp branch`,you can see the result about `branch` environment:

```
[15:30:34] Using gulpfile ~/Downloads/SuperTestWithGulp/gulpfile.js
[15:30:34] Starting 'branch'...
[15:30:34] Finished 'branch' after 22 ms
You are in branch


  Test Demo.
    ✓ Visit http://aimer1124.github.io/2016/01/17/Tool-SuperTest/ (780ms)


  1 passing (784ms)

```
# Enhance

* Modify the visit url,you just need to modify the `url` property in `master.js` or `branch.js`
* Add more environment,you just need to `three` steps:
 * add the gulp task in `gulpfile.js` like this
 
```
gulp.task('newBranch', function() {
	require('./config/endpoints')('newBranch');
	runTest();
});

```
 * add the host config in `endpoints.js`
 
```
...
var host = {
    master: require('./master.js'),
    branch: require('./branch.js'),
    newBranch: require('./newBranch.js')
};
...
```
 * add one javascript file named `newBranch` under `config` folder,and config this file like others
 
