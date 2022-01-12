const express=require('express');
const {sequleize}=require('sequelize')
const database=require('./model/database')

const userrouter=require('./1_router/user.router')
const postrouter=require('./1_router/post.router')
const relationship=require('./relationship')
const app=express();
app.use(express.json());
const port=9000;
app.get("/",(req,res)=>{
res.send("hello werd")
})

app.use('/user',userrouter)
app.use('/post',postrouter)

app.listen(port,()=>{
console.log(`server work on port no ${port}`);
database.authenticate().then(()=>{
    console.log("database connected");
    database.sync().then(()=>{//
        console.log("create table");
    }).catch((err)=>{
        console.log(err);
    })
}).catch((err)=>{
    console.log(err);
})
})