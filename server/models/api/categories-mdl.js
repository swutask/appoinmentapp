var mongoose = require( 'mongoose' );
var PaginationSchema = require('./Pagination-Shm');

var SchemaTypes = mongoose.Schema.Types;

var categories = new PaginationSchema({
    description : {type: String, require : true},
    status: {type:Boolean, require: true},
    createdBy:{
		type: SchemaTypes.ObjectId
	}
});

module.exports = mongoose.model('categories',categories);
