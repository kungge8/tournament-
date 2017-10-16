module.exports = function (sequelize, Datatypes) {
  var match = sequelize.define("match", {
    team1_id:{
      type: Datatypes.STRING,
      allowNull: false,
      len[1]
    },
    team2_id:{
      type: Datatypes.STRING,
      allowNull: false,
      len[1]
    },
    tournment_id:{
      type: Datatypes.STRING,
      allowNull: false,
      len[1]
    },
    round_id:{
      type: Datatypes.STRING,
      allowNull: false,
      len[1]
    }
  });
  return (match);
};