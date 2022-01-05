const user=require('../model/user')
module.exports.add=async(body)=>{
 let data=await user.create({
name:body.name,
email:body.email,
password:body.password
})
return data;
}
module.exports.update=async(body)=>{
    let data=await user.update({
        name:body.name,
        email:body.email,
        password:body.password
    },{where:{id:body.id}})
    return data;
}

module.exports.findall=async(body)=>{
    let data=await user.findAll()
    return data
}
module.exports.findone=async(body)=>{
    let data=await user.findAll({where:{id:body.id}})
    return data
}
module.exports.del=async(body)=>{
    try {
        let data=await user.destroy({where:{id:body.id}})
     
       if(data==0)
        return "user not delete"
        else
        return "user delete"
        
    } catch (error) {
        console.log(": "+error);
        return error
    }
}