'use strict';

var CompaniesHelper = function (infxApp) {

	var companies = infxApp.models.api.companies;
	var NodeGeocoder = require('node-geocoder');

	return{
		getCompanies: function(args, callback) {

            companies
                .find( args.query || {} )
                .sort({'startedAt': -1})
                .exec(function(err, companies) {
                    callback(err, companies);
                });
        },
        getCompaniesDistance: function(args, callback) {

            companies.aggregate( [args.query])
                .sort({'startedAt': -1})
                .exec(function(err, companies) {
                    callback(err, companies);
                });
        },
		getOneCompany: function(args, callback) {
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Companies ID Not Found'));
			}
			companies.findOne(args.query, function(err, company) {
                if(err || !company){
                    return callback(infxApp.helpers.errors.throw.httpNotFound('Company not found'));
                }
                return callback(err, company);
            });
		},
		saveNotificationpref: function(args, callback) {

			var setArgs = {};

			setArgs = {
				appoconftemplate: args.appoconfemailtemplate,
		        apponottemplate: args.apponotemailtemplate
			}

			companies.findOneAndUpdate({_id: args.company_id}, {$set : setArgs}, function(err, company) {
                if(err || !company){
                    return callback(infxApp.helpers.errors.throw.httpNotFound('Company could not be updated'));
                }

                return callback(err, company);
            });
		},
		createCompany: function(args, callback){
			
			if(args.company.latitude == "" || args.company.longitude == ""){
				var completeAddress = args.company.street + " " + args.company.city + " - " +  args.company.zip + ", " + args.company.country;
				var options = {
					  provider: 'google',
					  httpAdapter: 'https', // Default
					  apiKey: 'AIzaSyBqa6aMQIrIMbrkTIlZE-wO6SsLXvibNhY', // for Mapquest, OpenCage, Google Premier
					  formatter: null         // 'gpx', 'string', ...
					};	

				var geocoder = NodeGeocoder(options);
 				console.log(completeAddress);
				geocoder.geocode(completeAddress, function(err, res) {
					if(err){
						console.log("company latitude error===>", err);
						args.company.latitude = "";
						args.company.longitude = "";
					}else{
						console.log("company latitude===>", res);
						if(res.length > 0 && res[0].latitude && res[0].longitude){
							args.company.latitude = res[0].latitude;
							args.company.longitude = res[0].longitude;
						}else{
							args.company.latitude = "";
							args.company.longitude = "";

						}
					}
					args.company.geo = [args.company.longitude, args.company.latitude];
					var newCompany = new companies(args.company);

					newCompany.save(function(err, company){
						if(err){
							console.log(err);
							return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Company Details Invalid'));
						}
						callback(err, company);
					});
				});
			}else{
				var newCompany = new companies(args.company);

				newCompany.save(function(err, company){
					if(err){
						console.log(err);
						return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Company Details Invalid'));
					}
					callback(err, company);
				});
			}

			
		},
		updateCompany: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Company ID Not Found'));
			}

			var setArgs = {};

			setArgs.name = args.company.name;
			setArgs.email = args.company.email;
			setArgs.phoneNumber = args.company.phoneNumber;
			setArgs.street = args.company.street;
            setArgs.zip = args.company.zip;
            setArgs.city = args.company.city;
            setArgs.country = args.company.country;
            setArgs.fax = args.company.fax;
			setArgs.status = args.company.status;
			setArgs.categories = args.company.categories;
			
			setArgs.appoconfemail = args.company.appoconfemail;
			setArgs.appoconfsms = args.company.appoconfsms;
			setArgs.apponotemail = args.company.apponotemail;
			setArgs.apponotsms = args.company.apponotsms;
			
			// setArgs.appoconftemplate = args.company.appoconftemplate;
			// setArgs.apponottemplate = args.company.apponottemplate;

			if(args.company.latitude == "" || args.company.longitude == ""){
				var completeAddress = args.company.street + " " + args.company.city + " - " +  args.company.zip + ", " + args.company.country;
				var options = {
					  provider: 'google',
					  httpAdapter: 'https', // Default
					  apiKey: 'AIzaSyBqa6aMQIrIMbrkTIlZE-wO6SsLXvibNhY', // for Mapquest, OpenCage, Google Premier
					  formatter: null         // 'gpx', 'string', ...
					};	

				var geocoder = NodeGeocoder(options);
 				console.log(completeAddress);
				geocoder.geocode(completeAddress, function(err, res) {
					if(err){
						console.log("company latitude error===>", err);
						setArgs.latitude = "";
						setArgs.longitude = "";
					}else{
						console.log("company latitude===>", res);
						if(res.length > 0 && res[0].latitude && res[0].longitude){
							setArgs.latitude = res[0].latitude;
							setArgs.longitude = res[0].longitude;
						}else{
							setArgs.latitude = "";
							setArgs.longitude = "";
						}
					}
					setArgs.geo = [setArgs.longitude, setArgs.latitude];
					companies.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, company){
						if(err){
							return callback(infxApp.helpers.errors.throw.httpNotFound('company Not Found'));
						}
		                console.log("company===>",company);
						callback(err, company);
					});
				});
			}else{
				setArgs.latitude = args.company.latitude;
				setArgs.longitude = args.company.longitude;
				console.log("params" ,setArgs);
	             console.log("args.query" ,args.query);
	            setArgs.geo = [args.company.longitude, args.company.latitude];

				companies.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, company){
					if(err){
						return callback(infxApp.helpers.errors.throw.httpNotFound('company Not Found'));
					}
	                console.log("company===>",company);
					callback(err, company);
				});
			}
			

            
		},
		deleteCompany: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Company ID Not Found'));
			}

			companies.findOneAndRemove(args.query, function(err, company){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('Company Not Found'));
				}
				console.log(company);
				callback(err, company);
			});
		},
	};
};

module.exports = CompaniesHelper;