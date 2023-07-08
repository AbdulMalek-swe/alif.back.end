const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const veganSchema= mongoose.Schema({
    veganHeader: {  
        type: String,
        required:[true,"header must sent"]
    },
   veganDescrition:{
    type:String,
    required:[true,'must sent description']
   },
    veganImage:{
        type:String,
        required:[true,"must be set image"]
    }  
}, {
    timestamps: true
});
 
const Vegan = new mongoose.model("Vegan", veganSchema
);
module.exports = Vegan;