var mongoose = require('mongoose');
var models = require('./model/model');
var Lotto = mongoose.model('Lotto');

function Db(name){
	this.name = name;
}

Db.prototype = {
	save : function(data){
		mongoose.connect('mongodb://localhost/lotto', function(error){
			console.log('Database connected');
			Lotto.create(data ,
				function(err){
					if(err) return console.error(err)
					console.log("Data saved");
					mongoose.disconnect();
				}
			);
		})
	}
}

module.exports = Db;