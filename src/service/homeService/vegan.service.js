const Vegan = require("../../model/homeModel/vegan.model")

 
module.exports.getVeganService = async ()=>{
    const result = await Vegan.find({})
    return result
}
module.exports.postVeganService = async (value,img)=>{
    const obj ={ veganImage : 'http://localhost:5000/' +img}
    const newItem = {...value,...obj}
    const result = await Vegan(newItem).save()
   return result 
}
 