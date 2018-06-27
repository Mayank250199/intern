var keystone = require('keystone');
var PanelText = keystone.list('PanelText').model;
var PanelPics = keystone.list('PanelPics').model;

var handlers = {
  getpanel: function(req, res) {
    PanelText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getpanelpics: function(req, res) {
    PanelPics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
