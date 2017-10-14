module.exports = function(sequelize, DataTypes){
	var Round = sequelize.define("Round", {
		// tournament_id: DataTypes.INTEGER,
		'createdAt': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    'updatedAt': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    }
	});

	Round.associate = function(models){
		Round.belongsTo(models.Tournament, {
			onDelete: "CASCADE"
		});
		Round.hasMany(models.Match);
	}
	
	return Round;
}