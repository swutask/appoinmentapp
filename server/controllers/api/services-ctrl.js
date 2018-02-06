'use strict';

// User Controller
module.exports = init;

function init(app, infxApp, router) {


	/*
		Create Group
	 */
	console.log("Services controller");

	router.route('/services/:companyID')
		.get(function(req, res, next){
			console.log("services");
            var args = {};
			if(req.query.offset){
				args.offset = req.query.offset;
			}
            
			if(req.query.limit){
				args.limit = req.query.limit;
			}
            
			if(req.query.sort){
				args.sort = req.query.sort;
			}
            
			args.query = {};
            
			if( req.query.description !== undefined ) {
				args.query.description= new RegExp((req.query.description.toString()).replace("+",""), "i");
			}
            
			if( req.query.price !== undefined ) {
				args.query.price= req.query.price;
			}

            if( req.query.status !== undefined ) {
				args.query.status= req.query.status;
			}
			if( req.params.companyID !== undefined ) {
				args.query.companyID= req.params.companyID;
			}
		// 	if( req.query.phoneNumber !== undefined ) {
		// 		args.query.phoneNumber= new RegExp((req.query.phoneNumber.toString()).replace("+",""), "i");
		// 	}
        //    if( req.query.country !== undefined ) {
		// 		args.query.country= new RegExp((req.query.country.toString()).replace("+",""), "i");
		// 	}

			console.log("args===>", args);
			infxApp.helpers.api.services(infxApp).getServices(args, function(err, services){
				if(err){
					return next(err);
				}
				res.json(services);
			});
		})
	router.route('/services/:companyID/status')
		.get(function(req, res, next){
			console.log("services");
            var args = {};
			            
			args.query = {};
            
			if( req.query.description !== undefined ) {
				args.query.description= new RegExp((req.query.description.toString()).replace("+",""), "i");
			}
            
			if( req.query.price !== undefined ) {
				args.query.price= req.query.price;
			}

			if( req.params.companyID !== undefined ) {
				args.query.companyID= req.params.companyID;
			}
		// 	if( req.query.phoneNumber !== undefined ) {
		// 		args.query.phoneNumber= new RegExp((req.query.phoneNumber.toString()).replace("+",""), "i");
		// 	}
        //    if( req.query.country !== undefined ) {
		// 		args.query.country= new RegExp((req.query.country.toString()).replace("+",""), "i");
		// 	}
			args.query.status = true;
			console.log("args===>", args);
			infxApp.helpers.api.services(infxApp).getServices(args, function(err, services){
				if(err){
					return next(err);
				}
				res.json(services);
			});
		})
		router.route('/services/')
		.post(function(req, res, next){
			console.log('Session Services --> ',req.body);
			var args = {};	

			args.service = req.body;
			console.log(req.body);

            //args.clients.zip = req.body.zip;

			infxApp.helpers.api.services(infxApp).createService(args, function(err, service){
				if(err){
					return next(err);
				}
				res.json(service);
			});
		});
    router.route('/services/:serviceID')
        .get(function (req, res, next) {

            
            if (!req.params.serviceID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.serviceID};

            infxApp.helpers.api.services(infxApp).getOneService(args, function (err, service) {
                if (err) {
                    return next(err);
                }
                
                res.json(service);
            });

        })
        .put(function (req, res, next) {
            if (!req.params.serviceID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            console.log("serviceID",req.params.serviceID);

            var args = {};
            args.query = {};
            args.query = {_id: req.params.serviceID};
            args.service = req.body;
            infxApp.helpers.api.services(infxApp).updateService(args, function (err, service) {
                if (err) {
                    return next(err);
                }
                res.json(service);
            });
        })
        .delete(function (req, res, next) {

            if (!req.params.serviceID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.serviceID};

            infxApp.helpers.api.services(infxApp).deleteService(args, function (err, response) {
                if (err) {
                    return next(err);
                }
                res.json(response);
            });
        });

}