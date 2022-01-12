const { Sequelize } = require("sequelize");
const database=require('./database')
let post=database.define('post_table',{
    name:Sequelize.STRING,
    title:Sequelize.STRING
},{timestamps:true})
module.exports=post;