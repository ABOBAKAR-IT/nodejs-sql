const app=require('express')

const user_route=app.Router();

const {add,update,findall,findone,del}=require('../2_controlar/user.controlar')
user_route.post('/add',add)
user_route.post('/update',update)
 user_route.post('/findall',findall)
 user_route.post('/findone',findone)
 user_route.post('/del',del)


module.exports=user_route