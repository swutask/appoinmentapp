var mongoose = require( 'mongoose' );
var PaginationSchema = require('./Pagination-Shm');

var SchemaTypes = mongoose.Schema.Types;

var services = new PaginationSchema({
    description: {type: String, required: true},
	price: {type: Number},
	duration: {type: Number},
    status:{type:Boolean},
    shortKey:{type:String},
    companyID: {
        type: SchemaTypes.ObjectId,
        required:true
    },
});

module.exports = mongoose.model('services',services);
