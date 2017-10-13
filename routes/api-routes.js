var db = require("../models");

module.exports = function (app) {

	app.get("/api/all", function(req,res){
		db.Post.findAll({})
	    .then(function(dbPost) {
	      res.json(dbPost);
	    });
	});


	app.get("api/search/:tournment?/:match?/:team?", function(req,res){

	    db.Post.findAll({
	      where: {
	        tournment: req.params.tournment,
	        match: req.params.match,
	        team: req.params.team,
	      }
	    })
	    .then(function(dbPost) {
	      res.json(dbPost);
	    });

	});

//we need to make sure that the bodyparser variable names are correct
	app.post("api/new/team", function(req,res){

		db.teams.create({
	      where: {
	        team_name: req.params.teamName,
	        team_text: req.params.text
	      }
	    })
	    .then(function(dbTeams) {
	      res.json(dbTeams);
	    });
	});

	app.post("api/new/tournment", function(res,req){

		db.teams.create({
	      where: {
	        tournment_name: req.params.tournment,
	        tournment_text: req.params.text
	      }
	    })
	    .then(function(dbTournment) {
	      res.json(dbTournment);
	    });

	});

};
	
