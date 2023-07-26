const Product = require("../model/product.model")

module.exports.paymentService = async (products)=>{
    let amount = 0;
    for(const product of products){
        const findResult = await Product.findById(product._id)
        if(findResult){
        amount = amount + findResult.price*product.quantity 
        }
        
    }
    return amount
} 