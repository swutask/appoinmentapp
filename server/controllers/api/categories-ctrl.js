'use strict';

// User Controller
module.exports = init;

function init(app, infxApp, router) {


	/*
		Create Group
	 */
	console.log("Categories controller");

	router.route('/categories')
		.get(function(req, res, next){
			console.log("categories");
            var args = {};
			args.query = {};

			infxApp.helpers.api.categories(infxApp).getCategories(args, function(err, categories){
				if(err){
					return next(err);
				}
				res.json(categories);
			});
		})
		.post(function(req, res, next){
			console.log('Session Companies --> ',req.body);
			var args = {};	

			args.category = req.body;
			console.log(req.body);

            //args.clients.zip = req.body.zip;

			infxApp.helpers.api.categories(infxApp).createCategory(args, function(err, category){
				if(err){
					return next(err);
				}
				res.json(category);
			});
        });
    router.route('/categories/status')
		.get(function(req, res, next){
			console.log("categories");
            var args = {};
			args.query = {};
            args.query.status = true;
			infxApp.helpers.api.categories(infxApp).getCategories(args, function(err, categories){
				if(err){
					return next(err);
				}
				res.json(categories);
			});
		})
    router.route('/categories/:categoryID')
        .get(function (req, res, next) {

            
            if (!req.params.categoryID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.categoryID};

            infxApp.helpers.api.categories(infxApp).getOneCategory(args, function (err, category) {
                if (err) {
                    return next(err);
                }
                
                res.json(category);
            });

        })
        .put(function (req, res, next) {
            if (!req.params.categoryID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            console.log("companyID",req.params.categoryID);

            var args = {};
            args.query = {};
            args.query = {_id: req.params.categoryID};
            args.category = req.body;
            infxApp.helpers.api.categories(infxApp).updateCategory(args, function (err, category) {
                if (err) {
                    return next(err);
                }
                res.json(category);
            });
        })
        .delete(function (req, res, next) {

            if (!req.params.categoryID) {
                return next(infxApp.helpers.errors.throw.httpInvalidParameter());
            }

            var args = {};
            args.query = {};
            args.query = {_id: req.params.categoryID};

            infxApp.helpers.api.categories(infxApp).deleteCategory(args, function (err, response) {
                if (err) {
                    return next(err);
                }
                res.json(response);
            });
        });

}