const {add,update,findall,findone,del,bulk,truncate}=require('../3_services/post.services')
module.exports.add=async(req,res)=>{
  let data=await  add(req.body)
   res.send(data);
}
module.exports.update=async(req,res)=>{
    let data=await  update(req.body)
     res.send(data);
  }

  module.exports.findall=async(req,res)=>{
    let data=await  findall(req.body)
     res.send(data);
  }
  module.exports.findone=async(req,res)=>{
    let data=await  findone(req.body)
     res.send(data);
  }
  module.exports.del=async(req,res)=>{
    let data=await  del(req.body)
    res.send(data)
  }
  module.exports.bulk=async(req,res)=>{
    let data=await  bulk(req.body)
    res.send(data)
  }
  module.exports.truncate=async(req,res)=>{
    let data=await  truncate(req.body)
    res.send(data)
  }