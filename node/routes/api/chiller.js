var keystone = require('keystone');
var ChillerText = keystone.list('ChillerText').model;
var ChillerPics = keystone.list('ChillerPics').model;

var handlers = {
  getchiller: function(req, res) {
    ChillerText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getchillerpics: function(req, res) {
    ChillerPics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
