const Banner = require("../../model/homeModel/banner.model");

module.exports.getBannerService = async ()=>{
    const result = await Banner.find({})
    return result
}
module.exports.postBannerService = async (value,img)=>{
    const obj ={ bannerImage : 'http://localhost:5000/' +img}
    const newItem = {...value,...obj}
    const result = await Banner(newItem).save()
   return result 
}
 