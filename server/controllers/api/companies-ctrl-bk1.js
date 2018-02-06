'use strict';

// User Controller
module.exports = init;

function init(app, infxApp, router) {


	/*
		Create Group
	 */
	console.log("Companies controller");

	router.route('/companies')
		.get(function(req, res, next){
			console.log("companies");
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
            
			if( req.query.name !== undefined ) {
				args.query.name= new RegExp((req.query.name.toString()).replace("+",""), "i");
			}
            
			if( req.query.email !== undefined ) {
				args.query.email= new RegExp((req.query.email.toString()).replace("+",""), "i");
			}
			if( req.query.phoneNumber !== undefined ) {
				args.query.phoneNumber= new RegExp((req.query.phoneNumber.toString()).replace("+",""), "i");
			}
           if( req.query.country !== undefined ) {
				args.query.country= new RegExp((req.query.country.toString()).replace("+",""), "i");
			}
            if( req.query.createdBy !== undefined ) {
				args.query.createdBy= req.query.createdBy
			}
			console.log("args===>", args);
			infxApp.helpers.api.companies(infxApp).getCompanies(args, function(err, companies){
				if(err){
					return next(err);
				}
				res.json(companies);
			});
		})
		.post(function(req, res, next){
			console.log('Session Companies --> ',req.body);
			var args = {};	

			args.company = req.body;
			console.log(req.body);

            //args.clients.zip = req.body.zip;

			infxApp.helpers.api.companies(infxApp).createCompany(args, function(err, company){
				if(err){
					return next(err);
				}
				var args = {};
				args.user = {}
				args.user.email = company.email;
				args.user.password = '12345';
				args.user.companyID = company._id;
				args.user.username = company.name;
				args.user.role = 'company';

				var user = infxApp.models.api.user;
				var newUser = new user(args.user);
				newUser.save(function(err, user){
					if(err){
						console.log(err);
						return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User Details Invalid'));
					}
				});

				var args = {};
				args.openinghours = {}
				args.openinghours.monfrom = "08:30:00";
				args.openinghours.monto = "17:30:00";
				args.openinghours.tuefrom = "08:30:00";
				args.openinghours.tueto = "17:30:00";
				args.openinghours.wedfrom= "08:30:00";
				args.openinghours.wedto= "17:30:00";
				args.openinghours.thufrom= "08:30:00";
				args.openinghours.thuto= "17:30:00";
				args.openinghours.frifrom= "08:30:00";
				args.openinghours.frito= "17:30:00";
				args.openinghours.satfrom= "08:30:00";
				args.openinghours.satto= "17:30:00";
				args.openinghours.sunfrom= "08:30:00";
				args.openinghours.sunto= "17:30:00";
				args.openinghours.companyID = company._id;

				var openinghours = infxApp.models.api.openinghours;
				var newOpeningHours = new openinghours(args.openinghours);
				newOpeningHours.save(function(err, user){
					if(err){
						console.log(err);
						return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Openinghours Details Invalid'));
					}
				});

				res.json(company);
			});
		});

	router.route('/companies/savenotificationpref').post(function(req, res, next){
		var args = {};

		args = req.body;

		infxApp.helpers.api.companies(infxApp).saveNotificationpref(args, function(err, companies){
			if(err){
				return next(err);
			}
			res.json(companies);
		});

	});

	router.route('/companiessearch')
		.post(function(req, res, next){
			
            var args = {};
			
			args.query = {};

			if( req.body.radius === undefined ) {
				req.body.radius = 10;
			}
            
            if( req.body.latitude !== undefined && req.body.longitude !== undefined && req.body.latitude != "" && req.body.longitude != "") {
				//args.query.geo = { $near: {$geometry: { type: "Point" ,  coordinates: [req.body.longitude, req.body.latitude]}, $minDistance: 0, $maxDistance: req.body.radius}};
				if( req.body.categories !== undefined && req.body.categories != "" ) {
					args.query = { $geoNear: {query: {categories: req.body.categories}, near: { type: "Point",  coordinates: [ parseFloat(req.body.longitude) , parseFloat(req.body.latitude) ] }, maxDistance: parseInt(req.body.radius), distanceField : "distance", spherical: true}};
				}else{
					args.query = { $geoNear: {near: { type: "Point",  coordinates: [ parseFloat(req.body.longitude) , parseFloat(req.body.latitude) ] }, maxDistance: parseInt(req.body.radius), distanceField : "distance", spherical: true}};
				}
				infxApp.helpers.api.companies(infxApp).getCompaniesDistance(args, function(err, companies){
					if(err){
						return next(err);
					}
					res.json(companies);
				});
				
			}else{
				if( req.body.categories !== undefined && req.body.categories != "" ) {
					args.query.categories = req.body.categories;
				}
				infxApp.helpers.api.companies(infxApp).getCompanies(args, function(err, companies){
					if(err){
						return next(err);
					}
					res.json(companies);
				});
			}
			
		});
    router.route('/companies/:companyID')
        .get(function (req, res, next) {

            
            if (!req.params.companyID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.companyID};

            infxApp.helpers.api.companies(infxApp).getOneCompany(args, function (err, company) {
                if (err) {
                    return next(err);
                }
                res.json(company);
            });
        })
        .put(function (req, res, next) {
            if (!req.params.companyID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            console.log("companyID",req.params.companyID);

            var args = {};
            args.query = {};
            args.query = {_id: req.params.companyID};
            args.company = req.body;
			
            infxApp.helpers.api.companies(infxApp).updateCompany(args, function (err, company) {
                if (err) {
                    return next(err);
				}

				var setArgs = {};

				setArgs.email = company.email;
				setArgs.username = company.name;
				setArgs.active = company.status;

				var user = infxApp.models.api.user;
				user.findOneAndUpdate({companyID: company._id}, {$set : setArgs} , function(err, user){
				console.log(err);
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('User Not Found'));
				}
			});
                res.json(company);
            });
        })
        .delete(function (req, res, next) {

            if (!req.params.companyID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};	
            args.query = {};
            args.query = {_id: req.params.companyID};

            infxApp.helpers.api.companies(infxApp).deleteCompany(args, function (err, response) {
                if (err) {
                    return next(err);
                }
                res.json(response);
            });
        });

}