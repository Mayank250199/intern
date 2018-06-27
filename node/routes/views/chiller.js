var keystone = require('keystone');
var ChillerText = keystone.list('ChillerText');
var ChillerPics = keystone.list('ChillerPics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'chiller';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.chillerSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'chiller' }, function (next) {

    var newChillerText = new ChillerText.model();
    var updater = newChillerText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'chillertext',
      errorMessage: 'There was a problem submitting your chiller:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.chillerSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'chiller' }, function (next) {

    var newChillerPics = new ChillerPics.model();
    var updater = newChillerPics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'chillerpics',
      errorMessage: 'There was a problem submitting your chiller:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.chillerSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('chiller');
};
