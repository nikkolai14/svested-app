module.exports = (sequelize, Sequelize, user) => {
  const data = sequelize.define("data", {
    randAlphabet: Sequelize.STRING(1)
  });

  data.belongsTo(user);

  return data;
};
