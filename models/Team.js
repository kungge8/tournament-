module.exports = function (sequelize, Datatypes){
  var team = sequelize.define("team",
    name:{
      type: Datatypes.STRING,
      allowNull: false,
      len[1]
    },
    teamInfo: {
      type:Datatypes.STRING,
      allowNull:true,
      len[1]
    }
  });
  return (team);
};