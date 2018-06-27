var keystone = require('keystone');
var Client = keystone.list('Client').model;
var handlers = {
  getclient: function(req, res) {
    Client.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
