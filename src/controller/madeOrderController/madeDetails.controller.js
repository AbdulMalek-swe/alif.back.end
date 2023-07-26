const mongoose = require("mongoose");
const valid = require("validator");
const detailsSchema= mongoose.Schema({
    title:{
        type:String,
        required:[true,"set description"],  
    },
    description:{
        type:String,
        required:[true,"set description"],  
    },
    image:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});
 
const MadeDetails = new mongoose.model("MadeDetails", detailsSchema
);

module.exports.getDetailsMade = async(req,res)=>{
   try {
       const result = await MadeDetails.find({})
       res.status(200).json({
        result
       })
   } catch (error) {
       res.status(400).json({
           error:error.message
       })
   }
}

module.exports.postDetailsMade = async(req,res)=>{
   try {
      const obj ={ image : process.env.MAIN_PATH +req.file.path}
      const newData = {...obj,...req.body}
      const  counts =await MadeDetails.countDocuments();
       if(counts>=1){
          return res.status(400).json({
              error:"not more than 1 data added"
          })
       }
       const result = await MadeDetails(newData).save()
       res.status(200).json({
           message:"succesfully added data",
          result
       })
   } catch (error) {
    res.status(400).json({
       error:error.message
    })
   }
}
