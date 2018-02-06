'use strict';

// User Controller
module.exports = init;

function appointment_cron(infxApp) {
	var cutoff = new Date();
	cutoff.setDate(cutoff.getDate()+2);
	cutoff.toDateString()
	cutoff = new Date(cutoff.toDateString())

	// var today = new Date();
	// today.setDate(today.getDate());

	var today = new Date();
	today.setDate(today.getDate()+1);
	today.toDateString()
	today = new Date(today.toDateString())

	infxApp.models.api.appointment.find({ start: {$lt: cutoff, $gt: today }}, function (err, appos) {
		for(var i=0;i<appos.length;i++) {
			var appointment_tmp = appos[i];
			infxApp.models.api.companies.find({_id: appointment_tmp.companyID}, function(err, company){
		        infxApp.helpers.api.appointment(infxApp).getAppointmentDetailsById(appointment_tmp._id, function(appo) {

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

					message_text = infxApp.helpers.api.appointment(infxApp).render_template(company[0].apponottemplate, obj);


					if(typeof company[0].appoconfemail!='unndefined'){
						if(company[0].appoconfemail) {

							var nunjucks = require('nunjucks');
							
							var output = nunjucks.render('./views/appointmentemailreminder.html', {
						      	text : message_text
						    });

							infxApp.helpers.api.user(infxApp).sendEmail({
								to: appo.client_email,
								cc: appo.company_email,
								subject: 'Appointment reminder',
								body: output
							}, function(errMail, mail){

								if(errMail || !mail){
									console.log("errMail" + errMail);
								}

							});

						}
					}

					if(typeof company[0].appoconfsms!='undefined') {
						if(company[0].appoconfsms) {
							var to = appo.client_phone;

							var body = message_text;
							infxApp.helpers.api.appointment(infxApp).sendSMS(to, body, appo.company_name, appo.company_id);
						}
					}

					// return callback(err, appointment);

				});

			});
		}
	});
}

