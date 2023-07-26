 
const mongoose = require("mongoose");
const valid = require("validator");
const insideSchema= mongoose.Schema({
    title1:{
        type:String,
        required:[true,"set title1"],  
    },
    title2:{
        type:String,
        required:[true,"set title2"],  
    },
    description1:{
        type:String,
        required:[true,"set description"],  
    },
    title3:{
        type:String,
        required:[true,"set title2"],  
    },
    description2:{
        type:String,
        required:[true,"set description"],  
    },
    title4:{
        type:String,
        required:[true,"set title2"],  
    },
    description3:{
        type:String,
        required:[true,"set description"],  
    },
    title5:{
        type:String,
        required:[true,"set title2"],  
    },
    description4:{
        type:String,
        required:[true,"set description"],  
    },
    title6:{
        type:String,
        required:[true,"set title2"],  
    },
    description5:{
        type:String,
        required:[true,"set description"],  
    },
    title7:{
        type:String,
        required:[true,"set title2"],  
    },
    title8:{
        type:String,
        required:[true,"set title2"], 
    },
    title9:{
        type:String,
        required:[true,"set title2"],  
    },
    description6:{
        type:String,
        required:[true,"set description"],  
    },
    image:{
        type: [String],
        required:true
    }
}, {
    timestamps: true
});
 
const Inside = new mongoose.model("Inside", insideSchema
);

module.exports.getInside = async(req,res)=>{
   try {
    
       const result = await Inside.find({})
       res.status(200).json({
        result
       })
   } catch (error) {
       res.status(400).json({
           error:error.message
       })
   }
} 

module.exports.postInside = async(req,res)=>{
   try {
      
      const v = JSON.parse(req.body.data);
      console.log(v);
  const images = req.files.map(file => `${process.env.MAIN_PATH}${file.path}`);
 
  const newData = {...v,image:images}
      const  counts =await Inside.countDocuments();
       if(counts>=1){ 
          return res.status(400).json({
              error:"not more than 1 data added"
          }) 
       }
       const result = await Inside(newData).save()
       res.status(200).json({
           message:"succesfully added data",
          result
       })
   } catch (error) {
    console.log(error.message);
    res.status(400).json({
       error:error.message
    })
   }
} 


module.exports.updateInside = async(req,res)=>{
    try {
       
 
       const result = await Inside.updateOne({_id:req.params.id},{$set:req.body})
       return result
        res.status(200).json({
            message:"succesfully added data",
           result
        })
    } catch (error) {
     console.log(error.message);
     res.status(400).json({
        error:error.message
     })
    }
 } 
 module.exports.dltInside = async(req,res)=>{
    try {
         
       const result = await Inside.deleteOne({_id:req.params.id})
       return result
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
 
 
  
