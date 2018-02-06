'use strict';

exports = module.exports = init; // jshint ignore: line

function init(shareG, dbURI)
{
	var Mongoose = require( 'mongoose' ).Mongoose; //jshint ignore: line
	
	var timer = 5000;

	console.log("MONGOLAB_URI_in database: ", dbURI);

	var infxAppDB = require('mongoose');
	//infxAppDB.connect(dbURI);
  infxAppDB.connect(dbURI);
	//console.log(infxAppDB.connect(dbURI, { useMongoClient: true }));
	module.exports = exports = infxAppDB;
  infxAppDB.connection.on('connected', function () {
		// Reset timer to 5 Sec.
    infxAppDB.db = infxAppDB.connection;
		console.log("connected success");
		//console.log("infxAppDB===>",infxAppDB.db);
	});




	// If the connection throws an error
    infxAppDB.connection.on('error',function (err) {
	  console.log('Mongoose default connection error: ' + err);

	}); 

	// When the connection is disconnected
    infxAppDB.connection.on('disconnected', function () {
	  console.log('Mongoose default connection disconnected'); 
	});

	// If the Node process ends, close the Mongoose connection
	process.on('SIGINT', function() {  
	  infxAppDB.connection.close(function () { 
	    console.log('Mongoose default connection disconnected through app termination'); 
	    process.exit(0); 
	  }); 
	}); 
}