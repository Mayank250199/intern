var keystone = require('keystone');
var SplitText = keystone.list('SplitText').model;
var SplitPics = keystone.list('SplitPics').model;

var handlers = {
  getsplit: function(req, res) {
    SplitText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getsplitpics: function(req, res) {
    SplitPics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
