var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var write = data => {
	fs.writeFile('announce.json',JSON.stringify(data) , (err)=>{
		if(err) return console.error(err);
		console.log("The File is saved.")
	})
};

var split = date => {
	var arr = date.split(' ');
	return arr.slice(2).join(' ');
};

module.exports = function(url,callback){

	request(url, function(error, response, html){

	if(error) return console.error("Error");

	var $ = cheerio.load(html);

	if (!error && response.statusCode == 200) {

		//Data skeleton
		var data = {
			date: split($('table').eq(0).find('div').eq(2).text()),
			first : $('tr').eq(3).children().first().text().toString(),
			first_three : {
				first:$('tr').eq(4).children().eq(0).text().toString(),
				second:$('tr').eq(4).children().eq(1).text().toString()
			},
			last_three : {
				first:$('tr').eq(5).children().eq(0).text().toString(),
				second:$('tr').eq(5).children().eq(1).text().toString()
			},
			last_two : $('tr').eq(3).children().eq(3).text().toString()
		}
		
		callback(data);

		//exports = result;

	}

	});

}

