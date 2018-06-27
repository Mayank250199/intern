var keystone = require('keystone');
var DuctText = keystone.list('DuctText');
var DuctPics = keystone.list('DuctPics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'duct';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.ductSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'duct' }, function (next) {

    var newDuctText = new DuctText.model();
    var updater = newDuctText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'ducttext',
      errorMessage: 'There was a problem submitting your duct:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.ductSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'duct' }, function (next) {

    var newDuctPics = new DuctPics.model();
    var updater = newDuctPics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'ductpics',
      errorMessage: 'There was a problem submitting your duct:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.ductSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('duct');
};
