var keystone = require('keystone');
var Slider = keystone.list('Slider').model;

var handlers = {
  getslider: function(req, res) {
    Slider.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
