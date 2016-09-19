var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var db = require('./db')
var scraped = require('./scrape');
var dataBase = new db("Lotto");

scraped('http://www.glo.or.th/check_lotto.php', dataBase.save)

