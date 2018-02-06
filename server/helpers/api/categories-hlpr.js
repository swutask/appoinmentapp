'use strict';

var CategoriesHelper = function (infxApp) {

	var categories = infxApp.models.api.categories;

	return{
		getCategories: function(args, callback) {

            categories
                .find( args.query || {} )
                .sort({'startedAt': -1})
                .exec(function(err, categories) {
                    callback(err, categories);
                });
        },
		getOneCategory: function(args, callback) {
			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Category ID Not Found'));
			}
			categories.findOne(args.query, function(err, company) {
                if(err || !company){
                    return callback(shareG.helpers.errors.throw.httpNotFound('Category not found'));
                }
                return callback(err, category);
            });
		},
		createCategory: function(args, callback){
			var newCategory = new categories(args.category);

            console.log("args===<",args);
			newCategory.save(function(err, category){
				if(err){
					console.log(err);
					return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Category Details Invalid'));
				}
				callback(err, category);
			});
		},
		updateCategory: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Category ID Not Found'));
			}

			var setArgs = {};

			setArgs.description = args.category.description;
			setArgs.status = args.category.status;

            console.log("params" ,setArgs);
             console.log("args.query" ,args.query);
			categories.findOneAndUpdate(args.query, {$set : setArgs}, {new: true} , function(err, category){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('Category Not Found'));
				}
                console.log("Category===>",category);
				callback(err, category);
			});
		},
		deleteCategory: function(args, callback){

			if(args.query === undefined){
				return callback(infxApp.helpers.errors.throw.httpInvalidParameter('Category ID Not Found'));
			}

			categories.findOneAndRemove(args.query, function(err, category){
				if(err){
					return callback(infxApp.helpers.errors.throw.httpNotFound('Category Not Found'));
				}
				console.log(category);
				callback(err, category);
			});
		},
	};
};

module.exports = CategoriesHelper;