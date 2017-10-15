var db = require("../models");

module.exports = function (app) {


	app.get("api/search/:field?/:term?", function(req,res){

		if (field === "tournment"){

			db.Post.findAll({
		      where: {
		        field: req.params.field,
		        term: req.params.term,
		      }
			})
		    .then(function(dbSearch) {
		      res.json(dbSearch);
		    });

		} else if (field === "match"){

			db.Post.findAll({
		      where: {
		        field: req.params.field,
		        term: req.params.term,
		      }
			})
		    .then(function(dbSearch) {
		      res.json(dbSearch);
		    });

		} else if (field === "team") {

			db.Post.findAll({
		      where: {
		        field: req.params.field,
		        term: req.params.term,
		      }
			})
		    .then(function(dbSearch) {
		      res.json(dbPost);
		    });
		} else {
			console.log ("please specify a search term");
		};

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
	
