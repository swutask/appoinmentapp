'use strict';

var async = require('async');

var socketMiddleware = {
	apiStatusListener : function(shareG) {
			return function(req, res, next){
				shareG.helpers.socket.notify(req);
				next();
			};
		}
	};

module.exports = socketMiddleware; // jshint ignore: line