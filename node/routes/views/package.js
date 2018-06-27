var keystone = require('keystone');
var PackageText = keystone.list('PackageText');
var PackagePics = keystone.list('PackagePics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'package';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.packageSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'package' }, function (next) {

    var newPackageText = new PackageText.model();
    var updater = newPackageText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'packagetext',
      errorMessage: 'There was a problem submitting your package:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.packageSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'package' }, function (next) {

    var newPackagePics = new PackagePics.model();
    var updater = newPackagePics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'packagepics',
      errorMessage: 'There was a problem submitting your package:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.packageSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('package');
};
