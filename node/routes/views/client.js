var keystone = require('keystone');
var Client = keystone.list('Client');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'client';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.clientSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'client' }, function (next) {

    var newClient = new Client.model();
    var updater = newClient.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'client',
      errorMessage: 'There was a problem submitting your client:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.clientSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('client');
};
