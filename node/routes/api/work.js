var keystone = require('keystone');
var Work = keystone.list('Work').model;

var handlers = {
  getwork: function(req, res) {
    Work.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
