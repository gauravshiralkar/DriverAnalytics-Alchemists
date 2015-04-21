/*
 * GET home page.
 */

var dbConn = require('../model/dbConnection');

exports.index = function(req, res){
  res.render('index');
};

exports.about = function(req, res){
	res.render('About');
};
	
exports.contact = function(req, res){
	res.render('Contact');
};
exports.getScatterChart = function(req, res){
	 res.render('ScatterChart');

};

exports.getBarChart = function(req, res){
	 res.render('BarChart');

};



exports.getScatter= function(req, res){
	dbConn.getScatter(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};

exports.getBar= function(req, res){
	dbConn.getBar(function(err,rows){
		console.log(rows);
		console.log(req.params.strUser);
		 res.send(rows);
	},req.params.strUser);	
};



