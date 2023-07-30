const { postProductService,
     getProductService,
     likeUpdateProductService,
    getOneProductService, 
    deleteProductService,
    updateProductService,
    deleteBulkProductService} = require("../service/product.service");

module.exports.getProduct = async(req,res)=>{
    try {
        
       let queries = {};
       if(req.query.price1||req.query.price2){
        queries.price = { $gte: req.query.price1, $lte:req.query.price2 }   
       }
       if(req.query.color){
        queries.color =  req.query.color
       }
       if(req.query.category){
        queries.category =  req.query.category 
       }
       let qs= {}
       if(req.query.page){
        const {page=0,limit=10} = req.query;
        const skip = parseInt(page)*parseInt(limit);
        qs.skip = skip;
        qs.limit = parseInt(limit);
       } 
       console.log(queries);
        const {result,totalCount,page } = await getProductService(queries,qs)
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
        
        const value = JSON.parse(req.body.data)
       
        const result = await postProductService(value,req.files)
        await result.save({validateBeforeSave:true});
        res.json({
            result
        })
    } catch (error) {
        console.log(error.message);
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
module.exports.updateProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        console.log(id);
        const result = await updateProductService(id,req.body)
        res.json({
            result   
            
        })
    } catch (error) {
        
    }
}
 

module.exports.deleteProduct = async(req,res)=>{
    try {
        const {id} = req.params;
        const result = await deleteProductService(id)
        res.json({
            result   
            
        })
    } catch (error) {
        
    }
}
module.exports.deleteBulkProduct = async(req,res)=>{
    try {
        // const {id} = req.params;
        // 
        console.log(req.body );
     
const idsArray = req.body.map(item => item?._id);

const result = await deleteBulkProductService(idsArray)
        res.json({
            // result   
            
        })
    } catch (error) {
        
    }
}
 

 
