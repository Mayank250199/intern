var keystone = require('keystone');
var AhuText = keystone.list('AhuText').model;
var AhuPics = keystone.list('AhuPics').model;

var handlers = {
  getahu: function(req, res) {
    AhuText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getahupics: function(req, res) {
    AhuPics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
