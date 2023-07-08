const User = require("../model/user.model");

 
exports.signupService =async (userData)=>{
    const user = await User.create(userData);
    return user;
}
exports.findUserByEmail =async (email)=>{
   return await User.findOne({email}).populate({ path: "wishlist", model: "Product" }).exec()
}
exports.findUserByToken =async (token)=>{
   
  const result = await User.findOne({confirmationToken:token})
 
  return result;  
 }

 exports.userSubscribeService =async (email1,email2)=>{
   await User.updateOne({email:email2},{$set:{ subscribeNo:1}},{new:true })
   const result = await  User.updateOne({email:email2},{$set:{ isSubscribe:true}},{new:true })
  return result;
 }
 
 