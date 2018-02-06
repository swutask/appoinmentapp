'use strict';

var userHelper = function (infxApp) {

	var user = infxApp.models.api.user;
	var nodemailer = require('nodemailer');

	return{
		getUser: function (args, callback) {
			user.page(args, callback);
		},
		getUsersWithPass: function(args, callback) {
			user.find( args.query || {} , function(err, users){
				callback(err, users);
			});
		},
		getOneUserWithPass: function(args, callback) {
			console.log(args);
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User ID Not Found'));
			}

			user.findOne( args.query , function(err, users){

				if(err){
					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Invalid User ID'));
				}

				callback(err, users);
			});
		},
		getUsers: function(args, callback) {

			infxApp.models.api.user
				.find( args.query || {} )
				.select('-password')
				.sort({'startedAt': -1})
				.exec(function(err, users) {
					callback(err, users);
				});
		},
		getOneUser: function(args, callback) {
			
			

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User ID Not Found'));
			}
			
			user.findOne( args.query )
				.select('-password')
				.exec(function(err, users) {
					if(err){
						return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Invalid User ID'));
					}
					callback(err, users);
				});
		},
		createUser: function(args, callback){

			console.log("user-register->", args);

			var newUser = new user(args.user);

			user.findOne({ $or:[ {'username': args.user.username}, {'email': args.user.email} ]}, function(err, user){
				if(!user){
					newUser.save(function(err, user){
						if(err){
							console.log(err);
							return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User Details Invalid'));
						}

						callback(err, user);
					});
				} else {
					var message = '';

					console.log("user " + user);
					console.log("args.user " + args.user);

					if(args.user.username==user.username) {
						message = 'This username is already taken';
					} else if(args.user.email==user.email) {
						message = 'This email is already registered';
					} else {
						message = 'The user details already matches with other users';
					}

					return callback(infxApp.helpers.errors.throw.httpInvalidParameter(message));
				}
			});

			
		},
		updateUserWithPasswordCheck: function(args, callback){
			console.log('User Helper : args.user : ' + args.user);

			user.findOne({_id: args.user._id}, function(err, user){
				if(err || !user){
					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User Details Invalid'));
				}

				user.name = args.user.name;
				console.log('User helper : findone before save : '+ user,'color:red, font-size:40');

				user.save(function(err, user) {
					if(err || !user){
						return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User Details Invalid'));
					}

					user.password = null;
					callback(null, user);
				});

			});

		},
		updateUser: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User ID Not Found'));
			}

			var setArgs = {};

			setArgs.name = args.user.name;
			setArgs.email = args.user.email;
			setArgs.username = args.user.username;
			setArgs.active = args.user.active;
			setArgs.country = args.user.country;

			user.findOneAndUpdate(args.query, {$set : setArgs} , function(err, user){
				console.log(err);
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('User Not Found'));
				}
				callback(err, user);
			});
		},
		deleteUser: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('User ID Not Found'));
			}

			user.findOneAndRemove(args.query, function(err, user){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('User Not Found'));
				}
				console.log(user);
				callback(err, user);
			});
		},
		authenticate: function(args, callback){
			console.log("val===>", args);
			if(args.email === undefined || args.password === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Username or Password not Valid'));
			}

			user.getHashed(args.password, function(err, status){
				callback(null, user);
			});
		},
		loginAuth: function(args, callback){
			console.log("args===>", args);
			if(args.email === undefined || args.password === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Email or Password Not Valid'));
			}
			user.authenticate(args, function(err,userData){
				//console.log(err, userData);
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('User Not Found'));
				}
				callback(err, userData);
			});
		},
		tokenAuth: function(args, callback){
			args = JSON.parse(args);
			if(args.username === undefined || args.password === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Username or Password Not Valid'));
			}
			user.find( args, function(err, users){
				callback(err, users);
			});
		},

		// Email Module
		sendEmail: function (args, callback) {
			// create reusable transporter object using the default SMTP transport
			// var transporter = nodemailer.createTransport('smtps://customer-support%40infxApp.co:Smt123Share@smtp.gmail.com');
			infxApp.helpers.api.config(infxApp).getConfigData(function(configData){
				var transporter = nodemailer.createTransport({
					tls: { rejectUnauthorized: false },
					service: 'Gmail',
					auth: {
						user: configData.email_user, // Your email id
						pass: configData.email_password // Your password
					}
				});

				// setup e-mail data with unicode symbols
				console.log("args.to", args.to);

				var mailOptions = {
					from: '"'+configData.from_email_name+'" <'+configData.from_email+'>', // sender address
					to: args.to,
					subject: args.subject || 'Verification Code',
					html: args.body
				};

				if(typeof args.cc!='undefined') {
					mailOptions.cc = args.cc;
				}

				// send mail with defined transport object
				// transporter.sendMail(mailOptions, function(error, info){
				// 	if(error){
				// 		console.log(error);
				// 		res.json({yo: 'error'});
				// 	}else{
				// 		console.log('Message sent: ' + info.response);
				// 		info.json({yo: info.response});
				// 	};
				// });

				transporter.sendMail(mailOptions, function(error, info){
					return callback(error, info);
				});
			});
		},

		// Forgot Api Helper

		forgot: function(args, callback){
			console.log("args email", args.email);
			args.email = args.email;
			if(args.email === undefined || args.email == null || args.email.length == 0){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Email Address Not Valid'));
			}

			var forgotCode = Math.random().toString(36).slice(2);

			console.log("forgotcode", forgotCode);

			// console.log(args.email.email);

			user.findOneAndUpdate({email: args.email.email},{ $set: { forgotCode: forgotCode }},{new : true}, function (err, user) {

				if(err || !user){
					console.log("Error updating" + err);
					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Email Id is not valid'));
				}

				console.log(infxApp.configs.api.dashboardUrl);
				
				console.log("url", infxApp.configs.api.dashboardUrl[process.env.NODE_ENV]+'/#!/forgot-password/'+user.forgotCode+'/reset');
				args.res.render('reset.html',{
					url : infxApp.configs.api.dashboardUrl[process.env.NODE_ENV]+'/#!/forgot-password/'+user.forgotCode+'/reset'
				}, function (err, output) {

					if(err){
						if(callback){
							return callback(err);
						}
					}

					infxApp.helpers.api.user(infxApp).sendEmail({
						to: args.email.email,
						subject: 'Reset password',
						body: output
					}, function(errMail, mail){
						if(errMail || !mail){
							console.log("errMail" + errMail);
							return callback(null, {status: false});
						}
						return callback(null, {status: true});
					});

				});


			});
		},
		resetPass: function (args, callback) {

			if(args.email === undefined || args.email == null || args.email.length == 0){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Email Address Not Valid'));
			}

			if(args.code === undefined || args.code == null || args.code.length == 0){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Verification Code Invalid'));
			}

			if(args.password === undefined || args.password == null || args.password.length == 0){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Password Not Valid'));
			}

			user.findOne({email: args.email, forgotCode: args.code}, function (err, user) {

				console.log("args.password====>",args.password);

				if (err || !user) {
					return callback(null, { status: false });
				}

				user.forgotCode = null;
				user.password = args.password;
				user.save(function (err, user) {
					if(err || !user){
						return callback(null, { status: false });
					}

					args.res.render('reset-thankyou.html',{
						url : infxApp.configs.api.dashboardUrl[process.env.NODE_ENV]+'/#/login'
					}, function (err, output) {

						if(err){
							if(callback){
								return callback(err);
							}
						}

						infxApp.helpers.api.user(infxApp).sendEmail({
							to: args.email,
							subject: 'Password Reset Successful',
							body: output
						}, function(errMail, mail){
							if(errMail || !mail){

								console.log("Mail error " + errMail);

								return callback(null, {status: false});
							}
							return callback(null, {status: true});
						});
					});
				});
			});
		},
		changePassword: function (args, callback) {

			if(args.currentpassword === undefined || args.currentpassword == null || args.currentpassword.length == 0){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Password Not Valid'));
			}

			if(args.password === undefined || args.password == null || args.password.length == 0){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Password Not Valid'));
			}
			
			user.findOne({_id: args.id}, function (err, user) {

				if (err || !user) {
					return callback(null, { status: false });
				}

				user.verifyPassword(args.currentpassword, function(error, data) {

					if(data) {
						user.password = args.password;
						user.save(function (err, user) {
							return callback(null, { status: true });
						});
					} else {
						return callback(null, { status: false });
					}


				});

			});

		}
	};
};

module.exports = userHelper;