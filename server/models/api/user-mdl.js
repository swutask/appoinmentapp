var mongoose = require( 'mongoose' );
var bcrypt = require( 'bcrypt-nodejs' );
var PaginationSchema = require('./Pagination-Shm');
// var RolePermissionData = require('./role-permission-mdl');

var SchemaTypes = mongoose.Schema.Types;

// var RolePermission = mongoose.model('RolePermission');

var user = new PaginationSchema({
	name: {type: String},
	username: {type: String, required:true},
	password: {type: String, required:true },
	email: {type: String, required:true, unique: true},
	country: {type: String},	
	active: { type: Boolean, default: true },
	createdOn: {type: Date, default: Date.now },
	updatedOn: Date,
	companyID: {
    	type: SchemaTypes.ObjectId
  	},
	clientID: {
    	type: SchemaTypes.ObjectId
  	},	
  role: {type: String, default: 'admin'}, 
	forgotCode: { type: String},
	createBy: String
});

// Execute before each user.save() call
user.pre('save', function(next) {
		hashPassword(this, next);
});
// user.pre('findOneAndUpdate', function(next) {
// 	hashPassword(this._update, next);
// });


function hashPassword(self, next){
  // Break out if the password hasn't changed

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) {	
    	return next(err);
    }

    bcrypt.hash(self.password, salt, null, function(err, hash) {
      if (err){
      	 return next(err);
      }
      self.password = hash;

      next();
    });
  });
}

user.statics.authenticate = function(args, callback){
	console.log("aut--->", args);
	this.model('user').findOne({email: args.email, active:true}, function(err, user){
		if(err || !user){
			return callback(new Error('Not Found'));
		}

		user.verifyPassword(args.password,function(err, isMatch){
	      if (err) {
	        return callback(err);
	      }
	      if(isMatch){
	        callback(null, user);
	      }else{
	        callback(null, null);
	      }
    	});
	});
};

user.methods.verifyPassword = function(pwd, next) {
	// console.log("pwd",pwd);
	// console.log("this.password", this.password);
  bcrypt.compare(pwd, this.password, function(err, isMatch) {
    if (err) {
    	return next(err);
    }
    next(null, isMatch);
  });
};

module.exports = mongoose.model('user',user); 