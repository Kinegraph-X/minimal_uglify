module.exports = function(grunt, options) {
	return {
		debug: {
			files: [
				options.basePath + options.currentProject + '/' + '*.js'
			],
			options : {
				livereload : true
			},
			tasks: [
				'default'
			]
		}
	}
}