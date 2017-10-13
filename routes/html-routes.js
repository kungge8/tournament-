var path = require("path");

module.exports = function (app){

//we need tl add the html page names once we have them completed
	app.get("/", function (req,res){

		res.sendFile(path.join(__dirname, "../public/"));

	})


}