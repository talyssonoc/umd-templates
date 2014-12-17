# UMD Templates

These are [UMD](https://github.com/umdjs/umd) patterns for using with gulp-umd compliants.

## Patterns:

* `amdWeb`
* `amdWebGlobal`
* `commonjsAdapter`
* `commonjsStrict`
* `commonjsStrictGlobal`
* `jqueryPlugin`
* `jqueryPluginCommonjs`
* `nodeAdapter`
* `returnExports`
* `returnExportsGlobal`

## Usage

```js

	var gulp = require('gulp');
	var umd = require('gulp-umd');
	var patterns = require('umd-templates');

	gulp.task('build', ['clean'], function() {  
	  return gulp.src([
	                    'src/foo.js'
	                ])
	    .pipe(umd({
	        exports: function(file) {
	            return 'Foo';
	        },

	        namespace: function(file) {
	            return 'Bar.Foo';
	        },

	        dependencies: function() {
	            return [
	                {
	                    name: 'dep1',
	                    amd: 'dep1',
	                    cjs: 'dep1',
	                    global: 'Dependence1',
	                    param: 'dep1'
	                },
	                {
	                    name: 'dep2',
	                    amd: 'dep2',
	                    cjs: 'dep2',
	                    global: '$',
	                    param: '$'
	                }
	            ]
	        },
	        template: patterns.returnExportsGlobal.path
	    }))
	    .pipe(gulp.dest('dist'));
	});


```

# Todo

* Write tests

Pull requests are welcome =)