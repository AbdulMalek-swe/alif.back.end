const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const bannerSchema= mongoose.Schema({
    bannerFirstHeader: {  
        type: String,
        required:[true,"must be field this"]
    },
    bannerSecondHeader: {  
        type: String,
        required:[true,"must be field this"]
    },
    discount: {   
        type: Number,
    },
    bannerImage:{
        type:String,
        required:[true,"must be field this"]
    }  
}, {
    timestamps: true
});
 
const Banner = new mongoose.model("Banner", bannerSchema
);
module.exports = Banner;