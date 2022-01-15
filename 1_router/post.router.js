const app=require('express')
const post_route=app.Router();
const {add,update,findall,findone,del,bulk,truncate,findpost}=require('../2_controlar/post.controlar')
post_route.post('/add',add)
post_route.post('/update',update)
 post_route.post('/findall',findall)
 post_route.post('/findone',findone)
 post_route.post('/findpost',findpost)
 post_route.post('/del',del)
 post_route.post('/bulk',bulk)
 post_route.post('/truncate',truncate)




module.exports=post_route