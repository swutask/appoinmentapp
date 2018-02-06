'use strict';

// User Controller
var jwt = require('jwt-simple');

module.exports = init;

function init(app, infxApp, router) {


	/*
		Create Group
	 */
	console.log("user controller");
	router.route('/user/adminusers')
		.get(function(req, res, next){
			console.log("user");
			var args= {
				select: '-password'
			};
            
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
            
			if( req.query.fullName !== undefined ) {
				args.query.name= new RegExp((req.query.fullName.toString()).replace("+",""), "i");
			}
            
			if( req.query.contact !== undefined ) {
				args.query.contact= new RegExp((req.query.contact.toString()).replace("+",""), "i");
			}
			if( req.query.email !== undefined ) {
				args.query.email= new RegExp((req.query.email.toString()).replace("+",""), "i");
			}
			if(req.query.createBy !== undefined)
				args.query.createBy = req.query.createBy;
			args.query.role = "admin";
            
			console.log("args===>", args);
			infxApp.helpers.api.user(infxApp).getUser(args, function(err, users){
				if(err){
					return next(err);
				}
				res.json(users);
			});
		})
		
	router.route('/user/changepassword')
		.post(function(req, res, next){

			var args= {};

			args = req.body;

			console.log(args);

            infxApp.helpers.api.user(infxApp).changePassword(args, function (err, client) {
                if (err) {
                    return next(err);
                }
                res.json(client);
            });
		})

	router.route('/user/:userID')
		.put(function(req, res, next){
			if (!req.params.userID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.userID};
            args.user = req.body;
			console.log(args.user);
            infxApp.helpers.api.user(infxApp).updateUser(args, function (err, client) {
                if (err) {
                    return next(err);
                }
                res.json(client);
            });
		})
		.delete(function(req, res, next){
			if (!req.params.userID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.userID};

            infxApp.helpers.api.user(infxApp).deleteUser(args, function (err, response) {
                if (err) {
                    return next(err);
                }
                res.json(response);
            });
		})
	router.route('/user')
		.get(function(req, res, next){
			console.log("user");
			var args= {
				select: '-password'
			};
            
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
            
			if( req.query.fullName !== undefined ) {
				args.query.name= new RegExp((req.query.fullName.toString()).replace("+",""), "i");
			}
            
			if( req.query.contact !== undefined ) {
				args.query.contact= new RegExp((req.query.contact.toString()).replace("+",""), "i");
			}
			if( req.query.email !== undefined ) {
				args.query.email= new RegExp((req.query.email.toString()).replace("+",""), "i");
			}
			if(req.query.createBy !== undefined)
				args.query.createBy = req.query.createBy;
            
			console.log("args===>", args);
			infxApp.helpers.api.user(infxApp).getUser(args, function(err, users){
				if(err){
					return next(err);
				}
				res.json(users);
			});
		})
		.post(function(req, res, next){

			console.log('Session User --> ',req.body);

			var args= {};	

			args.user = req.body;
			console.log(req.body);

			if(!req.body.username){
				args.user.username = req.body.email
			}
			args.user.password = "12345";

			infxApp.helpers.api.user(infxApp).createUser(args, function(err, user){
				if(err){
					return next(err);
				}
				console.log("user===========>",user);
				res.json(user);
			});
		});

	router.route('/user/client')
		.post(function(req, res, next){

			var args = {};	
			args.clients = req.body;

			infxApp.helpers.api.clients(infxApp).createClient(args, function(err, clients){
				if(err){
					return next(err);
				}

				var args = {};
				args.user = {}
				args.user.email = clients.email;
				args.user.password = clients.password;
				args.user.clientID = clients._id;
				args.user.username = clients.firstName+" "+clients.lastName;
				args.user.role = 'client';

				infxApp.helpers.api.user(infxApp).createUser(args, function(err, user){
					if(err){
						return next(err);
					}
					console.log("user===========>",user);
					res.json({
							"success":true,
							"user": user
						});
				});

			});
		});
	router.route('/user/client/login')
		.post(function(req, res, next){
			 console.log("Login : ",  req.body);
			var args= req.body;
			infxApp.helpers.api.user(infxApp).loginAuth(args, function(err, user){
				if(err || user == null){
					res.json({
						"status":"error",
						"message": "Invalid login details."
					});
				}

				if(user.role != "client"){
					res.json({
						"status":"error",
						"message": "Invalid login details."
					});
				}else{
					console.log("user", user);

					var jwt_token = jwt.encode({
						id: user._id,
					}, "infxApp");

					console.log("jwt_token=======>", jwt_token);

					res.json({
						"jwt_Token":jwt_token,
						"user": user,
						"success" : true
					});
				}

				
			});
		});
	router.route('/user/login')
		.post(function(req, res, next){
			 console.log("Login : ",  req.body);
			var args= req.body;
			infxApp.helpers.api.user(infxApp).loginAuth(args, function(err, user){
				if(err || user == null){
					return next(err);
				}

				console.log("user", user);

				var jwt_token = jwt.encode({
					id: user._id,
//					iss: rolePermissionData,
//					exp: expires
				}, "infxApp");

				console.log("jwt_token=======>", jwt_token);

				res.json({
					"jwt_Token":jwt_token,
					"user": user
				});
			});
		});
	router.route('/user/forgot')
		.post(function(req, res, next){
			console.log("req.body.email", req.body.email);
			infxApp.helpers.api.user(infxApp).forgot({
				email: req.body.email || undefined,
				res: res
			}, function (err, status) {
				if(err){
					return next(err);
				}
				res.json(status);
			});
		});
	router.route('/user/forgot/:code/reset')
		.post(function(req, res, next){
			console.log(req.body, req.params.code);
			infxApp.helpers.api.user(infxApp).resetPass({
				email: req.body.email || undefined,
				password: req.body.password,
				code: req.params.code,
				res: res
			}, function (err, status) {

				if(err){
					return next(err);
				}
				res.json(status);
			});
		});

}