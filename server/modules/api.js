'use strict';

// REST API Module
var express = require('express');
var jwt = require('jwt-simple');

module.exports = init;

function init(app, infxApp, router) {
	console.log('Api Module Loaded!');

	if (!router) {
	  router = express.Router();
	}


	// Init Assets For API Modules
	infxApp.controllers.api = {};
	infxApp.helpers.api = {};
	infxApp.models.api = {};

	// Loading Configs
	infxApp.configs.api = require( infxApp.configs.rootDir +'/configs/api');
	
	// Loading Models
	infxApp.models.api.user = require( infxApp.configs.rootDir +'/models/api/user-mdl');
	infxApp.models.api.clients = require( infxApp.configs.rootDir + '/models/api/clients-mdl');
	infxApp.models.api.companies = require(infxApp.configs.rootDir+'/models/api/companies-mdl');
	infxApp.models.api.categories = require(infxApp.configs.rootDir+'/models/api/categories-mdl');
	infxApp.models.api.services = require(infxApp.configs.rootDir+'/models/api/services-mdl');
	infxApp.models.api.calendars = require(infxApp.configs.rootDir+'/models/api/calendars-mdl');
	infxApp.models.api.openinghours = require(infxApp.configs.rootDir+'/models/api/openinghours-mdl');
	infxApp.models.api.appointment = require(infxApp.configs.rootDir+'/models/api/appointment-mdl');
	
	
	// Loading Middlewares
	infxApp.middlewares.api = require( infxApp.configs.rootDir +'/middlewares/api');

	// Loading Controllers
	infxApp.controllers.api.user = require(infxApp.configs.rootDir + '/controllers/api/user-ctrl');
	infxApp.controllers.api.clients = require(infxApp.configs.rootDir + '/controllers/api/clients-ctrl');
	infxApp.controllers.api.companies = require(infxApp.configs.rootDir+'/controllers/api/companies-ctrl');
	infxApp.controllers.api.categories = require(infxApp.configs.rootDir+'/controllers/api/categories-ctrl');
	infxApp.controllers.api.services = require(infxApp.configs.rootDir+'/controllers/api/services-ctrl');
	infxApp.controllers.api.calendars = require(infxApp.configs.rootDir+'/controllers/api/calendars-ctrl');
	infxApp.controllers.api.openinghours = require(infxApp.configs.rootDir+'/controllers/api/openinghours-ctrl');
	infxApp.controllers.api.appointment = require(infxApp.configs.rootDir+'/controllers/api/appointment-ctrl');
	

	// Loading Helpers
	infxApp.helpers.api.user = require( infxApp.configs.rootDir +'/helpers/api/user-hlpr');
	infxApp.helpers.api.clients = require(infxApp.configs.rootDir + '/helpers/api/clients-hlpr');
	infxApp.helpers.api.companies = require(infxApp.configs.rootDir + '/helpers/api/companies-hlpr');
	infxApp.helpers.api.categories = require(infxApp.configs.rootDir + '/helpers/api/categories-hlpr');
	infxApp.helpers.api.services = require(infxApp.configs.rootDir + '/helpers/api/services-hlpr');
	infxApp.helpers.api.calendars = require(infxApp.configs.rootDir + '/helpers/api/calendars-hlpr');
	infxApp.helpers.api.openinghours = require(infxApp.configs.rootDir + '/helpers/api/openinghours-hlpr');
	infxApp.helpers.api.appointment = require(infxApp.configs.rootDir + '/helpers/api/appointment-hlpr');
	infxApp.helpers.api.config = require(infxApp.configs.rootDir + '/helpers/api/config-hlpr');
	
	router.use(infxApp.middlewares.api.authDashboard(infxApp));
	
	infxApp.controllers.api.user(app, infxApp, router);
	infxApp.controllers.api.clients(app, infxApp, router);
	infxApp.controllers.api.companies(app, infxApp, router);
	infxApp.controllers.api.categories(app, infxApp, router);
	infxApp.controllers.api.services(app, infxApp, router);
	infxApp.controllers.api.calendars(app, infxApp, router);
	infxApp.controllers.api.openinghours(app, infxApp, router);
	infxApp.controllers.api.appointment(app, infxApp, router);
	

	if (infxApp.configs.api.urlWithVersionNumber) {
		app.use(infxApp.configs.api.apiUrl + '/' + infxApp.configs.api.version, router);
	} else {
		app.use(infxApp.configs.api.apiUrl, router);
	}
  app.use(infxApp.configs.api.apiUrl + '/export', router);
  app.all(infxApp.configs.api.apiUrl+'/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
    return next();
  });
}

