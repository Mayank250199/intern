var keystone = require('keystone');
var SplitText = keystone.list('SplitText');
var SplitPics = keystone.list('SplitPics');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'split';
  locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.splitSubmitted = false;


  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'split' }, function (next) {

    var newSplitText = new SplitText.model();
    var updater = newSplitText.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'splittext',
      errorMessage: 'There was a problem submitting your split:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.splitSubmitted = true;
      }
      next();
    });
  });

  // On POST requests, add the Enquiry item to the database
  view.on('post', { action: 'split' }, function (next) {

    var newSplitPics = new SplitPics.model();
    var updater = newSplitPics.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      fields: 'splitpics',
      errorMessage: 'There was a problem submitting your split:',
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        locals.splitSubmitted = true;
      }
      next();
    });
  });

	// Render the view
	view.render('split');
};
