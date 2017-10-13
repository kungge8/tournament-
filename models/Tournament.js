module.exports = function(sequelize, DataTypes) {
  var Tournament = sequelize.define("Tournament", {
    tournament_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    tournament_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Tournament.associate = function(models) {
    Tournament.hasMany(models.Team, {
      onDelete: "cascade"
    });
    Tournament.hasMany(models.Round, {
      onDelete: "cascade"
    });
    Tournament.hasMany(models.Match, {
      onDelete: "cascade"
    });
  };

  return Tournament;
};