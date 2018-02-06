'use strict';

// User Controller
module.exports = init;

function init(app, infxApp, router) {


	/*
		Create Group
	 */
	console.log("clients controller");

	router.route('/clients')
	.get(function(req, res, next){
		console.log("clients");
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
            
			if( req.query.firstName !== undefined ) {
				args.query.firstName= new RegExp((req.query.firstName.toString()).replace("+",""), "i");
			}
            
			if( req.query.lastName !== undefined ) {
				args.query.lastName= new RegExp((req.query.lastName.toString()).replace("+",""), "i");
			}
			if( req.query.phoneNumber !== undefined ) {
				args.query.phoneNumber = new RegExp((req.query.phoneNumber.toString()).replace("+",""), "i");
			}
			if(req.query.createdBy !== undefined){
				args.query.createdBy = req.query.createdBy
			}
			console.log("args===>", args);
			infxApp.helpers.api.clients(infxApp).getAllClients(args, function(err, clients){
				if(err){
					return next(err);
				}
				res.json(clients);
			});
	})

	router.route('/clients/:companyID')
		.get(function(req, res, next){
			console.log("clients");
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
            
			if( req.query.firstName !== undefined ) {
				args.query.firstName= new RegExp((req.query.firstName.toString()).replace("+",""), "i");
			}
            
			if( req.query.lastName !== undefined ) {
				args.query.lastName= new RegExp((req.query.lastName.toString()).replace("+",""), "i");
			}
			if( req.query.phoneNumber !== undefined ) {
				args.query.phoneNumber = new RegExp((req.query.phoneNumber.toString()).replace("+",""), "i");
			}
			if(req.query.createdBy !== undefined){
				args.query.createdBy = req.query.createdBy
			}
           
			if(req.params.companyID !==undefined)
			{
				args.query.companyID = req.params.companyID;
			}

			console.log("args===>", args);
			infxApp.helpers.api.clients(infxApp).getClients(args, function(err, clients){
				if(err){
					return next(err);
				}
				res.json(clients);
			});
		})
	router.route('/clients/')
		.post(function(req, res, next){
			console.log('Session Clients --> ',req.body);
			var args = {};	

			args.clients = req.body;
			console.log(req.body);

			if(!req.body.lastName){
				args.clients.firstName = req.body.lastName;
			}
			args.clients.password = '12345';
            args.clients.zip = req.body.zip;
			// args.query = {};
			// args.query.email = args.clients.email;
			// infxApp.helpers.api.clients(infxApp).getOneClient(args, function(err, client) {
			// 	if(err){
			// 		return next(err);
			// 	}
			// 	console.log("validation===>", client);
			// 	return;
			// });

			infxApp.helpers.api.clients(infxApp).createClient(args, function(err, clients){
				if(err){
					return next(err);
				}

				var args = {};
				args.user = {}
				args.user.email = clients.email;
				args.user.password = '12345';
				args.user.clientID = clients._id;
				args.user.username = clients.firstName+" "+clients.lastName;
				args.user.role = 'client';

				var user = infxApp.models.api.user;
				var newUser = new user(args.user);
				newUser.save(function(err, user){
					if(err){
						return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User Details Invalid'));
					}
				});


				res.json(clients);
			});
		});
	router.route('/clients/:clientID/:companyID')
	.put(function(req, res, next){

		var args={};
		args.query={};
		args.query={_id: req.params.clientID};
		args.companyID=req.params.companyID;
		infxApp.helpers.api.clients(infxApp).removeClientByCompany(args, function(err, client){
			if (err) {
                    return next(err);
                }
                
                res.json(client);
		})
	})
	router.route('/clientdetails/:clientID')
        .get(function (req, res, next) {            
             if (!req.params.clientID) {
                 return next(infxApp.helpers.errors.throw.httpInvalidParameter());
             }

          

             var args = {};
             args.query = {};
             args.query = {_id: req.params.clientID};

             infxApp.helpers.api.clients(infxApp).getOneClient(args, function (err, client) {
                 if (err) {
                     return next(err);
                 }
                	
                 res.json(client);
             });

        })
        .post(function (req, res, next) {

            if (!req.params.clientID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }


            var args = {};
            args.query = {};
            args.query = {_id: req.params.clientID};
            args.client = req.body;
            infxApp.helpers.api.clients(infxApp).updateClient(args, function (err, client) {
                if (err) {
                    return next(err);
                }

                if(req.body.password != ""){
                	var user = infxApp.models.api.user;
                	user.findOne({email: req.body.email}, function (err, user) {
                		
						if (err || !user) {
							return callback(null, { status: false });
						}

						
						user.password = req.body.password;
						user.save(function (err, user) {
							if(err || !user){
								return callback(null, { status: false });
							}
							res.json({"client" : client, "success" : true});
						});
					});
                }else{
                	res.json({"client" : client, "success" : true});
                }
                
            });
        })
    router.route('/clients/:clientID')
        /*
        .get(function (req, res, next) {            
             if (!req.params.clientID) {
                 return next(infxApp.helpers.errors.throw.httpInvalidParameter());
             }

             res.json({_id: req.params.clientID});

             var args = {};
             args.query = {};
             args.query = {_id: req.params.clientID};

             infxApp.helpers.api.clients(infxApp).getOneClient(args, function (err, client) {
                 if (err) {
                     return next(err);
                 }
                	
                 res.json(client);
             });

        })
        */

        .put(function (req, res, next) {

            if (!req.params.clientID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.clientID};
            args.client = req.body;
            infxApp.helpers.api.clients(infxApp).updateClient(args, function (err, client) {
                if (err) {
                    return next(err);
                }

                res.json(client);
                
            });
        })
        .delete(function (req, res, next) {

            if (!req.params.clientID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.clientID};

            infxApp.helpers.api.clients(infxApp).deleteClient(args, function (err, response) {
                if (err) {
                    return next(err);
                }
                res.json(response);
            });
        });

}