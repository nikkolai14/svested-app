const Sequelize = require("sequelize");
const path = require('path');
const sequelize = require(`${path.resolve('./')}/config/db`)
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./user.js")(sequelize, Sequelize);
db.data = require("./data.js")(sequelize, Sequelize, db.user);

module.exports = db;
