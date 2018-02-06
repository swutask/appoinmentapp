'use strict';

// Authorization Block

var expressSession = require('express-session');
var passport = require('passport');
var passportLocal = require('passport-local');

module.exports = function(app, shareG){	
	return {
		load: function(){
			
			app.use(expressSession({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
			app.use(passport.initialize());
			app.use(passport.session());

			passport.serializeUser(function(user, callback) {
				user.password = null;
				callback(null, user);
			});

			passport.deserializeUser(function(user, callback) {
				callback(null, user);
			});	

			// Login Check
			var BasicStrategy = require('passport-http').BasicStrategy;
			
			passport.use(new BasicStrategy(
				function(username, password, callback) {
					shareG.models.api.user.authenticate({username: username, password: password},function(err, user){
						if(err || !user){
							return callback(null, null, {message: 'Invalid Login Credentials'});
						}
						callback(null, user);
					});

				}

			));

		},
		getBasic: function(req, res, next) {

			passport.authenticate('basic', {session: false}, function(err, user, info){


				if(err){
					return next(err);
				}
				if(!user){
					console.log('GET NEW LOCAL');
					return res.status(401).send('Unauthorized');
				}
				req.login(user,function(err){
					if(err){
						return next(err);
					}
					next();
				});
			})(req, res, next);

		}
	}
};