'use strict';

var OpeningHoursHelper = function (infxApp) {

	var openinghours = infxApp.models.api.openinghours;

	return{

		getOpeningHours: function(args, callback) {

            console.log("args", args);

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('2Companies ID Not Found'));
			}
			openinghours.findOne(args.query, function(err, openinghours) {
                if(err || !openinghours){
                    return callback(infxApp.helpers.errors.throw.httpNotFound('Company not found'));
                }
                return callback(err, openinghours);
            });
		},
		updateOpeningHours: function(args, callback){
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('1Company ID Not Found'));
			}

            var setArgs = {};
				
				setArgs.monfrom = args.openinghours.monfrom;
				setArgs.monto = args.openinghours.monto;
				setArgs.tuefrom = args.openinghours.tuefrom;
				setArgs.tueto = args.openinghours.tueto;
				setArgs.wedfrom= args.openinghours.wedfrom;
				setArgs.wedto= args.openinghours.wedto;
				setArgs.thufrom= args.openinghours.thufrom;
				setArgs.thuto= args.openinghours.thuto;
				setArgs.frifrom= args.openinghours.frifrom;
				setArgs.frito= args.openinghours.frito;
				setArgs.satfrom= args.openinghours.satfrom;
				setArgs.satto= args.openinghours.satto;
				setArgs.sunfrom= args.openinghours.sunfrom;
				setArgs.sunto= args.openinghours.sunto;


            console.log("params" ,setArgs);
            console.log("args.query" ,args.query);
			openinghours.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, openinghours){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('OpeningHoursHelper Not Found'));
				}
                console.log("OpeningHoursHelper===>",openinghours);
				callback(err, openinghours);
			});
		}
	};
};

module.exports = OpeningHoursHelper;