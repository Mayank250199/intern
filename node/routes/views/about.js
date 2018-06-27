var keystone = require('keystone');
var AboutText = keystone.list('AboutText');
var AboutPics = keystone.list('AboutPics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'about';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.aboutSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'about' }, function (next) {

    var newAboutText = new AboutText.model();
    var updater = newAboutText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'abouttext',
      errorMessage: 'There was a problem submitting your about:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.aboutSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'about' }, function (next) {

    var newAboutPics = new AboutPics.model();
    var updater = newAboutPics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'aboutpics',
      errorMessage: 'There was a problem submitting your about:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.aboutSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('about');
};
