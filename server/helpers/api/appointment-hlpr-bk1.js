'use strict';



// var cutoff = new Date();

// cutoff.setDate(cutoff.getDate()+1);



var AppointmentHelper = function (infxApp) {



	var appointment = infxApp.models.api.appointment;

	var company = infxApp.models.api.companies;



	return{

		render_template: function(string, obj_values) {

			if(typeof string == "undefined"){
				var string = "";
			}

			for (var key in obj_values) {

				if (obj_values.hasOwnProperty(key)) {

					var regex = new RegExp("<"+key + ">", 'g');

					string = string.replace(regex, obj_values[key]);

				}

			}



			return string;



		},

		sendSMS: function(sms_to, sms_body, company_name, company_id) {



			if(sms_to || typeof sms_to!='undefined') {



				infxApp.helpers.api.config(infxApp).getConfigData(function(configData){

					// var accountSid = configData.twilio_accountid;

					// var authToken = configData.twilio_accesstoken;

					// var client = require('twilio')(accountSid, authToken);



					// client.messages.create({

					//     body: sms_body,

					//     to: sms_to,

					//     from: configData.twilio_phoneno

					// }, function(err, message) {

					//     process.stdout.write(message.sid);

					// });



					var request = require('request');

					sms_to = sms_to.replace("+","").replace("00","");



					request.post({

					  url: 'https://gatewayapi.com/rest/mtsms',

					  oauth: {

					    consumer_key: configData.gatewayapi_key,

					    consumer_secret: configData.gatewayapi_secret,

					  },

					  json: true,

					  body: {

					    sender: company_name,

					    message: sms_body,

					    label: company_id,

					    recipients: [{msisdn: sms_to}],

					  },

					}, function (err, r, body) {

						console.log("ERROR");

						console.log(err);

						console.log(sms_to);

				  		console.log(err ? err : body);

					});



					// var messagebird = require('messagebird')(configData.messagebirdKey);



					// var params = {

					//   'originator': 'APPOINTY',

					//   'recipients': [

					//     sms_to

					//   ],

					//   'body': sms_body

					// };



					// messagebird.messages.create(params, function (err, response) {

					//   if (err) {

					//     console.log(err);

					//   }

					//   console.log(response);

					// });

				});



			}



		},

		dateFormat: function(date, fstr, utc) {

		  utc = utc ? 'getUTC' : 'get';
		  if(typeof fstr == "undefined"){
			var fstr = "";
		  }

		  return fstr.replace (/%[YmdHMS]/g, function (m) {

		    switch (m) {

		    case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required

		    case '%m': m = 1 + date[utc + 'Month'] (); break;

		    case '%d': m = date[utc + 'Date'] (); break;

		    case '%H': m = date[utc + 'Hours'] (); break;

		    case '%M': m = date[utc + 'Minutes'] (); break;

		    case '%S': m = date[utc + 'Seconds'] (); break;

		    default: return m.slice (1); // unknown code, remove %

		    }

		    // add leading zero if required

		    return ('0' + m).slice (-2);

		  });

		},

		getAppointmentDetailsById: function(id, callback, appointment_pass) {

			appointment.find({_id: id}, function(err, appo_return) {

				if(err) {

					console.log(err);

				}



				if(appo_return) {



					if(appointment_pass) {

						appo_return = appointment_pass;

					} else {

						appo_return = appo_return[0];

					}



					var service_name = '';

					var service_duration = 0;

					var start_time = infxApp.helpers.api.appointment(infxApp).dateFormat(new Date(appo_return.start.toString()), "%d-%m-%Y %H:%M",false);

					var client_name = "";
					var client_email = "";

					var company_name = "";
					var company_email = "";

					var calender_name = "";

					var company_id = "";



					infxApp.models.api.services.find({_id: appo_return.serviceID}, function(err, service){

						if(service) {



							if(typeof service[0]!='undefined') {

								service_name = service[0].description;

								service_duration = service[0].duration;

							}



							infxApp.models.api.calendars.find({_id: appo_return.calendarID}, function(err, calendar){

								if(calendar) {

									if(typeof calendar[0]!='undefined') {

										console.log("Calendar data")

										console.log(calendar);

										calender_name = calendar[0].description;

									}

									infxApp.models.api.clients.find({_id: appo_return.clientID}, function(cerr, client){

										if(client) {

											if(client.length > 0) {
												client_name = client[0].firstName + " " + client[0].lastName;
												client_email = client[0].email;
											}

											infxApp.models.api.companies.find({_id: appo_return.companyID}, function(cmerr, comp){

												if(comp) {

													company_name = comp[0].name;
													company_email = comp[0].email;

													company_id = appo_return.companyID;



													var phoneNumber = '';



													var countries = require('./../../configs/countries.json');



													if(client.length > 0) {

														for(var i=0;i<countries.length;i++) {

															if(typeof countries[i]!='undefined') {

																if(countries[i].code==client[0].country) {

																	phoneNumber =  countries[i].dial_code + " " + client[0].phoneNumber;

																}

															}

														}
													}


													if(client.length > 0) {
														phoneNumber =  client[0].phoneNumber;
													}


													callback({

														company_name: company_name,
														company_email: company_email,

														company_id: company_id,

														service_name: service_name,

														calender_name: calender_name,

														service_duration: service_duration,

														start_time: start_time,

														client_name: client_name,

														client_phone: phoneNumber,

														client_email: client_email,
														
														date: infxApp.helpers.api.appointment(infxApp).dateFormat(new Date(appo_return.start.toString()), "%d-%m-%Y",false),

														time: infxApp.helpers.api.appointment(infxApp).dateFormat(new Date(appo_return.start.toString()), "%H:%M",false)

													});

												}

											});

										}

									});

								}

							});

						}

					});

				}

			});

		},

		getAppointments: function(args, callback) {



            appointment

                .find( args.query || {} )

                .sort({'startedAt': -1})

                .exec(function(err, appointment) {

                    callback(err, appointment);

                });

        },

		getOneAppointment: function(args, callback) {

			if(args.query === undefined){

				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Appointment ID Not Found'));

			}

			appointment.findOne(args.query, function(err, appointment) {

                if(err || !appointment){

                    return callback(infxApp.helpers.errors.throw.httpNotFound('Appointment not found'));

                }

                return callback(err, appointment);

            });

		},

		createAppointment: function(args, callback){

			var newAppointment = new appointment(args.appointment);



			newAppointment.save(function(err, appointment){



				if(err){

					console.log(err);

					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Appointment Details Invalid'));

				}



				var clients = infxApp.models.api.clients;

				var services = infxApp.models.api.services;



				var targs = {};



	            targs._id = args.appointment.clientID;



	            clients.find(targs, function(err, client){



	            	if(client) {



	            		console.log(args.appointment);



		            	var setArgs = {};

		            	if(client.length > 0) {



							client[0].companyID.push(args.appointment.companyID);

							setArgs.companyID = client[0].companyID;



							clients.findOneAndUpdate(targs, {$set : setArgs}, function(err, updatedClient){

								company.find({_id: args.appointment.companyID}, function(err, company){

									infxApp.helpers.api.appointment(infxApp).getAppointmentDetailsById(appointment._id, function(appo) {



										var message_text = '';



										var obj = {

											client_name: appo.client_name,

											service: appo.service_name,

											duration: appo.service_duration,

											calendar: appo.calender_name,
											
											company: appo.company_name,
											
											date: appo.date,

											time: appo.time

										}



										message_text = infxApp.helpers.api.appointment(infxApp).render_template(company[0].appoconftemplate, obj);



										if(typeof company[0].appoconfemail!='unndefined'){

											if(company[0].appoconfemail) {

												args.res.render('appointmentcreateemail.html', {

													text: message_text

												}, function (err, output) {



													if(err){

														if(callback){

															console.log("Template error");

															console.log(err);

															return callback(err);

														}

													}



													infxApp.helpers.api.user(infxApp).sendEmail({

														to: appo.client_email,
														cc: appo.company_email,

														subject: 'Appointment created',

														body: output

													}, function(errMail, mail){



														if(errMail || !mail){

															console.log("errMail" + errMail);

															return callback(errMail, {status: false});

														}





													});



												});

												

											}

										}



										if(typeof company[0].appoconfsms!='undefined') {

											if(company[0].appoconfsms) {

												var to = appo.client_phone;

												var body = message_text;

												infxApp.helpers.api.appointment(infxApp).sendSMS(to , body, appo.company_name, appo.company_id);

											}

										}



										return callback(err, appointment);



									});

								});

							});

		            	} else {

		            		return callback(err, appointment);

		            	}



	            	} else {

	            		return console.log(err);

	            		callback(err, appointment);

	            	}



				});



			});

		},

		updateAppointment: function(args, callback){



			if(args.query === undefined){

				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Appointment ID Not Found'));

			}



			var setArgs = {};

			setArgs.companyID = args.appointment.companyID;

			setArgs.calendarID = args.appointment.calendarID;

			if(args.appointment.clientID)  {
				setArgs.clientID = args.appointment.clientID;
				setArgs.serviceID = args.appointment.serviceID;
			}

			setArgs.start = args.appointment.start;

            setArgs.end = args.appointment.end;

            setArgs.type = args.appointment.type;



            console.log("params" ,setArgs);

            console.log("args.query" ,args.query);

			appointment.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, appointment){

				if(err){

					console.log(err);

					return callback(infxApp.helpers.errors.throw.httpNotFound('appointment Not Found'));

				}

				if(args.appointment.clientID) {

					company.find({_id: args.appointment.companyID}, function(err, company){

		                infxApp.helpers.api.appointment(infxApp).getAppointmentDetailsById(appointment._id, function(appo) {


							if(typeof company[0].appoconfemail!='unndefined'){

								if(company[0].appoconfemail) {

									args.res.render('appointmentupdateemail.html', {

										name : appo.client_name,

										service: appo.service_name,

										datetime: appo.start_time,

										company: appo.company_name,

									}, function (err, output) {



										if(err){

											if(callback){

												console.log("Template error");

												console.log(err);

												return callback(err);

											}

										}



										infxApp.helpers.api.user(infxApp).sendEmail({

											to: appo.client_email,
											cc: appo.company_email,

											subject: 'Appointment updated',

											body: output

										}, function(errMail, mail){



											if(errMail || !mail){

												console.log("errMail" + errMail);

												return callback(errMail, {status: false});

											}





										});



									});

									

								}

							}


							if(typeof company[0].appoconfsms!='undefined') {

								var to = appo.client_phone;

								var body = appo.client_name + ", the appointment on " + appo.start_time + " with " + appo.company_name + " for service " + appo.service_name + " has been updated";

								infxApp.helpers.api.appointment(infxApp).sendSMS(to , body, appo.company_name, appo.company_id);

							}

							return callback(err, appointment);

						});

						

					});

				} else {
					return callback(err, appointment);
				}

				// callback(err, appointment);

			});

		},

		deleteAppointment: function(args, callback){



			if(args.query === undefined){

				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Appointment ID Not Found'));

			}



			appointment.findOneAndRemove(args.query, function(err, appointment){

				company.find({_id: appointment.companyID}, function(err, company){

					infxApp.helpers.api.appointment(infxApp).getAppointmentDetailsById(appointment._id, function(appo) {



						if(typeof company[0].appoconfemail!='unndefined'){

							if(company[0].appoconfemail) {

								args.res.render('appointmentdeleteemail.html', {

									name : appo.client_name,

									service: appo.service_name,

									datetime: appo.start_time,

									company: appo.company_name,

								}, function (err, output) {



									if(err){

										if(callback){

											console.log("Template error");

											console.log(err);

											return callback(err);

										}

									}



									infxApp.helpers.api.user(infxApp).sendEmail({

										to: appo.client_email,
										cc: appo.company_email,

										subject: 'Appointment deleted',

										body: output

									}, function(errMail, mail){



										if(errMail || !mail){

											console.log("errMail" + errMail);

											return callback(errMail, {status: false});

										}





									});



								});

								

							}

						}



						if(typeof company[0].appoconfsms!='undefined') {

							var to = appo.client_phone;

							var body = appo.client_name + ", the appointment on " + appo.start_time + " with " + appo.company_name + " for service " + appo.service_name + " has been deleted";

							infxApp.helpers.api.appointment(infxApp).sendSMS(to , body, appo.company_name, appo.company_id);

						}



						return callback(err, appointment);



					}, appointment);

				});

			});



			// appointment.findOneAndRemove(args.query, function(err, appointment){

			// 	if(err){

			// 		return callback(infxApp.helpers.errors.throw.httpNotFound('Appointment Not Found'));

			// 	}



				



			// 	callback(err, appointment);

			// });

		},

	};

};



module.exports = AppointmentHelper;