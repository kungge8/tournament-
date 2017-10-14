var db = require("../models");

module.exports = function (app){
	app.get("/", function (req,res){
		console.log("homepage encountered");
		// db.Tournament.findAll({}).then(
		// 	function (result){
		// 		res.json(result);
		// 	}
		// );
	});
}