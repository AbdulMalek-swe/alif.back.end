const { 
    getBannerService,
     postBannerService,
     deleteBannerService, 
     getBannerServiceById,
     updateBannerServiceSingle
    } = require("../../service/homeService/banner.service")
module.exports.getBanner = async(req,res)=>{
    try {
        const result = await getBannerService()
        res.status(200).json({
            result   
        })
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    }
}
module.exports.postBanner = async(req,res)=>{
    try {
        const result = await postBannerService(req.body,req.file.path )
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    }
}
module.exports.getBannerById = async(req,res)=>{
    try {
        const result = await getBannerServiceById(req.params.id)
        res.status(200).json({
            result   
        })
    } catch (error) {
        res.status(401).json({
            error:error.message
        })
    }
}
module.exports.updateBannerSingle= async(req,res)=>{
    try {
        const result = await updateBannerServiceSingle(req.params.id,req.body)
        res.status(200).json({
            result 
        })
    }
     catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
module.exports.deleteBanner = async(req,res)=>{
    try { 
        console.log(req.body,req.files)
        const result = await deleteBannerService(req.params.id)
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}