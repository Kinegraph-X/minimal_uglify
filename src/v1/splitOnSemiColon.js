var fs = require('fs');
var targetDirName = '';

module.exports = function(grunt, options) {
	// On registering the task, don't do anything, just get the user-defined cwd (we wait for the call to a list of tasks)
	if (options)
		targetDirName = process.cwd() + '/' + options.localDeployPath;
	// Then the task is called a second time (without arguments, don't know why), in the order defined for the called list of tasks
	else {
		// We use filter after reading the content of a dir, to avoid requiring 'glob'
		var builtFiles = fs.readdirSync(targetDirName).filter(name => !name.startsWith('de_uglified_'));;
		var fileContent = '';
		builtFiles.forEach(function(filename) {
			fileContent = fs.readFileSync(targetDirName + filename, {encoding: 'utf8', flag: 'r'})
			fileContent = fileContent.replace(/;|,/mg, ';\n');
			fs.writeFileSync(targetDirName + 'de_uglified_' + filename, fileContent);
			console.log('re-added new-lines to : ' + filename);
		})
	}
}

var transformFile = function(fileContents) {
	console.log(fileContents);
}