const { postProductService,
     getProductService,
     likeUpdateProductService,
    getOneProductService } = require("../service/product.service");

module.exports.getProduct = async(req,res)=>{
    try {
        
        const {result,totalCount,page } = await getProductService(req.query )
        res.json({
          
            totalCount,
            page,
            result 
          
        })
    } catch (error) {
       
        res.status(400).json({
            error:error.message
        })
    }
}
 
module.exports.postProduct = async(req,res)=>{
    try {
       
        const result = await postProductService(req.body,req.file.path)
        res.json({
            result
        })
    } catch (error) {
     res.status(400).json({
        error:error.message
     })
    }
}
module.exports.likeUpdateProduct = async(req,res)=>{
    try {
        const {id} = req.params;
    
        const result = await likeUpdateProductService(req.body.userId,id)
        console.log(result);
        res.json({
            result 
        })
    } catch (error) {
       
    }
}
module.exports.getOneProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await getOneProductService(id)
        res.json({
            result   
            
        })
    } catch (error) {
        
    }
}
 
