var db = require("../models");

module.exports = function(app) {
  app.post("/api/games", function(req, res) {
    db.Game.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
  });

  app.put("/api/update", function (req,res) {
  	if (req.body.matchNum % 2 === 0) {
  		db.Game.update({
  			team1: req.body.team
  		},
  		where: {
  			tournament: req.body.tournament,
  			roundNum: req.body.round + 1,
  			matchNum: Math.ceil(req.body.matchNum / 2)
  		})
  	} else {
  		db.Game.update({
  			team2: req.body.team
  		},
  		where: {
  			tournament: req.body.tournament,
  			roundNum: req.body.round + 1,
  			matchNum: Math.ceil(req.body.matchNum / 2)
  		})
  	}
  });
};