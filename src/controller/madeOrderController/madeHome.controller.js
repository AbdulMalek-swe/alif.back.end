const mongoose = require("mongoose");
const valid = require("validator");
const madeSchema= mongoose.Schema({
    description:{
        type:String,
        required:[true,"set minimum price"],  
    },
    madeImage:{
        type:String,
        required:true
    }
}, {
    timestamps: true
});
 
const Made = new mongoose.model("Made", madeSchema
);
 

module.exports.getMadeHome = async(req,res)=>{
   try {
       const result = await Made.find({})
       res.status(200).json({
        result
       })
   } catch (error) {
       res.status(400).json({
           error:error.message
       })
   }
}

module.exports.postMadeHome = async(req,res)=>{
   try {
      const obj ={ madeImage : process.env.MAIN_PATH +req.file.path}
      const newData = {...obj,...req.body}
      const  counts =await Made.countDocuments();
       if(counts>=1){
          return res.status(400).json({
              error:"not more than 1 data added"
          })
       }
       const result = await Made(newData).save()
       res.status(200).json({
           message:"succesfully added this",
          result
       })
   } catch (error) {
    res.status(400).json({
       error:error.message
    })
   }
}
