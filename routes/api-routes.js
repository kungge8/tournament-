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


	app.post("api/new/team", function(req,res){

		db.teams.create({
	      where: {
	        team: req.params.team
	      }
	    })
	    .then(function(dbTeams) {
	      res.json(dbTeams);
	    });
	});

	app.post("api/new/tournment", function(res,req){

		db.teams.create({
	      where: {
	        tournment: req.params.tournment
	      }
	    })
	    .then(function(dbTournment) {
	      res.json(dbTournment);
	    });

	});

};
	
