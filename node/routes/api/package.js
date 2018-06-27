var keystone = require('keystone');
var PackageText = keystone.list('PackageText').model;
var PackagePics = keystone.list('PackagePics').model;

var handlers = {
  getpackage: function(req, res) {
    PackageText.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  },
  getpackagepics: function(req, res) {
    PackagePics.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
