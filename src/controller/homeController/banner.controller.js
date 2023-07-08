const { 
    getBannerService,
     postBannerService 
    } = require("../../service/homeService/banner.service")

module.exports.getBanner = async(req,res)=>{
    try {
      
        const result = await getBannerService()
       
        res.json({
            result 
             
        })
    } catch (error) {
       
    }
}
module.exports.postBanner = async(req,res)=>{
    try {
      
        const result = await postBannerService(req.body,req.file.path )
   
        res.json({
            result
        })
    } catch (error) {
    
    }
}