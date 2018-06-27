var keystone = require('keystone');
var Marquee = keystone.list('Marquee');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'marquee';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.marqueeSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'marquee' }, function (next) {

    var newMarquee = new Marquee.model();
    var updater = newMarquee.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'marqueetext',
      errorMessage: 'There was a problem submitting your marquee:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.marqueeSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('marquee');
};
