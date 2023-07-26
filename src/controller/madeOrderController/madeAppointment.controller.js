const mongoose = require("mongoose");
const valid = require("validator");
const appointmentSchema= mongoose.Schema({
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
 
const MadeAppointment = new mongoose.model("MadeAppointment", appointmentSchema
);

module.exports.getAppointmentMade = async(req,res)=>{
   try {
       const result = await MadeAppointment.find({})
       res.status(200).json({
        result
       })
   } catch (error) {
       res.status(400).json({
           error:error.message
       })
   }
}

module.exports.postAppointmentMade = async(req,res)=>{
   try {
    console.log(req.body);
      const obj ={ image : process.env.MAIN_PATH +req.file.path}
      const newData = {...obj,...req.body}
      const  counts =await MadeAppointment.countDocuments();
       if(counts>=1){
          return res.status(400).json({
              error:"not more than 1 data added"
          })
       } 
       const result = await MadeAppointment(newData).save()
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
