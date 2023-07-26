const Vegan = require("../../model/homeModel/vegan.model")
const { 
    getVeganService,
     postVeganService, 
     deleteVeganService,
     getVeganServiceSingle,
     updateVeganServiceSingle
    } = require("../../service/homeService/vegan.service")

module.exports.getVegan = async(req,res)=>{
    try {
      
        const result = await getVeganService()
 
        res.json({
            result 
             
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
module.exports.postVegan = async(req,res)=>{
    try { 
        console.log(req.body,req.files)
        const  counts =await Vegan.countDocuments();
        console.log(counts);
         if(counts>=4){
            return res.status(400).json({
                error:"not more than 4 data added"
            })
         }
        const result = await postVeganService(req.body,req.file.path)
        res.status(200).json({
            result
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
module.exports.getVeganSingle= async(req,res)=>{
    try {
        console.log(req.params.id);
        const result = await getVeganServiceSingle(req.params.id)
 
        res.json({
            result 
             
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
module.exports.updateVeganSingle= async(req,res)=>{
    try {
         console.log(req.body,req.params);
        const result = await updateVeganServiceSingle(req.params.id,req.body)
 
        res.json({
            result 
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}
module.exports.deleteVegan = async(req,res)=>{
    try { 
        console.log(req.body,req.files)
        
        const result = await deleteVeganService(req.params.id)
       
        res.json({
            result
        })
    } catch (error) {
        res.status(400).json({
            error:error.message
        })
    }
}