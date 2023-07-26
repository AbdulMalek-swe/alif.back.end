const Contact = require("../model/contact.modal")

module.exports.getContactService = async()=>{
    return await Contact.find({});
}
module.exports.postContactService = async (newItem)=>{
   return await Contact(newItem).save()
   
}
module.exports.postContactServiceResponse = async (id)=>{
    return await Contact.findById(id);
}