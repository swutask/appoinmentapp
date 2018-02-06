var mongoose = require('mongoose');
var PaginationSchema = require('./Pagination-Shm');

var SchemaTypes = mongoose.Schema.Types;

// Device Info
var Openinghours = new PaginationSchema({
  companyID: {
    	type: SchemaTypes.ObjectId,
        required:true
  	},
  monfrom: String,
  monto: String,
  tuefrom: String,
  tueto: String,
  wedfrom: String,
  wedto: String,
  thufrom: String,
  thuto: String,
  frifrom: String,
  frito: String,
  satfrom: String,
  satto: String,
  sunfrom: String,
  sunto: String,
});

module.exports = mongoose.model('openinghours', Openinghours);