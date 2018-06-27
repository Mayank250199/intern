var keystone = require('keystone');
var VrfText = keystone.list('VrfText').model;
var VrfPics = keystone.list('VrfPics').model;

var handlers = {
  getvrf: function(req, res) {
    VrfText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getvrfpics: function(req, res) {
    VrfPics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
