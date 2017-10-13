module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define("Match", {
    match_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Match.associate = function(models) {
    Match.belongsTo(models.Tournament, {
      foreignKey: {
        allowNull: false
      }
    });
    Match.belongsTo(models.Round, {
      foreignKey: {
        allowNull: false
      }
    });
    Match.hasMany(models.Team, {
      onDelete: "cascade"
    });
  };

  return Match;
};