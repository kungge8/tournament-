var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/create", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/create"));
  });

};
