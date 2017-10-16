var db = require("../models");

module.exports = function (app){
	app.get("/tourn", function (req,res){
		db.Tournament.findAll({ include: [{
			all: true, nested: true
		}]}).then(
			function (result){
				res.json(result);
			}
		);
	});

	app.get("/team", function (req, res){
		db.Team.findAll({}).then(
			function(result){
				res.json(result);
			}
		);
	});

	app.get("/match", function (req, res){
		db.Match.findAll({}).then(
			function(result){
				res.json(result);
			}
		);
	});
}