module.exports = function (sequelize, Datatypes){
  var tournment = sequelize.define("tournment",
    name:{
      type: Datatypes.STRING,
      allowNull: false,
      len[1]
    },
    info: {
      type:Datatypes.STRING,
      allowNull:true,
      len[1]
    }
  });
  return (tournent);
};