var express = require("express");
var exphbs = require("express-handlebars");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

// var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.set('views',path.join(__dirname, 'views'));
app.engine('handlebars',exphbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');

app.use(express.static(path.join(__dirname,'public')));

var homeScripts = [{script: 'js/homeScript.js'}];
app.get("/",function(req,res){
  res.render('home',{scripts: homeScripts});
});

var searchScripts = [{script: 'js/searchScript.js'}];
app.get("/search",function(req,res){
  res.render('search',{scripts: searchScripts});
})

var createScripts = [{script: 'js/createScript.js'}];
app.get("/create",function(req,res){
  res.render('create',{scripts: createScripts});
})

// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);

// db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });