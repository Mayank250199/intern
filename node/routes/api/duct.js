var keystone = require('keystone');
var DuctText = keystone.list('DuctText').model;
var DuctPics = keystone.list('DuctPics').model;

var handlers = {
  getduct: function(req, res) {
    DuctText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getductpics: function(req, res) {
    DuctPics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
