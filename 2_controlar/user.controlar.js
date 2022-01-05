const {add}=require('../3_services/user.services')
module.exports.add=async(req,res)=>{
  let data=await  add(req.body)
   res.send(data);
}