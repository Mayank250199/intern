var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry').model;
var handlers = {
  getEnquiry: function(req, res) {
    var name = req.body.name;
    var phone = req.body.phone;
    var email = req.body.email;
    var message = req.body.message;

    const newContact = new Enquiry();
    newContact.name = name;
    newContact.phone = phone;
    newContact.email = email;
    newContact.message = message;

  newContact.save((err,user) =>{
    if(err){
      return res.send({
      success:false,
      message:"Error:server Error"
    })
  }
      return res.send({
      success:true,
      message:"Ad posted successfully!!"
    })

  })
}
}
module.exports = handlers;
