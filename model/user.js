const { Sequelize } = require("sequelize");
const database=require('./database')
let user=database.define('user_table',{
    name:{
        type:Sequelize.STRING,
    defaulValue:"ABOBAKAR"},
    email:Sequelize.STRING,
    password:Sequelize.STRING
},{timestamps:true})
module.exports=user;