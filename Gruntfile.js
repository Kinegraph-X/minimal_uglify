var path = require('path');

module.exports = function (grunt) {
	
	/**
	* Gruntfile oriented to js bundles creation to which we could want to associate an inherent deployment logic
	* command : grunt --bundle=bundleName [--verbose] [--config-debug] [--stack]
	*/
//	console.log(grunt.cli.options, process.argv);

	var basePath, currentBundle;
	
	currentBundle = grunt.cli.options.bundle;
	if (typeof currentBundle === 'undefined' || !currentBundle) {
		console.error('Error : no bundle name to build. ', 'usage : --bundle=bundleName AND OPTIONNALY call a task e.g. "watch"')
		return;
	}
	basePath = 'src/';
	
	var pkg = grunt.file.readJSON('package.json');
	pkg.main = path.join(process.cwd(), basePath + '/myCode.js');
 
    require('load-grunt-config')(grunt, {
		init : true,
		configPath : [process.cwd() + '/' + basePath + currentBundle],
		data : {
			pathToProject : basePath + currentBundle + '/',
			basePath : basePath,
			currentProject : currentBundle,
			localDeployPath : 'build/' + currentBundle
		},
		postProcess : function (config) {
			config.package = pkg;
			return config;
		}
	});
	
	grunt.registerTask('default',   ['uglify']);
};