var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

// declearing schema
var UserSchema = new Schema({
	username: {
		type: String,
		unique: true,
		trim: true
	},
	email: String,
	name: String,
	password: String,
	provider: String,
	providerId: String,
	providerData: {},
	todos: {} //we will use this in the next tutorial to store TODOs
});

// encrypt password before saving in db
UserSchema.pre('save', 
	function(next) {
		if (this.password) {
			var md5 = crypto.createHash('md5');
			this.password = md5.update(this.password).digest('hex');
		}
		next();
	}
);

// auth the user
UserSchema.methods.authenticate = function(password) {
	var md5 = crypto.createHash('md5');
	md5 = md5.update(password).digest('hex');
	return this.password === md5;
};

// // pre method for mongoose
// UserSchema.pre('save', function(next) {
// 	if (something) {
// 		next()
// 	} else {
// 		next(new Error('No can do, sir!'));
// 	}
// });
// // post method for mongoose
// UserSchema.post('save', function(next) {
// 	if (something) {
// 		next()
// 	} else {
// 		next(new Error('No can do, sir!'));
// 	}
// });


UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne(
		{username: possibleUsername},
		function(err, user) {
			if (!err) {
				if (!user) {
					callback(possibleUsername);
				}
				else {
					return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
				}
			}
			else {
				callback(null);
			}
		}
	);
};


// adding schema to user model
mongoose.model('User', UserSchema);
