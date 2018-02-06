'use strict';

var CalendarsHelper = function (infxApp) {

	var calendars = infxApp.models.api.calendars;

	return{
		getCalendars: function(args, callback) {

            calendars
                .find( args.query || {} )
                .sort({'description': 1})
                .exec(function(err, calendars) {
                    callback(err, calendars);
                });
        },
		getOneCalendar: function(args, callback) {
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Calendar ID Not Found'));
			}
			calendars.findOne(args.query, function(err, calendar) {
                if(err || !calendar){
                    return callback(shareG.helpers.errors.throw.httpNotFound('Calendar not found'));
                }
                return callback(err, calendar);
            });
		},
		updateCalendarImage: function(args, callback){

			if(args.query === undefined) {
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('calendar ID Not Found'));
			}

			var setArgs = {};

			setArgs.image = args.imagedata;

			console.log("Hitting");

           	calendars.findOneAndUpdate(args.query, {$set : setArgs} , function(err, calendar) {

				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('calendar Not Found'));
				}

				console.log(calendar);

				callback(err, calendar);

			});

		},
		createCalendar: function(args, callback){
			var newCalendar = new calendars(args.calendar);

            console.log("args---->", args);

			newCalendar.save(function(err, calendar){
				if(err){
					console.log(err);
					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Calendar Details Invalid'));
				}
				callback(err, calendar);
			});
		},
		updateCalendar: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Calendar ID Not Found'));
			}

			var setArgs = {};

			setArgs.description = args.calendar.description;
            setArgs.status = args.calendar.status;
            setArgs.shortKey = args.calendar.shortKey;

            console.log("params" ,setArgs);
            console.log("args.query" ,args.query);
			calendars.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, calendar){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('Calendar Not Found'));
				}
                console.log("company===>",calendar);
				callback(err, calendar);
			});
		},
		deleteCalendar: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Calendar ID Not Found'));
			}

			calendars.findOneAndRemove(args.query, function(err, service){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('Calendar Not Found'));
				}
				console.log(service);
				callback(err, service);
			});
		},
	};
};

module.exports = CalendarsHelper;