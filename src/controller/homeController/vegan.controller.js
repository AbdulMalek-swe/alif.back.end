const { 
    getVeganService,
     postVeganService 
    } = require("../../service/homeService/vegan.service")

module.exports.getVegan = async(req,res)=>{
    try {
      
        const result = await getVeganService()
 
        res.json({
            result 
             
        })
    } catch (error) {
       
    }
}
module.exports.postVegan = async(req,res)=>{
    try {
        
        const result = await postVeganService(req.body,req.file.path )
       
        res.json({
            result
        })
    } catch (error) {
    
    }
}