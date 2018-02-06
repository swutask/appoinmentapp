var mongoose = require( 'mongoose' );
var PaginationSchema = require('./Pagination-Shm');

var SchemaTypes = mongoose.Schema.Types;

var appointment = new PaginationSchema({
    companyID: {
    	type: SchemaTypes.ObjectId,
        required:true
  	},
    calendarID: {
    	type: SchemaTypes.ObjectId,
  	},
    clientID: {
    	type: SchemaTypes.ObjectId,
  	},
    serviceID: {
    	type: SchemaTypes.ObjectId,
  	},
    createdOn: {type: Date, default: Date.now },
    type:{
        type:String
    },
    start:{
        type: Date
    },
    end:{
        type: Date
    },
    duration:{ type: Number }


});

module.exports = mongoose.model('appointment',appointment);
