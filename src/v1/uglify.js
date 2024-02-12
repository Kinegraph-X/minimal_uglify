module.exports = function (grunt, options) {
	
	return {
		localRelease: {
			files: [{
				expand : true,
				cwd: '<%=pathToProject%>',
		        src: 'myCode.js',
		        dest : '<%=localDeployPath%>'
		  }]
		}
	};
}