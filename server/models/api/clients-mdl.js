var mongoose = require( 'mongoose' );
var PaginationSchema = require('./Pagination-Shm');

var SchemaTypes = mongoose.Schema.Types;

var clients = new PaginationSchema({
    firstName: {type: String, required: true},
	lastName: {type: String, required: true},
	password: {type: String, required:true },
	email: {type: String, required:true, unique: true},
	phoneNumber: {type: String},
	registered: Date,
	createdOn: {type: Date, default: Date.now },
	street: String,
	updatedOn: Date,
	updatedBy: String,
    zip: String,
    city: String,
    country: String,
	companyID:{type:Array, default:[]}, 
	createdBy:{
		type: SchemaTypes.ObjectId
	}
});

module.exports = mongoose.model('clients',clients);
