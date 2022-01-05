const user=require('../model/user')
module.exports.add=async(body)=>{
 let data=await user.create({
name:body.name,
email:body.email,
password:body.password
})
return data
}
