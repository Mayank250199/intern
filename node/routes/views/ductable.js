var keystone = require('keystone');
var DuctableText = keystone.list('DuctableText');
var DuctablePics = keystone.list('DuctablePics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'ductable';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.ductableSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'ductable' }, function (next) {

    var newDuctableText = new DuctableText.model();
    var updater = newDuctableText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'ductabletext',
      errorMessage: 'There was a problem submitting your ductable:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.ductableSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'ductable' }, function (next) {

    var newDuctablePics = new DuctablePics.model();
    var updater = newDuctablePics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'ductablepics',
      errorMessage: 'There was a problem submitting your ductable:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.ductableSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('ductable');
};
