const app=require('express')

const user_route=app.Router();

const {add}=require('../2_controlar/user.controlar')
user_route.get('/add',add)
module.exports=user_route