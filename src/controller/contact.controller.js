const { postContactService,getContactService, postContactServiceResponse } = require("../service/contact.service")

 

module.exports.getContact = async(req,res)=>{
   try {
       
       const {result,totalCount,page } = await getContactService()
       res.json({
         
           totalCount,
           page,
           result 
         
       })
   } catch (error) {
      
       res.status(400).json({
           error:error.message
       })
   }
}

module.exports.postContact = async(req,res)=>{
   try {
      
       const result = await postContactService(req.body )
       res.json({
           message:"We contact you ass soon as possible in your email",
           result
       })
   } catch (error) {
    res.status(400).json({
       error:error.message
    })
   }
}
module.exports.postContactResponse = async(req,res)=>{
    try {
       
       await user.save({validateBeforeSave:false});
            const user = await postContactServiceResponse(req.body.id) 
       const mailData = { 
         to:[user.email],
         subject:req.body.message,
         text: req.body.response,
       }
       await sendMailWithGmail(mailData)

        res.json({
            message:"We contact you ass soon as possible in your email",
            // result
        })
    } catch (error) {
     res.status(400).json({
        error:error.message
     })
    }
 }
 