'use strict';

var passport = require('passport');
var passportLocal = require('passport-local');
var jwt = require('jwt-simple');

var apiMiddleware = {

	authDashboard: function (context) {
		return function (req, res, next) {

			
			

			if(req.url.indexOf('export')!=-1){
				console.log("req.url=================>", req.url);
				return next();
			}
			if(req.url === '/user/login' || req.url === '/user/client' || req.url === '/user/client/login' ||  /\/user\/forgot/.test(req.url))
			{
				return next();
			}

			// if(req.headers['apptoken'] === undefined || req.headers['apptoken'] === null || req.headers['apptoken'] !== 'apptoken1234'){
			// 	return next(context.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key333333'));
			// }
				
			if(!req.headers.authorization || req.headers.authorization.split(' ')[0] != 'Bearer'){
				return next(context.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key222222'));
			}

			var token = req.headers.authorization.split(' ')[1];
			var user =  jwt.decode(token, 'infxApp');

			if(!user){
				return next(context.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key1111111'));
			}

			req.user = user;
			next();
		};
	},
	authenticate: function(infxApp){
		return function(req, res, next){

			console.log('======================== Rquest Payload STARTS ========================');
			console.log(req.body);
			console.log('======================== Rquest Payload ENDS ========================');

			if(req.headers['x-infxApp-authorization'] === undefined || req.headers['x-infxApp-authorization'] === null ){
				return next(infxApp.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key'));
			}
			
			var headers = req.headers['x-infxApp-authorization'].split(' ');

			if(headers[0] !== 'infxApp' || headers.length < 2){
				return next(infxApp.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key'));
			}

			var parsedHeaders = {};
			for(var i=1;i < headers.length; i++){
				var temp = headers[i].split('=');
				if(temp.length < 2){
					return next(infxApp.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key'));
				}

				parsedHeaders[temp[0].trim()] = temp[1].replace(/"/g,'').trim();
			}

			// console.log('Parsed Headers --> ', parsedHeaders);

			// console.log('Amazon Header Debug --> ', req.headers);
			// console.log('\t<-- Amazon Header Debug');

			if(req.url === '/device/status' || req.url === '/device/register' || req.url === '/device/link'|| req.url === '/device/auth' )
			{

				var args = {
					// appID: req.headers['x-infxApp-app-id'],
					// appSecret: req.headers['x-infxApp-key']

					appID: (parsedHeaders.app_id || ''),
					appSecret: (parsedHeaders.app_secret || '')
				};

				infxApp.helpers.api.auth(infxApp).appAuth(args, function(err, app){

					if(err){
						return next(err);
					}

					args = req.headers;
					args.app = app;

					infxApp.helpers.api.auth(infxApp).digitsAuth(args,function(err, response){

						if(err) {
							return next(err);
						}
						//console.log('Headers' , req.headers);
						req.phoneNumber = response.phone_number;
						req.deviceDGTuserID = response.id_str;
						req.authToken = response.access_token;
						req.deviceID = (parsedHeaders.device_id || '');
						req.installationKey = (parsedHeaders.installtion_key || '');
						req.app = app;

						try{
							infxApp.helpers.socket.notifyApiStateChanged({
								device: req.deviceID,
								url: '/api'+req.url
							});
							
						}
						catch(e){
							console.log('Socket Error :', e);
						}

						next();
					});
				});

			}
			else
			{
			  infxApp.helpers.api.auth(infxApp).infxAppAuth(parsedHeaders,function(err, response){
					  if(err){
			      	return next(err);
			      } 
			      
			      req.phoneNumber = response.phone_number;
			      req.deviceDGTuserID = response.id_str;
			      req.authToken = response.access_token;
			      req.device = response.device;
			      req.deviceID = (parsedHeaders.device_id || '');
			      
		      		try{
						infxApp.helpers.socket.notifyApiStateChanged({
							device: req.deviceID,
							url: '/api'+req.url
						});
						
					}
					catch(e){
						console.log('Socket Error :', e);
					}

			      next();
			  });
			}
		};
	},
	basicStrategy: function(infxApp) {
		return function(req, res, next) {

			var BasicStrategy = require('passport-http').BasicStrategy;
			passport.use(new BasicStrategy(
				function(username, password, callback) {
					infxApp.models.api.user.authenticate({username: username, password: password},function(err, user){
						if(err || !user){
							return callback(null, null, {message: 'Invalid Login Credentials'});
						}
						callback(null, user);
					});

					next();
				}

			));
		}
	},
	authenticateHeader: function(infxApp) {
		return function(req, res, next) {
			//console.log(req);
			//console.log(req.headers['authorization']);
			//console.log(req.headers['authorization']);
			if( req.url != "/user/login" ) {
				if (req.headers['authorization'] === undefined || req.headers['authorization'] === null) {
						return next(infxApp.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key'));
				}
				//Get infxApp header.
				var headers = req.headers['authorization'].split(' ')[1];

				var decoded = null;
				try {
					//Decode token.
					decoded = jwt.decode(headers, 'infxApp');
				}catch (err){
					return next(infxApp.helpers.errors.throw.httpUnauthorized('Invalid Authorization Key'));
				}

				//To check whether the token is expired or not.
				if (decoded.exp <= Date.now()) {
					return next(infxApp.helpers.errors.throw.httpUnauthorized('Session has been expired'));
					//res.end('Session has been expired', 400);
				}
				//Each request checking -  whether user is valid or not
				var args = JSON.stringify({"username": decoded.iss[0]['user']['username'], "password": decoded.iss[0]['user']['password']});
				//console.log("Login Name" + args);
				/*if (req.url == "/user/tokenAuth") {
					req.body = JSON.stringify({"username": decoded.iss[0]['user']['username'], "password": decoded.iss[0]['user']['password']});
				}*/
				infxApp.helpers.api.user(infxApp).tokenAuth(args, function(err, user){
					if(err || !user){
						return next(err);
					}
					if (req.url == "/user/tokenAuth") {
						res.json({"isValidUser":true});
					}else{
						next();
					}
				});
			}else{
				next();
			}
		}
	}
};

module.exports = apiMiddleware; // jshint ignore: line

/*
Key: X-Auth-Service-Provider, Value: https://api.digits.com/1.1/sdk/account.json
Key: X-Verify-Credentials-Authorization, Value: OAuth oauth_consumer_key="AwZSyZqPU112IxHpW8mRsxNEK", oauth_nonce="2108075835471688044743376874170634", oauth_signature="pRuugZzO31AmYOCZHFdh3Esdp14%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1444667685", oauth_token="2880232561-j39yqT48EEQ2TPFjVW1gvx0PQqEM9kc75L9L90N", oauth_version="1.0"
Key: X-infxApp-Device-ID, Value: ceef6a45-f806-452e-bd27-48486ddecdd7
 */
