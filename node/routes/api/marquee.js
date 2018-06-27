var keystone = require('keystone');
var Marquee = keystone.list('Marquee').model;
var handlers = {
  getmarquee: function(req, res) {
    Marquee.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
