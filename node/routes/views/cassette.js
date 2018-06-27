var keystone = require('keystone');
var CassetteText = keystone.list('CassetteText');
var CassettePics = keystone.list('CassettePics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'cassette';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.cassetteSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'cassette' }, function (next) {

    var newCassetteText = new CassetteText.model();
    var updater = newCassetteText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'cassettetext',
      errorMessage: 'There was a problem submitting your cassette:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.cassetteSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'cassette' }, function (next) {

    var newCassettePics = new CassettePics.model();
    var updater = newCassettePics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'cassettepics',
      errorMessage: 'There was a problem submitting your cassette:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.cassetteSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('cassette');
};
