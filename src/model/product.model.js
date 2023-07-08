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
        required:[true,"set minimum price"],
        
    },
    color:{
        type:String,
        required:[true,'set color name'],
        enum:['black','white','blue','red','yellow','green'],
        required:true,
        validate: {
            validator: function(value) {
              return ['shoulder', 'clutches'].includes(value);
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
    productImage:{
        type:String,
        required:[true,'must be save image']
    },
    productSell:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:['shoulder','clutches'],
        required:true,
        validate: {
            validator: function(value) {
              return ['shoulder', 'clutches'].includes(value);
            },
            message: 'Please provide a valid category (shoulder or clutches).'
          }
    } ,
    skwNo:{
        type:String,
        required:[true,'enter skw number'],
        default:'0001-cbw'
    }
    // unit: {
    //     type: String,
    //     required: true,
    //     enum: {
    //         values: ["kg", "litre", "pcs", "bag"],
    //         message: "value must be {Value} psc/litre/kg"
    //     }
    // },
    // imageURLs:[ {
    //     type: String,
    //     required: true,
    //     validate: [valid.isURL, "wrong url"]
    //   }],
    // imageURLs: [{
    //     type: String,
    //     require: true,
    //     validate: {
    //         validator: (value) => {
    //             if (!Array.isArray(value)) {
    //                 return false;
    //             }
    //             value.forEach(url => {
    //                 if (!validator.isURL(url)) {
    //                     isValid = false;
    //                 }
    //             })
    //             return isValid;
    //         },
    //         message: "please provide validate image urls"
    //     }
    // }],
    
    // category:{
    //     type:String,
    //     required:true
    // },
    // brand:{
    //     name:{
    //         type:String,
    //         required:true
    //     },
    //     id:{
    //         type:ObjectId,
    //         required:true,
    //         ref:"Brand"
    //     }
    // }
}, {
    timestamps: true
});
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