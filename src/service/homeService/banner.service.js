const Banner = require("../../model/homeModel/banner.model");
const Product = require("../../model/product.model");

module.exports.getBannerService = async ()=>{
    const result = await Banner.find({})
    return result
}
module.exports.postBannerService = async (value,img)=>{
        const productData= await Product.find({})
        async function addPriceDiscount(productData, discountData) {
          for (const product of productData) {
            const discount = discountData.bannerSecondHeader === product.offerCategory
            if (discount) {
              const discountPercentage = parseInt(discountData.discount);
              const discountedPrice = product.price - (product.price * discountPercentage) / 100;  
              // Update the product with the discounted price and discount percentage
              await Product.updateOne(
                { _id: product._id },
                { price: discountedPrice, discount: discountPercentage }
              );
            }
          }
        }
        // Call the function to add price discount
    addPriceDiscount(  productData,value)
    const obj ={ bannerImage : process.env.MAIN_PATH +img}
    const newItem = {...value,...obj}
    const result = await Banner(newItem).save()
   return result 
}
 module.exports.getBannerServiceById = async(id)=>{
    const result = await Banner.findById(id)
    return result
 }
 module.exports.updateBannerServiceSingle=async(id,values)=>{
   
    const result = await Banner.updateOne({_id:id},{$set:values})
    
    return result
}
module.exports.deleteBannerService = async (id)=>{
     
     
    //  const parsedURL = url.parse(d.veganImage);
    // const path = parsedURL.pathname;
     
    // fs.unlink(path, (err) => {
    //     if (err) {
    //       console.error(err.message);
    //       return;
    //     }
    //     console.log('Image deleted successfully');
    //   });
    
       const result = await Banner.deleteOne({_id:id},{new:true})
       return true
    }