const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types;
const valid = require("validator");
const bannerSchema= mongoose.Schema({
    bannerFirstHeader: {  
        type: String,
        required:[false,"ok"]
    },
      
    bannerSecondHeader: {  
        type: String,
        required:[false,"ok"]
    },
    
    discount: {   
        type: Number,
        unique: false, 
    },
    bannerImage:{
        type:String,
        required:[false,"ok"]
    }  
}, {
    timestamps: true
});
 
const Banner = new mongoose.model("Banner", bannerSchema
);
module.exports = Banner;