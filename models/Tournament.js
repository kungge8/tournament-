module.exports = function(sequelize, DataTypes){
	var Tournament = sequelize.define("Tournament", {
		name:{
			type: DataTypes.STRING,
		},
		info:{
			type: DataTypes.STRING,
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

	Tournament.associate = function(models){
		Tournament.hasMany(models.Round, {
			foreign_key: {
				allowNull: false
			}
		});
		// Tournament.hasMany(models.Match);
		// Tournament.hasMany(models.Team);
	}
	
	return Tournament;
}