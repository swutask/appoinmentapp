'use strict';
var cors = require('cors');

var dashboardMiddleware = {
	corsSupport : function(app) {
			// ===================================================
			// ----- CORS SETUP
			// ===================================================
			// Enable cors for ALL requests
			// TODO:  after demo maybe limit this to '/admin/*' routes???
			app.use(cors());
			// only allow the shareg-dashboard app on specificroutes
			//var corsOptions = /{
			//  origin: 'https://shareg-dashboard.herokuapp.com'
			//};

			app.options('*', cors()); // include before other routes
		}
	};

module.exports = dashboardMiddleware; // jshint ignore: line