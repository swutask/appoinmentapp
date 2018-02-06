'use strict';

var ServicesHelper = function (infxApp) {

	var services = infxApp.models.api.services;

	return{
		getServices: function(args, callback) {

            services
                .find( args.query || {} )
                .sort({'description': 1})
                .exec(function(err, services) {
                    callback(err, services);
                });
        },
		getOneService: function(args, callback) {
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Service ID Not Found'));
			}
			services.findOne(args.query, function(err, service) {
                if(err || !service){
                    return callback(shareG.helpers.errors.throw.httpNotFound('Service not found'));
                }
                return callback(err, service);
            });
		},
		createService: function(args, callback){
			var newService = new services(args.service);

            console.log("args---->", args);

			newService.save(function(err, service){
				if(err){
					console.log(err);
					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Service Details Invalid'));
				}
				callback(err, service);
			});
		},
		updateService: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Service ID Not Found'));
			}

			var setArgs = {};

			setArgs.description = args.service.description;
			setArgs.price = args.service.price;
			setArgs.duration = args.service.duration;
            setArgs.status = args.service.status;
            setArgs.shortKey = args.service.shortKey;

            console.log("params" ,setArgs);
            console.log("args.query" ,args.query);
			services.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, service){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('Service Not Found'));
				}
                console.log("company===>",service);
				callback(err, service);
			});
		},
		deleteService: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Service ID Not Found'));
			}

			services.findOneAndRemove(args.query, function(err, service){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('Service Not Found'));
				}
				console.log(service);
				callback(err, service);
			});
		},
	};
};

module.exports = ServicesHelper;