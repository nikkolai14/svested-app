module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define("user", {
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });

  //user.hasMany(data)

  return user;
};
