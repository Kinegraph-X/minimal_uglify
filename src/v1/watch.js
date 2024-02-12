module.exports = function(grunt, options) {
	return {
		debug: {
			files: [
				options.pathToProject + '*.js'
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