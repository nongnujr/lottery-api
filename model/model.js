var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UsersScheme = new Schema({
	username : String,
	password : String
})
var LottoScheme = new Schema({
	updated: { type: Date, default: Date.now },
	date: String,
	first : String,
	first_three : {first:String,second:String},
	last_three : {first:String,second:String},
	last_two : String
})

mongoose.model('Users',UsersScheme);
mongoose.model('Lotto',LottoScheme);
//module.exports = Users;