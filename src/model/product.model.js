const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const ProductSchema= mongoose.Schema({
    name: {  
        type: String,
        required: [true, "provide a valid name"],
        
    },
    price:{
        type:Number,
        required:[true,"set price"],
        min:1
    },
    color:{
        type:String,
        required:[true,'set color name'],
        enum:['black','white','blue','red','yellow','green'],
        required:true,
        validate: {
            validator: function(value) {
              return ['red', 'blue','white','yellow','green','black'].includes(value);
            },
            message: 'Please provide a valid category (shoulder or clutches).'
          }
       
    },
    description: {
        type: String,
        required: [true, "give some product description"]
    },
    quantity:{
        type:Number,
        default:1
    },
    available:{
        type:String,
        enum: ['out-of-stock', 'in-stock'],
         default: 'in-stock'
    },
    productImage: {
        type: [String],
        required: true
      },
    productSell:{ 
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:['','shoulder', 'clutches', 'handbags', 'pouch', 'buckets', 'pouches', 'vegan'],
        required:true,
        validate: {
            validator: function(value) {
              return ['shoulder', 'clutches', 'handbags', 'pouch', 'buckets', 'pouches', 'vegan'].includes(value);
            },
            message: 'Please provide a valid category'
          },
    
    } ,
    skwNo:{
        type:String,
        required:[true,'enter skw number'],
        default:'0001-cbw'
    },
    offerPrice:{
        type:Number,
         default:0 
    },
    offerCategory:{
        type:String,
        default:""
    }
 
 
    
  
}, {
    timestamps: true
});
ProductSchema.pre('save',function(next){
    console.log(this.price);
    this.offerPrice = this.price
    next()
})
// ProductSchema
// .pre('save',(next)=>{
//     if(this.quantity==0){
//         this.status="out-of-stock"
//     }
//     next()
// })
const Product = new mongoose.model("Product", ProductSchema
);
module.exports = Product; 