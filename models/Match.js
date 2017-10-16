module.exports = function(sequelize, DataTypes){
	var Match = sequelize.define("Match", {
		roundNumber:{
			type: DataTypes.INTEGER
		},
		tournament_id: {
			type: DataTypes.INTEGER
		},
		'createdAt': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
    },
    'updatedAt': {
      type: DataTypes.DATE(3),
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
    }
	});

	Match.associate = function(models){
		Match.belongsTo(models.Tournament);
		Match.hasMany(models.Team);
	}

	return Match;
}