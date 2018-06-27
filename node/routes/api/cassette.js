var keystone = require('keystone');
var CassetteText = keystone.list('CassetteText').model;
var CassettePics = keystone.list('CassettePics').model;

var handlers = {
  getcassette: function(req, res) {
    CassetteText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getcassettepics: function(req, res) {
    CassettePics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
