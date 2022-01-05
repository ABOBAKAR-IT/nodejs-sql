const { Sequelize } = require("sequelize");
database = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "mariadb",
  logging: false,
}); //logging false :use for query not show in terminal
module.exports = database;
