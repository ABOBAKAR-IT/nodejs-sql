const { Sequelize } = require("sequelize");

database=new Sequelize('test','root','',{host:'localhost',dialect:'mariadb'})
module.exports=database;