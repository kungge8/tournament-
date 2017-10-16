module.exports = function (sequelize, Datatypes) {
	var round = sequelize.define("round", {
		tournment_id:{
			type: Datatypes.STRING,
			allowNull: false,
			len[1]
		}
	});
	return (round);
};