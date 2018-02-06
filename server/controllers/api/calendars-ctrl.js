'use strict';

// User Controller
module.exports = init;

function init(app, infxApp, router) {


	/*
		Create Group
	 */
	console.log("Calendars controller");

	router.route('/calendars/:companyID')
		.get(function(req, res, next){
			console.log("calendars");
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
            if( req.query.status !== undefined ) {
				args.query.status= req.query.status;
			}
            if(req.params.companyID !== undefined)
            {
                args.query.companyID = req.params.companyID;
            }

			console.log("args===>", args);
			infxApp.helpers.api.calendars(infxApp).getCalendars(args, function(err, calendars){
				if(err){
					return next(err);
                }
                console.log("calendars===>", calendars);
				res.json(calendars);
			});
        })


    router.route('/calendars/image/update/:calendarID')
    .put(function (req, res, next) {

        if (!req.params.calendarID) {
            return next(infxApp.helpers.errors.throw.httpInvalidParameter());
        }

        var args = {};
        args.query = {};
        args.query = {_id: req.params.calendarID};
        args.imagedata = req.body.image;

        infxApp.helpers.api.calendars(infxApp).updateCalendarImage(args, function (err, client) {
            if (err) {
                return next(err);
            }

            res.json(client);
            
        });

    })

    router.route('/calendars/:companyID/status')
		.get(function(req, res, next){
			console.log("calendars");
            var args = {};
            
			args.query = {};
            
			
            if(req.params.companyID !== undefined)
            {
                args.query.companyID = req.params.companyID;
            }
            args.query.status= true;
			console.log("args===>", args);
			infxApp.helpers.api.calendars(infxApp).getCalendars(args, function(err, calendars){
				if(err){
					return next(err);
                }
                console.log("calendars===>", calendars);
				res.json(calendars);
			});
		})
    router.route('/calendars')
		.post(function(req, res, next){
			console.log('Session Calendars --> ',req.body);
			var args = {};	

			args.calendar = req.body;
			console.log(req.body);

            //args.clients.zip = req.body.zip;

			infxApp.helpers.api.calendars(infxApp).createCalendar(args, function(err, calendar){
				if(err){
					return next(err);
				}
				res.json(calendar);
			});
		});
    router.route('/calendars/:calendarID')
        // .get(function (req, res, next) {

            
        //     if (!req.params.calendarID) {
        //         return next(infxApp.helpers.errors.throw.httpInvalidParameter());
        //     }

        //     var args = {};
        //     args.query = {};
        //     args.query = {_id: req.params.calendarID};

        //     infxApp.helpers.api.calendars(infxApp).getOneCalendar(args, function (err, calendar) {
        //         if (err) {
        //             return next(err);
        //         }
        //         res.json(calendar);
        //     });
        // })
        .put(function (req, res, next) {
            if (!req.params.calendarID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            console.log("calendarID",req.params.calendarID);

            var args = {};
            args.query = {};
            args.query = {_id: req.params.calendarID};
            args.calendar = req.body;
            infxApp.helpers.api.calendars(infxApp).updateCalendar(args, function (err, calendar) {
                if (err) {
                    return next(err);
                }
                res.json(calendar);
            });
        })
        .delete(function (req, res, next) {

            if (!req.params.calendarID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.calendarID};

            infxApp.helpers.api.calendars(infxApp).deleteCalendar(args, function (err, response) {
                if (err) {
                    return next(err);
                }
                res.json(response);
            });
        });

}