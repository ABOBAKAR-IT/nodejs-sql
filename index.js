const express=require('express');
const {sequleize}=require('sequelize')
const database=require('./model/database')
const user=require('./model/user')
const userrouter=require('./1_router/user.router')
const app=express();
app.use(express.json());
const port=9000;
app.get("/",(req,res)=>{
res.send("hello werd")
})

app.use('/user',userrouter)
app.listen(port,()=>{
console.log(`server work on port no ${port}`);
database.authenticate().then(()=>{
    console.log("database connected");
    database.sync({force:false,match:/test$/}).then(()=>{//
        console.log("create table");
    }).catch((err)=>{
        console.log(err);
    })
}).catch((err)=>{
    console.log(err);
})
})