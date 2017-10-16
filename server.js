var express = require('express');
var bodyParser = require('body-parser');
require('console.table');

var app = express();
var PORT = 8080;

var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));



require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

app.get("/", function(req, res){
	console.log("asdfasdfas");
	res.send("asdfasdfasdfasdfas");
});

// app.use(express.static("public"));

db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});