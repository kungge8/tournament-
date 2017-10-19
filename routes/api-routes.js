var db = require("../models");
var passport = require("../config/passport");

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
      db.Game.update({
        team1: req.body.team
      },
      {
        where: {
          tournament: req.body.tournament,
          roundNum: parseInt(req.body.round) + 1,
          matchNum: Math.ceil(req.body.match / 2)
        }
      })
    } else {
      db.Game.update({
        team2: req.body.team
      },
      {
        where: {
          tournament: req.body.tournament,
          roundNum: parseInt(req.body.round) + 1,
          matchNum: Math.ceil(req.body.match / 2)
        }
      })
    }
  });



  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      userName: req.body.userName,
      passWord: req.body.passWord
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });



  app.post("/api/login", passport.authenticate("local"), function(req, res) {

    res.json("/create");
  });









};