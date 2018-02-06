'use strict';

// OpeningHours Controller
module.exports = init;

function init(app, infxApp, router) {


	/*
		OpeningHours
	 */
	console.log("OpeningHours controller");
	router.route('/openinghours/:companyID')
        .get(function (req, res, next) {

            console.log(req.params.companyID);

            
            if (!req.params.companyID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {companyID: req.params.companyID};

            infxApp.helpers.api.openinghours(infxApp).getOpeningHours(args, function (err, openinghours) {
                if (err) {
                    return next(err);
                }
                res.json(openinghours);
            });

        })
        .put(function (req, res, next) {
            if (!req.params.companyID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            console.log("companyID",req.params.companyID);

            var args = {};
            args.query = {};
            args.query = {companyID: req.params.companyID};
            args.openinghours = req.body;
            infxApp.helpers.api.openinghours(infxApp).updateOpeningHours(args, function (err, openinghours) {
                if (err) {
                    return next(err);
                }
                res.json(openinghours);
            });
        })
       

}