function init(app, infxApp, router) {

	var cron = require('node-cron');

	var task = cron.schedule('0 55 11 * * *', function(){
	// var task = cron.schedule('1,2,4,5 * * * *', function(){
		appointment_cron(infxApp);
	});

	task.start();


	/*
		Create Group
	 */
	console.log("Appointment controller");

	router.route('/appointment/:companyID')
		.get(function(req, res, next){
			console.log("appointment");
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

			if( req.params.comapnyID !== undefined ) {
				args.query.companyID= req.parames.companyID;
			}
			infxApp.helpers.api.appointment(infxApp).getAppointments(args, function(err, appointments){
				if(err){
					return next(err);
				}
				res.json(appointments);
			});
		});

	router.route('/appointment/:companyID/:calendarID')
		.get(function(req, res, next){
			console.log("appointment");
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

			if( req.params.companyID !== undefined ) {
				args.query.companyID= req.params.companyID;
			}

			if( req.params.calendarID !== undefined  ) {

	 			args.query.calendarID= req.params.calendarID;
			}

			infxApp.helpers.api.appointment(infxApp).getAppointments(args, function(err, appointments){
				if(err){
					return next(err);
				}
				res.json(appointments);
			});
		});
	router.route('/myappointment/:clientId')
		.get(function(req, res, next){
			console.log("appointment");
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

			if( req.params.clientId !== undefined ) {
				args.query.clientID= req.params.clientId;
			}
			console.log(args.query);
			infxApp.helpers.api.appointment(infxApp).getAppointments(args, function(err, appointments){
				if(err){
					return next(err);
				}
				var servicesArray = [];
				var companiesArray = [];
				var personNameArray = [];
				var categoryArray = [];

				for(var i=0; i<appointments.length; i++){
					if(appointments[i].serviceID != null){
						servicesArray.push(appointments[i].serviceID);
					}
					if(appointments[i].companyID != null){
						companiesArray.push(appointments[i].companyID);
					}

					if(appointments[i].calendarID != null){
						personNameArray.push(appointments[i].calendarID);
					}


				}

				args = {};
	            args.query = {};
	            args.query = {_id: servicesArray};

				infxApp.helpers.api.services(infxApp).getServices(args, function(err, services){
					if(err){
						return next(err);
					}
					var args = {};
		            args.query = {};
		            args.query = {_id: companiesArray};

		            infxApp.helpers.api.companies(infxApp).getCompanies(args, function (err, company) {
		                if (err) {
		                    return next(err);
		                }
		                var args = {};
			            args.query = {};
			            args.query = {_id: personNameArray};
		                infxApp.helpers.api.calendars(infxApp).getCalendars(args, function(err, calendars){
							if(err){
								return next(err);
			                }
			               res.json({"appointments" : appointments, "services" : services, "company" : company, "calendars" : calendars});
						});


		            });


				});


			});
		});
	// router.route('/appointment/:companyID/:calendarID/:serviceID')
	// 	.get(function(req, res, next){
	// 		console.log("appointment-123");
	// 		console.log(req.parames.calendarID);
	// 		console.log(req.parames.serviceID);
    //         var args = {};
	// 		if(req.query.offset){
	// 			args.offset = req.query.offset;
	// 		}

	// 		if(req.query.limit){
	// 			args.limit = req.query.limit;
	// 		}

	// 		if(req.query.sort){
	// 			args.sort = req.query.sort;
	// 		}

	// 		args.query = {};

	// 		if( req.query.comapnyID !== undefined ) {
	// 			args.query.companyID= req.parames.companyID;
	// 		}
	// 		console.log(args.query);
	// 		if( req.query.serviceID === "abc" ) {

	// 			args.query.calendarID= req.parames.calendarID;
	// 			console.log("calendarID", calendarID)
	// 		}
	// 		if( req.query.calendarID === "abc" ) {
	// 			args.query.serviceID= req.parames.serviceID;
	// 			console.log("serviceID", serviceID)
	// 		}

	// 		infxApp.helpers.api.appointment(infxApp).getAppointments(args, function(err, appointments){
	// 			if(err){
	// 				return next(err);
	// 			}
	// 			res.json(appointments);
	// 		});
	// 	});
	 router.route('/appointment/')
		.post(function(req, res, next){
			console.log('Session Appointment --> ',req.body);
			var args = {};
			args.appointment = req.body;
			args.res = res;
			console.log(req.body);

			infxApp.helpers.api.appointment(infxApp).createAppointment(args, function(err, appointment){
				if(err){
					return next(err);
				}

				res.json(appointment);
			});
		});
    router.route('/appointment/:appointmentID/:companyID')
        .get(function (req, res, next) {


            if (!req.params.companyID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {companyID: req.params.companyID, _id: req.params.appointmentID};

            infxApp.helpers.api.appointment(infxApp).getOneAppointment(args, function (err, appointment) {
                if (err) {
                    return next(err);
                }
                res.json(appointment);
            });

        })
        .put(function (req, res, next) {
            if (!req.params.companyID || !req.params.appointmentID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            console.log("appointmentID",req.params.appointmentID);

            var args = {};
            args.query = {};
            args.query = {_id: req.params.appointmentID, companyID: req.params.companyID};
            args.appointment = req.body;
            args.res = res;

            infxApp.helpers.api.appointment(infxApp).updateAppointment(args, function (err, appointment) {
                if (err) {
                    return next(err);
                }
                res.json(appointment);
            });
        })
        .delete(function (req, res, next) {

            if (!req.params.companyID || !req.params.appointmentID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.appointmentID, companyID: req.params.companyID};
            args.res = res;

            infxApp.helpers.api.appointment(infxApp).deleteAppointment(args, function (err, response) {
                if (err) {
                    return next(err);
                }
                res.json(response);
            });
        });

}
