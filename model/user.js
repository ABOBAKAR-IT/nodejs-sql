const { Sequelize } = require("sequelize");
const database=require('./database')
let user=database.define('user_table',{
    name:Sequelize.STRING,
    email:Sequelize.STRING,
    password:Sequelize.STRING
})
module.exports=user;