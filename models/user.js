module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('Chocolate', {
    name: DataTypes.STRING

  });

  return User;
};
