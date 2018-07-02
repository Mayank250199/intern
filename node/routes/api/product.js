var keystone = require('keystone');
var Product = keystone.list('Product').model;

var handlers = {
  getproduct: function(req, res) {
    Product.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
