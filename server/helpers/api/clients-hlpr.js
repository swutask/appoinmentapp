'use strict';

var ClientsHelper = function (infxApp) {

	var clients = infxApp.models.api.clients;

	return{
		getClients: function(args, callback) {

            clients
                .find( args.query || {} )
                .sort({'startedAt': -1})
                .exec(function(err, clients) {
                    callback(err, clients);
                });
        },
		getAllClients: function(args, callback) {
            clients
                .find( args.query || {} )
                .sort({'startedAt': -1})
                .exec(function(err, clients) {
                    callback(err, clients);
                });
        },
		getOneClient: function(args, callback) {
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Client ID Not Found'));
			}
			clients.findOne(args.query, function(err, client) {
                if(err || !client){
                    return callback(infxApp.helpers.errors.throw.httpNotFound('client not found'));
                }
                return callback(err, client);
            });
		},
		createClient: function(args, callback){
			var newClient = new clients(args.clients);

			newClient.save(function(err, client){
				if(err){
					console.log(err);
					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('client Details Invalid'));
				}
				callback(err, client);
			});
		},
		updateClient: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('client ID Not Found'));
			}

			var setArgs = {};

			setArgs.firstName = args.client.firstName;
			setArgs.lastName = args.client.lastName;
			setArgs.phoneNumber = args.client.phoneNumber;
			setArgs.email = args.client.email;
			setArgs.street = args.client.street;
            setArgs.zip = args.client.zip;
            setArgs.city = args.client.city;
            setArgs.country = args.client.country;

            var error = false;

           	clients.find(args.query, function(err, client){

            	clients.find({email: args.client.email}, function(err, clnteml){

            		if(clnteml.length > 0) {

            			if(typeof args.query._id!='undefined') {

	            			if(args.client.email!=client[0].email) {
	            				error = true;
	            			}

            			} else {
            				error = true;
            			}

            		}

            		if(error) {

            			callback('Email already Exists');

            		} else {

            			if(args.client.companyID){
							client[0].companyID.push(args.client.companyID);
							setArgs.companyID = client[0].companyID;
						}
						
						clients.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, client){
							if(err){
								return callback(infxApp.helpers.errors.throw.httpNotFound('client Not Found'));
							}
							callback(err, client);
						});

            		}

            	});

			});

    //         if(!error) {
				// clients.find(args.query, function(err, client){
				// 	if(args.client.companyID){
				// 		client[0].companyID.push(args.client.companyID);
				// 		setArgs.companyID = client[0].companyID;
				// 	}
				// 	clients.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, client){
				// 		if(err){
				// 			return callback(infxApp.helpers.errors.throw.httpNotFound('client Not Found'));
				// 		}
				// 		callback(err, client);
				// 	});
					
					
				// })
            	
    //         }

		},
		removeClientByCompany: function(args, callback){
			clients.find(args.query, function(err, client){
				for(var i=0; i<client[0].companyID.length; i++){
					if(client[0].companyID[i] === args.companyID){
						client[0].companyID.splice(i,1);
						break;
					}
				}
				var setArgs = {};
				setArgs.companyID = client[0].companyID;
				clients.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, client){
					if(err){
						return callback(infxApp.helpers.errors.throw.httpNotFound('client Not Found'));
					}
					callback(err, client);
				})
			})
		},
		deleteClient: function(args, callback){
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('client ID Not Found'));
			}
			clients.findOneAndRemove(args.query, function(err, client){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('client Not Found'));
				}
				callback(err, client);
			});
		},
	};
};

module.exports = ClientsHelper;