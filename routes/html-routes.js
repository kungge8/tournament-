var path = require("path");

module.exports = function (app){

//we need to add the html page names once we have them completed
	app.get("/", function (req,res){

		res.sendFile(path.join(__dirname, "../public/home.handlebars"));

	});

	app.get("/search", function (req,res){

		res.sendFile(path.join(__dirname, "../public/search.handlebars"));

	});

	app.get("/create", function (req,res){

		res.sendFile(path.join(__dirname, "../public/create.handlebars"));

	});

};