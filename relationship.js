const post = require("./model/post");
const user = require("./model/user");

user.hasOne(post)
post.belongsTo(user)