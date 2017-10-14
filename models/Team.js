module.exports = function(sequelize, DataTypes){
	var Team = sequelize.define("Team", {
		name:{
			type: DataTypes.STRING
		},
		teamInfo:{
			type: DataTypes.STRING
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

	Team.associate = function(models){
		Team.belongsToMany(models.Tournament, {through: models.TeamRecord});
		Team.belongsToMany(models.Match, {through: models.TeamRecord});
	}
	
	return Team;
}