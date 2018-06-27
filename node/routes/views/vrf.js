var keystone = require('keystone');
var VrfText = keystone.list('VrfText');
var VrfPics = keystone.list('VrfPics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'vrf';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.vrfSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'vrf' }, function (next) {

    var newVrfText = new VrfText.model();
    var updater = newVrfText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'vrftext',
      errorMessage: 'There was a problem submitting your vrf:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.vrfSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'vrf' }, function (next) {

    var newVrfPics = new VrfPics.model();
    var updater = newVrfPics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'vrfpics',
      errorMessage: 'There was a problem submitting your vrf:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.vrfSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('vrf');
};
