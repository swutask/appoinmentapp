'use strict';

var configHelper = function (infxApp) {

	return{
		getConfigData: function(callback) {

			var myObj = require('./../../configs/communication_config.json');

			callback(myObj);
		}
	};
}

module.exports = configHelper;