module.exports = function(sequelize, DataTypes) {
  var Round = sequelize.define("Round", {
    round_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Round.associate = function(models) {
    Round.belongsTo(models.Tournament, {
      foreignKey: {
        allowNull: false
      }
    });
    Round.hasMany(models.Match, {
      onDelete: "cascade"
    });
  };

  return Round;
};