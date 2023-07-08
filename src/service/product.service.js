const Product = require("../model/product.model");
const User = require("../model/user.model");

module.exports.getProductService = async (q)=>{
    const user = await User.findOne({email:q.email})
    
  let query = {};
  let qs={}
  if(q.page){
    const {page=0,limit=10} = q;
    const skip = parseInt(page)*parseInt(limit);
    qs.skip = skip;
    qs.limit = parseInt(limit);
   } 
  if (q.price == 300) {
    query = { price: { $lte: 300 } };
  } else if (q.price ==500) {
    query = { price: { $gte: 300, $lte: 500 } };
  } else if (q.price == 501) {
    query = { price: { $gt: 500 } };
  } 
  let newFilter = {};
  if(q.category){
    newFilter = {category:q.category}
  }
  const totalCount = await Product.countDocuments({...query,...newFilter});
    const page = Math.ceil(totalCount / 10);
       const result = await Product.find({...query,...newFilter})
       .skip(qs.skip)
       .limit(qs.limit) 
 
       return{
       
        result,
        totalCount,
        page 
       }
}
module.exports.postProductService = async (data,imgPath)=>{
  const obj ={ productImage : 'http://localhost:5000/' +imgPath}
    const newItem = {...data,...obj}
    return await Product.create(newItem)
}
module.exports.likeUpdateProductService =async(id,productId)=>{
 ;
    const r = await User.findById(id)
    const finds = r.wishlist.find(item=>item==productId)
    if(finds){
    const result = await User.findByIdAndUpdate(
        id, // Assuming you have implemented authentication middleware and 'result._id' is the user's ID
         { $pull: { wishlist : productId } }, // Removing 'id' from the 'hiredPhotographer' array
        { new: true } // Returns the updated document
      );
      console.log(result,"thgiosf");
      return result;
      
    }
    else{ 
     return  await User.findByIdAndUpdate(
        id, // Assuming you have implemented authentication middleware and 'result._id' is the user's ID
        { $addToSet: { wishlist: { $each: [productId] } } }, // Adding 'id' to the 'hiredPhotographer' array
        { new: true } // Returns the updated document
      ); 
        
    }
}


module.exports.getOneProductService = async (id)=>{
  
     const result = await Product.findById(id)
     
    return result
}