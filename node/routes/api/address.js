var keystone = require('keystone');
var Address = keystone.list('Address').model;


var handlers = {
  getaddress: function(req, res) {
    Address.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
