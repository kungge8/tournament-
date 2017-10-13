module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    team_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    team_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Team.associate = function(models) {
    Team.belongsTo(models.Tournament, {
      foreignKey: {
        allowNull: false
      }
    });
    Team.belongsTo(models.Match, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Team;
};