var keystone = require('keystone');
var DuctableText = keystone.list('DuctableText').model;
var DuctablePics = keystone.list('DuctablePics').model;

var handlers = {
  getductable: function(req, res) {
    DuctableText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getductablepics: function(req, res) {
    DuctablePics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
