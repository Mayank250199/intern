var keystone = require('keystone');
var AboutText = keystone.list('AboutText').model;
var AboutPics = keystone.list('AboutPics').model;

var handlers = {
  getabout: function(req, res) {
    AboutText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getaboutpics: function(req, res) {
    AboutPics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
