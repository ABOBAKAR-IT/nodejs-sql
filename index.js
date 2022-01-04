const express=require('express');
const {sequleize}=require('sequelize')
const database=require('./model/database')
const app=express();
app.use(express.json());
const port=9000;
app.get("/",(req,res)=>{
res.send("hello werd")
})
app.listen(port,()=>{
console.log(`server work on port no ${port}`);
database.authenticate().then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})
})