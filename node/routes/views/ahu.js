var keystone = require('keystone');
var AhuText = keystone.list('AhuText');
var AhuPics = keystone.list('AhuPics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'ahu';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.ahuSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'ahu' }, function (next) {

    var newAhuText = new AhuText.model();
    var updater = newAhuText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'ahutext',
      errorMessage: 'There was a problem submitting your ahu:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.ahuSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'ahu' }, function (next) {

    var newAhuPics = new AhuPics.model();
    var updater = newAhuPics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'ahupics',
      errorMessage: 'There was a problem submitting your ahu:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.ahuSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('ahu');
};
