var mongoose = require( 'mongoose' );
var PaginationSchema = require('./Pagination-Shm');

var SchemaTypes = mongoose.Schema.Types;

var calendars = new PaginationSchema({
    description: {type: String, required: true},
    status:{type:Boolean},
    shortKey:{type:String},
    image: String,
    companyID: {
    	type: SchemaTypes.ObjectId,
        required:true
  	},
});

module.exports = mongoose.model('calendars',calendars);
