var mongoose = require( 'mongoose' );
var PaginationSchema = require('./Pagination-Shm');

var SchemaTypes = mongoose.Schema.Types;

var companies = new PaginationSchema({
    name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	phoneNumber: {type: String},
	fax: String,
	createdOn: {type: Date, default: Date.now },
	street: String,
	updatedOn: Date,
	updatedBy: String,
    zip: String,
    city: String,
    country: String,
    vatId: String,
    typeId: String,
	categories:String,	
	latitude:String,
	longitude:String,
	status:Boolean,

	appoconfemail:Boolean,
	appoconfsms:Boolean,
	apponotemail:Boolean,
	apponotsms:Boolean,

	appoconftemplate: String,
	apponottemplate: String,

	geo: {
	    type: [Number],
	    index: '2d'
	},
	createdBy:{
		type: SchemaTypes.ObjectId
	}
});

module.exports = mongoose.model('companies',companies);
