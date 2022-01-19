const { Sequelize } = require("sequelize");
const post = require("../model/post");
const user = require("../model/user");
module.exports.add = async (body) => {
  let data = await user.create({
    name: body.name,
    email: body.email,
    password: body.password,
  });
  return data;
};
module.exports.bulk = async (body) => {
  let data = await user.bulkCreate([
    {
      // save maltipel data using bulkCreate
      name: body[0].name,
      email: body[0].email,
      password: body[0].password,
    },
    {
      name: body[1].name,
      email: body[1].email,
      password: body[1].password,
    },
  ]);
  return data;
};
module.exports.update = async (body) => {
  let data = await user.update(
    {
      name: body.name,
      email: body.email,
      password: body.password,
    },
    { where: { id: body.id } }
  );
  return data;
};

module.exports.findall = async (body) => {
  let data = await user.findAll({

    //**********selecte*********

    // attributes: ["name", ["email", "email_id"], //find only attrubutes & change field name email to email_id
    // [Sequelize.fn('count',Sequelize.col('email')),'emailcount']]//use for count


    //************exclude and include********

    // attributes:{
    //   exclude:["createdAt","updatedAt"],//use for remove
    //   include:[[Sequelize.fn('CONCAT',Sequelize.col("name")," khan"),'fullname']]//use for add
    // }

//***********condition********** */


  });
  return data;
};
module.exports.findone = async (body) => {
  let data = await user.findAll({ where: { id: body.id } });
  return data;
};
module.exports.del = async (body) => {
  try {
    let data = await user.destroy({ where: { id: body.id } });

    if (data == 0) return "user not delete";
    else return "user delete";
  } catch (error) {
    console.log(": " + error);
    return error;
  }
};
module.exports.truncate = async (body) => {
  try {
    let data = await user.destroy({ truncate: true });

    if (data == 0) return "all user delete";
    else return "not delete";
  } catch (error) {
    console.log(": " + error);
    return error;
  }
};
module.exports.findquery = async (body) => {
  let data = await user.findAll({
    attribute: [name],
  });
  return data;
};
module.exports.findpost=async(body)=>{
let data=await user.findAll({
  include:post
})
return data
}