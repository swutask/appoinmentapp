var mongoose = require('mongoose');
var util = require('util');

var Schema = mongoose.Schema;

function PaginationSchema(){
    //console.log('Cons. Args', arguments);
    Schema.apply(this, arguments);

    this.policy = [];

    this.setValidationPolicy = function(policy){
        this.policy = policy;
    };

    this.statics.page = function(args, callback){
      //  console.log('Pagination Args :', args);
        var _this = this;
        this.count( args.query || {} ,function(err, count){
            if(err){
                return callback(err);
            }
            args.offset = parseInt(args.offset) || 0;
            args.limit = parseInt(args.limit) || 10;

            var totalPage = (( (count%args.limit)===0)?parseInt(count/args.limit):(parseInt(count/args.limit)+1));
            var currentPage = (parseInt(args.offset/args.limit)+1);
            
            var response = { 
                        offset: args.offset,
                        limit: args.limit,
                        count: count,
                        currentPage: currentPage,
                        totalPage: totalPage,
                        data: []
                    };

            if(count === 0){
                return callback(null, response);
            }

            _this
                .find( args.query || {})
                .select(args.select || '')
                .skip(args.offset)
                .limit(args.limit)
                .sort(args.sort || '')
                .exec(function(err, result){
                    if(err){
                        return callback(err);
                    }
                    response.data = result;
                    return callback(null, response);
                });
        });
    };

    this.validate = function(args, callback){

    };
}

util.inherits(PaginationSchema, Schema);

module.exports = PaginationSchema;