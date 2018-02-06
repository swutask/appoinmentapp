'use strict'

var FileStreamRotator = require('file-stream-rotator');
var fs = require('fs');
var morgan = require('morgan');

module.exports = function(app, shareG) {

	if(shareG.configs.logger.dumpLogs){

		var logDirectory = shareG.configs.rootDir + shareG.configs.logger.folderPath;

		if(!fs.existsSync(logDirectory)){
			fs.mkdirSync(logDirectory);
		}
		
		var logger = FileStreamRotator.getStream({
						  filename: logDirectory + '/'+ shareG.configs.logger.fileName,
						  frequency: shareG.configs.logger.frequency,
						  verbose: shareG.configs.logger.verbose
						});

		app.use(morgan('combined', {stream: logger}));
	}
};