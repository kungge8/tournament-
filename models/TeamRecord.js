module.exports = function(sequelize, DataTypes){
	var TeamRecord = sequelize.define("TeamRecord", {
		tournament_id:{
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

	TeamRecord.associate = function(models){
		
	}

	return TeamRecord;
}