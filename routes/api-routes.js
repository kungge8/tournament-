var db = require("../models");

<<<<<<< HEAD
module.exports = function(app) {
  app.post("/api/games", function(req, res) {
    db.Game.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.get("/api/tournaments/:name", function(req, res) {
  	db.Game.findAll({
  		where: {
  			tournament: req.params.name
  		}
  	}).then(function(result) {
  		return res.json(result);
  	})
  })

  app.get("/api/teams/:name", function(req, res) {
  	db.Game.findAll({
  		where: {
  			$or: {
  				team1: req.params.name,
  				team2: req.params.name
  			}
  		}
  	}).then(function(result) {
  		return res.json(result);
  	})
  });

  app.put("/api/games", function(req, res) {
    if (req.body.match % 2 === 1) {
    	console.log("team1update");
      db.Game.update({
        team1: req.body.team
      },
      {
        where: {
          tournament: req.body.tournament,
          roundNum: parseInt(req.body.round),
          matchNum: Math.ceil(req.body.match / 2)
        }
      })
    } else {
    	console.log("team2update");
      db.Game.update({
        team2: req.body.team
      },
      {
        where: {
          tournament: req.body.tournament,
          roundNum: parseInt(req.body.round),
          matchNum: Math.ceil(req.body.match / 2)
        }
      })
    }

    res.json("asdfasdfasd");
  });
};
=======
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

		db.Post.update({
	      where: {
	        team: req.params.team
	      }
	    })
	    .then(function(dbPost) {
	      res.json(dbPost);
	    });
	});

	app.post("api/new/tournment", function(res,req){

		db.Post.update({
	      where: {
	        tournment: req.params.tournment
	      }
	    })
	    .then(function(dbPost) {
	      res.json(dbPost);
	    });

	});

};
	
>>>>>>> cbranch
