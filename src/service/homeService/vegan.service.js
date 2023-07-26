const Vegan = require("../../model/homeModel/vegan.model")
const url = require('url');
const fs = require('fs');
 
module.exports.getVeganService = async ()=>{
    const result = await Vegan.find({})
    return result
}
module.exports.postVeganService = async (value,img)=>{
    const counts = await Vegan.countDocuments()
        const obj ={ veganImage :  process.env.MAIN_PATH +img}
        const newItem = {...value,...obj}
        const result = await Vegan(newItem).save()
       return result 
  
}
module.exports.getVeganServiceSingle=async(id)=>{
    const result = await Vegan.findById(id)
    return result
}
module.exports.updateVeganServiceSingle=async(id,values)=>{
    const result = await Vegan.updateOne({_id:id},{$set:values})
    return result
}
module.exports.deleteVeganService = async (id)=>{
     
     
//  const parsedURL = url.parse(d.veganImage);
// const path = parsedURL.pathname;
 
// fs.unlink(path, (err) => {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//     console.log('Image deleted successfully');
//   });

   const result = await Vegan.deleteOne({_id:id},{new:true})
   return true
}
 