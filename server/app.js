'use strict';



//  infxApp Express Application



var express = require('express');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var cors = require('cors');

var path = require('path');

var jwt = require('jwt-simple');

var app = express();

var config = require('./configs/env.json')[process.env.NODE_ENV || 'production'];

var router = express.Router();



app.set('port', (process.env.PORT || config.PORT));

// app.set('port', 5500);

// process.env.NODE_ENV = 'staging-local';

app.use(cors());



app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');



app.use(bodyParser.json({limit: '50mb'}));

app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.use(cookieParser());



// ===================================================

//  DOWNLOAD CERTIFICATE file

// ===================================================

app.get('/download', function(req, res) {

  var file = './clientCert.p12';

  res.download(file);

});



app.get('/download/pem', function(req, res) {

  var file = './infxAppCert.pem';

  res.download(file);

});

// ---------

var infxApp = {};



infxApp.render = app.render;



// Vars

infxApp.vars = {};



// Configs

infxApp.configs = {};

infxApp.configs.rootDir = path.dirname(require.main.filename);

infxApp.configs.logger = require('./configs/logger');

infxApp.configs.carriers = require('./configs/carriers');



// Validators

infxApp.validators = {};



// Helpers

infxApp.helpers = {};

// infxApp.helpers.logger = require('./helpers/logger');

infxApp.helpers.errors = require('./helpers/errors');



// Logger Setup

// infxApp.helpers.logger(app, infxApp); // TODO: time is coming with log file name 'FIX'



// Database

infxApp.database = require('./database/db');



// Modules

infxApp.modules = {};

infxApp.modules.api = require('./modules/api');



infxApp.controllers = {};

infxApp.models = {};

infxApp.middlewares = {};



// Connect Database

//infxApp.database(infxApp, config.MONGO_URI);



console.log('MongoLab URI: ', process.env.MONGOLAB_URI);

infxApp.database(infxApp, "mongodb://developer:20dev17@ds125183.mlab.com:25183/appointment-restore");

//infxApp.database(infxApp, process.env.MONGOLAB_URI);



app.get('/api',function(req, res){

	res.json({	application: 'infxApp Dashboard Api',

				version: '1.0',

				support: 'support@infxApp.co'

			});

});



//-----------------------

// Load Api Module 

//-----------------------







infxApp.modules.api(app, infxApp);	/// Loading API Module  





// Error Handling

app.use(function(err, req, res, next) { // jshint ignore: line



    res.status(err.status || 500);



    res.send({

    status: 'error',

    errors: err.body ? err.body.errors : '',

    message: err.message

  });

});





  console.log(app.get('port'));

  app.listen(app.get('port'), function() {

    console.log('App running at localhost:' + app.get('port'));

  });

